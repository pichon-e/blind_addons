var blind = false;

document.getElementById("click").addEventListener("click", function(){
    blind = !blind;
    if (blind) {
        document.getElementById("chart1").style.display = 'none';
        document.getElementById("button1").style.display = 'block';
        document.getElementById("chart2").style.display = 'none';
        document.getElementById("button2").style.display = 'block';
    }
    else {
        document.getElementById("chart1").style.display = 'block';
        document.getElementById("button1").style.display = 'none';
        document.getElementById("chart2").style.display = 'block';
        document.getElementById("button2").style.display = 'none';
    }

});
