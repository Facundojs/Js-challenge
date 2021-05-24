import { useEffect, useRef, useState } from 'react'
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const URL_NEW_OPERATION_API = "http://localhost:3010/api/v1/operations/new"

export default function NewOperation() {
    const [userLogged, setUserLogged] = useState();
    const userCookie = cookies.get('userLogged');
    useEffect(() => {
        if (!userCookie) {
            return window.location.href = "/login"
        }
        return setUserLogged(userCookie)
    }, [])
    const [mountFeedback, setMountFeedback] = useState();
    const [saveErrors, setSaveErrors] = useState();
    const [fetchFedback, setFetchFedback] = useState();
    const concept = useRef();
    const mount = useRef();
    const date = useRef();
    const typeId = useRef();
    
    async function registerOperation(userId, typeId, concept, mount, date, fetchUrl){
        const body = JSON.stringify({
            userId,
            typeId,
            concept,
            mount,
            date
        })
        const fetchConfig = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: body
        }
        const fetchRes = await fetch(fetchUrl, fetchConfig);
        const newOp = await fetchRes.json();
        if (newOp.errors) {
            return setSaveErrors(newOp.errors.errors)
        } else {
            setFetchFedback('The operation was succefully saved')
        }
    }
    return (
        <div className="container-lg mt-4 bg-light rounded border border-secondary w-50">
            <form 
            className="m-5 text-center w-100 newOp"
            onSubmit={(e)=>{
                e.preventDefault();
                registerOperation(
                    userLogged.id,
                    typeId.current.value,
                    concept.current.value,
                    mount.current.value,
                    date.current.value,
                    URL_NEW_OPERATION_API
                )
            }}
            >
                <div className="form-floating mb-3 w-75">
                    <input ref={concept}
                     type="text" className="form-control" id="floatingInput" placeholder="name@example.com"/>
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
                <select ref={typeId}
                    className="form-select w-75" aria-label="Default select example">
                    <option defaultValue>Choose an option</option>
                    <option value="1">Entry</option>
                    <option value="2">Egress</option>
                </select>

                {
                    (saveErrors &&
                        <div className="container w-75 mx-0 mt-3 validations alert alert-danger centered">
                        
                        {saveErrors.map((err, key) => {
                            return (
                                <span key={key} className="w-50 p-2">{`${err.msg}`}</span>
                                )
                            })}

                        </div>
                        )
                }
                {
                    (fetchFedback &&
                        <div className="container w-75 mx-0 mt-3 validations alert alert-succes centered">
                            {fetchFedback}
                        </div>
                    )
                }
                
                <div className="input-group mt-3 w-75">                  
                    <button className="btn btn-sm p-2 btn-primary w-100" type="submit">Save</button>
                </div>
            </form>
        </div>
    )
}