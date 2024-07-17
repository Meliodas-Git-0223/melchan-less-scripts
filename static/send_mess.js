let message = document.querySelector(".message");

const url = '/newmessage';
const xhr = new XMLHttpRequest();

const formData = new FormData();


function send(){
	formData.append('message', message.value);
	xhr.open('POST', url, true);
	xhr.send(formData);
}
