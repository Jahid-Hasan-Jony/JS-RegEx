const password = document.querySelector(".pass")
const ul = document.querySelector('ul').children
const show = document.querySelector('.showbtn')
const indicator = document.querySelector('.indicator')
const weak = document.querySelector('.weak')
const medium = document.querySelector('.medium')
const strong = document.querySelector('.strong')
let found

//RegEx
const limitRegEx = /.{8,}/
const lowerRegEx = /[a-z]/
const upperRegEx = /[A-Z]/
const digitRegEx = /[\d]/
const specialRegEx = /[-@#\*`,\.\: \+\/&\$\^!]/
//tast list and regEx array(don't change sequence)
const ulArray = [...ul]
const regEx = [limitRegEx,lowerRegEx,upperRegEx,digitRegEx,specialRegEx]

password.addEventListener("keyup",()=>{
    //Show indicator scale while typing
    indicator.style.display='block'
    indicator.style.display='flex'
    //--- Task completator start ---
    ulArray.forEach(item=>{
        //maching input
        if(regEx[ulArray.indexOf(item)].test(password.value)){
            if (item.classList == "text-muted"){
                item.classList.remove("text-muted")
            }
            else{item.classList.remove("text-danger")}
            item.classList.add("text-success")
        }
        else{
            if (password.value.length !=0){
                if(item.classList == "text-muted"){
                    item.classList.remove("text-muted")
                    item.classList.add("text-danger")
                }
                else{
                    item.classList.remove("text-success")}
                    item.classList.add("text-danger")
            }else{
                //indicator hide while nothing in inbox
                indicator.style.display='none'
                //default task color while nothing in inbox
                item.className = ''
                item.classList.add("text-muted")
            } 
        }  
    })
    //---Task completator END ---
    // --- Indicator Scale Start ---
    found = ulArray.filter(item => item.classList.value == 'text-success');
    if (found.length <=2){
        weak.classList.add('active')
        if(medium.classList.contains("active")){
            medium.classList.remove('active')
        }
        if(strong.classList.contains("active")){
            strong.classList.remove('active')
        }
    }else if(found.length <=4 && found.length>2){
        medium.classList.add('active')
        if(strong.classList.contains("active")){
            strong.classList.remove('active')
        }
    }else{
        strong.classList.add('active')
    }
    // --- Indicator Scale END -- 
})

//Password Show Hide
show.addEventListener('click',(e)=>{
    if(password.attributes.type.value=='password'){
        password.setAttribute('type','text')
        e.target.innerHTML = "HIDE"
    }else{
        password.setAttribute('type','password')
        e.target.innerHTML = "SHOW"
    }
})






