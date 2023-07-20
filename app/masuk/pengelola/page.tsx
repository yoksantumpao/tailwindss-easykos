"use client";

import { useState } from "react";
import Link from "next/link";

// Mui
import { Button } from "@mui/material";
// Icons
import VisibilityIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOffOutlined";

// Framer Motion
import { motion } from "framer-motion";

function Page() {
  const [type, setType] = useState("password");
  const [focus, setFocus] = useState(false);

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
              src="/assets/auth/illustration_3.png"
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
          <form className="flex flex-col">
            <div className="text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] font-semibold">
              Masuk Sebagai Pengelola
            </div>
            <div className="mt-2 lg:w-[420px] mt-3">
              Masukkan Email dan Password Anda dengan Benar !
            </div>
            <input
              required
              id="email"
              placeholder="Email"
              type="email"
              className="bg-[#F2F5F8] p-4 rounded-md mt-10"
            />
            <div
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              className={`bg-[#F2F5F8] p-4 rounded-md outline-primary flex items-center ${
                focus ? "outline outline-2" : ""
              } mt-5`}
            >
              <input
                required
                type={type}
                id="password"
                placeholder="Password"
                className="bg-transparent outline-none flex-1"
              />
              <div className="cursor-pointer">
                {type === "password" ? (
                  <VisibilityOffIcon
                    onClick={() => setType("text")}
                    sx={{ color: "gray" }}
                  />
                ) : (
                  <VisibilityIcon
                    onClick={() => setType("password")}
                    sx={{ color: "gray" }}
                  />
                )}
              </div>
            </div>
            <div className="hover:underline cursor-pointer text-gray-500 italic font-light text-[0.95rem] flex justify-end mt-3">
              Lupa Password ?
            </div>
            <Button
              type="submit"
              sx={{ paddingBlock: "10px", textTransform: "capitalize" }}
              variant="contained"
              color="secondary"
              className="bg-button mt-5"
            >
              Masuk
            </Button>
            <div className="flex items-center space-x-1 justify-center mt-12">
              <div>Belum Punya Akun Easykos ?</div>
              <Link href="/daftar/pengelola" className="text-primary underline">
                Buat Akun
              </Link>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Page;
