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
                <div className="table-container table-responsive">
                    <div className="container table-header">
                        <div className="row">
                            <div className="col">
                                ID
                            </div>
                            <div className="col-5">
                                Concept
                            </div>
                            <div className="col">
                                Mount
                            </div>
                            <div className="col">
                                Type
                            </div>
                            <div className="col">
                                Modify
                            </div>
                            <div className="col">
                                Delete
                            </div>
                        </div>
                    </div>
                    <hr />
                    {
                        operationsData &&
                        operationsData.map((element, i) => {
                            return (
                                <div key={i} className="container mt-3 mb-3">
                                    <div className="row">
                                        <div className="col">
                                            {element.id}
                                        </div>
                                        <div className="col-5">
                                            {element.concept}
                                        </div>
                                        <div className="col">
                                            {element.mount}
                                        </div>
                                        <div className={`col type-id ${element.typeId}`}>
                                            {element.typeId}
                                        </div>
                                        <div className="col">
                                            <b className="pointer" id={`${element.id}`}
                                                onClick={
                                                    function(e){
                                                        deleteOne(e.target.id, DELETE_URL)
                                                    }
                                                }
                                            >
                                                <i className="fa fa-trash" aria-hidden="true"
                                                    id={`${element.id}`}
                                                ></i>
                                            </b>
                                        </div>
                                        <div className="col">
                                            <Link
                                                to={`/modifyoperation/${element.id}`}
                                                id={`${element.id}`}
                                                className="pointer"
                                            ><i className="fa fa-pen" id={`${element.id}`} aria-hidden="true"></i></Link>
                                        </div>

                                    </div>
                                </div>
                            )
                        })
                    }
                    <hr />
                    <h3>Total: <b>{ operationsTotal }</b></h3>
                    <div className="w-75 centered"></div>
                </div>
            </>
        )
    }
};