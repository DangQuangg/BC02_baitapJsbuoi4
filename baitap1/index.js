var inputSonguyen1El=document.getElementById("soNguyen1")
var inputSonguyen2El=document.getElementById("soNguyen2")
var inputSonguyen3El=document.getElementById("soNguyen3")
var ketQuaEl=document.getElementById("ketQua")
function sapXep(){
    var a=inputSonguyen1El.value*1
    var b=inputSonguyen2El.value*1
    var c=inputSonguyen3El.value*1

    var giatri=[a,b,c]
    giatri.sort((a , b) => a - b);
    ketQuaEl.innerHTML=giatri

}