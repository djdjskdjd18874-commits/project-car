import  { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Form from "../componats/Form";
import Cards from "../componats/Cards";
import {  Link } from "react-router-dom";







gsap.registerPlugin(ScrollTrigger);


export default function () {



  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(
      el,
      { y: 100, opacity: 0 },  
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",  
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);
  const sectionRef2 = useRef(null);

  useEffect(() => {
    const el = sectionRef2.current;

    gsap.fromTo(
      el,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",  
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);






  return (
    <>
      <Form />
     
    
      
      
    
      
     
      <br />







      <div
      
        ref={sectionRef}
        className="    dark:bg-black dark:text-white   bg-image        text-neutral-50 flex flex-col justify-center items-center h-screen text-center"
      >
        <h1 className="text-5xl">
          <span className="text-amber-400">Luxury Wheels</span> is always with you
        </h1>

        <h3 className="text-2xl mt-4">ENJOY OUR PREMIUM</h3>
        <h3 className="text-2xl mt-2">
          CAR RENTAL & LIMOUSINE SERVICES IN EGYPT
        </h3>

        <p className="mt-4 text-shadow-md">
          Are you looking for a reliable and professional high-end services?
        </p>
        <span className="mt-2">Look no further!</span>

        <div className="flex gap-3 mt-6">
          <Link
            to="/Car"
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600 transition">
            Book Now
          </Link>
          <button className="bg-white text-yellow-500 px-5 py-2 rounded-lg shadow hover:bg-gray-100 transition font-semibold">
            <a
              href="https://api.whatsapp.com/send/?phone=%2B201207777957&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us
            </a>
          </button>
        </div>
      </div>


      <Cards />


      <div
        ref={sectionRef2}
        className="md:flex  items-center justify-center gap-8 h-screen px-12"
      >
        {/* النصوص */}
        <div className="p-8 flex-1 max-w-xl">
          <h1 className=" dark:text-white text-4xl font-extrabold text-gray-800 text-center leading-snug">
          Luxury Wheels Rental
          </h1>

          <p className="dark:text-white mt-6 md:text-lg text-gray-600 text-center leading-relaxed">
            At Luxury Wheels Car Rental, we offer a wide range of cars and limousine services to businessmen
            through a fleet consisting of the latest models of modern luxury cars, and professional
            chauffeurs to ensure the quality of a unique experience and outstanding service.
          </p>

          <Link to="/ContactUs">
            <span className="inline-block mt-8 bg-yellow-500 text-white text-base font-semibold px-6 py-3 rounded-lg shadow hover:bg-yellow-600 transition">
              More About Us
            </span>
          </Link>
        </div>


        {/* الصورة */}
        <div className="flex-1 flex justify-center">
          <img
            src="./../public/photo/image1.png"
            alt="Card image"
            className="w-full h-auto max-w-md object-cover rounded-lg shadow-md"
          />
        </div>
      </div>



      

       <div
  className="relative flex flex-col justify-center items-center h-screen text-center text-neutral-50 bg-fixed bg-center bg-cover"
  style={{ backgroundImage: "url('./../public/photo/cover1.jpg')" }}
>
  <h1 className="text-amber-500 text-5xl font-bold mb-6 animate-bounce">About Us</h1>
  <p className="max-w-2xl text-lg leading-relaxed px-6">
    Luxury Wheels Rental Limousine Company for Tourist Transportation and Land Transportation….  
    A brilliant name in the world of renting cars, limousines, and transport vehicles of all kinds throughout the Arab Republic of Egypt.  
    Luxury Wheels Rental Limousine Company was established in 2006 with an old name until 2010, and the name and headquarters of the company were changed, as we once again set a new definition of luxury and service.  
    Luxury, crowned with the highest standards of service.
  </p>
  <div className="text-black flex flex-col opacity-70 bg-white/80 p-6 rounded-lg shadow-md max-w-md mx-auto">
  <label
    htmlFor="inputEmail4"
    className="text-sm font-semibold text-gray-900 mb-2"
  >
    Email
  </label>
  <input
    type="email"
    id="inputEmail4"
    className="px-3 py-2 bg-white/50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
    placeholder="Enter your email"
  />

  <button
    type="submit"
    className="mt-4 bg-amber-600 text-white px-4 py-2 rounded-md shadow hover:bg-amber-700 transition font-semibold"
  >
    Send
  </button>
</div>

</div>


     









    </>
  )
}
