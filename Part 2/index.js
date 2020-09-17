//3. JS prog to calculate multiplication and division of two numbers
document.write('<label for="first-number">1st Number: </label>');
document.write('<input type="number" id="first-number"/>');
document.write('<label for="second-number">2nd Number: </label>');
document.write('<input type="number" id="second-number"/><br>');
document.write('<button id="mul">Multiply</button>');
document.write('<button id="div">Divide</button>');
document.write('<p id="result"></p>');
mul = document.getElementById('mul');
div = document.getElementById('div');
mul.onclick = () => {
    n1 = document.getElementById("first-number");
    n2 = document.getElementById("second-number");
    result = document.getElementById("result");
    result.innerHTML = "The answer is: " + n1.value * n2.value;
}
div.onclick = () => {
    n1 = document.getElementById("first-number");
    n2 = document.getElementById("second-number");
    result = document.getElementById("result");
    result.innerHTML = "The answer is: " + n1.value / n2.value;
}

//4. JS prog to get the website URL
result = document.getElementById("result");
result.innerHTML = "The current URL that you are on is: " + window.location.href;






