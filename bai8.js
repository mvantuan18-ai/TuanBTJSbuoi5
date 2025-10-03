const phieuBau = [
  { ungCuVien: "A", soPhieu: 50 },
  { ungCuVien: "B", soPhieu: 30 },
  { ungCuVien: "C", soPhieu: 20 },
];
let tongPhieu = 0;
for (const phieu of phieuBau) {
  tongPhieu += phieu.soPhieu;
}
console.log("Tổng phiếu:", tongPhieu);
for (const idx in phieuBau) {
  const phieu = phieuBau[idx];
  console.log(`Ứng cử viên ${phieu.ungCuVien}: ${phieu.soPhieu} phiếu`);
}
