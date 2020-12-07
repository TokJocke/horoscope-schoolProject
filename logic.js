getHoroscope()



function createBtn(name, text, parent) {
    let btn = document.createElement("button")
    parent = document.getElementById(parent)
    btn.className = name
    btn.innerText = text
    parent.appendChild(btn)
    return btn
}

function getPickedMonth() {
    let datePick = document.getElementById("datePicker").value
    let date = new Date(datePick)
    let month = date.getMonth() + 1
    return month
}

function getPickedDay() {
    let datePick = document.getElementById("datePicker").value
    let date = new Date(datePick)
    let day = date.getDate()
    return day
}

function getHoroscope() {
    let btn = createBtn("knapp", "Knapp", "container")
    
    btn.addEventListener("click", () => {
        let month = getPickedMonth()
        
        console.log(month)
        if(month >= 1 && month <= 5) {
            console.log("you picked the interwall", month)
        }

    })
}


