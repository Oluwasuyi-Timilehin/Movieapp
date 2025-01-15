import React from 'react'
import { BsCollectionPlayFill } from "react-icons/bs";

const Favhero = () => {
  return (
    <>
      <section className="bg-primary rounded-b-2xl text-white py-20">
        <div className="flex gap-10 flex-col items-center container mx-auto px-4 lg:flex-row">
          <div className="flex flex-col space-y-5 w-full lg:w-1/2">
            <p className="text-3xl text-center leading-[35px] lg:text-5xl font-semibold lg:text-left">
              <span className="text-secondary">Upcoming</span> thrilling movies
              
            </p>
            <p className="text-lg text-center opacity-75 lg:text-xl lg:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              consequatur quisquam, rerum consectetur ratione vel unde illum ea
              eius quasi!
            </p>
          </div>

          <div className="w-24 h-24 mx-auto lg:w-1/2 lg:h-auto lg:flex lg:justify-center">
            <p className="text-8xl lg:text-[120px] opacity-50">
              <BsCollectionPlayFill />
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Favhero