/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function begin(){
    var x=parseInt(prompt("DIGITE ALGO"));
    var c=document.getElementById("Content");
    c.innerHTML="";
    var h1=document.createElement("h1");
    h1.appendChild(document.createTextNode("Hola Mundo" + x));
    //c.appendChild(h1);
    var h2=document.createElement("h2");
    if (!isNaN(x)){
        h2.setAttribute("Style","color:red");
        h2.appendChild(document.createTextNode("El Numero Fue " + x));
    }else{
        h2.setAttribute("Style", "color:green");
        h2.appendChild(document.createTextNode("Nu fue un numero"));
    }
    c.appendChild(h2);
}
function menu(){
    var output=0;
    var aux="";
    var r=document.getElementById("result");
    var h3=document.createElement("h3");
    var option=document.getElementById("option").selectedIndex;
    var nOne=parseInt(document.getElementById("nOne").value);
    var nTwo=parseInt(document.getElementById("nTwo").value);
    switch (option){
        case 0: output= nOne + nTwo;
            aux="la suma es: " + output;
            break;
        case 1: output = nOne > nTwo ? nOne - nTwo : nTwo - nOne;
            aux="la resta es: " + output;
            break;
        case 2: output = nOne * nTwo;
            aux="la multiplicacion es: " + output;
            break;
        case 3: output = nOne > nTwo ? nOne / nTwo : nTwo / nOne;
            aux="la division es: " + output;
            break;
        case 4: cousins(r,nOne,nTwo);
            break;
    }
    h3.appendChild(document.createTextNode(aux));
    r.innerHTML="";
    r.appendChild(h3);
}
function isCousing(n){
    var cont=2;
    var cousing=true;
    while (cont<=n/2 && cousing){
        cousing=!(n% cont==0);
    }
    return cousing;
}
function getHead()