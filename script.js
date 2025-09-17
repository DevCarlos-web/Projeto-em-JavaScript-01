const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".select-to")
const currencySelectFrom = document.querySelector(".select-from")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-value").value
    const currencyValueFromConvert = document.querySelector(".currency-value-from-convert")
    const currencyValueConvert = document.querySelector(".currency-value")

    console.log(currencySelectFrom.value)

    const dolarToday = 5.30
    const euroToday = 6.29
    const libraToday = 7.3
    const realToday = 1

    // Bloco 1: Se a moeda de origem for Real    
    if (currencySelectFrom.value == "real") {

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

        if (currencySelect.value == "libra") {
            currencyValueConvert.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue / libraToday)
        }

        if (currencySelect.value == "real") {
            currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-br", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue)
        }

    }

    // Bloco 2: Se a moeda de origem for Dólar
    if (currencySelectFrom.value == "dolar") {

        if (currencySelect.value == "real") {
            currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-br", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue / realToday)
        }

        if (currencySelect.value == "euro") {
            currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue / euroToday)
        }

        if (currencySelect.value == "libra") {
            currencyValueConvert.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue / libraToday)
        }

        if (currencySelect.value == "dolar") {
            currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue)

        }
    }
    // Bloco 3: Se a moeda de origem for Euro
    if (currencySelectFrom.value == "euro") {

        if (currencySelect.value == "real") {
            currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-br", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue / realToday)
        }

        if (currencySelect.value == "dolar") {
            currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue / dolarToday)
        }

        if (currencySelect.value == "libra") {
            currencyValueConvert.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue / libraToday)
        }

        if (currencySelect.value == "euro") {
            currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue)
        }
    }
    // Bloco 4: Se a moeda de origem for Libra
    if (currencySelectFrom.value == "libra") {

        if (currencySelect.value == "real") {
            currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-br", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue / realToday)
        }

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

        if (currencySelect.value == "libra") {
            currencyValueConvert.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue)
        }
    }


    // Atualiza o valor de entrada para o formato da moeda de origem.
    if (currencySelect.value == "real") {

        if (currencySelectFrom.value == "dolar") {
            currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue * dolarToday)
        }

        if (currencySelectFrom.value == "euro") {
            currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue * euroToday)
        }

        if (currencySelectFrom.value == "libra") {
            currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue * libraToday)
        }
    }

    // Este bloco formata o valor digitado pelo usuário e exibe-o no formato da moeda de origem.

    if (currencySelectFrom.value == "dolar") {
        currencyValueFromConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    if (currencySelectFrom.value == "real") {
        currencyValueFromConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    if (currencySelectFrom.value == "euro") {
        currencyValueFromConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    if (currencySelectFrom.value == "libra") {
        currencyValueFromConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }


}

// Esta função é chamada para atualizar a imagem e o nome da moeda de destino.

function changeCurrencyTo() {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.querySelector('#currency-img')


    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = 'Dólar americano'
        currencyImg.src = './Img/USA.png'
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = './Img/euro.png'
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = 'Libra'
        currencyImg.src = './Img/libra.png'
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = 'Real'
        currencyImg.src = './Img/Brazil.png'
    }

    convertValues()

}

/* Img currency-img-from */

function changeCurrencyFrom() {
    const currencyNameFrom = document.getElementById('currency-name-from')
    const currencyImgFrom = document.querySelector('#currency-img-from')

    if (currencySelectFrom.value == "dolar") {
        currencyNameFrom.innerHTML = 'Dólar americano'
        currencyImgFrom.src = './Img/USA.png'
    }

    if (currencySelectFrom.value == "euro") {
        currencyNameFrom.innerHTML = 'Euro'
        currencyImgFrom.src = './Img/euro.png'
    }

    if (currencySelectFrom.value == "libra") {
        currencyNameFrom.innerHTML = 'Libra'
        currencyImgFrom.src = './Img/libra.png'
    }

    if (currencySelectFrom.value == "real") {
        currencyNameFrom.innerHTML = 'Real'
        currencyImgFrom.src = './Img/Brazil.png'
    }

    convertValues()
}

currencySelect.addEventListener('change', changeCurrencyTo)
currencySelectFrom.addEventListener('change', changeCurrencyFrom)
convertButton.addEventListener("click", convertValues)

