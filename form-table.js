/*
Coding Steps:

+ Create a CRD application (Create-Read-Update-Delete without update) using json-server or another API
+ Use fetch and async/await to interact with the API
+ Use a form to create/post new entities -- I've already created one, so I'm reusing it.
+ Build a way for users to delete entities
+ Include a way to get entities from the API and display them -- I'm going to use a json-server
+ You do NOT need update, but you can add it if you'd like
+ Use Bootstrap and/or CSS to style your project -- I'm pulling my form from the Week 10 assignment. It's already styled from that assignment.
*/

// STATE VARIABLES
const URL = "http://localhost:3000/playersRoster/" // this is the json file
let table = document.getElementById("roster"); // get the table from the HTML

// EVENT LISTENERS
// Show Players Button
async function renderPlayers() {
  // get the info from the players dB. Wait for the data. Don't do anything until we have it.
  let response = await fetch(URL)
  let data = await response.json()

  // delete all existing table rows. This while loop  elininates all the rows from the top down, so we'll have to create a new header row each time.
  while (table.rows.length > 0) {
    table.deleteRow(0);
  }

  // create new table headings
  let headerRow = document.createElement("tr")
  let headerID = document.createElement("td")
  let headerName = document.createElement("td")
  let headerPosition = document.createElement("td")
  let headerPhone = document.createElement("td")

  // set text for table headings
  headerID.innerText = "ID"
  headerName.innerText = "Full Name"
  headerPosition.innerText = "Position"
  headerPhone.innerText = "Phone"

  // header row styling
  headerRow.style.backgroundColor = "grey"
  headerRow.style.color = "white"

  // append the table headings to a new row
  headerRow.appendChild(headerID);
  headerRow.appendChild(headerName);
  headerRow.appendChild(headerPosition);
  headerRow.appendChild(headerPhone);

  // Append the new row to table body 
  table.appendChild(headerRow)

  // create a new row for each player
  for (let i = 0; i < data.length; i++) {
    // create a new table row for each player
    let row = document.createElement("tr")
    
    //create new cell elements in each row
    let listNo = document.createElement("td")
    let name = document.createElement("td")
    let position = document.createElement("td")
    let phone = document.createElement("td")

    // assign the player data to the new elements
    listNo.innerText = data[i].id;
    name.innerText = data[i].fullName;
    position.innerText = data[i].position;
    phone.innerText = data[i].phone;

    // Append the new cells to the new row (give them Earth Passes)
    row.appendChild(listNo);
    row.appendChild(name);
    row.appendChild(position);
    row.appendChild(phone);
        
    // Append the new row to table body 
    table.appendChild(row)
  }
}

// Add New Player Button
async function addPlayer() {
  //Get the new Player data from the form
  let playerName = document.getElementById("name");
  let playerPosition = document.getElementById("position");
  let playerPhone = document.getElementById("phone");

  //Create new player
  let newPlayer = {
    fullName: playerName.value,
    position: playerPosition.value,
    phone: playerPhone.value
  }
  
  // POST the new player to the players database
  await fetch(URL, {
    method: "POST", // create request. Can also be GET, PUT, DELETE
    // headers and body are needed only if sending data in request
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPlayer) // must match "Content-Type"
  })
}

// Remove a Player Button
function removePlayer(){
  let indexToDelete = prompt("Which player would you like to delete from this list?\n Enter the player's ID number: ")

  fetch(URL + indexToDelete, {
    method: "DELETE", // delete request
  })
}