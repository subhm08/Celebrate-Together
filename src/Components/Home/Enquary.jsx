import React from 'react'
// import EnquaryForm from './EnquaryForm';
import EnquaryForm from '../EnquaryForm';
const Enquary = () => {
  const steps = [
    { id: 1, name: "Step 1", description: "Book your enquiry with us."},
    { id: 2, name: "Step 2", description: "Connect to our professional event planners"},
    { id: 3, name: "Step 3", description: "Plan your event with us"},
    { id: 4, name: 'Step 4', description: "Customize your event according to ypur need."},
    { id: 5, name: "Step 5", description: "Let us help to turn your planned event into a memorable one"},
    { id: 6, name: "Step 6", description: "Enjoy your memorable event"},
  ];
  return (
    <div className='bg-gray-200 px-4 py-10'>
      <h1 className='text-amber-700 text-3xl font-bold'>Planning  and Organizing <br/>an unforgetable event</h1>
      <div className='flex justify-between flex-wrap'>
      <p className=' py-4 text-base text-gray-500'>We are here to provide you quality event planning and solution for your special day.<br/>
      We rely on our expertise and experience to ensure that your event become a memorable one.</p>
      {/* <div>
        <button className='bg-amber-700 hover:bg-amber-800 text-white font-bold px-4 py-2 rounded-xl' >Enquary Now</button>
      </div> */}
      
        </div>
        <div>
      <EnquaryForm/>
      </div>
      <div className='grid sm:grid-cols-3 grid-cols-2 gap-4 my-4 bg-white'>
        {
          steps.map((step, index) => {
            return (
              <div key={step.id} className="bg- p-4">
                <h2 className="text-lg font-bold text-amber-600 text-center">{step.name}</h2>
                <p className="text-base text-center font-bold text-gray-600">{step.description}</p>
              </div>
              );
        })
        }
      
      </div>
    </div>
    
  )
}

export default Enquary