import * as React from "react";
import DownIcon from "@mui/icons-material/KeyboardArrowDown";

function DropdownOption({
  value,
  id,
  label,
  changeValueHandler,
}: {
  value: any;
  id: string;
  label: string;
  changeValueHandler: any;
}) {
  const [currentValue, setCurrentValue] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const changeValue = (value: string) => {
    setOpen(false);
    setCurrentValue(value);
  };

  const changeObject = (id: any, nama: any) => {
    setCurrentValue(nama);
    changeValueHandler(id);
    setOpen(false);
  };

  return (
    <div tabIndex={0} onBlur={() => setOpen(false)} className="relative">
      <div
        onClick={() => setOpen(!open)}
        className="p-4 rounded-md bg-[#F2F5F8] flex items-center justify-between cursor-pointer"
      >
        {currentValue === "" ? (
          <div className="text-gray-400">{label}</div>
        ) : (
          <div>{currentValue}</div>
        )}
        <DownIcon sx={{ color: "gray" }} />
      </div>
      <div
        className={`${
          open ? "scale-1 visible" : "scale-0 invisible"
        } transition-all absolute z-[2] bg-white w-full drop-shadow-sm border mt-2 rounded-md max-h-[20rem] overflow-y-auto`}
      >
        {value.map((x: any) => {
          return (
            <div
              key={x.nama === undefined ? x : x.nama}
              onClick={() =>
                x.nama === undefined
                  ? changeValue(x)
                  : changeObject(x.id, x.nama)
              }
              className="p-4 hover:bg-blue-50"
            >
              {x.nama == undefined ? x : x.nama}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DropdownOption;
