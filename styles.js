

document.getElementById('btn').addEventListener('click',function myfunction(){
    let list1=document.createElement("li")
    list1.classList.add('heading')

    let checkboxx=document.createElement('input')
    checkboxx.type="checkbox"
    checkboxx.classList.add('checkbox-label')
    checkboxx.id='checkboxinput'

    let labelcreation=document.createElement('label')
    labelcreation.setAttribute('for','checkboxinput')
    labelcreation.id="toy"
    var inputelement=document.getElementById('tassk').value
    labelcreation.textContent=inputelement

    let divcreation=document.createElement("div")
    divcreation.classList.add('divelement')

    let Ielement =document.createElement('i')
    Ielement.classList.add("far","fa-trash-alt","delete-icon")
    Ielement.onclick=function(){
        document.getElementById('nat').removeChild(list1)
        
    }

    document.getElementById('nat').appendChild(list1)
    list1.appendChild(checkboxx)
    list1.appendChild(divcreation)
   
    divcreation.appendChild(labelcreation)
    divcreation.appendChild(Ielement)

    document.getElementById("tassk").value=" "
    
}
)






