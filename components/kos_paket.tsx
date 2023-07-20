"use client";

import { paket } from "@/utils/kos_type";
import { Button } from "@mui/material";

function KosPaket({ tipe, deskripsi, benefits }: paket) {
  return (
    <div className="border flex flex-col justify-between py-8 px-5 md:px-12">
      <div>
        <Button
          sx={{ borderRadius: 50, paddingInline: "15px", paddingBlock: "10px" }}
          className="bg-secondary/[0.1]"
        >
          {tipe}
        </Button>
        <div className="mt-8 text-[1.2rem]">{deskripsi}</div>
        <div className="mt-8 flex flex-col space-y-4">
          {benefits.map((x) => {
            return (
              <div key={x} className="flex items-center space-x-3">
                <img
                  className="h-[2rem]"
                  src="/assets/section_5/check.png"
                  alt=""
                />
                <div className="text-left">{x}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="pt-8">
        <Button
          sx={{ paddingBlock: "10px" }}
          fullWidth={true}
          variant="contained"
          className="bg-secondary rounded-lg"
        >
          Pilih Paket
        </Button>
      </div>
    </div>
  );
}

export default KosPaket;
