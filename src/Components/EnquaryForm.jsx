import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'

const EnquaryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: ''
  })
  const formRef = useRef({});


  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
    console.log(name, value);

  }
  const dataSubmit = async (e) => {
    e.preventDefault()
    const userData = {
      name: formRef.current.name.value,
      email: formRef.current.email.value,
      phone: formRef.current.phone.value,
      eventType: formRef.current.eventType.value
    }
    console.log(userData);

    // send form data to backend
    // try {
    //   const response = await axios.post('http://localhost:3000/enquiries', userData);
    //   // console.log(response);
    //   if (response.ok) {
    //     console.log('data sent')
    //   }
    // } catch (error) {
    //   console.log("error msg:", error);
    // }
  }
   return (
      <div className='text-amber-900 px-8 py-8 '>
        <form onSubmit={dataSubmit} className="flex gap-4 justify-between px-8 flex-wrap items-center">
          <div className='flex items-center flex-wrap justify-center'>

            <input type="text" name="name" id="user_name" placeholder='Name' ref={(el) => { formRef.current.name = el }} required className='input placeholder-amber-700 border-r-2' />
            <input type="email" name="email" id="user_email" placeholder='Email' ref={(el) => { formRef.current.email = el }} required className='input placeholder-amber-700' />
            <input type="text" name="phone" id="user_phone" placeholder='Phone' ref={(el) => { formRef.current.phone = el }} required className='input placeholder-amber-700' />
            <select name="eventType" id="" required className='input placeholder-amber-700' ref={(el) => { formRef.current.eventType = el }} >
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
          <input type="submit" value="Enquary Now"
            className=' bg-amber-700 hover:bg-amber-800 text-white font-bold px-8 py-4 rounded-xl justify-self-center' />
        </form>
      </div>
    )
  }

  export default EnquaryForm