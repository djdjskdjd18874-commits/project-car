import React from 'react'

export default function ContactUs() {
  return (
    <>
      <div className="  h-64 flex items-center justify-center bg-gradient-to-r from-yellow-600 via-yellow-700 to-gray-600">
        <h1 className="text-6xl font-extrabold text-white text-center">
          About Us
        </h1>
      </div>

      <br />
      <br />
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-12 p-4 md:p-8">
  {/* النصوص */}
  <div className="flex-1 w-full md:max-w-xl">
    <h1 className="text-center md:text-left text-3xl md:text-5xl font-bold text-yellow-500 mb-4">
      We
    </h1>
    <p className="dark:text-white text-center md:text-left text-sm md:text-lg text-gray-600 leading-relaxed px-2 md:px-20">
      Luxury Wheels Limousine Company for tourist and land transportation…  
      A shining name in the world of car rentals, limousines, and all types of transport vehicles across the Arab Republic of Egypt.  
      Luxury Wheels Limousine was established in 2006 under a former name until 2010, when the company’s name and headquarters were changed, redefining luxury and service once again.  
      Luxury crowned with the highest standards.{" "}
      <a
        className="text-yellow-600 font-semibold underline hover:text-yellow-700 transition"
        href="https://api.whatsapp.com/send/?phone=%2B201207777957&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contact us on WhatsApp
      </a>
    </p>
  </div>

  {/* الصورة */}
  <div className="flex-1 w-full flex justify-center mt-6 md:mt-0">
    <img
      src="./../public/photo/image1.png"
      alt="Card image"
      className="w-full h-auto max-w-xs md:max-w-md object-cover rounded-lg shadow-md"
    />
  </div>
</div>


      



    </>
  )
}

