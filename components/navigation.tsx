"use client";

import { Button, IconButton } from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function Navigation() {
  const [menu, setMenu] = useState(false);
  const [floating, setFloating] = useState(false);
  const router = useRouter();

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setFloating(true);
    } else {
      setFloating(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Normal Navigation  */}
      <div id="home" className="border-b p-5 flex items-center justify-between">
        <img
          onClick={() => {
            window.scrollTo(0, 0);
            router.push("/");
          }}
          className="cursor-pointer h-[2rem] md:h-[2rem]"
          src="/assets/logo.png"
          alt=""
        />
        <div className="hidden lg:flex items-center space-x-5">
          {menuList.map((x) => {
            return (
              <Button
                key={x.label}
                href={x.href}
                variant="text"
                sx={{ textTransform: "capitalize", color: "black" }}
              >
                {x.label}
              </Button>
            );
          })}
          <IconButton>
            <img
              className="h-[1.5rem]"
              src="/assets/section_1/search.png"
              alt=""
            />
          </IconButton>
        </div>
        <div className="hidden lg:flex items-center space-x-5">
          <Link href="/masuk/pengelola">
            <Button sx={{ textTransform: "capitalize", color: "black" }}>
              Masuk
            </Button>
          </Link>
          <Link href="/daftar">
            <Button
              sx={{
                textTransform: "capitalize",
                borderRadius: 50,
                paddingInline: "20px",
              }}
              className="bg-primary"
              variant="contained"
            >
              Daftar
            </Button>
          </Link>
        </div>
        <div className="lg:hidden">
          <IconButton onClick={() => setMenu(!menu)}>
            <MenuIcon />
          </IconButton>
        </div>
      </div>
      {/* Normal Navigation End  */}

      {/* Floating Navigation  */}
      <div
        className={`${
          floating ? "translate-y-0" : "translate-y-[-100%]"
        } fixed left-0 top-0 w-full transition-all z-[99] bg-white drop-shadow-md border-b p-5 flex items-center justify-between`}
      >
        <img
          onClick={() => window.scrollTo(0, 0)}
          className="cursor-pointer h-[2rem] md:h-[2.5rem]"
          src="/assets/logo.png"
          alt=""
        />
        <div className="hidden lg:flex items-center space-x-5">
          {menuList.map((x) => {
            return (
              <Button
                key={x.label}
                href={x.href}
                variant="text"
                sx={{ textTransform: "capitalize", color: "black" }}
              >
                {x.label}
              </Button>
            );
          })}
          <IconButton>
            <img
              className="h-[1.5rem]"
              src="/assets/section_1/search.png"
              alt=""
            />
          </IconButton>
        </div>
        <div className="hidden lg:flex items-center space-x-5">
          <Link href="/masuk/pengelola">
            <Button sx={{ textTransform: "capitalize", color: "black" }}>
              Masuk
            </Button>
          </Link>
          <Link href="/daftar">
            <Button
              sx={{
                textTransform: "capitalize",
                borderRadius: 50,
                paddingInline: "20px",
              }}
              className="bg-primary"
              variant="contained"
            >
              Daftar
            </Button>
          </Link>
        </div>
        <div className="lg:hidden">
          <IconButton onClick={() => setMenu(!menu)}>
            <MenuIcon />
          </IconButton>
        </div>
      </div>
      {/* Floating Navigation End  */}

      {/* Mobile Navigation  */}
      <div
        className={`${
          menu ? "translate-x-0" : "translate-x-[-100%]"
        } transition-all p-5 fixed left-0 top-0 h-screen bg-white drop-shadow-md z-[99]`}
      >
        <div className="flex items-center space-x-5">
          <Link href="/" onClick={() => setMenu(false)}>
            <img className="h-[2rem]" src="/assets/logo.png" alt="" />
          </Link>
          <IconButton onClick={() => setMenu(false)}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className="flex flex-col space-y-8 mt-8">
          {menuList.map((x) => {
            return (
              <a key={x.href} onClick={() => setMenu(false)} href={x.href}>
                {x.label}
              </a>
            );
          })}
          <Link href="/masuk/pengelola">
            <Button
              variant="outlined"
              fullWidth={true}
              sx={{ textTransform: "capitalize", color: "black" }}
            >
              Masuk
            </Button>
          </Link>
          <Link href="/daftar">
            <Button
              fullWidth={true}
              sx={{
                textTransform: "capitalize",
                paddingInline: "20px",
              }}
              className="bg-primary"
              variant="contained"
            >
              Daftar
            </Button>
          </Link>
        </div>
      </div>
      {/* Mobile Navigation End  */}
    </>
  );
}

const menuList = [
  {
    label: "Home",
    href: "/#home",
  },
  
  {
    label: "Cari Kos",
    href: "/#kos",
  },
  {
    label: "Fitur Kelola",
    href: "/#fitur",
  },
  {
    label: "Pilih Paket",
    href: "/#paket",
  },
  {
    label: "Tentang Layanan",
    href: "/#layanan",
  },
];

export default Navigation;
