var firstnum = document.getElementById('firstnum');
var secondnum = document.getElementById('secondnum');
var resultfield = document.getElementById('resultfield');
var form = document.getElementById('xIsWhatPercentOfY');
form.addEventListener('submit',function(event){
    if (!firstnum.value || !secondnum.value){
        alert("please enter values in the field")
    }
    else{    
        var x = parseFloat(firstnum.value);
        var y = parseFloat(secondnum.value);
        var result =x/y;
        var percent = result * 100;
        resultfield.innerText = "Answer: " + percent + "%";
        event.preventDefault();
    }
});