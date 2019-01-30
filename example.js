var user = prompt("現在我們來猜拳吧!剪刀~石頭~布?");
var computer = Math.random();
if (computer <= 0.33){
    computer = "剪刀";
}
else if (computer <= 0.66){
    computer = "石頭";
}
else {
    computer = "布";
}
alert("電腦出的是~" + computer);
if (user == computer){
    alert("平手");
}
else if (user == "剪刀"){
    if (computer == "石頭")
        alert("電腦獲勝 下次再接再厲喔!");
    else {
        alert("玩家獲勝 Ya~!!!");
    }
}
else if (user == "石頭"){
    if (computer == "布")
        alert ("電腦獲勝 下次再接再厲喔!");
    else {
        alert("玩家獲勝 Ya~!!!");
    }
}
else if (user == "布"){
    if (computer == "剪刀")
        alert("電腦獲勝 下次再接再厲喔!");
    else {
        alert("玩家獲勝 Ya~!!!");
    }
}