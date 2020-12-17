window.addEventListener("load", initSite())

async function initSite() {
    await saveHS()
    await updateHS()
    await deleteHS()
    await showResponse()
}

function createBtn(name, text, parent, id) {
    let btn = document.createElement("button")
    parent = document.getElementById(parent)
    btn.className = name
    btn.id = id
    btn.innerText = text
    parent.appendChild(btn)
    return btn
}

function removeById(id) {
    id = document.getElementById(id)
    id.remove()

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

        return response.json()
        
    }
     catch(err) {
          console.error("Failed fetch", err)
      } 
}

async function addHoroscope() {
    let month = getPickedMonth()
    let day = getPickedDay()
    const body = new FormData()
    body.set("day", day)
    body.set("month", month)
    const testResponse = await makeReq("./server/addHoroscope.php", "POST", body) 
    console.log(testResponse)    
}

async function viewHoroscope() {
    const testResponse = await makeReq("./server/viewHoroscope.php", "GET")
    return testResponse

}

async function updateHoroscope() {
    let month = getPickedMonth()
    let day = getPickedDay()
    const body = new FormData()
    body.set("day", day)
    body.set("month", month)
    const testResponse = await makeReq("./server/updateHoroscope.php", "POST", body)
    console.log(testResponse)
    
}

async function deleteHoroscope() {
    const testResponse = await makeReq("./server/deleteHoroscope.php", "DELETE")
    console.log(testResponse)
    
}

//Spara mitt horoskåp 
async function saveHS() {
    let response = await viewHoroscope() 
    if(response == false) {
        let btn = createBtn("knapp", "Save horoscope", "container")       
        btn.addEventListener("click", async () => {  
            await addHoroscope()    
            await showResponse()  
            btn.remove()
            await updateHS()
            await deleteHS()

            })   
    }
}

async function showResponse() {
    let response = await viewHoroscope()    
    let responseDiv = document.getElementById("responseDiv")
    if(response !== false) {
        responseDiv.innerText = response
    }
    else {
        responseDiv.innerText = "Choose a date to see your sign"
    }
}
//updatera mitt horoskåp 
async function updateHS() {
    let response = await viewHoroscope() 
    
    if(response) {
        let btn = createBtn("knapp", "Update horoscope", "container", "updateBtn")       
        btn.addEventListener("click", async () => {  
            await updateHoroscope()    
            showResponse()  
        })  
    }

}  


//Ta bort sparat horoskåp
async function deleteHS()  {
    let response = await viewHoroscope()     
    if(response) {
        let btn = createBtn("knapp", "Delete horoscope", "container") 
        btn.addEventListener("click", async () => {
            await deleteHoroscope()
            await saveHS()
            removeById("updateBtn")
            await showResponse()
            btn.remove()
        })
    }
}