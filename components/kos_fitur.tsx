import { fitur } from "@/utils/kos_type";

function KosFitur({ icon, label, deskripsi }: fitur) {
  return (
    <div className="flex flex-col items-center space-y-3 p-5 bg-white drop-shadow-md py-12">
      <img className="h-[4rem] w-[4rem]" src={icon} alt="" />
      <div className="font-semibold">{label}</div>
      <div>{deskripsi}</div>
    </div>
  );
}

export default KosFitur;
