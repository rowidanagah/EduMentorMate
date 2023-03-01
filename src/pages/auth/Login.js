import CustomForm from "../../components/profile/auth/CustomForm"
import Customh2 from "../../components/profile/auth/Customh2";
import CustomImg from "../../components/profile/auth/CustomImg";
import CustomLink from "../../components/profile/auth/CustomLink";
import { useState } from "react";
import "./auth.css"


import loginimg from "../../img/login.png"
import ErrorModel from "../../components/ErrorAndSuccess/ErrorModel";
import Success from "../../components/ErrorAndSuccess/Success";
import Error from "../../components/ErrorAndSuccess/Error";

const Login = () => {
    const fields = ["email", "password"];

    const [validSubmitDisplay, setvalidSubmit] = useState("none");

    const [userLoginData, setUserloginData] = useState({
        email: "",
        password: ""
    });

    const [passwordType, setPasswordType] = useState("password");
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })

    const togglePassword = (e) => {
        e.preventDefault()
        console.log("showing password")
        if (passwordType == "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }
    const changeData = (e) => {
        if (e.target.name == "email") {
            setUserloginData({
                ...userLoginData,
                email: e.target.value
            })
            const isValidEmail = (email) =>
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

            setErrors({
                email: e.target.value.length == 0 ? "email field is required" : isValidEmail(e.target.value) && "not a valid email format"
            })
        }
        else {
            setUserloginData({
                ...userLoginData,
                password: e.target.value
            })
            setErrors({
                ...errors,
                password: e.target.value.length == 0 ? "Please this age field is required" : e.target.value.length < 7 && "min value is 8"
            })
        }
    }
    const submitUserData = (e) => {
        e.preventDefault()
        setvalidSubmit("block")
        console.log(errors)
    }
    return (
        <div class="container col-11 col-md-9" id="form-container">
            <div className="row align-items-center gx-5">
                <div className={`d-${validSubmitDisplay}`}>
                    {!(errors.email && errors.password) && <Success message={"loged successfully "} />}
                    {errors && <Error message={"login faild !"} />}

                </div>
                <div className="col-md-6 col-sm-12 order-md-2">
                    <Customh2 text={"Log in to your account"} />
                    <CustomForm btn_val={"Log In "} fields={fields} submitUserData={submitUserData}
                        handler={changeData} errors={{ "email": errors.email, "password": errors.password }} />
                    <div className="col-12 d-md-none d-sm-block" id="link-container">
                        <CustomLink linkto={"/register"} text="I don't have an account yet" />
                    </div>
                </div>

                <div className="col-md-6 order-md-1 d-md-block d-sm-none ">

                    <div className="co-12">
                        <CustomImg imgsrc={loginimg} />
                    </div>
                    <div className="col-12" id="link-container">
                        <CustomLink linkto={"/register"} text="I don't have an account yet" />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Login;