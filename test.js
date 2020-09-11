document.getElementById("id0").addEventListener("click", function(){console.log("pressed"); updateCalc(0);});
document.getElementById("id1").addEventListener("click", function(){console.log("pressed"); updateCalc(1);});
document.getElementById("id2").addEventListener("click", function(){console.log("pressed"); updateCalc(2);});
document.getElementById("id3").addEventListener("click", function(){console.log("pressed"); updateCalc(3);});
document.getElementById("id4").addEventListener("click", function(){console.log("pressed"); updateCalc(4);});
document.getElementById("id5").addEventListener("click", function(){console.log("pressed"); updateCalc(5);});
document.getElementById("id6").addEventListener("click", function(){console.log("pressed"); updateCalc(6);});
document.getElementById("id7").addEventListener("click", function(){console.log("pressed"); updateCalc(7);});
document.getElementById("id8").addEventListener("click", function(){console.log("pressed"); updateCalc(8);});
document.getElementById("id9").addEventListener("click", function(){console.log("pressed"); updateCalc(9);});
document.getElementById("id+").addEventListener("click", function(){console.log("pressed"); updateCalc("+");});
document.getElementById("id-").addEventListener("click", function(){console.log("pressed"); updateCalc("-");});
document.getElementById("id*").addEventListener("click", function(){console.log("pressed"); updateCalc("*");});
document.getElementById("id/").addEventListener("click", function(){console.log("pressed"); updateCalc("/");});
document.getElementById("id(").addEventListener("click", function(){console.log("pressed"); updateCalc("(");});
document.getElementById("id)").addEventListener("click", function(){console.log("pressed"); updateCalc(")");});
document.getElementById("id=").addEventListener("click", function(){console.log("pressed"); evaluate();});
document.getElementById("idclear").addEventListener("click", function(){ans="";calcstring="";document.getElementById("lol").innerHTML=calcstring;});
document.getElementById("idback").addEventListener("click", function(){if(calcstring.length>0){calcstring=calcstring.slice(0,-1);document.getElementById("lol").innerHTML=calcstring;}});
document.getElementById("idans").addEventListener("click", function(){if(typeof(ans)==typeof(0)){calcstring+=ans;document.getElementById("lol").innerHTML=calcstring;}});

calcstring = "";
ans="";
function updateCalc(param){
    calcstring+=param
    console.log(calcstring)
    document.getElementById("lol").innerHTML=calcstring
}
function evaluate(){
    try{
        ans=eval(calcstring)
        if (typeof(ans)==typeof(0.1)){
            ans=parseFloat(ans).toPrecision(12)/1
        }
        document.getElementById("lol").innerHTML=ans
    
    }
    catch(error){
        document.getElementById("lol").innerHTML="Syntax error"
    }
    calcstring = ""
}