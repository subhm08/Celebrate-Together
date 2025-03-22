import React from 'react'
import EnquaryForm from './EnquaryForm'
const Videography = () => {
  return (
    <div className='bg-gradient-to-r from-blue-50 to-blue-200'>
        <section class="mdp-16 p-10">
  <h1 class="text-4xl font-extrabold text-center text-blue-800 mb-8">
    Capturing Moments, Creating Memories – <span class="text-blue-600">[Your Business Name]</span>
  </h1>
  <p class="text-xl text-center text-gray-700 mb-6">
    At <span class="font-semibold">[Your Business Name]</span>, we bring your stories to life through stunning visuals and cinematic videography.
  </p>

  <p class="text-lg text-center text-gray-600 mb-10">
    Whether it's a wedding, corporate event, birthday, or promotional shoot, we ensure every detail is beautifully captured, turning your moments into timeless treasures.
  </p>

  <h2 class="text-2xl font-semibold text-center mb-6">What We Offer:</h2>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* <!-- Wedding Films --> */}
    <div class="p-6 bg-white shadow-md rounded-lg">
      <span class="text-3xl text-blue-600 mb-4 inline-block">🎥</span>
      <h2 class="text-xl font-bold text-blue-700 mb-4">Wedding Films</h2>
      <p class="text-gray-600">
        Cinematic wedding videos that preserve your love story and emotions in breathtaking detail.
      </p>
    </div>

    {/* <!-- Event Highlights --> */}
    <div class="p-6 bg-white shadow-md rounded-lg">
      <span class="text-3xl text-blue-600 mb-4 inline-block">🌟</span>
      <h2 class="text-xl font-bold text-blue-700 mb-4">Event Highlights</h2>
      <p class="text-gray-600">
        Short, impactful highlight reels perfect for sharing on social media or reliving key moments.
      </p>
    </div>

    {/* <!-- Corporate Videos --> */}
    <div class="p-6 bg-white shadow-md rounded-lg">
      <span class="text-3xl text-blue-600 mb-4 inline-block">🏢</span>
      <h2 class="text-xl font-bold text-blue-700 mb-4">Corporate Videos</h2>
      <p class="text-gray-600">
        Professional videography for business events, product launches, and promotional content.
      </p>
    </div>

    {/* <!-- Drone Shoots --> */}
    <div class="p-6 bg-white shadow-md rounded-lg">
      <span class="text-3xl text-blue-600 mb-4 inline-block">🚁</span>
      <h2 class="text-xl font-bold text-blue-700 mb-4">Aerial & Drone Footage</h2>
      <p class="text-gray-600">
        Stunning aerial shots that add cinematic appeal to your videos and showcase breathtaking views.
      </p>
    </div>

    {/* <!-- Storytelling Videos --> */}
    <div class="p-6 bg-white shadow-md rounded-lg">
      <span class="text-3xl text-blue-600 mb-4 inline-block">📖</span>
      <h2 class="text-xl font-bold text-blue-700 mb-4">Storytelling Edits</h2>
      <p class="text-gray-600">
        Artistic and narrative-driven edits that tell your story in an emotional and captivating way.
      </p>
    </div>

    {/* <!-- Social Media Clips --> */}
    <div class="p-6 bg-white shadow-md rounded-lg">
      <span class="text-3xl text-blue-600 mb-4 inline-block">📱</span>
      <h2 class="text-xl font-bold text-blue-700 mb-4">Social Media Clips</h2>
      <p class="text-gray-600">
        Short, engaging video content optimized for platforms like Instagram, Facebook, and TikTok.
      </p>
    </div>
  </div>

  <p class="text-lg text-center mt-8">
    Let us capture your most cherished moments with creativity and precision.
  </p>

  <p class="text-lg text-center mt-4">
    Contact us today to create videos that inspire, captivate, and preserve memories forever!
  </p>
</section>
    <EnquaryForm/>
    </div>
  )
}

export default Videography