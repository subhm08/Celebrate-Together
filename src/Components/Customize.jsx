import React, { useState } from 'react'

const Customize = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const handleOptionChange = (e) =>{
    setSelectedOption(e.target.value)
    console.log("selected option:", selectedOption);
  }
  return (
    <div>
    <div class="bg-dark-100 min-h-screen flex items-center justify-center p-4">
        <div class="w-full max-w-3xl">
            <h1 class="text-3xl font-bold mb-8 text-center text-amber-800">Customize your plan</h1>
            <form class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label for="name" class="block mb-2 text-amber-600">Name</label>
                        <input type="text" id="name" class="w-full bg-dark-200 border border-amber-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder='Your name...'/>
                    </div>
                    <div>
                        <label for="event" class="block mb-2 text-amber-600">Event</label>
                        <select id="event" class="w-full bg-dark-200 border border-amber-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-500 appearance-none">
                            <option value="" >Select an event...</option>
                            <option value="wedding">Wedding</option>
                            <option value="birthday">Birthday</option>
                            <option value="corporate">Corporate Event</option>
                        </select>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label for="email" class="block mb-2 text-amber-600 ">Email</label>
                        <input type="email" id="email" class="w-full bg-dark-200 border border-amber-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder='Your Email address...'/>
                    </div>
                    <div>
                        <label for="phone" class="block mb-2 text-amber-600">Phone</label>
                        <input type="tel" id="phone" class="w-full bg-dark-200 border border-amber-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder='Phone number...'/>
                    </div>
                </div>
                <div>
                    <label for="location" class="block mb-2 text-amber-600">Location</label>
                    <input type="text" id="location" class="w-full bg-dark-200 border border-amber-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder='your location for event...'/>
                </div>
                <div>
                    <p class="mb-2 text-amber-600">Select services</p>
                    <div class="flex flex-wrap gap-4">
                        <label class="flex items-center space-x-2 cursor-pointer text-amber-600">
                            <input type="checkbox" class="form-checkbox text-amber-500 bg-white border-dark-300 rounded"/>
                            <span>Card design</span>
                        </label>
                        <label class="flex items-center space-x-2 cursor-pointer text-amber-600">
                            <input type="checkbox" class="form-checkbox text-amber-500 bg-white border-dark-300 rounded"/>
                            <span>Catering Services</span>
                        </label>
                        <label class="flex items-center space-x-2 cursor-pointer text-amber-600">
                            <input type="checkbox" value="Decoration" 
            onChange={handleOptionChange} class="form-checkbox text-amber-500 bg-white border-dark-300 rounded"/>
                            <span>Decoration</span>
                        </label>
                        <label class="flex items-center space-x-2 cursor-pointer text-amber-600">
                            <input type="checkbox" class="form-checkbox text-amber-500 bg-white border-dark-300 rounded"/>
                            <span>Entertainment</span>
                        </label>
                        <label class="flex items-center space-x-2 cursor-pointer text-amber-600">
                            <input type="checkbox" class="form-checkbox text-amber-500 bg-white border-dark-300 rounded"/>
                            <span>Photography</span>
                        </label>
                    </div>
                </div>
                <div class="flex justify-center">
                    <button type="submit" class="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-md transition duration-300">Proceed</button>
                </div>
            </form>
        </div>
    
        <script>
            // Add custom dropdown arrow
            const selectElement = document.getElementById('event');
            selectElement.style.backgroundImage = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23ffffff'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E\")";
            selectElement.style.backgroundRepeat = 'no-repeat';
            selectElement.style.backgroundPosition = 'right 0.5rem center';
            selectElement.style.backgroundSize = '1.5em 1.5em';
            selectElement.style.paddingRight = '2.5rem';
        </script>
    </div></div>
  )
}

export default Customize