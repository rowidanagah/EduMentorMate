
import { useState } from "react";
import { Link } from "react-router-dom";
import Title from "../components/Title"; 

function Register() {
    // ============(Second Steps >> store user values into state (useState))===============
    const [userData, setUserData] = useState({
        Name: "",
        Email: "",
        UserName: "",
        Pass: "",
        RepeatPass: ""
    })
    const [errors, setErrors] = useState({
        NameErr: "",
        UserNameErr: "",
        EmailErr: "",
        PassErr: "",
        RepeatPassErr: ""
    })
    const changeData = (e) => {
        if (e.target.name == "userEmail") {
            setUserData({
                ...userData,
                Email: e.target.value
            })

            setErrors({
                ...errors,
                EmailErr: e.target.value.length == 0 ? "required Email" : e.target.value = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value) && "Email is not correct "
            })
        } else if (e.target.name == "userpass") {
            setUserData({
                ...userData,
                Pass: e.target.value
            })

            setErrors({
                ...errors,
                PassErr: e.target.value.length == 0 ? "required pass" : e.target.value.length < 8 ? "Error Pass is less than 8" :
                    e.target.value = !/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/.test(e.target.value) && "pass must contain contains at least one lowercase etc "

            })
        } else if (e.target.name == "userRepeatpass") {
            setUserData({
                ...userData,

                RepeatPass: e.target.value
            })

            setErrors({
                ...errors,
                RepeatPassErr: e.target.value.length == 0 ? "required Repeat pass Field" : e.target.value != userData.Pass && "Error Pass isnot ="
            })
            //=======(name validation Name [required])==========================
        } else if (e.target.name == "Name") {
            setUserData({
                ...userData,
                Name: e.target.value
            })

            setErrors({
                ...errors,
                NameErr: e.target.value.length == 0 && "required Name Field"
            })
        }
        else if (e.target.name == "UserName") {
            setUserData({
                ...userData,
                UserName: e.target.value
            })

            setErrors({
                ...errors,
                UserNameErr: e.target.value.length == 0 ? "required User Name Field" : e.target.value = /\s/g.test(e.target.value) && "Error  There Was space"
            })
        }

    }

    const submitUserData = (e) => {
        console.log("submit")
        e.preventDefault()
    }
    // 
    return (
        <>
            {/*=========================first steps >> create your form bootstrap ==============*/}
            <div className="container">
                
                <Title title="Sign Up" />

                <div className="row d-flex">
                    <div className="col-lg-4 ">
                        <img src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?w=740&t=st=1676318059~exp=1676318659~hmac=c4744ad235a55aeaa36a0a7e45824480f3e7f389ceaf213baacebf3b27210346" alt="Register image"
                            className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5 m-auto" />

                    </div>
                    <div className="col-lg-6 pl-5">
                        <form className="">
                            {/* ==================(Name)===================== */}

                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input name="Name" className="form-control" type="text" value={userData.Name} onChange={(e) => changeData(e)} />
                                <p className="text-danger"> {errors.NameErr}</p>
                            </div>
                            {/* ==================(Email)===================== */}

                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input name="userEmail" className="form-control" type="text" value={userData.Email} onChange={(e) => changeData(e)} />
                                <p className="text-danger"> {errors.EmailErr}</p>
                            </div>
                            {/* ==================(User Name)===================== */}

                            <div className="mb-3">
                                <label className="form-label">User Name</label>
                                <input name="UserName" className="form-control" type="text" value={userData.UserName} onChange={(e) => changeData(e)} />
                                <p className="text-danger"> {errors.UserNameErr}</p>
                            </div>
                            {/* ==================(password)===================== */}
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type={"password"} name="userpass" className="form-control" value={userData.Pass} onChange={(e) => changeData(e)} />
                                <p className="text-danger"> {errors.PassErr}</p>
                            </div>
                            {/* ==================(Repeat password)===================== */}

                            <div className="mb-3">
                                <label className="form-label">Repeat Password</label>
                                <input type={"password"} name="userRepeatpass" className="form-control" value={userData.RepeatPass} onChange={(e) => changeData(e)} />
                                <p className="text-danger"> {errors.RepeatPassErr}</p>
                            </div>
                            {/* ==================(btn)===================== */}
                            <div className="form-check d-flex justify-content-start mb-4 pb-3">
                                <input className="form-check-input me-3" type="checkbox" value="" id="form2Example3c" />
                                <label className="form-check-label " for="form2Example3">
                                    I do accept the <a href="#!" className=""><u>Terms and Conditions</u></a> of your
                                    site.
                                </label>
                            </div>
                           
                            <button disabled={errors.PassErr || errors.EmailErr && "disabled"} className="btn btn-outline-success rounded-pill me-2">Register</button>


                            <button className="btn btn-outline-success rounded-pill me-2" type="button">

<Link className="nav-link " to="/login" >Login</Link>

</button>
               

                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Register;