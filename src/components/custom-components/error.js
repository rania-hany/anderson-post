function Error (props) {
    return (
        <div className="notification error">
            {props.children}
        </div>
    )
}

export default Error;