let match
let text = document.querySelector(".text")
let field = document.querySelector(".field")
let searchWord = document.querySelector(".searchWord")
let fromSearch = document.querySelector(".fromSearch")
let toReplace = document.querySelector(".toReplace")
let email = document.querySelector(".Email")
let number = document.querySelector(".Number")
let word = document.querySelector(".Word")
let reset = document.querySelector(".Reset")
let replace = document.querySelector(".Replace")

let element = document.createElement("textarea")
element.setAttribute("cols","30")
element.setAttribute("rows","12")

// Get the element, add a click listener...
let buttons = document.querySelectorAll(".CLKBtn")
buttons.forEach(item => {
    item.addEventListener("click", function(e){
        if(e.target && e.target.nodeName == "BUTTON"){
            if (e.target.className == "Email"){
                // jony58.learn@encodedu.com.bd
                let emailRegEx = /[a-z][\w\.]+@[\w]+([\.\w])*/igm
                match = text.value.match(emailRegEx)
            }
            else if(e.target.className == "Number"){
                // +8801977788993 or 019577788899
                let numberRegEx = /(\+[8]{2})?01[35-9]\d{8}\b/gm
                match = text.value.match(numberRegEx)
            }
            else if(e.target.className == "Replace"){
                //Replace Pattern
                let r1 = `\\b${fromSearch.value}\\b`
                let r2 = toReplace.value
                let wordRegEx = new RegExp(r1,"gm")
                match = text.value.replace(wordRegEx, r2)
            }
            element.innerHTML = match
            field.appendChild(element)
            if(e.target.className == "Reset"){
                text.value = ''
                toReplace.value = ''
                fromSearch.value = ''
                searchWord.value = ''
                element.remove()
            }
        }
    });
});

