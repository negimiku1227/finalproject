var teacher = ["汪柏","洪智傑","陳建彰","張志勇"];
var hint1 = ["sinolegend","手錶是假的","教我們組合語言的教授"];
var hint2 = ["嗯，簡單！","那...乾我屁事？","我們上次上到哪啦？"];
var hint3 = ["一手拿咖啡，一手MP4","他的職位不只是教授","他跟泉豪的姓氏是一樣的"];
var hint4 = ["MALLOC","adjacency matrix","data structure"];

var nowhint = [];
var hintmessage = "";
var arrnum, score, question, hinttry = 0;
var ans;
function show(){
    document.getElementById("sbutton").src = "../pic/button_restart.png";
    nowhint = [];
    question = 0;
    arrnum = 0;
    score = 0;
    teacher.sort(
        function(){
            return Math.random()>0.5?-1:1;
        }
    )
    for(var i = 0; i < 4; i++){
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
            if (teacher[i] == "張志勇"){
                nowhint.push(hint4[j]);
            }

        }
        
    }
    console.log(nowhint);
    document.getElementById("hint").innerHTML = nowhint[0];
    
}

function checkanswer(){
    
    ans = answer.value;
    if (arrnum >= 12){
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
    if (arrnum < 12){
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
