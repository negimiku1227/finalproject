function showrule(){
    var size = document.getElementById("r");
    size.style.fontSize = "25px";
    document.getElementById("rule").innerHTML = "很簡單的小遊戲！按下START鍵開始遊戲！";
    document.getElementById("rule2").innerHTML = "你需要依照畫面上的提示，猜出教授的全名！";
    document.getElementById("rule3").innerHTML = "你可以按下「加一個提示」紐獲取額外提示，但每題只有三個提示！";
    document.getElementById("rule4").innerHTML = "按下「提交答案」紐核對答案！使用的提示越少分數越高！";
    document.getElementById("rule5").innerHTML = "遊戲一共五題，挑戰自己的高分紀錄吧！";
}