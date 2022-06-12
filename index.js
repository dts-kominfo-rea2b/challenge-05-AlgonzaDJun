const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...

const sorter = (nama, callback) => {
  let arr = [];
  let result = callback(nama);

  for (let [index, val] of result.entries()) {
    const el = `${index + 1}. ${val}`;
    arr.push(el);
  }
  return arr;
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (array) => {
  let arr = [];
  array.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) return -1;
    if (a.toLowerCase() > b.toLowerCase()) return 1;
    // return 0;
  });

  for (const iterator of array) {
    arr.push(iterator);
  }

  return arr;
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (array) => {
  let arr = [];
  array.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) return 1;
    if (a.toLowerCase() > b.toLowerCase()) return -1;
    // return 0;
  });
  for (const iterator of array) {
    arr.push(iterator);
  }
  return array;
};

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
