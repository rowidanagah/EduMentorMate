import CustomInput from "./CustomInput";
import ErrorText from "./ErrorText";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

import { useState } from "react";
const CustomForm = ({ isDisabled, submitUserData, t, handler, btn_val }) => {
    const fields = ["name", "username", "email", "password1", "password2", "user_profile", "phone"]
    const mapTypes = { "role": "select", "email": "email", "password1": "password", "username": "text", "password2": "password", "name": "name", "user_profile": "file", 'date_birth': 'date' }
    const isReg = fields.length > 2 ? true : false;

    const [errors, setErrors] = useState({})
    const history = useHistory();


    const submithandler = (e) => {
        console.log("user type is ", e.target.usertype.value)
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form);
        // axios submit data 
        axios.post('http://localhost:8000/api/dj-rest-auth/registration/'
            , formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                    // dont need token in registration 
                    // 'Authorization': 'Token 671104fbff486f3e1cf1b8c759421b706566aa93', 
                }
            }
        ).then(result => {
            console.log("submit success")
            setErrors({})
            history.push('/login')

        }).catch(error => {
            setErrors(error.response.data)
            console.log(error.response.data)
        })
    }

    return (
        <form onSubmit={submithandler} enctype="multipart/form-data" >
            {fields.map((field) => {
                return (
                    <>
                        <CustomInput name={field} type={mapTypes[field]} handler={handler} />
                        {errors[field] && <ErrorText errorMsg={errors[field][0]} />}

                    </>
                )
            })}
            <div className="form-floating mb-3">
                {errors['usertype'] && <ErrorText errorMsg={errors["usertype"][0]} />}
                <select className="form-control form-label"
                    name="usertype"
                    aria-label="Default select example">

                    <option value="mentor" >Mentor</option>
                    <option value="studnt" selected>Student</option>
                </select>
            </div>

            <input type="submit" className="btn btn-primary" value={btn_val}
            />


        </form >
    )

}


export default CustomForm;
