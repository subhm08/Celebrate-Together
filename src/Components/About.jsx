import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-50 text-gray-800 py-12 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">About Us</h1>
        <p className="text-lg mb-10 leading-relaxed">
          Welcome to <span className="font-semibold">[Company Name]</span>, your one-stop destination for turning dreams into reality! We are a full-service event planning company specializing in crafting unforgettable moments. Whether you're planning a wedding, corporate event, birthday party, or any special occasion, we are here to make it extraordinary.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold text-blue-600 mb-3">Custom Card Designing</h3>
          <p className="text-gray-600">Make a lasting first impression with beautifully designed invitations and greeting cards tailored to your theme.</p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold text-blue-600 mb-3">Hall Decoration</h3>
          <p className="text-gray-600">Transform any venue into a stunning setting with our expert decoration services. From floral arrangements to lighting and stage setups, we create awe-inspiring designs.</p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold text-blue-600 mb-3">Catering Services</h3>
          <p className="text-gray-600">Delight your guests with exquisite menus curated to match your preferences. Our chefs prepare dishes that not only look spectacular but taste incredible too.</p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold text-blue-600 mb-3">Videography Services</h3>
          <p className="text-gray-600">Relive your cherished moments through our professional videography. We capture every smile, laugh, and tear, preserving memories that last a lifetime.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Why Choose Us?</h2>
        <ul className="text-lg text-gray-600 space-y-4">
          <li><strong>Experienced Team:</strong> Our dedicated staff has years of experience delivering successful events.</li>
          <li><strong>Personalized Approach:</strong> We take the time to understand your needs and preferences, ensuring your event reflects your style.</li>
          <li><strong>All-in-One Service:</strong> From planning to execution, we handle it all, so you can relax and enjoy the celebration.</li>
          <li><strong>Affordable Packages:</strong> Quality service doesn’t have to break the bank. We offer flexible packages to fit your budget.</li>
        </ul>
        <p className="mt-8 text-lg font-semibold text-gray-700">Let us help you create memories that will be cherished forever. <span className="text-blue-600">Contact us today</span> to start planning your dream event!</p>
      </div>
    </div>
  );
};

export default AboutUs;

