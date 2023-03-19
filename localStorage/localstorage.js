// // Save an object to localStorage
// const myObject = { name: "John", age: 30 };
// localStorage.setItem("myObject", JSON.stringify(myObject));

// // Retrieve the object from localStorage
// const retrievedObject = JSON.parse(localStorage.getItem("myObject"));

// // Use the retrieved object
// console.log(retrievedObject.name); // Output: "John"
// console.log(retrievedObject.age); // Output: 30



// level-2
// const btn = document.getElementById("btn-increment");
// const incrementValue = document.getElementById("increment-value");


// // let count = parseInt(localStorage.getItem("count")) || localStorage.setItem("count", count);

// btn.addEventListener("click", () => {
//     incrementValue.innerText = parseInt(incrementValue.innerText) + 1;
//     localStorage.setItem("count", incrementValue.innerText)
//     // count++;
//     // localStorage.setItem("count", count)
//     // incrementValue.innerText = count;
// })

// incrementValue.innerText = localStorage.getItem("count")

// console.log(incrementValue.innerText)


// level -3
// Name btn
// const nameInputField = document.getElementById("name");
// const btnNameDelete = document.getElementById("btnDeleteName");
// const btnSendName = document.getElementById("btnSendName");

// // Email btn
// const emailInputField = document.getElementById("email");
// const btnEmailDelete = document.getElementById("btnDeleteEmail");
// const btnSendEmail = document.getElementById("btnSendEmail");

// // Message btn
// const messageInputField = document.getElementById("message")
// const btnMessageDelete = document.getElementById("btnDeleteMessage");
// const btnSendMessage = document.getElementById("btnSendMessage");

// // Send btn
// const sendAll = document.getElementById("send-all");
// // Reset btn
// const btnReset = document.getElementById("reset");

// // Name
// btnSendName.addEventListener("click", () => {
//     const name = nameInputField.value;
//     localStorage.setItem("name", name)   
// })
// nameInputField.value = localStorage.getItem("name");
// btnNameDelete.addEventListener("click", () => {
//     localStorage.removeItem("name");
// })

// // Email
// btnSendEmail.addEventListener("click", () => {
//     const email = emailInputField.value;
//     localStorage.setItem("email", email)   
// })
// emailInputField.value = localStorage.getItem("email");
// btnEmailDelete.addEventListener("click", () => {
//     localStorage.removeItem("email");
// })

// // Message
// btnSendMessage.addEventListener("click", () => {
//     const message = messageInputField.value;
//     localStorage.setItem("message", message)   
// })
// messageInputField.value = localStorage.getItem("message");
// btnMessageDelete.addEventListener("click", () => {
//     localStorage.removeItem("message");
// })

// // Send
// sendAll.addEventListener("click", () => {
//     const formData = {
//         name : nameInputField.value,
//         email : emailInputField.value,
//         message : messageInputField.value
//     }

//     const formDataJSON = JSON.stringify(formData)
//     localStorage.setItem("formData", formDataJSON);

// })
// const formDataJSON = localStorage.getItem("formData")
// const formData = JSON.parse(formDataJSON)
// nameInputField.value = formData.name;
// emailInputField.value = formData.email;
// messageInputField.value = formData.message;

// // reseet
// btnReset.addEventListener("click", () => {
//     localStorage.clear()
//     nameInputField.value = "";
//     emailInputField.value = "";
//     messageInputField.value = "";
// })


