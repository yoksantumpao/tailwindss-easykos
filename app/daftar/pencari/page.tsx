"use client";

import { useState } from "react";
import Link from "next/link";

// Mui
import { Button, InputAdornment, TextField } from "@mui/material";
// Icons
import VisibilityIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOffOutlined";

// Framer Motion
import { motion } from "framer-motion";

function Page() {
  const [type, setType] = useState("password");
  const [type2, setType2] = useState("password");

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
              src="/assets/auth/illustration_2.png"
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
          <form className="flex flex-col space-y-6">
            <div className="text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] font-semibold">
              Buat Akun Easykos
            </div>
            <div className="mt-2 lg:w-[420px]">
              Lengkapi Informasi Data Anda Dengan Benar !
            </div>
            <TextField required type="text" label="Nama Lengkap" />
            <TextField required type="number" label="No. Telepon" />
            <TextField required type="email" label="Email" />
            <TextField
              required
              type={type}
              label="Password"
              InputProps={{
                endAdornment: (
                  <InputAdornment className="cursor-pointer" position="end">
                    {type === "password" ? (
                      <VisibilityOffIcon onClick={() => setType("text")} />
                    ) : (
                      <VisibilityIcon onClick={() => setType("password")} />
                    )}
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              required
              type={type2}
              label="Konfirmasi Password"
              InputProps={{
                endAdornment: (
                  <InputAdornment className="cursor-pointer" position="end">
                    {type2 === "password" ? (
                      <VisibilityOffIcon onClick={() => setType2("text")} />
                    ) : (
                      <VisibilityIcon onClick={() => setType2("password")} />
                    )}
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              sx={{ paddingBlock: "10px", textTransform: "capitalize" }}
              variant="contained"
              color="secondary"
              className="bg-button"
            >
              Buat Akun
            </Button>
            <div className="flex items-center space-x-1 justify-center">
              <div>Sudah Punya Akun Easykos ?</div>
              <Link href="/masuk/pencari" className="text-primary underline">
                Masuk
              </Link>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Page;
