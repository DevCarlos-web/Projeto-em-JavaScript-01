const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".select-to")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-value").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConvert = document.querySelector(".currency-value")

    console.log(currencySelect.value)

    const dolarToday = 5.30
    const euroToday = 6.29

    if (currencySelect.value == "dolar") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}
/*Seletores*/
function changeCurrency() {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.querySelector('#currency-img')

    if (currencySelect.value == "dolar"){
        currencyName.innerHTML = 'Dólar americano'
        currencyImg.src = './Img/USA.png'
    }

     if (currencySelect.value == "euro"){
        currencyName.innerHTML = 'Euro'
        currencyImg.src = './Img/euro.png'
    }

    convertValues()
}

currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener("click", convertValues)