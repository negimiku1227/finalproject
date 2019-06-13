var teacher;
var hint1 = ["手錶是假的","sinolegend","教我們組合語言的教授"];
var hint2 = ["楽天株式会社","嗯，簡單！","我們上次上到哪啦？"];
var hint3 = ["一手咖啡，一手MP4","他的職位不只是教授","他跟泉豪的姓氏是一樣的"];
var hint4 = ["RUST 語言","資工2C 班導其中一位","大學學習"];
var hint5 = ["應用密碼學","我這一刀下去，半個班消失了","專題實驗：暫停收學生"];

var nowhint = [];
var hintmessage = "";
var arrnum, score, question, hinttry = 0;
var startgame = false;
var ans;
function show(){
    startgame = true;
    document.getElementById("sbutton").src = "../pic/button_restart.png";
    teacher = ["汪柏","洪智傑","陳建彰","蔡憶佳","黃心嘉"];
    nowhint = [];
    question = 0;
    arrnum = 0;
    score = 0;
    teacher.sort(
        function(){
            return Math.random()>0.5?-1:1; /* 將每個變數賦予0~1之隨機值， 並與0.5比較大小。
                                              若>0.5則返回-1，表示此變數需排在下個變數的前面。反之返回1，此變數便須排在下個變數的後面*/
        }
    )
    for(var i = 0; i < 5; i++){
        for (var j = 0; j < 3; j++){
            if (teacher[i] == "汪柏"){
                nowhint.push(hint1[j]);
            }
            if (teacher[i] == "洪智傑"){
                nowhint.push(hint2[j]);
            }
            if (teacher[i] == "陳建彰"){
                nowhint.push(hint3[j]);
            }
            if (teacher[i] == "蔡憶佳"){
                nowhint.push(hint4[j]);
            }
            if (teacher[i] == "黃心嘉"){
                nowhint.push(hint5[j]);
            }

        }
        
    }
    console.log(nowhint);
    document.getElementById("score").innerHTML = score;
    document.getElementById("hint").innerHTML = nowhint[0];
    
}

function checkanswer(){
    
    ans = answer.value;
    if (arrnum >= 15 || !startgame){
        return;
    }

    if (ans == teacher[0]){
        score += 15 - (5 * hinttry); 
        arrnum += 3 - hinttry;
        alert("恭喜你答對了");
    }
    if (ans != teacher[0]){
        score -= 5;  
        
        arrnum += 3 - hinttry;
        alert("真可惜，答錯了（’へ’）");
    }
    document.getElementById("score").innerHTML = score;
    if (arrnum < 15){
        teacher.shift();
        document.getElementById("hint").innerHTML = nowhint[arrnum];
        document.getElementById("hint2").innerHTML = "";
        document.getElementById("hint3").innerHTML = "";
        hinttry = 0;
    }
    else{
        alert("你的分數為："+score+"分");
    }
    
    
    
    
}

function addhint(){
    if (arrnum >= 15 || !startgame){
        return;
    }
    if (hinttry >= 2){
        alert("提示用完啦");
    }
    else{
        arrnum += 1;
        hinttry += 1;
        if (hinttry == 1)
            document.getElementById("hint2").innerHTML = nowhint[arrnum];
        if (hinttry == 2)
            document.getElementById("hint3").innerHTML = nowhint[arrnum];
        
    }
    
}
