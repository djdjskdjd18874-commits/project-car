import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Cards() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    gsap.fromTo(
      el,
      { y: 100, opacity: 0 },   // يبدأ من تحت مع شفافية
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",   // يبدأ لما يوصل العنصر 80% من الشاشة
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);
  return (
    <>

      <div
        ref={sectionRef}
        className="  md:flex justify-center p-6 gap-6">
        <div className=" bg-white rounded-lg shadow-md w-72 overflow-hidden">
          <img
            src="./../public/photo/card1.jpg"
            alt="Card image"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h5 className="text-xl font-semibold text-gray-800">Airport limousine</h5>
           {/* نسخة مختصرة للموبايل */}
<p className="text-gray-600 mt-2 text-sm block md:hidden">
  We provide airport delivery service across Egypt at special prices. 24/7 at your convenience.
</p>

{/* النسخة الكاملة للشاشات الكبيرة */}
<p className="text-gray-600 mt-2 text-base hidden md:block">
  We provide a delivery service to the airport, no matter what airport you are traveling through “Cairo Airport, Burj Al Arab Airport, Sharm El Sheikh Airport or even Aswan Airport.” We are with you 24 hours in a delivery service to and from the airport from # Luxury Wheels_Group at very special prices.. Wind Yourself and contact us, and we will deliver you from home to any airport in Egypt, on the day and time that you specify to go or return.
</p>

            <a
              href="#"
              className="inline-block mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600 transition "
            >
              Book
            </a>
          </div>
        </div>

        {/* الكارد الثاني */}
        <div className=" bg-white rounded-lg shadow-md w-72 overflow-hidden">
          <img
            src="./../public/photo/card2.jpg"
            alt="Card image"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h5 className="text-xl font-semibold text-gray-800">Installment rent</h5>
            <p className="text-gray-600 mt-2">
              Luxury Wheels  helps you to rent cars in installments from.
            </p>
            <a
              href="#"
              className="inline-block mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600 transition "
            >
              Book
            </a>
          </div>
        </div>

        {/* الكارد الثالث */}
        <div className=" bg-white rounded-lg shadow-md w-72 overflow-hidden">
          <img
            src="./../public/photo/card3.jpg"
            alt="Card image"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h5 className="text-xl font-semibold text-gray-800">Wedding cars</h5><p className="text-gray-600 mt-2 text-sm block md:hidden">
   Luxury Wheels Rental | Luxury Wheels Rent helps you start your wedding in a different and distinctive way from others.
</p>
            <p className="text-gray-600 mt-2 text-base hidden md:block">
              Luxury Wheels Rental | Luxury Wheels Rent helps you start your wedding in a different and distinctive way from others, with the latest models of cars for rent such as Porsche Cabriolet, BMW Cabriolet, and 12-meter stretch cars for wedding and party rental.
            </p>
            <a
              href="#"
              className="inline-block mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600 transition "
            >
              Book
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
