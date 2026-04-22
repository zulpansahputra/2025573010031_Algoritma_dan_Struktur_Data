// Parent Class
class Produk {
    constructor(id, nama, harga, stok) {
        this.id = id;
        this.nama = nama;
        this.harga = harga;
        this.stok = stok;
    }

    info() {
        console.log(`ID: ${this.id}`);
        console.log(`Nama: ${this.nama}`);
        console.log(`Harga: ${this.harga}`);
        console.log(`Stok: ${this.stok}`);
    }

    tersedia() {
        return this.stok > 0;
    }

    jual(jumlah) {
        if (jumlah <= 0) {
            console.log("Jumlah tidak valid!");
            return;
        }

        if (jumlah > this.stok) {
            console.log("Stok tidak mencukupi!");
        } else {
            this.stok -= jumlah;
            console.log(`Berhasil menjual ${jumlah} ${this.nama}`);
        }
    }
}

// Child Class ProdukDigital
class ProdukDigital extends Produk {
    constructor(id, nama, harga, ukuranFile, formatFile) {
        super(id, nama, harga, Infinity); // stok tidak terbatas
        this.ukuranFile = ukuranFile;
        this.formatFile = formatFile;
    }

    info() {
        super.info();
        console.log(`Ukuran File: ${this.ukuranFile} MB`);
        console.log(`Format File: ${this.formatFile}`);
    }

    download() {
        console.log(`Mengunduh ${this.nama} (${this.formatFile})...`);
    }

    jual(jumlah) {
        console.log(`Produk digital "${this.nama}" tidak mengurangi stok.`);
    }
}

// Child Class ProdukFisik
class ProdukFisik extends Produk {
    constructor(id, nama, harga, stok, beratGram, dimensi) {
        super(id, nama, harga, stok);
        this.beratGram = beratGram;
        this.dimensi = dimensi;
    }

    info() {
        super.info();
        console.log(`Berat: ${this.beratGram} gram`);
        console.log(`Dimensi: ${this.dimensi}`);
    }

    hitungOngkir(tarifPerKg) {
        let beratKg = this.beratGram / 1000;
        return beratKg * tarifPerKg;
    }
}

// ==============================
// Instance Produk
// ==============================

// Produk Digital
const pd1 = new ProdukDigital(1, "Ebook JavaScript", 100000, 5, "PDF");
const pd2 = new ProdukDigital(2, "Video Course JS", 200000, 500, "MP4");

// Produk Fisik
const pf1 = new ProdukFisik(3, "Laptop", 7000000, 5, 2000, "30x20x3 cm");
const pf2 = new ProdukFisik(4, "Mouse", 150000, 10, 200, "10x5x3 cm");

// Array daftar produk
const daftarProduk = [pd1, pd2, pf1, pf2];

// ==============================
// forEach → tampilkan semua info
// ==============================
console.log("=== Semua Produk ===");
daftarProduk.forEach(p => {
    p.info();
    console.log("-------------------");
});

// ==============================
// filter → produk tersedia
// ==============================
const produkTersedia = daftarProduk.filter(p => p.tersedia());

console.log("\n=== Produk Tersedia ===");
produkTersedia.forEach(p => console.log(p.nama));

// ==============================
// map → ambil nama produk saja
// ==============================
const namaProduk = daftarProduk.map(p => p.nama);

console.log("\n=== Nama Produk ===");
console.log(namaProduk);