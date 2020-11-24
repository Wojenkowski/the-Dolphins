"use strict";

document.addEventListener("DOMContentLoaded", init);

function init(){
    
    let form = document.getElementById('form');
    form.addEventListener("submit", login)
}

function login(e){
        e.preventDefault();

        let myHeaders = new Headers();

        let user = document.getElementById('login').value;
        let pass = document.getElementById('pass').value

        let formdata = new FormData();
        formdata.append("username", user);
        formdata.append("password", pass);

        let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
        };

        let status;

        fetch("https://htf2020.zinderlabs.com/api/auth/login", requestOptions)
        .then(response => {
            status = response.status;

            return response.json();
        } )
        .then(result => {
            if(status === 200) {
                sessionStorage.setItem("token", result.access_token);
                window.location.replace("index.html");
            }else{
                throw new Error("Something went wrong");
            }
        })
        .catch(error => {
            document.querySelector('p').innerHTML = error;
        });
}