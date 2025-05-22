/*
Coding Steps:

+ Create a CRD application (Create-Read-Update-Delete without update) using json-server or another API
+ Use fetch and async/await to interact with the API
+ Use a form to create/post new entities -- I've already created one, so I'm reusing it.
+ Build a way for users to delete entities -- I've created a way to delete from the front end. I'll reuse that function and add the backend component
+ Include a way to get entities from the API and display them -- I'm going to use a json-server
+ You do NOT need update, but you can add it if you'd like
+ Use Bootstrap and/or CSS to style your project -- I'm pulling it from the Week 10 assignment. I might update it if I feel like it. ;)
*/

// STATE VARIABLES
let playersList = [];
const URL = "http://localhost:3000/playersRoster"
let table = document.getElementById("roster");


async function renderPlayers() {
      // ADD NEW PLAYER TO THE JSON-SERVER dB
        let response = await fetch(URL)
        let data = await response.json()
        console.log(data);
        console.log(data.length);
        for (let i = 0; i < data.length; i++) {
          // create a new table row for each player
          let row = document.createElement("tr")
          
          //create new cell elements in each row
          let name = document.createElement("td")
          let position = document.createElement("td")
          let phone = document.createElement("td")

          // assign the player data to the new elements
          name.innerText = data[i].fullName;
          position.innerText = data[i].position;
          phone.innerText = data[i].phone;

          // Append the new cells to the new row (give them Earth Passes)
          row.appendChild(name);
          row.appendChild(position);
          row.appendChild(phone);
              
          // Append the new row to table body 
          table.appendChild(row)
        }

}
renderPlayers();

// // From Wk 10 Assignment, for reference.
// function addPlayer () {
//   // Get the table element in which to add my row
//   let table = document.getElementById("roster");

//   // Create a new row element in the table
//   let row = document.createElement("tr")
      
//   // Create new cell elements in the row
//   let name = document.createElement("td")
//   let position = document.createElement("td")
//   let phone = document.createElement("td")
      
//   // Get the new Player data from the form
//   let playerName = document.getElementById("name");
//   let playerPosition = document.getElementById("position");
//   let playerPhone = document.getElementById("phone");
  
//   // Insert the new player data into cells
//   name.innerText = playerName.value;
//   position.innerText = playerPosition.value;
//   phone.innerText = playerPhone.value;

//   // Append cells to row (give them Earth Passes)
//   row.appendChild(name);
//   row.appendChild(position);
//   row.appendChild(phone);
      
//   // Append row to table body
//   table.appendChild(row)

//   // remove a player
//   row.addEventListener("click", () => {
//       row.remove()
//   });
// }
