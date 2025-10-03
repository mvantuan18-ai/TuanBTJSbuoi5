function inSoNguyenTo() {
  for (let n = 2; n <= 100; n++) {
    let laNguyenTo = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        laNguyenTo = false;
        break;
      }
    }
    if (laNguyenTo) {
      console.log(n);
    }
  }
}
inSoNguyenTo();
