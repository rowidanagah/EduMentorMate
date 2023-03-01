const CustomInput = ({ name, type, handler }) => {
    console.log(name,type)
    return (
        <div className="form-floating mb-3">
            
            <input type={type} class="form-control"
            onChange = {(e) => handler(e)}
            id={name} name={name} placeholder='Enter you {name}' />

            <label for={name} class="form-label" >Enter you {name}</label>
        </div>
    )
}

export default CustomInput;