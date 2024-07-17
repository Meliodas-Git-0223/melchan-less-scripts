let namestr = document.querySelector('.namesbl').value;

let names = namestr.split(',');

let warning = document.querySelector('.namecheck');

let name;

let button = document.querySelector('.submitbutt')

function check(element){
    let tr;
    let name;
    name = element.value;

    fetch('/api/checkname/' + name)
        .then(response => response.json())
        .then(data => {
            // Process the data received from the server
            if (data == 1) {
                tr = 'занято'
                button.disabled = true;
            } else {
                tr = 'свободно'
                button.disabled = false;
            }
            warning.textContent = 'Имя' + ' ' + name + ' ' + tr;
            console.log(data);
        })
        .catch(error => {
            // Handle any errors that occurred during the request
            console.error('Error:', error);
        });
}





/**dddddddddddddddddddddddddddddd */
/*
let name = document.querySelector(".name");
let password = document.querySelector(".password");

const url = '/data';
const xhr = new XMLHttpRequest();

const formData = new FormData();


function send(){
	formData.append('name', name.value);
	formData.append('message', password.value);
	xhr.open('POST', url, true);
	xhr.send(formData);
}

*/

