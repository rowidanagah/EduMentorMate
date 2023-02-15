const FollowingBtn = ({ text, handlar }) => {
  return (
    <p><button className="follow_btn m-2" onClick={handlar}>{text}</button></p>

  )
}

export default FollowingBtn;