import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
export default function AllOperationsTable({ user }) {
    const ALL_OPS_URL = "http://localhost:3010/api/v1/operations/all";
    const DELETE_URL = "http://localhost:3010/api/v1/operations/delete"
    const [operationsApiData, setOperationsApiData] = useState();
    const [apiTotal, setApiTotal] = useState();
    const userId = user.id;
    useEffect(() => {
        allOps(ALL_OPS_URL, userId)
    }, [])
    async function deleteOne(id, DELETE_URL) {
        const body = JSON.stringify({id:id});
        const fetchConfig = {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body,
        };
        await fetch(DELETE_URL, fetchConfig);
        window.location.reload()
    }
    async function allOps(url, userId) {
        const body = JSON.stringify({
            id: userId
        });
        const fetchConfig = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body
        };
        const fetchRes = await fetch(url, fetchConfig);
        const response = await fetchRes.json();
        console.log(response);
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
    }
    if (!operationsApiData) {
        return (
            <div className="container-fluid w-75">
                <div className="container-lg mt-4 p-5 bg-light rounded border border-secondary">    
                <h1>{`${user.first_name}'s wallet`}</h1>
                <hr />
                <h1>Waiting for operation data</h1>
            </div>
        </div>
        )
    }  else if (operationsApiData.msg) {
        return (
            <>
                <div className="container-fluid w-75">
                    <div className="container-lg mt-4 p-5 bg-light rounded border border-secondary">    
                        <h1>{`${user.first_name}'s wallet`}</h1>
                        <hr />
                        <h3>{operationsApiData.msg}</h3>
                        <Link to="/newoperation">Register your operations here</Link>
                    </div>
                </div>
            </>
        )
    } else{
        
        return (
            <div className="container-lg mt-4 p-5 bg-light rounded border border-secondary">
                <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Concept</th>
                                    <th scope="col">Mount</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Delete</th>
                                    <th scope="col">Modify</th>
                                </tr>
                            </thead>
                            <tbody>
                                {operationsApiData &&
                                    operationsApiData.map((elemento, i) => {
                                        return (
                                            <tr key={i}>
                                                <th scope="row">{ elemento.id }</th>
                                                <td>{ elemento.concept }</td>
                                                <td>{ elemento.mount }</td>
                                                <td className={elemento.typeId}>{ elemento.typeId }</td>
                                                <td>{ elemento.date }</td>
                                                <td>
                                                    <b className="pointer" id={`${elemento.id}`}
                                                    onClick={
                                                        function(e){
                                                            deleteOne(e.target.id, DELETE_URL)
                                                        }
                                                    }
                                                    >
                                                    <i className="fa fa-trash" aria-hidden="true"
                                                        id={`${elemento.id}`}
                                                    ></i>
                                                    </b>
                                                </td>
                                                <td>
                                                <Link
                                                    to={`/modifyoperation/${elemento.id}`}
                                                    id={`${elemento.id}`}
                                                    className="pointer"
                                                ><i className="fa fa-pen" id={`${elemento.id}`} aria-hidden="true"></i></Link>
                                                </td>
                                            </tr>
                                    )
                                    })}
                            </tbody>
                        </table>
                        <div>
                            <Link to="/newoperation">New operation</Link>
                        </div>
                    </div>
                    <hr />
                    <h3>Total: <b>{ apiTotal }</b></h3>
                    <div className="w-75 centered"></div>
            </div>
        )
    }
}