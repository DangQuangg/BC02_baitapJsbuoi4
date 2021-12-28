var inputSonguyen1El=document.getElementById("soNguyen1")
var inputSonguyen2El=document.getElementById("soNguyen2")
var inputSonguyen3El=document.getElementById("soNguyen3")
var ketQuaEl=document.getElementById("ketQua")

function sapXep(){
    var soNguyen1El=inputSonguyen1El.value*1
    if(soNguyen1El%2==0){
        console.log("Số chẳn");
    }
    else {
        console.log("số lẻ");
    }
}    
    

