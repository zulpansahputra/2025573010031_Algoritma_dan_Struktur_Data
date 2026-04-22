const mahasiswa = {
  nama: "Zulfan Sahputra",
  umur: 18,
  jurusan: "Teknik Informatika",
  ipk: 3.75,
  aktif: true,
};

// --- 2. Mengakses property ---
console.log("=== Akses Property ===");
console.log("Nama :", mahasiswa.nama); // dot notation
console.log("Jurusan :", mahasiswa["jurusan"]); // bracket notation

// Bracket notation berguna jika key disimpan di variabel
const keyYangDicari = "ipk";
console.log("IPK :", mahasiswa[keyYangDicari]); // berguna!

// --- 3. Menambah dan mengubah property ---
mahasiswa.email = "zulfan@email.com"; // tambah property baru
mahasiswa.umur = 18; // ubah nilai yang ada
console.log("\nSetelah diubah:", mahasiswa);

// --- 4. Menghapus property ---
delete mahasiswa.aktif;
console.log("Setelah delete:", mahasiswa);

// --- 5. Menambahkan method ke object ---
const dosen = {
  nama: "Dr. Ahmad Fauzi",
  mataKuliah: "Struktur Data",
  pengalaman: 10, // tahun
  // method: function di dalam object
  perkenalan() {
    // 'this' merujuk ke object dosen itu sendiri
    return `Halo, saya ${this.nama}, mengajar ${this.mataKuliah}.`;
  },
  statusSenior() {
    if (this.pengalaman >= 10) {
      return `${this.nama} adalah dosen senior.`;
    }
    return `${this.nama} adalah dosen junior.`;
  },
};

console.log("\n=== Method Object ===");
console.log(dosen.perkenalan());
console.log(dosen.statusSenior());

// --- 6. Iterasi key-value dengan for...in ---
console.log("\n=== Iterasi Object ===");
for (const key in dosen) {
  if (typeof dosen[key] !== "function") {
    // skip method
    console.log(` ${key}: ${dosen[key]}`);
  }
}

// Object.keys(), Object.values(), Object.entries()
console.log("Keys :", Object.keys(mahasiswa));
console.log("Values:", Object.values(mahasiswa));

// Latihan 1
// Membuat object buku
const buku = {
  judul: "Belajar JavaScript",
  pengarang: "Zulfan Sahputra",
  tahunTerbit: 2023,
  harga: 100000,
  tersedia: true,

  // Method info()
  info: function () {
    return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: ${this.harga}, Tersedia: ${this.tersedia}`;
  },

  // Method diskon(persen)
  diskon: function (persen) {
    return this.harga * (1 - persen / 100);
  },
};

// Coba method
console.log(buku.info());
console.log("Harga setelah diskon 10%:", buku.diskon(10));

// Array koleksiBuku
const koleksiBuku = [
  buku,
  {
    judul: "Dasar HTML",
    pengarang: "Andi",
    tahunTerbit: 2022,
    harga: 75000,
    tersedia: true,
    info() {
      return `Judul: ${this.judul}, Pengarang: ${this.pengarang}`;
    },
  },
  {
    judul: "CSS Lanjutan",
    pengarang: "Budi",
    tahunTerbit: 2021,
    harga: 85000,
    tersedia: false,
    info() {
      return `Judul: ${this.judul}, Pengarang: ${this.pengarang}`;
    },
  },
];

// Menampilkan semua buku (forEach)
console.log("\n=== Semua Buku ===");
koleksiBuku.forEach((b) => {
  console.log(b.info());
});

// Filter buku yang tersedia
const bukuTersedia = koleksiBuku.filter((b) => b.tersedia === true);

console.log("\n=== Buku Tersedia ===");
bukuTersedia.forEach((b) => {
  console.log(b.info());
});
