addHoroscope()



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

function addHoroscope() {
    let btn = createBtn("knapp", "Knapp", "container")
    
    btn.addEventListener("click", async () => {
        let month = getPickedMonth()
        let day = getPickedDay()

        const blaha = await makeReq("./server/addHoroscope.php", "POST",)
        console.log(blaha)



        /*    
            if(month >= 1 && month <= 5) {
            console.log("you picked the interwall", " month=", month, " day=", day)
            } 
        */

    })
}

async function makeReq(path, method, body) {
    try {
        let response = await fetch(path, {
            method,
            body
        })
        console.log(response)
        return response.json()
    }
    catch(err) {
        console.log("Failed fetch", err)
    }
}