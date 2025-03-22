import React, { useRef, useState } from 'react'
import axios from 'axios';
import  Dialog  from '@mui/material/Dialog';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
    const navigate = useNavigate();
    const [errMsg, setErrMsg] = useState('');
    
    const [formStatus, setFormStatus] = useState({
        submitting: false,
        success: false
    });
    const [dialogOpen, setDialogOpen] = useState(false);
    const userRef = useRef({});

    const handleDialog = () =>{
        setDialogOpen(false);
        navigate('/')
    }
    const handleValidation = (e) =>{
       console.log(e.target.value);
       console.log(e.target.name);
       console.log(e.target.id);
       const emailPattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
       const phonePattern = /^[0-9]{10}$/;
       const passwordPattern = /^[a-zA-Z0-9]{6,}$/;
         if(e.target.name==='userName'){
             e.target.value.length<3 ? setErrMsg('Name should be atleast 3 characters long') : setErrMsg('')
         }
        if(e.target.name==='userPhone'){
            !phonePattern.test(e.target.value) ? setErrMsg('Phone number should be should be numeric and 10 characters long') : setErrMsg('')
        }
        if(e.target.name==='userPassword'){
            !passwordPattern.test(e.target.value) ? setErrMsg('Password is weak. It should be atleast 6 characters long and containing alphabets, numbers and special characters') : setErrMsg('')
        }
        if(e.target.name==='userEmail'){
            !emailPattern.test(e.target.value) ? setErrMsg('Invalid Email') : setErrMsg('')
        }               
    }


    const handleSignup = async(e) =>{
        e.preventDefault()
        if(userRef.current.userName.value.length<3){
            setErrMsg('Name should be atleast 3 characters long')
            return
        }
        if(userRef.current.userPhone.value.length<10){
            setErrMsg('Phone number should be should be numeric and 10 characters long')
            return
        }
        if(userRef.current.userPassword.value.length<6){
            setErrMsg('Password is weak. It should be atleast 6 characters long and containing alphabets, numbers and special characters')
            return
        }

        const userData = {
            userId: "CT"+userRef.current.userEmail.value.slice(0,5)+userRef.current.userPhone.value.slice(0,3),
            userName: userRef.current.userName.value,
            userEmail: userRef.current.userEmail.value,
            userPhone: userRef.current.userPhone.value,
            userPassword: userRef.current.userPassword.value
        }
        setFormStatus({
            submitting: true,
            success: false
        })
        setErrMsg('')

        axios.post('http://localhost:5000/api/user',userData)
        .then((res) =>{
            console.log(res.data);
            setFormStatus({
                submitting: false,
                success: true
            })
            setDialogOpen(true)
            setTimeout(() => {
                userRef.current.userName.value=''
                userRef.current.userEmail.value=''
                userRef.current.userPhone.value=''
                userRef.current.userPassword.value=''   
            }, 4000);    
        })
        .catch((err)=>{
            console.log(err);
            setErrMsg('err.response.data.message')
            setFormStatus({
                submitting: false,
                success: false
            })   
        })
    }
  return (
    <div>
            <h1 class="text-2xl font-bold text-center mb-6 text-amber-600">Login to save your journey</h1>
            <form onSubmit={handleSignup} class="space-y-4">
                <div>
                    <label htmlFor="userName" class="block mb-2 text-sm font-medium text-amber-500">Name</label>
                    <input name='userName' onBlur={handleValidation}  ref={(elem) =>{userRef.current.userName=elem}} type="text" id="name" class="w-full px-3 py-2 bg-dark-300 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 " required placeholder='What`s your name...' />
                </div>
                <div>
                    <label htmlFor="userEmail"  class="block mb-2 text-sm font-medium text-amber-500">Email</label>
                    <input name='userEmail' onBlur={handleValidation} ref={(elem) =>{userRef.current.userEmail=elem}} type="email" id="email" class="w-full px-3 py-2 bg-dark-300 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" required placeholder='your email...' />
                </div>
                <div>
                    <label htmlFor="userPhone" class="block mb-2 text-sm font-medium text-amber-500">Phone</label>
                    <input name='userPhone' onBlur={handleValidation} ref={(elem) =>{userRef.current.userPhone=elem}} type="tel" id="phone" class="w-full px-3 py-2 bg-dark-300 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" required placeholder='your phone...' />
                </div>
                <div>
                    <label htmlFor="userPassword" class="block mb-2 text-sm font-medium text-amber-500">Password</label>
                    <input name='userPassword' onBlur={handleValidation} ref={(elem)=>{userRef.current.userPassword=elem}} type="password" id="password" class="w-full px-3 py-2 bg-dark-300 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" required placeholder='Enter a strong password...' />
                </div>
                {errMsg && <p class="text-red-500 text-sm w-full">{errMsg}</p>}
                <button type="submit" disabled={formStatus.submitting} class="w-full py-2 px-4 bg-amber-600 hover:bg-amber-700 rounded-md text-white font-medium transition duration-300">Sign Up</button>
            </form>
            {formStatus.success && (
                    <Dialog open={dialogOpen}>
                      <div className="flex flex-col items-center p-4">
                        <h1 className="font-mono text-2xl text-gray-700 font-bold">Thank You!</h1>
                        <p className="font-mono text-slate-700 my-2 text-center">
                          You are successfully registered.<br />
                          Thanks!
                        </p>
                        <button
                          className="bg-green-700 w-1/2 text-white font-mono font-bold px-4 py-1 text-lg rounded-lg mt-8 hover:bg-green-600"
                          onClick={handleDialog}
                        >
                          Ok
                        </button>
                      </div>
                    </Dialog>
                  )}
        </div>
  )
}

export default SignUp; 