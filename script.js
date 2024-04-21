function solve(char){
    let display=document.getElementById("display");
    display.value+=char;
}

function backspace(){
    let display=document.getElementById("display");
    display.value=display.value.slice(0,-1);
}

function clearDisplay(){
    let display=document.getElementById("display");
    display.value="";
}

function result(){
    let display=document.getElementById("display");
    let expression=display.value;
    try{
        display.value=eval(expression);
    }
    catch(err){
        // display.value="";
        let error=`Expreesion ${expression} is not a valid Expression!`
        // document.getElementsById("error").innerText=error;
        alert(error);
    }
}