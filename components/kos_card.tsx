import { kos } from "@/utils/kos_type";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LocationIcon from "@mui/icons-material/LocationOn";
import { IconButton } from "@mui/material";

function KosCard({ label, harga, tipe, lokasi, gambar }: kos) {
  return (
    <div className="border rounded-md drop-shadow-md bg-white rounded-md overflow-hidden">
      <img src={gambar} alt="" />
      <div className="p-3">
        <div className="flex items-center justify-between">
          <div className="font-semibold">{label}</div>
          <IconButton>
            <MoreVertIcon sx={{ color: "gray" }} />
          </IconButton>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="text-primary text-[0.95rem]">Rp {harga} / Bulan</div>
          <div
            className={`${
              tipe === "Kos Wanita"
                ? "bg-red-100 text-red-400"
                : "bg-green-100 text-green-500"
            } p-2 px-3 rounded-md text-[0.8rem]`}
          >
            {tipe}
          </div>
        </div>
        <div className="flex items-center space-x-1 mt-3">
          <img src="/assets/section_2/pin.png" alt="" />
          <div className="text-[14px] font-light">
            {lokasi.length > 30 ? lokasi.substring(0, 30) + "..." : lokasi}
          </div>
        </div>
      </div>
    </div>
  );
}

export default KosCard;
