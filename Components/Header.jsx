import { assets } from "@/Assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Image
            src={assets.logo}
            alt=""
            width={180}
            className="w-[130px] sm:w-auto"
          />
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]">
            Empezar <Image src={assets.arrow} />
          </button>
        </div>
        <div className="text-center my-8">
          <h1 className="text-3xl sn:text-5xl font-medium">Últimos blogs</h1>
          <p className="mt-10 max-w-[740] m-auto text-xs sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            laudantium architecto dolores at dolorem accusantium facilis.
            Assumenda laboriosam, consequuntur ex consectetur possimus quibusdam
            rem quia nam obcaecati ipsam porro dicta.
          </p>
          <form
            className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]"
            action=""
          >
            <input
              type="email"
              name=""
              id=""
              placeholder="Ingresa tu email"
              className="pl-4 outline-none"
            />
            <button
              type="submit"
              className="border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
