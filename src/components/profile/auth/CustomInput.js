const CustomInput = ({ name, type, handler }) => {
    console.log(name,type)
    let label_name = "Enter your " + name;
    if(name == 'password2'){
        label_name = "confirm your password"
    }
    if(name == 'password1'){
        label_name = "Enter your password"
    }
    return (
        <div className="form-floating mb-3">
            
            <input type={type} class="form-control"
            onChange = {(e) => handler(e)}
            id={name} name={name} placeholder='Enter your {name}' />

            <label for={name} class="form-label" >{label_name}</label>
        </div>
    )
}

export default CustomInput;