"use client";

import Link from "next/link";

// Mui
import { Button, IconButton } from "@mui/material";
// Icons
import BackIcon from "@mui/icons-material/ChevronLeft";

// Framer Motion
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import DropdownOption from "@/components/dropdown_option";
import { useEffect, useState } from "react";
import axios from "axios";

function Page() {
  const router = useRouter();
  const [provinsi, setProvinsi] = useState("");
  const [kabupaten, setKabupaten] = useState("");
  const [kecamatan, setKecamatan] = useState("");

  const [data, setData] = useState({
    listProvinsi: [],
    listKabupaten: [],
    listKecamatan: [],
  });

  useEffect(() => {
    const getProvinsi = async () => {
      const res = await axios.get(
        "https://dev.farizdotid.com/api/daerahindonesia/provinsi"
      );
      setData((prevState) => {
        return {
          ...prevState,
          listProvinsi: res.data.provinsi,
        };
      });
    };
    getProvinsi();
  }, []);

  useEffect(() => {
    const getKabupaten = async () => {
      const res = await axios.get(
        `https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinsi}`
      );
      setData((prevState) => {
        return {
          ...prevState,
          listKabupaten: res.data.kota_kabupaten,
        };
      });
    };
    getKabupaten();
  }, [provinsi]);

  useEffect(() => {
    const getKecamatan = async () => {
      const res = await axios.get(
        `https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${kabupaten}`
      );
      setData((prevState) => {
        return {
          ...prevState,
          listKecamatan: res.data.kecamatan,
        };
      });
    };
    getKecamatan();
  }, [kabupaten]);

  return (
    <div className="flex flex-row max-h-screen">
      <div
        style={{ borderRadius: "0 15px 15px 0" }}
        className="hidden md:flex flex-col items-center bg-primary md:w-[40%] lg:w-[30%] p-12"
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col text-white"
        >
          <div>
            <IconButton onClick={() => router.back()}>
              <BackIcon fontSize="large" sx={{ color: "white" }} />
            </IconButton>
          </div>
          <Link href="/" className="mt-12">
            <div className="text-[2rem]">easykost.</div>
          </Link>
          <div className="mt-12">
            <img
              className="h-[12rem] object-contain"
              src="/assets/auth/illustration_4.png"
              alt=""
            />
          </div>
          <div className="mt-10 text-[1.5rem]">
            Pilihan Terbaik Dan Sesuaikan Kebutuhan Anda Sekarang
          </div>
        </motion.div>
      </div>
      <div className="overflow-y-scroll h-screen p-5 md:p-12 lg:p-16 w-full md:w-[60%] lg:w-[70%]">
        <div className="md:max-w-[50%] mx-auto">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <form className="flex flex-col space-y-6">
              <div className="text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] font-semibold">
                Data Informasi Kos
              </div>
              <div className="mt-2 lg:w-[420px]">
                Lengkapi Data Kos Anda Dengan Benar !
              </div>
              <div className="font-medium">Data Informasi Kos</div>
              <div className="flex flex-col space-y-4">
                <input
                  required
                  type="text"
                  id="namaKos"
                  placeholder="Nama Kos"
                  className="bg-[#F2F5F8] p-4 rounded-md flex"
                />
                <DropdownOption
                  changeValueHandler={() => {}}
                  id="tipeKamar"
                  label="Tipe Kamar"
                  value={["Tipe A", "Tipe B", "Tipe C"]}
                />
                <DropdownOption
                  changeValueHandler={() => {}}
                  id="jenisKos"
                  label="Jenis Kos"
                  value={[
                    "Kos Campuran",
                    "Kos khusus Pria",
                    "Kos Khusus Wanita",
                  ]}
                />
                <DropdownOption
                  changeValueHandler={() => {}}
                  id="jumlahKamar"
                  label="Jumlah Kamar"
                  value={["10", "20", "30", "40", "50"]}
                />
                <DropdownOption
                  changeValueHandler={() => {}}
                  id="jumlahBangunan"
                  label="Jumlah Bangunan / Gedung"
                  value={["1", "2", "3", "4", "5"]}
                />
                <input
                  required
                  type="number"
                  id="noTelepon"
                  placeholder="No. Telepon"
                  className="bg-[#F2F5F8] p-4 rounded-md flex"
                />
              </div>
              <div className="font-medium">Alamat Usaha Kos</div>
              <div className="flex flex-col space-y-4">
                <DropdownOption
                  label="Provinsi"
                  id="provinsi"
                  changeValueHandler={setProvinsi}
                  value={data.listProvinsi}
                />
                <DropdownOption
                  label="Kabupaten / Kota"
                  id="kabupaten"
                  changeValueHandler={setKabupaten}
                  value={data.listKabupaten}
                />
                <DropdownOption
                  label="Kecamatan"
                  id="kecamatan"
                  changeValueHandler={setKecamatan}
                  value={data.listKecamatan}
                />

                <input
                  required
                  type="text"
                  id="alamatLengkapKos"
                  placeholder="Alamat Lengkap Kos"
                  className="bg-[#F2F5F8] p-4 rounded-md flex"
                />
                <input
                  required
                  type="number"
                  id="kodePos"
                  placeholder="Kode Pos"
                  className="bg-[#F2F5F8] p-4 rounded-md flex"
                />
              </div>
              <div>
                Dengan mengisi semua data informasi, anda setuju dengan
                <br />
                <span className="text-primary">Ketentuan Layanan</span> dan{" "}
                <span className="text-primary">Kebijakan Privasi</span>
              </div>
              <Button
                type="submit"
                sx={{ paddingBlock: "10px", textTransform: "capitalize" }}
                variant="contained"
                color="secondary"
                className="bg-button"
              >
                Selesai
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Page;
