"use client";

import Footer from "@/components/footer";
import KosCard from "@/components/kos_card";
import KosFitur from "@/components/kos_fitur";
import KosPaket from "@/components/kos_paket";
import Navigation from "@/components/navigation";
import { fitur, kos, paket } from "@/utils/kos_type";
import { Button } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/East";
import Link from "next/link";

import { motion } from "framer-motion";
import FadeWrapper from "@/utils/fade_wrapper";

function Page() {
  const container = {
    hidden: {
      x: 0,
      y: 100,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <>
      <Navigation />
      {/* Section 1  */}
      <div className="flex flex-col lg:flex-row items-center md:justify-between max-w-7xl mx-auto p-5 md:py-12 lg:py-24">
        {/* Left Part  */}
        <div className="w-full lg:w-[45%]">
          <FadeWrapper x={-100} y={0}>
            <div className="text-[1.5rem] md:text-[2.5rem] font-bold">
              Aplikasi Manajemen Bisnis Rumah Kos, Dari Manapun Anda Berada!
            </div>
            <div className="font-medium text-gray-500 text-[1rem] md:text-[1.1rem] mt-3">
              Nikmati kemudahan mengelola rumah kos, serta maksimalkan
              keuntungan anda. Kelola dan jelajahi rumah kos impian anda
              sekarang!
            </div>
            <div className="mt-8 flex flex-col space-y-5 md:space-y-0 md:flex-row md:space-x-5">
              <Button
                href="#fitur"
                variant="contained"
                className="bg-primary"
                sx={{
                  borderRadius: 50,
                  paddingInline: "2.75rem",
                  paddingBlock: "0.75rem",
                  textTransform: "capitalize",
                }}
              >
                Kelola Kos
              </Button>
              <Button
                href="#kos"
                startIcon={
                  <img
                    className="h-[0.9rem]"
                    src="/assets/section_1/search.png"
                  />
                }
                variant="outlined"
                sx={{
                  borderColor: "gainsboro",
                  color: "gray",
                  fontWeight: "500",
                  paddingInline: "2.75rem",
                  paddingBlock: "0.75rem",
                  borderRadius: 50,
                  textTransform: "capitalize",
                }}
              >
                Cari Kos
              </Button>
            </div>
          </FadeWrapper>
        </div>
        {/* Right Part  */}
        <div className="hidden lg:block w-full lg:w-[40%]">
          <FadeWrapper x={100} y={0}>
            <img
              style={{
                borderRadius: "20px 110px 20px 20px",
              }}
              src="/assets/section_1/illustration.png"
              alt=""
              className="h-[25rem] object-cover"
            />
          </FadeWrapper>
        </div>
        <div className="lg:hidden mt-8 lg:mt-0 w-full">
          <img
            className="w-full rounded-md"
            src="/assets/section_1/illustration.png"
            alt=""
          />
        </div>
      </div>
      {/* Section 1 End  */}

      {/* Section 2  */}
      <div id="kos" className="max-w-7xl mx-auto p-5 py-12 lg:py-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <div className="font-semibold text-[1.5rem]">Rekomendasi Kos</div>
            <div className="text-gray-500">
              Temukan Lokasi Rumah Kos Terdekat
            </div>
          </div>
          <div className="flex justify-end mt-5 md:mt-0">
            <Button variant="text" sx={{ textTransform: "capitalize" }}>
              Lihat Semua
            </Button>
          </div>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-8">
            {kosList.map((x) => {
              return (
                <motion.div key={x.label} variants={container}>
                  <KosCard {...x} />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
        <div className="flex justify-center mt-16">
          <Button
            sx={{
              borderRadius: 50,
              paddingInline: "1.5rem",
              paddingBlock: "0.75rem",
              fontWeight: "400",
              textTransform: "capitalize",
            }}
            className="bg-blue-50"
          >
            Halaman Cari Kos
          </Button>
        </div>
      </div>
      {/* Section 2 End  */}

      {/* Section 3  */}
      <div className="bg-gray-100 py-12 lg:py-16">
        <div className="p-5 flex flex-col lg:flex-row md:items-center lg:space-x-12 max-w-7xl mx-auto">
          <div className="w-full lg:w-[42.5%]">
            <Button
              sx={{
                borderRadius: 50,
                paddingInline: "1.5rem",
                paddingBlock: "0.75rem",
                fontWeight: "400",
                textTransform: "capitalize",
              }}
              className="bg-blue-100"
            >
              Business
            </Button>
            <div className="mt-8 text-[1.25rem] md:text-[1.95rem] font-semibold">
              Kelola Operasional Rumah <br></br>Kos Menggunakan Dashboard
            </div>
            <div className="mt-8">
              Pengelolaan yang tersentralisasi pada satu dashboard sehingga
              dapat memudahkan pengelola mengontrol semua aktivitas dalam bisnis
              rumah kos
            </div>
            <div className="flex rounded-md items-center space-x-5 bg-white border-l-[7px] border-primary p-5 py-8 mt-8">
              <img
                className="h-[4rem]"
                src="/assets/section_3/avatar.png"
                alt=""
              />
              <div className="text-[0.95rem]">
                <div className="font-light">
                  "Dengan Dashboard Ini Memudahkan Semua Aktivitas Saya Dalam
                  Mengelola Bisnis Rumah Kos"
                </div>
                <div className="italic font-medium mt-2">- Pengusahan Kos</div>
              </div>
            </div>
            <Button
              sx={{
                marginTop: 4,
                borderRadius: 50,
                padding: "0.75rem",
                paddingInline: "1.5rem",
                textTransform: "capitalize",
              }}
              variant="contained"
              className="bg-primary"
            >
              Mulai Kelola Kos
            </Button>
          </div>
          <div className="w-full lg:w-[57.5%] mt-12 lg:mt-0">
            <img src="/assets/section_3/illustration.png" alt="" />
          </div>
        </div>
      </div>
      {/* Section 4  */}
      <div
        id="fitur"
        className="max-w-7xl mx-auto p-5 text-center py-12 lg:py-16"
      >
        <div className="text-[2.5rem] font-semibold">Fitur Kelola Easykos</div>
        <div className="mt-3">
          Mengelola Bisnis Rumah Kos Dengan Fitur Unggul
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {fiturList.map((x) => (
            <motion.div key={x.label} variants={container}>
              <KosFitur {...x} />
            </motion.div>
          ))}
        </motion.div>
        <Button
          sx={{ textTransform: "capitalize", marginTop: 5, fontSize: "1.1rem" }}
          endIcon={<ArrowRightIcon />}
        >
          Selengkapnya
        </Button>
      </div>
      {/* Section 5  */}
      <div className="max-w-7xl p-5 mx-auto text-center">
        <div className="h-[1px] bg-gray-100 w-full relative">
          <div className="absolute left-[50%] top-[50%] bg-white z-[1]">
            <a href="/#paket">
              <div
                className="bg-secondary/[0.2] rounded-full p-2"
                style={{ transform: "translate(-50%,-50%)" }}
              >
                <img
                  className="h-[1.5rem]"
                  src="assets/section_5/arrow_down.png"
                  alt=""
                />
              </div>
            </a>
          </div>
        </div>
        <div id="paket" className="py-12 lg:py-16">
          <div className="mt-16 text-[1.5rem] md:text-[2.5rem] font-semibold">
            Pilih Paket Easykos
          </div>
          <div className="mt-2">
            Pilih Paket Dan Tingkatkan Keuntungan Mengelola Bisnis Rumah Kos
          </div>
          <FadeWrapper y={100} x={0}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
              {paketList.map((x) => {
                return <KosPaket key={x.tipe} {...x} />;
              })}
            </div>
          </FadeWrapper>
        </div>
      </div>
      {/* Section 6  */}
      <div id="layanan" className="bg-gray-100 py-12 py-16">
        <div className="flex flex-col space-y-5 lg:space-y-0 lg:items-center lg:space-x-12 lg:flex-row bg-gray-100 max-w-7xl mx-auto p-5">
          <div className="relative">
            <img
              className="w-full"
              style={{ borderRadius: "5px 40px 5px 5px" }}
              src="/assets/section_6/illustration.png"
              alt=""
            />
            <img
              className="hidden lg:block h-[2.5rem] absolute top-[15%] right-[-5%]"
              src="/assets/section_6/icon.png"
              alt=""
            />
          </div>
          <div>
            <div className="text-[1.5rem]">
              Mengelola Bisnis Rumah Kos Dengan Efisien !
            </div>
            <div className="mt-2 md:max-w-[80%]">
              Memudahkan Pengguna Dalam Mengelola Dan Mengakses Bisnis Rumah Kos
              Dari Jarak Jauh, Tercentralisasi Dengan Dashboard Manajemen Secara
              Responsive
            </div>
          </div>
          <div className="flex items-center space-x-2 lg:flex-col lg:space-x-0 lg:space-y-5">
            <Button
              variant="contained"
              sx={{
                width: "150px",
                paddingBlock: "0.75rem",
                borderRadius: "10px",
              }}
              className="bg-primary"
            >
              Coba Gratis
            </Button>
            <Button
              variant="outlined"
              sx={{
                width: "150px",
                paddingBlock: "0.75rem",
                borderRadius: "10px",
                color: "gray",
                borderColor: "gray",
              }}
            >
              Pilih Paket
            </Button>
          </div>
        </div>
      </div>
      {/* Footer  */}
      <Footer />
    </>
  );
}

const kosList: kos[] = [
  {
    label: "Kos Biru Kapleng",
    harga: "300 - 800",
    tipe: "Kos Wanita",
    lokasi: "Kab, Minahasa, Tondano Selatan",
    gambar: "/assets/section_2/kos_1.png",
  },
  {
    label: "Kos Tanta Lala",
    harga: "350 - 600",
    tipe: "Kos Wanita",
    lokasi: "Kab, Minahasa, Tondano Barat, Koya",
    gambar: "/assets/section_2/kos_2.png",
  },
  {
    label: "Kos Cendrawasi",
    harga: "500 - 1,500",
    tipe: "Kos Wanita",
    lokasi: "Kab, Minahasa, Tondano Selatan , Tataaran 2",
    gambar: "/assets/section_2/kos_3.png",
  },
  {
    label: "Kos Oma Lisa",
    harga: "300 - 900",
    tipe: "Kos Wanita",
    lokasi: "Kab, Minahasa, Tondano Selatan , Maesa",
    gambar: "/assets/section_2/kos_4.png",
  },
  {
    label: "Kos Pondok Kopi",
    harga: "300 - 800",
    tipe: "Kos Wanita",
    lokasi: "Kab, Minahasa, Tondano Selatan, Perum UNIMA",
    gambar: "/assets/section_2/kos_5.png",
  },
  {
    label: "Kos Pelangi Exclusive",
    harga: "350 - 600",
    tipe: "Kos Pria",
    lokasi: "Kab, Minahasa, Tondano Barat, Koya",
    gambar: "/assets/section_2/kos_6.png",
  },
  {
    label: "Kos Nanda Putri",
    harga: "500 - 1,500",
    tipe: "Kos Wanita",
    lokasi: "Kab, Minahasa, Tondano Selatan, Tataaran 2",
    gambar: "/assets/section_2/kos_7.png",
  },
  {
    label: "Kos Citra Garden",
    harga: "300 - 900",
    tipe: "Kos Wanita",
    lokasi: "Kab, Minahasa, Tondano Selatan, Maesa ",
    gambar: "/assets/section_2/kos_8.png",
  },
];

const fiturList: fitur[] = [
  {
    icon: "/assets/section_4/icon_1.png",
    label: "Notifikasi Pembayaran",
    deskripsi:
      "Notifikasi otomatis untuk pengingat pembayaran uang jatuh tempo",
  },
  {
    icon: "/assets/section_4/icon_2.png",
    label: "Reservasi Online",
    deskripsi:
      "Memudahkan calon penghuni melakukan pemesanan kamar kos secara online",
  },
  {
    icon: "/assets/section_4/icon_3.png",
    label: "Laporan Pembayaran",
    deskripsi:
      "Rekapitulasi laporan hasil pembayaran harian, mingguan dan bulanan",
  },
  {
    icon: "/assets/section_4/icon_4.png",
    label: "Kelola Kos Lebih Dari Satu",
    deskripsi: "Mengelola rumah kos lebih dari satu tempat yang berbeda",
  },
  {
    icon: "/assets/section_4/icon_5.png",
    label: "Financial Forecasting",
    deskripsi:
      "Mengestimasi dan mengontrol biaya pendapatan secara  bijak dan tepat",
  },
  {
    icon: "/assets/section_4/icon_6.png",
    label: "Rekonsiliasi Data",
    deskripsi: "Fitur pencocokan data laporan pemasukan dan pengeluaran",
  },
];

const paketList: paket[] = [
  {
    tipe: "Personal",
    deskripsi: "Tersedia Update Berkala",
    benefits: [
      "Laporan Tindakan",
      "Pembukuan Bulanan",
      "Akses selama 3 Bulan",
      "Kelola Kos Lebih Dari Satu",
      "Notifikasi Via Email & Whatsapp",
    ],
  },
  {
    tipe: "Bussiness",
    deskripsi: "Tersedia Update Berkala",
    benefits: [
      "Laporan Tindakan",
      "Undang Pengelola",
      "Panduan Bisnis Kos",
      "Pembukuan Bulanan",
      "Akses selama 1 Tahun",
      "Kelola Kos Lebih Dari Satu",
    ],
  },
  {
    tipe: "Perusahaan",
    deskripsi: "Tersedia Update Berkala",
    benefits: [
      "Laporan Tindakan",
      "Undang Pengelola",
      "Konsultasi Bisnis Kos",
      "Pembukuan Bulanan",
      "Akses selama 1 Tahun",
      "Kelola Kos Lebih Dari Satu",
    ],
  },
];

export default Page;
