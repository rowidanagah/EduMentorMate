import CustomForm from "../../components/profile/auth/CustomForm"
import Customh2 from "../../components/profile/auth/Customh2";
import CustomImg from "../../components/profile/auth/CustomImg";
import CustomLink from "../../components/profile/auth/CustomLink";
import { useState } from "react";
import "./auth.css"
import { Link, useHistory } from "react-router-dom";
import loginimg from "../../img/login.png"
import ErrorModel from "../../components/ErrorAndSuccess/ErrorModel";
import Success from "../../components/ErrorAndSuccess/Success";
import Error from "../../components/ErrorAndSuccess/Error";

const Login = () => {
    const fields = ["email", "password"];
    const [userLoginData, setUserloginData] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    });

    const [validSubmitDisplay, setvalidSubmit] = useState("none");
    const [isDisabled, setDisabled] = useState(true);
    const history = useHistory();
    const [errorMsg, setErrorMsg] = useState("login faild !");

    // toggle see password
    const [passwordType, setPasswordType] = useState("password");
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
        setDisabled(false)

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

    const ValidateUserData = () => {
        /* console.log("---------------------")
        console.log(errors.email != "")
        console.log(userLoginData.email)
        console.log((errors.name != "" && userLoginData.name === ""))
        console.log("---------------------")

        console.log(errors.password != "")
        console.log(userLoginData.password)
        console.log((errors.password != "" || userLoginData.password === ""))
        console.log("---------------------")
 */

        if ((errors.name != "" && userLoginData.name === "") ||
            errors.password != "" || userLoginData.password === ""

        ) {
            return false;
        }
        else {
            return true;
        }
    }

    const getUserFromLOcalStorage = () => {
        // get& search user in local storage
        let getData = JSON.parse(localStorage.getItem("data"));
        console.log("data from local storge");
        console.log(getData);
        const user = getData.filter(user =>
            user.email == userLoginData.email &&
            user.password == userLoginData.password

        )
        console.log(user)
        return user[0];
    }
    const submitUserData = (e) => {
        e.preventDefault()
        const resValid = ValidateUserData();
        console.log("ppppppppppppppppp", resValid)
        if (ValidateUserData()) {
            const user = getUserFromLOcalStorage();
            console.log(user)
            if (user) {
                console.log("login success")

                const myUser = user.userType
                console.log(myUser)
                localStorage.setItem("typeuser", JSON.stringify(myUser));
                history.push('/home');
            }
            else {
                setErrorMsg("You are not registered!")
            }

        } else {
            setvalidSubmit("block")
        }

    }
    return (
        <div class="container col-11 col-md-9" id="form-container">
            <div className="row align-items-center gx-5">
                <div className={`d-${validSubmitDisplay}`}>
                    <Error message={errorMsg} />
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 ">
                    <Customh2 text={"Log in to your account"} />
                    <CustomForm isDisabled={isDisabled} btn_val={"Log In "}
                        fields={fields} submitUserData={submitUserData} handler={changeData}
                        errors={{ "email": errors.email, "password": errors.password }} />

                    <div className="col-12 d-md-none d-sm-block" id="link-container">
                        <CustomLink linkto={"/register"} text="I don't have an account yet" />
                    </div>
                </div>

                <div className="col-lg-6 d-none d-lg-block">

                    <div className="">
                        <CustomImg imgsrc={loginimg} />
                    </div>
                    <div className="" id="link-container">
                        <CustomLink linkto={"/register"} text="I don't have an account yet" />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Login;