import React, { useRef } from 'react'

const Plans = () => {
    const scrollRef = useRef(null);
     
  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -270, // Adjust the value for scrolling distance
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 270, // Adjust the value for scrolling distance
      behavior: 'smooth',
    });
  };

    const packages = [
        { id: 1, name: "Wedding Celebrations", products: ['Invitation cards', 'Venue Booking', 'Venue Decoration', 'Catering service', 'Entertainment', 'Photography services'] },
        { id: 2, name: "Birthday Party", products: ['Invitation Cards', 'Cake', 'Decoration', 'Catering Services', 'Entertainment', 'Photography services'] },
        { id: 3, name: "Anniversary Celebrations", products: ['Invitation cards', 'Venue Booking', 'Venue Decoration', 'Catering service', 'Entertainment', 'Photography services'] },
        { id: 4, name: "House party", products: ['Invitation Cards', 'Decoration', 'Catering Services', 'Entertainment', 'Photography services'] },
        { id: 5, name: "Corporate Party", products: ['Invitation Cards', 'Hall booking', 'Decoration', 'Catering Services', 'Entertainment', 'Photography services'] },

    ];
    return (
        <div className=" px-4 py-10">
            <h1 className=' text-amber-700 font-bold text-3xl text-center font-display py-4'>Our Complete Event Plans</h1>

            <div className="content flex items-center">
                <div className="left">
                    <i className="bi bi-arrow-left arrow" onClick={scrollLeft}></i>

                </div>
                <div className="flex flex-nowrap hide-scrollbar overflow-y-hidden " ref={scrollRef}>
                {
                    packages.map((plan, index) => {
                        console.log(plan.products.map((item) => console.log(item)));
                        return (
                            <div className="bg-white rounded-lg shadow-md  m-4 outline-amber-600 outline flex flex-col justify-between sm:min-w-72 min-w-[calc(100vw-11rem)]">
                                <div className='bg-gray-100 p-4 rounded-lg'>
                                <h2 className="text-lg font-bold text-amber-700  text-center">{plan.name}</h2>
                                </div>
                                <div className='py-4'>
                                {
                                    plan.products.map((item) => {
                                        return (
                                            <p className='text-base py-0.5 text-center text-gray-500'>{item}</p>
                                        )
                                    })
                                }
                                </div>
                                <div className='p-4 self-center'>
                                <button className="bg-amber-700 hover:bg-amber-800 text-white font-bold rounded-xl px-4 py-1">Customize Now</button>
                                </div>
                            </div>
                        );
                    })
                }

                </div>
                <div className="right">
                    <i className="bi bi-arrow-right arrow" onClick={scrollRight}></i>
                </div>

            </div>
        </div>
    )
}

export default Plans