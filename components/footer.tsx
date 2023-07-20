import React from "react";

function Footer() {
  return (
    <div className="bg-black text-white p-5 lg:p-16 flex flex-col space-y-5 lg:space-y-0 lg:flex-row justify-between">
      <div>
        <div className="font-semibold text-[1.25rem]">EasyKos</div>
        <div className="mt-2 flex flex-col space-y-3 font-light">
          <div>Manado, Indonesia</div>
          <a
            className="hover:underline"
            target="_blank"
            href="https://www.easykos.com"
          >
            www.easykos.com
          </a>
        </div>
      </div>
      <div>
        <div className="font-semibold text-[1.25rem]">Rekomendasi</div>
        <div className="mt-2 flex flex-col space-y-3 font-light">
          {rekomandasiList.map((x) => {
            return (
              <a
                href={x.href}
                key={x.label}
                className="cursor-pointer hover:underline"
              >
                {x.label}
              </a>
            );
          })}
        </div>
      </div>
      <div>
        <div className="font-semibold text-[1.25rem]">Kategori</div>
        <div className="mt-2 flex flex-col space-y-3 font-light">
          {kategoriList.map((x) => {
            return (
              <div key={x.label} className="cursor-pointer hover:underline">
                {x.label}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="font-semibold text-[1.25rem]">Tentang Kami</div>
        <div className="mt-2 flex flex-col space-y-3 font-light">
          {tentangkami.map((x) => {
            return (
              <div key={x.label} className="cursor-pointer hover:underline">
                {x.label}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="font-semibold text-[1.25rem]">Legal</div>
        <div className="mt-2 flex flex-col space-y-3 font-light">
          {legal.map((x) => {
            return (
              <div key={x.label} className="cursor-pointer hover:underline">
                {x.label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const rekomandasiList = [
  {
    label: "Fitur",
    href: "#fitur",
  },
  {
    label: "Kos Murah",
    href: "#kos",
  },
  {
    label: "Rekomendasi Harga",
    href: "#harga",
  },
  {
    label: "Cari Kos Terdekat",
    href: "#cari",
  },
];

const kategoriList = [
  {
    label: "Temukan Kos",
    href: "#",
  },
  {
    label: "Bisnis Kos",
    href: "#",
  },
  {
    label: "Operasional Rumah Kos",
    href: "#",
  },
];

const tentangkami = [
  {
    label: "Blog",
    href: "#",
  },
  {
    label: "Kontak Person",
    href: "#",
  },
];

const legal = [
  {
    label: "Privacy",
    href: "#",
  },
  {
    label: "Terms",
    href: "#",
  },
  {
    label: "Cookie Policy",
    href: "#",
  },
];

export default Footer;
