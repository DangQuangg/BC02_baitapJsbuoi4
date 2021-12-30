var seLectEl = document.getElementById("seLect")


function sapXep(){
var seLectEl =  document.getElementById("seLect").value
switch(seLectEl){
    case "Bố":
        document.getElementById("Hello").innerHTML=("hello Bố")
    break
    case "Mẹ":
        document.getElementById("Hello").innerHTML=("hello Mẹ")
    break
    case "Anh":
        document.getElementById("Hello").innerHTML=("hello Anh Trai")
    break
    case "Em":
        document.getElementById("Hello").innerHTML=("hello Em gái")
    break
    default:console.log("Vui lòng chọn");
}
}