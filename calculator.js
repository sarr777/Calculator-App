const buttonValues = 
[
    "AC", "+/-", "%", "/",
    "1", "2", "3", "*",
    "4", "5", "6", "-",
    "7", "8", "9", "+",
    "0", ".", "=", 
];
const rightSymbols = ["/", "*", "-", "+", "=",]
const topSymbols = ["AC", "+/-", "%",]

const display = document.getElementById("display")

// A+B, A*B, A-B, A/B
let A = 0;
let operateur = null;
let B = null;

function clearAll()
{
    let A = 0;
    let operateur = null;
    let B = null; 
}

for (let i = 0; i < buttonValues.length; i++) {
    let value = buttonValues[i];
    let button = document.createElement("button")

    button.innerText = value;

    // style button colors
    if (value == "0") {
        button.style.width = "180px"
        button.style.gridColumn = "span 2"
    }

    if (rightSymbols.includes(value)) {
        button.style.backgroundColor = "#FF9500"
    }
    else if (topSymbols.includes(value)) {
        button.style.backgroundColor = "#D4D4D4"
        button.style.Color = "#1C1C1C"
    }

    // processus nutton click
    button.addEventListener("click", function(){
        if (rightSymbols.includes(value)) {
            if (value == "=") {
                if (A != null) {
                    B = display.value;
                    let numA = Number(A);
                    let numB = Number(B);

                    if (operateur == "/") {
                        display.value = numA/numB;
                    }
                    else if (operateur == "*") {
                        display.value = numA*numB;
                    }
                    else if (operateur == "-") {
                        display.value = numA-numB;
                    }
                    else if (operateur == "+") {
                        display.value = numA+numB;
                    }
                    clearAll()
                }
            }
            else {
                operateur = value;
                A = display.value;
                display.value = ""
            }
        }
        else if (topSymbols.includes(value)) {
            if (value  == "AC") {
                clearAll()
                display.value = "";
            }
            else if (value  == "+/-") {
                if (display.value != "" && !display.value != "0") {
                    if (display.value[0] == "-") {//remove -
                        display.value = "-" + display.value
                        // display.value = display.value.slice(1)
                    } 
                    else{
                        display.value = "-" + display.value
                    }
                }
            }
            else if (value  == "%") {
                display.value = Number(display.value)/100
            }
        }
        else{//numbers or
            if (value == ".") {
                if (display.value != "" && !display.value.includes(value)) {
                    display.value += value; 
                }
            }
            else if (display.value == "0") {
                display.value = value;
            }
            else
            {
                display.value += value;
            }
        }
    })

    // add button to clalculator
    document.getElementById("buttons").appendChild(button)
}