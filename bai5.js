let soTienVay;
do {
  soTienVay = Number(prompt("Nhập số tiền vay (USD, >100 và <1000):"));
} while (isNaN(soTienVay) || soTienVay <= 100 || soTienVay >= 1000);
let soDu = soTienVay;
const laiSuat = 0.05;
let nam = 1;
while (nam <= 10) {
  soDu = soDu * (1 + laiSuat);
  console.log(`Năm ${nam}: Số dư = ${soDu.toFixed(2)} USD`);
  if (soDu > 2 * soTienVay) {
    break;
  }
  nam++;
}
