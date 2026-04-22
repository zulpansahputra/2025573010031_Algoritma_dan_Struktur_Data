// ==========================================
// TUGAS 1
// ==========================================

// 🔹 Helper waktu
const ukur = (fn, ...args) => {
  const t0 = Date.now();
  const res = fn(...args);
  return { res, time: Date.now() - t0 };
};

// ==========================================
// 🔹 A. INTERSECTION
// O(n^2), O(1)
const interN2 = (a, b) => {
  const r = [];
  for (let x of a) for (let y of b) if (x === y && !r.includes(x)) r.push(x);
  return r;
};

// O(n), O(n)
const interSet = (a, b) => {
  const s = new Set(b);
  return [...new Set(a.filter((x) => s.has(x)))];
};

// ==========================================
// 🔹 B. ANAGRAM
// O(n * k log k), O(n)
const groupAnagram = (arr) => {
  const m = {};
  for (let w of arr) {
    const k = [...w].sort().join("");
    (m[k] ||= []).push(w);
  }
  return Object.values(m);
};

// ==========================================
// 🔹 C. 2 angka = kuadrat angka lain

// O(n^3), O(1)
const tigaN3 = (a) => {
  for (let i of a)
    for (let j of a)
      for (let k of a)
        if (i !== j && i !== k && j !== k && i + j === k * k) return true;
  return false;
};

// O(n log n), O(1)
const tigaCepat = (a) => {
  a = [...a].sort((x, y) => x - y);
  for (let k = 0; k < a.length; k++) {
    let l = 0,
      r = a.length - 1,
      t = a[k] * a[k];
    while (l < r) {
      if (l === k) l++;
      else if (r === k) r--;
      else {
        const s = a[l] + a[r];
        if (s === t) return true;
        s < t ? l++ : r--;
      }
    }
  }
  return false;
};

// ==========================================
// 🔹 TEST
console.log("A:", ukur(interN2, [1, 2, 3], [2, 3, 4]));
console.log("A cepat:", ukur(interSet, [1, 2, 3], [2, 3, 4]));

console.log("B:", groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]));

console.log("C:", ukur(tigaN3, [1, 2, 3, 4, 5]));
console.log("C cepat:", ukur(tigaCepat, [1, 2, 3, 4, 5]));
