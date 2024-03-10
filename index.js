const dividir = () => {
    var num1 = document.querySelector('.num1').value;
    var num2 = document.querySelector('.num2').value;
    var aux =  parseInt(num1) % parseInt(num2);
    var resultado = (aux === 0) ? "SI" : "NO";

    const elementoMostrador = document.querySelector(".mostrador");
    elementoMostrador.innerHTML = `
        <p class="p-result">
            <strong> ${resultado} </strong>             
        </p>
    `; 
}