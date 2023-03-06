
import { useState } from "react";
import { Link } from "react-router-dom";
import Title from "../components/layout/Title";

function Register() {
    // ============(Second Steps >> store user values into state (useState))===============
    const [userData, setUserData] = useState({
        Name: "",
        Email: "",
        UserName: "",
        UserType:"",
        Pass: "",
        RepeatPass: "",
    })
    const [errors, setErrors] = useState({
        NameErr: "",
        UserNameErr: "",
        EmailErr: "",
        UserTypeErr: "",
        PassErr: "",
        RepeatPassErr: "",
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
        }
        // -----------------------type user 
        else if (e.target.name == "usertype") {
            setUserData({
                ...userData,
                UserType: e.target.value
            })

            setErrors({
                ...errors,
                UserTypeErr: e.target.value.length === '' && "required" 
            })
        }
        
        
        else if (e.target.name == "userpass") {
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
        else if (e.target.name == "UserName") {
            setUserData({
                ...userData,
                all: e.target.value
            })

            setErrors({
                ...errors,
                allError: e.target.value.length == 0 &&"required User Name Field" 
            })
        }

    }


    const submitUserData = () => {
        var arrayOfData;
        if (localStorage.getItem("data") != null) {
            arrayOfData = JSON.parse(localStorage.getItem("data"));
        } else {
            arrayOfData = [];
        }

        if ((errors.PassErr !== "" && errors.EmailErr !== "" && errors.UserNameErr !== "" && errors.UserTypeErr !== "" && errors.RepeatPassErr !== "" && errors.NameErr !== "")){
    arrayOfData.push(userData);

            localStorage.setItem("data", JSON.stringify(arrayOfData));
        
        }
      

    
    }
    
    return (
        <>
            {/*=========================first steps >> create your form bootstrap ==============*/}
            <div className="container">

                <div className="   mt-3 shadow">
                    <div className=" row d-flex justify-content-around p-2">

                        <div className="col-lg-3 ">
                            <Title title="Sign Up" />

                            <img src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?w=740&t=st=1676318059~exp=1676318659~hmac=c4744ad235a55aeaa36a0a7e45824480f3e7f389ceaf213baacebf3b27210346" alt="Register image"
                                className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5 m-auto" />
                            {/* <div className="mt-5">
                            
                                <h4>Edu&mentor mate</h4>
                           
                           </div> */}
                        </div>
                        <div className="col-lg-6 pl-5">
                            <form className="">
                                <p className="text-danger"> {errors.allError}</p>

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
                                {/* ==================(User type )===================== */}
                           <div>
                                    <select className="form-select mb-3" name="usertype" aria-label="Default select example" value={userData.UserType} onChange={(e) => changeData(e)}>
                                        <option selected value="">Select who you are? </option>
                                        <option>mentor</option>
                                        <option>student</option>
                                    </select>
                                    <p className="text-danger"> {errors.EmailErr}</p>

                                    <p>{userData.UserType}</p>
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

                                <button


                                    disabled={

                                        (errors.PassErr === "" || errors.EmailErr === "" || errors.UserNameErr === "" || errors.RepeatPassErr === "" || errors.NameErr === "") && "disabled"

                                    } 
                                    className="btn btn-outline-success rounded-pill me-2"   onClick={submitUserData} >
                                 
                                    submitButton

                                    {/* <Link className="nav-link " to="/cat" >Register</Link> */}





                                </button>


                                <button className="btn btn-outline-success rounded-pill me-2" type="button">

                                    <Link className="nav-link " to="/login" >Login</Link>

                                </button>


                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Register;
