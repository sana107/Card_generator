const txt1=document.getElementById("tbuser");
const txt2=document.getElementById("tbpass");
const txt3=document.getElementById("tbmail");
const txt4=document.getElementById("list1");


const btn1=document.getElementById("btn1");
const out1=document.getElementById("output1");
const out2=document.getElementById("output2");
const out3=document.getElementById("output3");
const out4=document.getElementById("output4");

function fun1(){
    out1.innerText=txt1.value;
    out2.innerText=txt2.value;
    out3.innerText=txt3.value;
    out4.innerText=txt4.value;

}
btn1.addEventListener("click",fun1);