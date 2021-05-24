import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import OperationsTable from '../components/OperationsTable'

export default function LastOpsTable({ user }) {
    const API_URL = "http://localhost:3010/api/v1/operations/lastoperations";
    const [operationsApiData, setOperationsApiData] = useState();
    const [apiTotal, setApiTotal] = useState();
    async function apiCall(id, API_URL) {
        const fetchConfig = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id
            })
        };
        const fetchRes = await fetch(API_URL, fetchConfig);
        const response = await fetchRes.json();
        if (response.operations && response.operations.length > 0) {
            setApiTotal(response.total)
            return setOperationsApiData(response.operations.map((element) => {
                return ({
                    id: element.id,
                    typeId: element.typeId === 1 ? "Entry" : "Egress",
                    concept: element.concept,
                    mount: element.mount,
                    date: element.date
                })
            }))
        } else {
            setOperationsApiData({msg:"There isn't operations saved in db"})
        }
    };
    useEffect(() => {
        apiCall(user.id, API_URL)
    },[])
    return (
        <div className="container-lg mt-4 p-5 bg-light rounded border border-secondary">
            <h1>{`${user.first_name}'s wallet`}</h1>
            <hr />
            <OperationsTable
                operationsData={operationsApiData}
                operationsTotal={apiTotal}
            />
        </div>
    )
}