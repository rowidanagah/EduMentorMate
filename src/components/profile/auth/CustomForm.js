import CustomInput from "./CustomInput";
import ErrorText from "./ErrorText";

const CustomForm = ({submitUserData, fields, t, handler, errors, btn_val }) => {
    const mapTypes = { "name": "text", "email": "email", "confirmpassword": "password", "username": "text", "password": "password" }

    return (
        <form onSubmit={submitUserData}>
            {fields.map((field) => {
                return (
                    <>
                        <CustomInput name={field} type={mapTypes[field]} handler={handler} />
                        <ErrorText errorMsg={errors[field]} />
                    </>
                )
            })
            }
            <input type="submit" className="btn btn-primary" value={btn_val} />
        </form>
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