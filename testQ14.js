//changer ici météo ou ville
const data = { msg: "météo" };

fetch("http://localhost:8000/chat", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
})
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error(error));