import React from 'react'

const Login = () => {
  return (
    <div>
            <h1 class="text-2xl font-bold text-center mb-6 text-amber-600">Login to save your journey</h1>
            <form class="space-y-4">
                <div>
                    <label for="name" class="block mb-2 text-sm font-medium text-amber-500">Name</label>
                    <input type="text" id="name" class="w-full px-3 py-2 bg-dark-300 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 " required placeholder='What`s your name...' />
                </div>
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-amber-500">Email</label>
                    <input type="email" id="email" class="w-full px-3 py-2 bg-dark-300 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" required placeholder='your email...' />
                </div>
                <div>
                    <label for="phone" class="block mb-2 text-sm font-medium text-amber-500">Phone</label>
                    <input type="tel" id="phone" class="w-full px-3 py-2 bg-dark-300 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" required placeholder='your phone...' />
                </div>
                <div>
                    <label for="password" class="block mb-2 text-sm font-medium text-amber-500">Password</label>
                    <input type="password" id="password" class="w-full px-3 py-2 bg-dark-300 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" required placeholder='Enter a strong password...' />
                </div>
                <button type="submit" class="w-full py-2 px-4 bg-amber-600 hover:bg-amber-700 rounded-md text-white font-medium transition duration-300">Sign Up</button>
            </form>
        </div>
  )
}

export default Login    