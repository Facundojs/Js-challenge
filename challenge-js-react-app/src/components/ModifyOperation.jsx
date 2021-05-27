import { useState, useRef, useEffect } from 'react'
import Cookies from 'universal-cookie';
const cookies = new Cookies();
export default function ModifyOperation(props) {
    const [fetchFeedback, setFetchFeedback] = useState();
    const [mountFeedback, setMountFeedback] = useState();
    const urlOpId = props.match.params.id;
    const PUT_URL = "http://localhost:3010/api/v1/operations/update";
    const GET_OLD_DATA_URL = "http://localhost:3010/api/v1/operations/once"
    const concept = useRef();
    const mount = useRef();
    const date = useRef();
    const userCookie = cookies.get('userLogged');
    const userCookieId = userCookie.id;
    useEffect(() => {
        if (!userCookie) {
            window.location.href = '/';
        }
    })
    useEffect(() => {
        oldData(urlOpId,userCookieId, GET_OLD_DATA_URL);
    }, [urlOpId])
    async function oldData(operationId, userId, url) {
        const body = JSON.stringify({
            id: operationId,
            userId: userId
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
        const fetchItem = await fetchRes.json();
        console.log(fetchItem.msg);
        if (fetchItem.msg === "You are able to acces this op") {
            concept.current.value = fetchItem.operation.concept;
            mount.current.value = fetchItem.operation.mount;
        } else {
            alert(fetchItem.msg)
            window.location.href = '/'
        }
    }
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
        const fetchRes = await fetch(fetchUrl, fetchConfig);
        const fetchState = await fetchRes.json()
        if (fetchState.errors) {
            setFetchFeedback(fetchState.errors)
        } else {
            window.location.href = '/';
        }
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
                        type="date" className="form-control"/>
                </div>
                {
                    fetchFeedback &&
                    <div className="container w-75 mx-0 mt-3 validations alert alert-danger centered">

                        {fetchFeedback.errors.map((err, key) => {
                            return (
                                <span key={key} className="w-50 p-2">{`${err.msg}`}</span>
                                )
                            
                        })}
                    </div>
                    }
                <div className="input-group mt-3 w-75">                  
                    <button className="btn btn-sm p-2 btn-primary w-100" type="submit">Save</button>
                </div>
            </form>
        </div>
    )
}