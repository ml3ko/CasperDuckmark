function check(){


var a = document.getElementById('n1').value;
var b = document.getElementById('n2').value;
var text = " ";

if (isNaN(a) || isNaN(b)){
    document.getElementById('output').innerHTML = "There is no way"
}
else{
        for(i=a; i<=b; i++){
            text = text + i + " "
        }
        document.getElementById('output').innerHTML = text
        for(i=b; i<=a; i++){
            text = text + i + " "
        }
        document.getElementById('output').innerHTML = text

}
}
