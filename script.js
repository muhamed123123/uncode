let select = document.getElementById("select");
let code = document.getElementById("code");
let value_code = document.getElementById("value_code");

select.onchange=()=>{
    values();
    code.value = "";
    value_code.value = "";
}

code.addEventListener("input",()=>{
    values();
    localStorage.setItem("text",code.value);
});

value_code.addEventListener("copy",()=>{
    i = true;
})

function values(){
if(select.value == "uncode"){
    value_code.value = btoa(code.value);
}else if(select.value == "decode"){
    value_code.value = atob(code.value);
}
};

onload = code.value = localStorage.getItem("text");