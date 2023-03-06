import { Link } from "react-router-dom";
import CustomInput from "./CustomInput";
import ErrorText from "./ErrorText";

const CustomForm = ({ isDisabled, submitUserData, fields, t, handler, errors, btn_val }) => {
    const mapTypes = { "role": "select", "email": "email", "confirmpassword": "password", "username": "text", "password": "password" }
    const isReg = fields.length > 2 ? true : false;
    console.log(fields.length, isReg, isDisabled)

    return (
        <form onSubmit={submitUserData}>
            {fields.map((field) => {
                return (
                    <>
                        <CustomInput name={field} type={mapTypes[field]} handler={handler} />
                        <ErrorText errorMsg={errors[field]} />
                    </>
                )
            })}
            {isReg && <div className="form-floating mb-3">
                <select className="form-control form-label" 
                onChange = {(e) => handler(e)} name="type"
                aria-label="Default select example">
                    <option class="" selected>Select who you are? </option>
                    <option value="1">mentor</option>
                    <option value="2">student</option>
                </select>
            </div>}

            <input type="submit" className="btn btn-primary" value={btn_val}
                disabled={isDisabled && "disabled"} />
                
            {/*             {isReg
                ?
                <input type="submit" className="btn btn-primary" value={btn_val}
                    disabled={isDisabled && "disabled"} />
                : <input type="submit" className="btn btn-primary" value={btn_val}
                    disabled={isDisabled && "disabled"} />
            } */}
        </form >
    )

}


export default CustomForm;
/* 

<div className="form-floating mb-3">
<input type="email" class="form-control" id="email" name="email" placeholder="Enter you email address" />
<label for="email" class="form-label" >Enter you email address</label>
</div>
<div className="form-floating mb-3">
<input type="password" className="form-control" id="password" name="password" placeholder="Enter you password" />
<label htmlFor="password" className="form-label" >Enter you password</label>
</div> */