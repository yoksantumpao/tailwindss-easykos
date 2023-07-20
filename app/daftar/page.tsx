"use client";

import Link from "next/link";
import { motion } from "framer-motion";

function Page() {
  return (
    <div className="flex flex-row min-h-screen">
      <div
        style={{ borderRadius: "0 15px 15px 0" }}
        className="hidden md:flex flex-col justify-center items-center bg-primary md:w-[40%] lg:w-[30%] p-12"
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col text-white"
        >
          <Link href="/">
            <div className="text-[2rem]">easykost.</div>
          </Link>
          <div className="mt-12">
            <img
              className="h-[12rem] object-contain"
              src="/assets/auth/illustration_1.png"
              alt=""
            />
          </div>
          <div className="mt-10 text-[1.5rem]">
            Pilihan Terbaik Dan Sesuaikan Kebutuhan Anda Sekarang
          </div>
        </motion.div>
      </div>
      <div className="flex flex-col md:justify-center md:w-[60%] lg:w-[70%] items-center p-5 md:p-12 lg:p-16">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div className="text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] font-semibold">
            Anda ingin mendaftar sebagai ?
          </div>
          <div className="mt-2 max-w-[90%]">
            Silahkan Daftar Sesuai Kebutuhan, Mengelola Atau Mencari Kos Pilihan
            Anda.
          </div>
          <Link href="/daftar/pengelola">
            <div className="rounded-md overflow-hidden flex flex-row items-center bg-white drop-shadow-md mt-5 lg:mt-12">
              <div className="p-5 md:p-10 lg:py-10 lg:px-16 bg-gray-100">
                <img
                  className="h-[2rem] md:h-[3rem]"
                  src="/assets/auth/home.png"
                  alt=""
                />
              </div>
              <div className="px-6 lg:px-12">Pengelola Kos</div>
            </div>
          </Link>
          <Link href="/daftar/pencari">
            <div className="rounded-md overflow-hidden flex flex-row items-center bg-white drop-shadow-md mt-5 lg:mt-8">
              <div className="p-5 md:p-10 lg:py-10 lg:px-16 bg-gray-100">
                <img
                  className="h-[2rem] md:h-[3rem]"
                  src="/assets/auth/map.png"
                  alt=""
                />
              </div>
              <div className="px-6 lg:px-12">Pencari Kos</div>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Page;
