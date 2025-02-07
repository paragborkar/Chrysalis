import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { BorderBeam } from '@/components/ui/border-beam';

const Winners = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Duration of the animation
    });
  }, []);

  return (
    <div className="text-center p-5 mt-24" style={{ fontFamily: "Bodoni Moda" }} >
      {/* WINNERS Heading with Gradient */}
      <h1 className="text-8xl font-bold bg-clip-text text-transparent text-white mb-32">
        WINNERS
      </h1>

      {/* Tug of War */}
      <div className="my-5 flex flex-wrap justify-center items-center">
        <div className="m-2  items-center lg:flex-row lg:flex-wrap lg:space-x-5 justify-center">
          <h2 className="text-5xl font-bold bg-clip-text text-transparent text-white mt-5 mb-10 lg:mb-10">
            Tug of War
          </h2>
          <div className="flex flex-wrap justify-center gap-10">
            <img
              src="https://res.cloudinary.com/dcpugzrqm/image/upload/v1738837451/tugofwar_2_rittnc.jpg"
              alt="Tug of War"
              className="w-full md:w-72 lg:w-[40rem] h-[35rem]  object-cover mt-2 rounded-md"
              data-aos="fade-up" // Add fade-up effect
            />
            <img
              src="https://res.cloudinary.com/dcpugzrqm/image/upload/v1738837876/tugofwar_qp5zvg.jpg"
              alt="Tug of War"
              className="w-full md:w-72 lg:w-[40rem] h-auto object-cover mt-2 rounded-md"
              data-aos="fade-up" // Add fade-up effect
              data-aos-delay="200" // Optional: Add delay for staggered animation
            />
          </div>
        </div>
      </div>

      {/* Volleyball */}
      <div className="my-5 flex flex-wrap justify-center items-center]">
        <div className="m-2 flex flex-col items-center">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent text-white mt-20 mb-10" style={{ fontFamily: "Bodoni Moda" }} >
            Volleyball
          </h2>
          <img
            src="https://res.cloudinary.com/dcpugzrqm/image/upload/v1738838398/volleball_ttk4bb.jpg"
            alt="BGMI"
            className="w-full md:w-72 lg:w-[40rem] h-[30rem] object-cover mt-2 rounded-md"
            data-aos="fade-up" // Add fade-up effect
          />
        </div>
      </div>

      {/* Volleyball */}
      {/* <div className="my-5 flex flex-wrap justify-center items-center">
        <div className="m-2 flex flex-col items-center">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent text-white mt-20 mb-10">
            BGMI
          </h2>
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80"
            alt="Volleyball"
            className="w-full md:w-72 lg:w-[40rem] h-auto object-cover mt-2 rounded-md"
            data-aos="fade-up" // Add fade-up effect
          />
        </div>
      </div> */}
    </div>
  );
};

export default Winners;