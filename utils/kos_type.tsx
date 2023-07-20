export interface kos {
  label: string;
  harga: string;
  tipe: string;
  lokasi: string;
  gambar: string;
}

export interface fitur {
  icon: string;
  label: string;
  deskripsi: string;
}

export interface paket {
  tipe: string;
  deskripsi: string;
  benefits: string[];
}
