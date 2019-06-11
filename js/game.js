var teacher = ["汪柏","洪智傑","陳建彰","張志勇"];
var hint1 = ["sinolegend","口　口","教我們組合語言的教授"];
var hint2 = ["嗯，簡單！","trivial","我們上次上到哪啦？"];
var hint3 = ["一手拿咖啡，一手MP4","他的職位不只是教授","他跟泉豪的姓氏是一樣的"];
var hint4 = ["MALLOC","adjacency matrix","data structure"];

var nowhint = [];
var arrnum = 0;
var ans;
function show(){
    teacher.sort(
        function(){
            return Math.random()>0.5?-1:1;
        }
    );
    alert(teacher);
    for(var i = 0; i < 4; i++){
        for (var j = 0; j < 3; j++){
            if (teacher[0] == "汪柏"){
                nowhint.push(hint1[j]);
            }
            if (teacher[0] == "洪智傑"){
                nowhint.push(hint2[j]);
            }
            if (teacher[0] == "陳建彰"){
                nowhint.push(hint3[j]);
            }
            if (teacher[0] == "張志勇"){
                nowhint.push(hint4[j]);
            }

        }
        teacher.shift();
    }
    console.log(nowhint);
    
}

function checkanswer(){
    ans = answer.value;
    if (ans == teacher[0]){
        alert("恭喜你答對了");
    }
    if (ans != teacher[0]){
        alert("再試試看如何？");
    }
}

function addhint(){
    document.getElementById("hint").innerHTML = nowhint[arrnum];
    arrnum += 1;
}
