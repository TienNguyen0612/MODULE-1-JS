let inputdiemLy;
let inputdiemHoa;
let inputdiemSinh;

inputdiemLy = parseFloat(prompt("Nhập điểm Vật Lý"));
inputdiemHoa = parseFloat(prompt("Nhập điểm Hóa Học"));
inputdiemSinh = parseFloat(prompt("Nhập điểm Sinh Học"));

let sum = inputdiemSinh + inputdiemHoa + inputdiemLy;
let diemTB = sum / 3;

document.write("Điểm trung bình 3 môn là: " + diemTB.toFixed(2));
document.write("<br>");
document.write("Tổng điểm 3 môn là: " + sum);