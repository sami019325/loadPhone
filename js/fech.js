/* fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))

 */
fetch('https://jsonplaceholder.typicode.com/photos')
    .then(givedata => givedata.json())
    .then(FounData => createElement(FounData) +




        console.log(" see here ===================================================================", FounData.map(id => id.title + id.id)))


createElement = (id) => {
    id.map(id => {
        const node = document.createElement("div");

        node.innerHTML = `
                <div class="bg-gray-900 text-center h-full text-white p-5 rounded-lg">
                 <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" srcset="">
                 <h1 class="font-bold text-3xl p-2">${id.title}</h1>
                 <h2 class="font-bold text-xl p-2">ID: ${id.id}</h2>
                </div>
               </div>`

        // Append the "li" node to the list:
        document.getElementById("append_div").appendChild(node);
    })


}


/* // Create an "li" node:
const node = document.createElement("h2");

// Create a text node:
const textnode = document.createTextNode(id.title);

// Append the text node to the "li" node:
node.appendChild(textnode);

// Append the "li" node to the list:
document.getElementById("append_div").appendChild(node);


 */














    //
/* const loadUsers = () => {


}

loadUsers()
 */



// const seeData = (ids) => {
//     // console.log(ids)
//     //const UserID = ids;
//     //const appendDiv = document.createAttribute('div')

//     /*     const userData = ids.map(User => {
//             `<div class=" grid grid-cols-3 gap-3 p-5">
//        <div class="bg-gray-900 text-center text-white p-5 rounded-lg">
//         <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" srcset="">
//         <h1 class="font-bold text-3xl p-2">${User.title}</h1>
//         <h2 class="font-bold text-xl p-2">ID: ${User.id}</h2>
//        </div>
//       </div>`
//         }) */
//     /* appendDiv.innerHtml = `<div class=" grid grid-cols-3 gap-3 p-5">ggg </div>`; */
//     // const div = document.getElementById('append_div').innerText = "dsfdfs"

//     /*   div.appendChild(appendDiv)
//       console.log(userData) */
// }
// seeData()




// function seeData(data) { console.log(data) }