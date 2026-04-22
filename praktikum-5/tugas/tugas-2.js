// ==========================================
// TUGAS 2
// ==========================================

// 🔹 Fungsi-fungsi
const fn_O1 = (n) => n + 1; // O(1)

const fn_On = (n) => {
  // O(n)
  let sum = 0;
  for (let i = 0; i < n; i++) sum += i;
  return sum;
};

const fn_Onlogn = (n) => {
  // O(n log n)
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j *= 2) count++;
  }
  return count;
};

const fn_On2 = (n) => {
  // O(n^2)
  let count = 0;
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) count++;
  return count;
};

// ==========================================
// 🔹 Benchmark
function benchmarkSemua(ukuranData) {
  for (let n of ukuranData) {
    console.log(`\n=== n = ${n} ===`);

    let t0, t1;

    t0 = Date.now();
    fn_O1(n);
    t1 = Date.now();
    console.log("O(1):", t1 - t0, "ms");

    t0 = Date.now();
    fn_On(n);
    t1 = Date.now();
    console.log("O(n):", t1 - t0, "ms");

    t0 = Date.now();
    fn_Onlogn(n);
    t1 = Date.now();
    console.log("O(n log n):", t1 - t0, "ms");

    t0 = Date.now();
    fn_On2(n);
    t1 = Date.now();
    console.log("O(n^2):", t1 - t0, "ms");
  }
}

// ==========================================
// 🔹 RUN
benchmarkSemua([100, 500, 1000, 5000, 10000]);

// ==========================================
// 🔹 OBSERVASI (penting buat nilai)
/*
- O(1): waktu hampir tetap
- O(n): naik linear
- O(n log n): lebih cepat dari n^2 tapi lebih lambat dari n
- O(n^2): naik sangat cepat (paling lambat)

Kesimpulan:
Hasil sesuai teori Big-O (growth rate).
Semakin besar kompleksitas, semakin drastis kenaikan waktu.
*/
