import { useState } from "react";
import { Link } from "react-router-dom";
import Title from "../components/Title";
function Login() {
    // ============(Second Steps >> store user values into state (useState))
    const [userData, setUserData] = useState({
        Email: "",
        Pass: ""
    })

    const [errors, setErrors] = useState({
        EmailErr: "",
        PassErr: ""
    })
    const changeData = (e) => {
        console.log(e.target.value)
        if (e.target.name == "userEmail") {
            setUserData({
                ...userData,
                Email: e.target.value
            })

            setErrors({
                ...errors,
                EmailErr: e.target.value.length == 0 ? "required Email" : e.target.value = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value) && "Email is not correct "
            })
        } else {
            setUserData({
                ...userData,
                Pass: e.target.value
            })

            setErrors({
                ...errors,
                PassErr: e.target.value.length == 0 ? "required password" : e.target.value.length < 8 && "Error Password is less than 8"
            })
        }

    }

    const submitUserData = (e) => {
        console.log("submit")
        e.preventDefault()
    }
    const [passwordType, setPasswordType] = useState("password");

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }
    return (
        <>
            {/*=======first steps >> create your form bootstrap ======*/}
            <div className="p-4 m-auto container">
                <Title title="Log in to see more" />

                <div className="row d-flex" >

                    <div className="col-lg-4">
                        <img src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?w=740&t=st=1676318059~exp=1676318659~hmac=c4744ad235a55aeaa36a0a7e45824480f3e7f389ceaf213baacebf3b27210346" alt="login image"
                            className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />


                    </div>
                    <div className="col-lg-8">
                        <form className=" m-5 p-2">
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input name="userEmail" className={`form-control ${errors.EmailErr && "border border-danger"}`} type="text" value={userData.Email} onChange={(e) => changeData(e)} />
                                <p className="text-danger"> {errors.EmailErr}</p>
                            </div>

                            <div className="mb-3 ">
                                <label className="form-label">Password</label>
                                <div className="input-group">
                                    <input type={passwordType} name="userpass" className={`form-control ${errors.EmailErr && "border border-danger"}`} value={userData.Pass} onChange={(e) => changeData(e)}
                                    />
                                    <span className="input-group-text">

                                        <i className="bi bi-eye"
                                            style={{ cursor: "pointer" }} onClick={(e) => togglePassword(e)} >

                                            toggle</i>
                                    </span>
                                </div>

                                <p className="text-danger"> {errors.PassErr}</p>

                            </div>
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" name="remember" className="m-3" /> Remember me
                                </label>
                            </div>
                            <div className="row d-flex m-auto">
                                <button disabled={errors.PassErr || errors.EmailErr && "disabled"} className="col-3 btn btn-primary m-2">Login</button>


                                <button className="btn col-3 m-2">
                                    <Link to="/register">
                                           Sign Up 
                                    </Link>
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>







        </>
    )
}
export default Login;
