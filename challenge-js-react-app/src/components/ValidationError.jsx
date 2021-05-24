export default function ValidationError(props) {
    if(props.error !== "none"){
    return (
        <div>
            {props.error}
        </div>   
        )
    } else {
        return (
            <>
            </>
        )
    }
}