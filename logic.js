addHoroscope()
viewHoroscope()
updateHoroscope()


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

function addHoroscope() {
    let btn = createBtn("knapp", "POST/ADD", "container")
    
    btn.addEventListener("click", async () => {
        let month = getPickedMonth()
        let day = getPickedDay()

        const body = new FormData()
        body.set("day", day)
        body.set("month", month)

        const testResponse = await makeReq("./server/addHoroscope.php", "POST", body)
        console.log(testResponse)
    })
}

function viewHoroscope() {
    let btn = createBtn("knapp", "GET/VIEW", "container")
    
    btn.addEventListener("click", async () => {
        let month = getPickedMonth()
        let day = getPickedDay()


        const testResponse = await makeReq("./server/viewHoroscope.php", "GET")
        console.log(testResponse)
    })
}

function updateHoroscope() {
    let btn = createBtn("knapp", "POST/UPDATE", "container")
    
    btn.addEventListener("click", async () => {
        let month = getPickedMonth()
        let day = getPickedDay()

        const body = new FormData()
        body.set("day", day)
        body.set("month", month)

        const testResponse = await makeReq("./server/updateHoroscope.php", "POST", body)
        console.log(testResponse)
    })
}
