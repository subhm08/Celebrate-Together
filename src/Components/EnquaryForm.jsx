import React, { useRef, useState } from 'react'
import axios from 'axios'
import Dialog from "@mui/material/Dialog";

const EnquaryForm = () => {
  const [formStatus, setFormStatus] = useState({ submitting: false, success: false });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [btnName, setBtnName] = useState('Enquiry Now');
  const handleDialog = () => setDialogOpen(false);
  const formRef = useRef({});

  const dataSubmit = async (e) => {
    e.preventDefault()
    const userData = {
      name: formRef.current.name.value,
      email: formRef.current.email.value,
      phone: formRef.current.phone.value,
      eventType: formRef.current.eventType.value
    }
    setFormStatus({ submitting: true, success: false });
    setBtnName('Sending Enquiry...');
      
    axios.post('http://localhost:5000/api/enquary', userData)

      .then((res) => {
        console.log(res.data);
        // console.log(response.data);
      setFormStatus({ submitting: false, success: true });
      setDialogOpen(true);
      setBtnName('Enquiry Now');
        setTimeout(() => {
          // setFormStatus(false)
          // setBtnName('Enquary Now')
          formRef.current.name.value = '';
          formRef.current.email.value = '';
          formRef.current.phone.value = '';
          formRef.current.eventType.value = '';
        }, 3000);
      }
      )
      .catch((err) => {
        console.log(err);
        // console.error(error);
      setFormStatus({ submitting: false, success: false });
      setBtnName('Try Again');
      })
  }
  return (
    <div className='text-amber-900 px8 py-8' >

      <form onSubmit={dataSubmit} className="flex gap-4 justify-center sm:justify-between flex-wrap items-center px-8">
        <div className=' grid grid-cols-1 sm:grid-cols-4 sm:gap-0 gap-4 sm:w-auto w-full '>

          <input type="text" name="name" id="user_name" placeholder='Name' ref={(el) => { formRef.current.name = el }} required className='input placeholder-amber-700 border-r-2 w-full' />
          <input type="email" name="email" id="user_email" placeholder='Email' ref={(el) => { formRef.current.email = el }} required className='input placeholder-amber-700' />
          <input type="text" name="phone" id="user_phone" placeholder='Phone' ref={(el) => { formRef.current.phone = el }} required className='input placeholder-amber-700' />
          <select name="eventType"  required className='input placeholder-amber-700 appearance-none' ref={(el) => { formRef.current.eventType = el }} >
            <option value="">Event Type</option>
            <option value="Wedding">Wedding</option>
            <option value="Birthday">Birthday</option>
            <option value="Aniversary">Aniversary</option>
            <option value="Engagment">Engagment</option>
            <option value="Corporate Party">Corporate Party</option>
            <option value="House Party">House Party</option>
            <option value="Others">Other</option>
          </select>
        </div>
        <input
          type="submit"
          value={btnName}
          id="btn"
          disabled={formStatus.submitting}
          className="bg-amber-700 hover:bg-amber-800 text-white font-bold px-8 py-4 rounded-xl"
        />
      </form>
      
      {formStatus.success && (
        <Dialog open={dialogOpen}>
          <div className="flex flex-col items-center p-4">
            <h1 className="font-mono text-2xl text-gray-700 font-bold">Thank You!</h1>
            <p className="font-mono text-slate-700 my-2 text-center">
              Your enquiry has been successfully registered.<br />
              Thanks!
            </p>
            <p>Our team will get in touch with you soon.</p>
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

export default EnquaryForm