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
import { useRouter } from "next/navigation";
import DropdownOption from "@/components/dropdown_option";

function Page() {
  const [type, setType] = useState("password");
  const [focus, setFocus] = useState(false);
  const router = useRouter();

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
              Buat Akun Pengelola Easykos
            </div>
            <div className="mt-2 lg:w-[420px]">
              Lengkapi Informasi Data Anda Dengan Benar !
            </div>
            <input
              required
              id="namaPengelola"
              placeholder="Nama Pengelola"
              className="bg-[#F2F5F8] p-4 rounded-md"
            />
            <input
              required
              id="jenisKelamin"
              placeholder="Jenis Kelamin"
              className="bg-[#F2F5F8] p-4 rounded-md"
            />
            <input
              required
              id="email"
              placeholder="Email"
              type="email"
              className="bg-[#F2F5F8] p-4 rounded-md"
            />
            <div
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              className={`bg-[#F2F5F8] p-4 rounded-md outline-primary flex ${
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
            <DropdownOption
              changeValueHandler={() => {}}
              id="peranAnda"
              label="Peran Anda"
              value={["Pegawai", "Pengelola/Pemilik", "Karyawan"]}
            />
            <Button
              onClick={() => router.push("/daftar/pengelola/informasi")}
              sx={{ paddingBlock: "10px", textTransform: "capitalize" }}
              variant="contained"
              color="secondary"
              className="bg-button"
            >
              Buat Akun
            </Button>
            <div className="flex items-center space-x-1 justify-center">
              <div>Sudah Punya Akun Easykos ?</div>
              <Link href="/masuk/pengelola" className="text-primary underline">
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
