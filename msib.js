//Tugas Adzhimatinur Azzahra

//Program untuk menentukan apakah sebuah angka positif atau negatif//
// IF
var angka = 5
if (angka > 0) {
    console.log("Angka merupakan bilangan positif");
}
// jika kondisi nya true maka akan keluar "Angka merupakan bilangan positif", tetapi jika kondisinya false maka hasilnya akan "kosong"


//ELSE
//Program untuk menentukan apakah sebuah angka positif atau negatif
var angka = -3
if (angka > 0) {
    console.log("Angka merupakan bilangan positif");
} else {
    console.log("Angka merupakan bilangan negatif");
}
// jika kondisi nya true maka akan keluar "Angka merupakan bilangan positif", tetapi jika kondisinya false maka hasilnya "Angka merupakan bilangan negatif"


//NESTED IF
//Program untuk menentukan apakah sebuah angka adalah positif, negatif, atau nol
var angka = 2;

if (angka > 2) {
    console.log("Angka adalah positif");
} else {
    if (angka < 2) {
        console.log("Angka adalah negatif");
    } else {
        console.log("Angka adalah nol");
    }
}
//Jika angka > 0 maka positif, jika angka < 0 maka negatif, jika kedua kondisi tidak terpenuhi maka angka ==2

//SWITCH CASE
// Program untuk menentukan hari dalam seminggu berdasarkan angka 1-7
var hari = 3;

switch (hari) {
  case 1:
    console.log("Hari Minggu");
    break;
  case 2:
    console.log("Hari Senin");
    break;
  case 3:
    console.log("Hari Selasa");
    break;
  case 4:
    console.log("Hari Rabu");
    break;
  case 5:
    console.log("Hari Kamis");
    break;
  case 6:
    console.log("Hari Jumat");
    break;
  case 7:
    console.log("Hari Sabtu");
    break;
  default:
    console.log("Angka tidak valid, masukkan angka antara 1 dan 7");
    break;
}


//FOR STATEMENT
// Program untuk menghasilkan angka 1 hingga 5 menggunakan pernyataan for

for (var i = 1; i <= 5; i++) {
    console.log(i);
  }

  //var i = 1, i <=5;, i++ yang artinya akan ditambah 1 


//WHILE DO WHILE 
// Program untuk menghasilkan angka 1 hingga 5 menggunakan pernyataan while
var i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}


// Program untuk menghasilkan angka 1 hingga 5 menggunakan pernyataan do-while
var i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);


//FUNCTION
// Program untuk menghitung luas segitiga menggunakan fungsi

function hitungLuasSegitiga(alas, tinggi) {
    var luas = 0.5 * alas * tinggi;
    return luas;
  }
  
  // Menggunakan fungsi untuk menghitung luas segitiga dengan alas 4 dan tinggi 6
  var alasSegitiga = 4;
  var tinggiSegitiga = 6;
  var hasilLuas = hitungLuasSegitiga(alasSegitiga, tinggiSegitiga);
  
  //hasil
  console.log("Luas segitiga dengan alas", alasSegitiga, "dan tinggi", tinggiSegitiga, "adalah", hasilLuas);
  