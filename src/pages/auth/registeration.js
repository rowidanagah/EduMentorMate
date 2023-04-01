import { useState, useEffect } from "react";
import CustomForm from "../../components/profile/auth/CustomForm"
import Customh2 from "../../components/profile/auth/Customh2";
import CustomImg from "../../components/profile/auth/CustomImg";
import CustomLink from "../../components/profile/auth/CustomLink";
import regimg from "../../img/registration.svg"
import Success from "../../components/ErrorAndSuccess/Success";
import Error from "../../components/ErrorAndSuccess/Error";
import { Link, useHistory } from "react-router-dom";


import "./auth.css"
import axios from "axios";
const Registration = () => {
console.log("fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")

axios.get('http://127.0.0.1:8000/api/user', {
    headers: {
      'Content-Type': 'application/json',
      //'Authorization': 'Token 0dba9d202f030608724613043df6dbb4bd0e4d86', 
      'Authorization': 'Token 671104fbff486f3e1cf1b8c759421b706566aa93', 
    },
  })
  .then((info) => console.log(info.data))
  .catch((err) => console.log(err))
    
// _____________________________________
// axios.post('http://localhost:8000/api/dj-rest-auth/registration/'
// ,
// },
// {headers :{
//     'Content-Type': 'application/json',
//     // 'Authorization': 'Token 671104fbff486f3e1cf1b8c759421b706566aa93', 
// }}
// ).then(result=>{
//     console.log(result)
// }).catch(error=>{

//     console.log(error.response.data)
// })


    const registerdata = [];

    const fields = ["name","email", ,"username","password",  "confirmpassword",'user_profile'];
    const [userInfo, setUserData] = useState({
        id: 0,
        email: "",
        password: "",
        username: "",
        userType: "2",
        confirmpassword: ""
    });
    const [errors, setErrors] = useState({
        name: "",
        password: "",
        confirmpassword: "",
        username: "",
        email: ""
    })

    const [password, setPassword] = useState({
        cashPassword: ""
    });

    /// validation
    const [validSubmitDisplay, setvalidSubmit] = useState("none");
    const [isDisabled, setDisabled] = useState(true);
    const history = useHistory();

    const ValidateUserData = () => {
        if ((errors.name != "" && userInfo.name === "") ||
            errors.password != "" || userInfo.password === "" ||
            errors.confirmpassword != "" || userInfo.confirmpassword === "" ||
            errors.email != "" || userInfo.email === "" ||
            errors.username != "" || userInfo.username === ""
        ) {
            return false;
        }
        else {
            return true;
        }
    }
    function getUsersFromLocalStorage() {
        /**get lst of all carts stored at the local storage */
        return JSON.parse(localStorage.getItem("data") || "[]"); /**test* */
    }

    const changeData = (e) => {
        setDisabled(false)
        if (e.target.name == "email") {
            setUserData({
                ...userInfo,
                email: e.target.value
            })
            const isValidEmail = (email) =>
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

            console.log(isValidEmail(e.target.value))
            setErrors({
                email: e.target.value.length == 0 ? "email field is required" : isValidEmail(e.target.value) && "not a valid email format"
            })
        }
        else if (e.target.name == "name") {
            setUserData({
                ...userInfo,
                name: e.target.value
            })
            setErrors({
                ...errors,
                name: e.target.value.length == 0 ? "name field is required" : ""
            })
        }
        else if (e.target.name == "username") {
            setUserData({
                ...userInfo,
                username: e.target.value
            })
            const includeSpase = (stringVal) => /\s/g.test(stringVal);
            if (includeSpase(e.target.value)) {
                console.log("contain")
            }
            setErrors({
                ...errors,
                username: e.target.value.length == 0 ? "username field is required" : includeSpase(e.target.value) && "username can't contain space"
            })
        }
        else if (e.target.name == "password") {
            console.log(e.target.value.length > 8)
            setUserData({
                ...userInfo,
                password: e.target.value
            })
            const validatePassword = (string) => {
                var specialChr = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
                const lower = /[a-z]/.test(string);
                const upper = /[a-z]/.test(string);
                const number = /[0-9]/.test(string)

                return lower && upper && number && specialChr.test(string);
            };

            setErrors({
                ...errors,
                password: e.target.value.length < 7 ? "password field is required with min length of 8" : !validatePassword(e.target.value) && "Password Must contain lower, upper chars and numbers"
            })
            setPassword({
                cashPassword: e.target.value
            })
        }
        else if (e.target.name == "type") {
            setUserData({
                ...userInfo,
                userType: e.target.value == 1 ? "mentor" : "student"
            })

        }
        else {
            setUserData({
                ...userInfo,
                confirmpassword: e.target.value

            })
            setErrors({
                ...errors,
                confirmpassword: e.target.value != password.cashPassword ? "passwords don't match" : ""
            })
        }
       
    } //end of handeler

    // const submitUserData = (e) => {
    //     e.preventDefault()
    //   console.log(userInfo)
    //   const form_data = new FormData() ;
    //    console.log(userInfo.username)
    //   form_data.append("name",userInfo.name)
    //   form_data.append("username",userInfo.username)
    //   form_data.append("email",userInfo.email)
    //   form_data.append("image", imagefile.files[0]);

    //   axios.post('http://localhost:8000/api/dj-rest-auth/registration/'
    //   ,form_data,

      
    //   {headers :{
    //       'Content-Type': 'application/json',
    //       // 'Authorization': 'Token 671104fbff486f3e1cf1b8c759421b706566aa93', 
    //   }}
    //   ).then(result=>{
    //       console.log(result)

    //       history.push('/login')

    //   }).catch(error=>{
      
    //       console.log(error.response.data)
    //   })



    // }


    return (
        <div class="container col-11 col-md-9" id="form-container">
            <div class="row gx-5">
                <div class="col-md-12 col-lg-6 col-sm-12">
                    <div className={`d-${validSubmitDisplay}`}>
                        {(errors.email != "" || errors.password != "" || errors.confirmpassword != "" ||
                            errors.username != "") && <Error message={"Registration  faild !"} />}
                    </div>
                    <Customh2 text={"Create your account"} />
                    <CustomForm
                      
                        btn_val={"Register"} fields={fields}
                        handler={changeData} errors={errors} />
                    <div class="col-12 d-md-none d-sm-block" id="link-container">
                        <CustomLink linkto={"/login"} text={"I already have an account"} />
                    </div>
                </div>

                <div class="col-lg-6 d-none d-lg-block">
                    <div class="row align-items-center">
                        <div class="col-12">
                            <CustomImg imglass={"imgwidth"} imgsrc={regimg} />
                        </div>
                        <div class="col-12" id="link-container">
                            <CustomLink linkto={"/login"} text={"I already have an account"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Registration;