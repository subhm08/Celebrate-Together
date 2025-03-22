import React from 'react'

const Services = () => {
  const serviceList = [
    { id: 1, name: 'Invitation Cards', description: 'Get any ammount of impressive invitation cards for your event .' },
    { id: 2, name: 'Decorations', description: 'We provide a high-quality of indoor and outdoor decorations for your special day.' },
    { id: 3, name: 'Photography', description: 'capture the best moments of your event with our professional photographers.' },
    { id: 4, name: 'Venue Selection', description: 'we offer a wide range of venues for your event according to your choice.' },
    { id: 5, name: 'Catering Services', description: 'we provide a variety of delicious food options for your guests.' },
    { id: 6, name: 'Entertainment', description: ' we provide a variety of entertainment options for your guests that make your event memorable.' },
  ];
  return (
    <div className='bg-gray-50 px-4 py-12 my-4'>
      <div className='p-4'>
        <h1 className='font-display text-3xl text-center font-bold text-amber-800'>What We Offer</h1>
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-1">
        {
          serviceList.map((service, index) => {
            return(
              <div className="bg-white rounded-lg shadow-md p-4 m-4">
                <h2 className="text-lg font-bold text-amber-700 p-2">{service.name}</h2>
                <p className='text-gray-400 text-base '>{service.description}</p>
              </div>
            )
          })
        }
      </div>

         
    </div>
  )
}

export default Services