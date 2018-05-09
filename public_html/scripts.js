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
        cousing=!(n%cont==0);
    }
    return cousing;
}
function getHead(x,y){
    var t=document.createElement("table");
    t.setAttribute("id","customers");
    var row=document.createElement("tr");
    var col=document.createElement("th");
    col.setAttribute("colspan","2");
    var my= x>y? x:y;
    var mn= x<y? x:y;
    var t="Numeros Primos de " + mn + "hasta " + my;
    col.appendChild(document.createTextNode(t));
    row.appendChild(col);
    t.appendChild(row);
    return t;
}
function cosuins(c, one, two){
    var tb=getHead(one,two);
    c.innerHTML; 
    c.appendChild(tb);
    var my= one > two ? one:two;
    var mn= one < two ? one:two;
    var cont=1;
    for (var i=mn ;i<= my;i++){
        var row= document.createElement("tr");
        var col= document.createElement("td");
        col.appendChild(document.createTextNode(cont++));
        row.appendChild(col);
        tb.appendChild(row);
        col.appendChild(document.createElement("td"));
        col.appendChild(i);
        row.appendChild(col);
        tb.appendChild(row);
    }
}