import React, { useState } from 'react'
import Profile_Image_Icon from './Profile_Image_Icon'
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext'; 
import img from "../first.png"
import Avatar from 'react-avatar-edit';
import { Button } from 'bootstrap/dist/js/bootstrap.bundle';



export default function EditMentor() {
    const[image,setimage]=useState("")
    const [imagecrop,setimagecrop]=useState(false)
    const[src,setsrc]=useState(false)
    const[profile,setprofile]=useState([])
    const[pview,setpview]=useState(false)
    const profileFinal=profile.map((item)=>item.pview)
    const onClose=()=>{
        setpview(null)
    }
    const onCrop=(view)=>{
        setpview(view)
    }
    const saveCropImage=()=>{
        setprofile([...profile,{pview}])
        setimagecrop(false)
    }
  return (
    <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-6 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" style={{ width: `400px` }}
                alt="Avatar" />
                <span class="font-weight-bold">Kareem Mohsen</span>
                <span class="text-black-50">kareemtall99@gmail.com</span>
            </div>
            <div className='profile_img text_center p-4'>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <img style={{
                        width:"200px",
                        height:"200px",
                        borderRadius:"50%",
                        objectFit:"cover",
                        border:"5px solid black"
                    }} 
                    onClick={()=>setimagecrop(true)}
                    src={profileFinal.length ? profileFinal:img}
                    alt=""
                    />

                   <Dialog
                   visible={imagecrop}
                   header={()=>(
                    <p htmlFor="" className='text-2xl font-semibold textColor'>
                        Update Profile
                    </p>
                   )}
                   onHide={()=>setimagecrop(false)}
                    >
                    <div className='comf d-flex flex-column align-items-center'>
                        <Avatar
                        width={500}
                        height={400}
                        onCrop={onCrop}
                        onClose={onClose}
                        src={src}
                        shadingColor={"#474649"}
                        backgroundColor={"#474649"}
                        />
                       

                        <div className='d-flex flex-column align-items-center mt-5 '>
                            <div className='d-flex justify-content-around mt-4'>
                            <Button 
                            onClick={saveCropImage}
                            label="save"
                            icon="pi pi-check"
                            />
                            </div>
                        </div>
                    </div>
                </Dialog>
                      

                    <InputText
                     type="file"
                     accept='/image/*'
                     style={{display:"none"}}
                     onChange={(e)=>{
                        const file=e.target.files[0]
                        if(file && file.substring(0,5)==="image"){
                            setimage(file)
                        }else{
                            setimage(null)
                        }
                     }}
                     />
                </div>

            </div>
        </div>
        <div class="col-md-6 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder="first name" value=""/></div>
                    <div class="col-md-6"><label class="labels">UserName</label><input type="text" class="form-control" value="" placeholder="surname"/></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Mobile Number</label><input type="text" class="form-control" placeholder="Mobile Number" value=""/></div>
                    <div class="col-md-12"><label class="labels">Email</label><input type="text" class="form-control" placeholder="Email" value=""/></div>
                    <div class="col-md-12"><label class="labels">Password</label><input type="text" class="form-control" placeholder="Password" value=""/></div>
                    <div class="col-md-12"><label class="labels">New Password</label><input type="text" class="form-control" placeholder="New Password" value=""/></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value=""/></div>
                    <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state"/></div>
                </div>
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
        </div>
</div>
</div>
  )
}
