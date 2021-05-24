import { useState, useRef } from 'react'

export default function ModifyOperation(props) {
    const [userLogged, setUserLogged] = useState();
    const [mountFeedback, setMountFeedback] = useState();
    const PUT_URL = "http://localhost:3010/api/v1/operations/update";
    const concept = useRef();
    const mount = useRef();
    const date = useRef();
    async function apiUpdate(opId, concept, mount, date, fetchUrl) {
        const body = JSON.stringify({
            id: opId,
            concept,
            mount,
            date,
        });
        const fetchConfig = {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body:body
        };
        await fetch(fetchUrl, fetchConfig)
        window.location.href = '/'
    }

    return (
        <div className="container-lg mt-4 bg-light rounded border border-secondary w-50">
            <form 
            className="m-5 text-center w-100 newOp"
            onSubmit={(e)=>{
                e.preventDefault();
                apiUpdate(
                    props.match.params.id,
                    concept.current.value,
                    mount.current.value,
                    date.current.value,
                    PUT_URL)
            }}
            >
                <div className="form-floating mb-3 w-75">
                    <input ref={concept}
                     type="text" className="form-control" id="floatingInput" placeholder="Job payment"/>
                    <label htmlFor="floatingInput">Concept</label>
                </div>
                <div className="input-group mb-3 w-75">
                    <span className="input-group-text">$</span>
                    <input ref={mount}
                        type="text" className="form-control"
                        placeholder="Just write numbers"
                        onKeyUp={
                            (e) => {
                                const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
                                1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
                                if (!keys.includes(e.key)) {
                                    mount.current.value = '';
                                    setMountFeedback('Just enter numbers');
                                }
                            }
                        }
                    />
                    {
                        mountFeedback &&
                            <div className="alert alert-danger rounded w-100 mt-1 h6 centered">
                                {mountFeedback}
                            </div>
                    }
                </div>
                <div className="input-group mb-3 w-75">
                    <span className="input-group-text">
                        <i className="fas fa-calendar-alt"></i>
                    </span>
                    <input ref={date}
                        type="date" className="form-control" />
                </div>

                <div className="input-group mt-3 w-75">                  
                    <button className="btn btn-sm p-2 btn-primary w-100" type="submit">Save</button>
                </div>
            </form>
        </div>
    )
}