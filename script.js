function goHome() {
    window.location = "index.html"
}

const exchange = {
    mena: 'USD',
    mena: 'EUR',
    mena: 'CZK',
    mena: 'DKK',
    mena: 'DJF',
}
const cash = 23.62
const cash2 = 25.45
const cash3 = 1
const cash4 = 7.54
const cash5 = 3.41       

// DKK AND DJF is not done
function submit(){
    const sourceCurrency = document.getElementById('Currency').value;
    const targetCurrency = document.getElementById('target').value;
    const amount = parseFloat(document.getElementById('amount').value);
    let vysledek = 1;
    if (sourceCurrency === "CZK" && targetCurrency === "EUR") {
        vysledek = amount * cash2;
        document.getElementById("result").innerHTML = vysledek.toFixed(2);
    }
    
    if (sourceCurrency === "DJF" && targetCurrency=== "EUR") {
        vysledek = amount / cash2;
        document.getElementById("result").innerHTML = vysledek.toFixed(2);
    }
    
    if (sourceCurrency === "CZK" && targetCurrency === "USD") {
        vysledek = amount * cash;
        document.getElementById("result").innerHTML = vysledek.toFixed(2);
    }
    
    if (sourceCurrency === "CZK" && targetCurrency === "DKK") {
        vysledek = amount / cash4;
        document.getElementById("result").innerHTML = vysledek.toFixed(2);
    }
    
    if (sourceCurrency === "CZK" && targetCurrency === "DJF") {
        vysledek = amount * cash5;
        document.getElementById("result").innerHTML = vysledek.toFixed(2);
    }
    
    if (sourceCurrency === "USD" && targetCurrency === "EUR") {
        vysledek = amount / cash2;
        document.getElementById("result").innerHTML = vysledek.toFixed(2);
    }
    if (sourceCurrency === "USD" && targetCurrency=== "CZK") {
        vysledek = amount * cash3;
        document.getElementById("result").innerHTML = vysledek.toFixed(2);
    }
    if (sourceCurrency=== "USD" &&targetCurrency === "DKK") {
        vysledek = amount * cash4;
        document.getElementById("result").innerHTML = vysledek.toFixed(2);
    }
    if (sourceCurrency === "USD" && targetCurrency === "DJF") {
        vysledek = amount * cash45;
        document.getElementById("result").innerHTML = vysledek.toFixed(2);
    }
    if (sourceCurrency === "EUR" && targetCurrency === "USD") {
        vysledek = amount * cash;
        document.getElementById("result").innerHTML = vysledek.toFixed(2);
    }
    if (sourceCurrency === "EUR" &&targetCurrency === "CZK") {
        vysledek = amount * cash2;
        document.getElementById("result").innerHTML = vysledek.toFixed(2);
    }
    if (sourceCurrency=== "EUR" && targetCurrency === "DKK") {
        vysledek = amount * cash4;
        document.getElementById("result").innerHTML = vysledek.toFixed(2);
    }
    if (sourceCurrency === "EUR" && targetCurrency === "DJF") {
        vysledek = amount * cash5;
        document.getElementById("result").innerHTML = vysledek.toFixed(2);
    } if (sourceCurrency === "EUR" && targetCurrency === "EUR") {
        vysledek = amount * cash6;
        document.getElementById("result").innerHTML = vysledek.toFixed(2);
    }
    }

    const dphRate = 0.21; 
    function WithoutDph() {
        const WithDph = parseFloat(document.getElementById("WithDph").value); 
        const WithoutDph = WithDph / (1 + dphRate);
        document.getElementById("WithoutDph").value = WithoutDph.toFixed(2);
      }
  
      function WithDph() {
        const WithoutDph = parseFloat(document.getElementById("WithoutDph").value);
        const WithDph = WithoutDph * (1 + dphRate);
        document.getElementById("WithDph").value = WithDph.toFixed(2);
      }