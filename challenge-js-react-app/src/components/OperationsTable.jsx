import { Link } from "react-router-dom";
const DELETE_URL = "http://localhost:3010/api/v1/operations/delete"
export default function OperationsTable({ operationsData, operationsTotal }) {
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
    if (!operationsData) {
        return (
            <h1>Waiting for operations data</h1>
        )
    } else if (operationsData.msg) {
        return (
            <>
                <h3>{operationsData.msg}</h3>
                <Link to="/newoperation">Register your operations here</Link>
            </>
        )
    } else {
        return (
            <>
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
                            {operationsData &&
                                operationsData.map((elemento, i) => {
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
                </div>
                <hr />
                <h3>Total: <b>{ operationsTotal }</b></h3>
                <div className="w-75 centered"></div>
            </>
        )
    }
};