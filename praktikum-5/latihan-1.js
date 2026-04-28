// LATIHAN 1: IDENTIFIKASI KOMPLEKSITAS

// Fungsi untuk menghitung waktu eksekusi
function hitungKompleksitas(n, fn, nama) {
  const start = Date.now();
  fn(n);
  const end = Date.now();
  console.log(`${nama} → Waktu: ${end - start} ms`);
}

// ==========================================
// Fungsi A
// Big-O: O(1)
// Alasan: hanya 1 operasi, tidak tergantung n
// ==========================================
function A(n) {
  return n * 2;
}

// ==========================================
// Fungsi B
// Big-O: O(n²)
// Alasan: 2 loop bersarang (n × n)
// ==========================================
function B(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // sengaja dikosongkan agar tidak lambat karena console.log
    }
  }
}

// ==========================================
// Fungsi C
// Big-O: O(log n)
// Alasan: i dikali 2 setiap iterasi
// ==========================================
function C(n) {
  for (let i = 1; i < n; i *= 2) {
    // console.log(i);
  }
}

// ==========================================
// Fungsi D
// Big-O: O(n³)
// Alasan: 3 loop bersarang
// ==========================================
function D(n) {
  const arr = new Array(n).fill(0);

  arr.forEach((x) => {
    arr.forEach((y) => {
      arr.forEach((z) => {
        // console.log(x, y, z);
      });
    });
  });
}

// ==========================================
// MAIN PROGRAM
// ==========================================

const n = 1000;

console.log("=== HASIL PENGUJIAN ===");

// Fungsi A
hitungKompleksitas(n, A, "Fungsi A (O(1))");

// Fungsi B
hitungKompleksitas(n, B, "Fungsi B (O(n^2))");

// Fungsi C
hitungKompleksitas(n, C, "Fungsi C (O(log n))");

// Fungsi D sangat berat jika n=1000
// jadi pakai n kecil agar tidak hang
hitungKompleksitas(100, D, "Fungsi D (O(n^3))");
