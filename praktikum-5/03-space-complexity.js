// 03-space-complexity.js
// --- O(1) Space: hanya pakai variabel tambahan konstan ---
function jumlahArray(arr) {
  let total = 0; // hanya 1 variabel tambahan
  for (const x of arr) total += x;
  return total;
}
// --- O(n) Space: membuat struktur baru sebesar input ---
function duplikasiArray(arr) {
  const baru = []; // array baru tumbuh seiring arr
  for (const x of arr) baru.push(x * 2);
  return baru;
}
// --- O(n) Space: rekursi (call stack) ---
function faktorialRekursif(n) {
  if (n <= 1) return 1;
  return n * faktorialRekursif(n - 1); // n frame di call stack
}
// --- O(1) Space: faktorial iteratif ---
function faktorialIteratif(n) {
  let hasil = 1;
  for (let i = 2; i <= n; i++) hasil *= i; // hanya 2 variabel
  return hasil;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Jumlah array :", jumlahArray(arr)); // O(1) space
console.log("Duplikasi array:", duplikasiArray(arr)); // O(n) space
console.log("Faktorial 10 rekursif :", faktorialRekursif(10));
console.log("Faktorial 10 iteratif :", faktorialIteratif(10));
// Visualisasi: hitung elemen unik (O(n) space)
function hitungUnik(arr) {
  const seen = new Set(); // Set tumbuh hingga n elemen
  for (const x of arr) seen.add(x);
  return seen.size;
}
const dataAcak = [1, 2, 3, 2, 1, 4, 5, 3, 6, 4, 7];
console.log("Elemen unik:", hitungUnik(dataAcak)); // 7

// ==========================================
// LATIHAN 3: SPACE COMPLEXITY
// ==========================================

// 1. Fungsi Lambat (Nested Loop)
// Big-O Time  : O(n²)
// Big-O Space : O(1)
// Alasan:
// - Dua loop bersarang → n * n
// - Tidak menggunakan struktur data tambahan
function cariPasanganLambat(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
  return null;
}

// 2. Fungsi Cepat (Menggunakan Set)
// Big-O Time  : O(n)
// Big-O Space : O(n)
// Alasan:
// - Hanya 1 loop
// - Set untuk lookup cepat (O(1))
function cariPasanganCepat(arr, target) {
  const seen = new Set();

  for (let i = 0; i < arr.length; i++) {
    const angka = arr[i];
    const pasangan = target - angka;

    if (seen.has(pasangan)) {
      return [pasangan, angka];
    }

    seen.add(angka);
  }

  return null;
}

// ==========================================
// Fungsi untuk ukur waktu
function ukurWaktu(fn, arr, target, nama) {
  const start = Date.now();
  const hasil = fn(arr, target);
  const end = Date.now();

  console.log(`${nama} → Hasil:`, hasil, `| Waktu: ${end - start} ms`);
}

// ==========================================
// 3. Pengujian kecil
const dataUji = [2, 7, 11, 15];
const targetUji = 9;

console.log("=== UJI KECIL ===");
ukurWaktu(cariPasanganLambat, dataUji, targetUji, "Lambat");
ukurWaktu(cariPasanganCepat, dataUji, targetUji, "Cepat");

// ==========================================
// 4. Pengujian besar (50.000 data)
function generateArray(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 100000));
  }
  return arr;
}

const dataBesar = generateArray(50000);
const targetBesar = -1; // kemungkinan besar tidak ada

console.log("\n=== UJI BESAR (50.000 DATA) ===");

// Lambat bisa sangat lama → optional
// ukurWaktu(cariPasanganLambat, dataBesar, targetBesar, "Lambat");

ukurWaktu(cariPasanganCepat, dataBesar, targetBesar, "Cepat");

// ==========================================
// 5. DISKUSI
/*
Fungsi mana lebih baik?
→ cariPasanganCepat lebih baik

Trade-off:
- Cepat:
  + Time lebih cepat (O(n))
  - Butuh memori tambahan (O(n))

- Lambat:
  + Tidak butuh memori tambahan (O(1))
  - Sangat lambat untuk data besar (O(n²))

Kesimpulan:
Gunakan versi cepat jika data besar dan memori cukup.
Gunakan versi lambat jika memori terbatas.
*/
