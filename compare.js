var a = Number(prompt("請輸入a值"));
var b = Number(prompt("請輸入b值"));
function compare(a,b){
    if (a < b){
     return "a小於b";
    }
    else if (a == b){
        return "a等於b";
    }
    else if (a > b){
        return "a大於b";
    }
    else{
        return "錯誤";
    }
}
alert( compare(a,b) );