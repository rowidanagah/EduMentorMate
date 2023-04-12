import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const Success=()=>{



  return <div className="alert alert-success">
  <strong>Success!</strong> <br></br> Thank you for confirming your email address. Your account is now active and ready to use. You will receive updates and important information from us via email. If you have any questions or concerns, please don't hesitate to contact us."

This message is usually displayed after a user clicks on a verification link sent to their email address to confirm that the email is valid and belongs to them. The confirmation process is important to ensure that the user is not a robot or a spammer, and to prevent unauthorized access to the user's account.
 <a href="/login">login now </a>
</div>
}

const Error = ()=>{


  return <div className="alert alert-danger">
  <strong>Error</strong> <br></br>There was an error confirming your email address. Please try again later.
  These error messages may appear when a user tries to confirm their email address for an online account or subscription, or when a company or organization tries to send a confirmation email. Possible reasons for the error message can include an incorrect or mistyped email address, an issue with the email provider or server, or a problem with the confirmation link or code. In any case, the user should follow the instructions in the error message and try again, or contact customer support for further assistance if needed.
<a href="/register">signup </a> or you can <a href="/login">login</a>
</div>
}


const EmailVerify=()=>{
const [isverifed,setverfied] = useState(false)
  const {token} = useParams()
useEffect(()=>{
axios.post('http://localhost:8000/api/dj-rest-auth/registration/account-confirm-email/',{
  key:token
}).
then(res=>{
  console.log(res)
  setverfied(true)

}).
catch(error=>{
  console.log(error)

})
},[])

  return <div className='container' style={{margin: '23rem auto',fontSize: '1.5rem'}}>
{isverifed ? <Success></Success> :<Error></Error>}
  </div>


}


export default EmailVerify
