var inputaEl=document.getElementById("a")
var inputbEl=document.getElementById("b")
var inputcEl=document.getElementById("c")
var ketQuaEl=document.getElementById("ketQua")

function tamGiac(){
    var aEl=inputaEl.value*1
    var bEl=inputbEl.value*1
    var cEl=inputcEl.value*1
    if(aEl==bEl && bEl==cEl){
        console.log("Tam giác đều");
    } else if(aEl==bEl && aEl!=cEl){
        console.log("Tam giác cân");
    } else if(aEl==cEl && bEl!=cEl){
        console.log("Tam giác cân");
    }
     else if(bEl==cEl && aEl!=cEl){
    console.log("Tam giác cân");
    }
    else {
    console.log("Tam giác vuông");
    }
    
    
}
    

