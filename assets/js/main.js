"use strict";

document.addEventListener("DOMContentLoaded", init);

function init(){

    login();

}

function login(){

    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9odGYyMDIwLnppbmRlcmxhYnMuY29tXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjA2MjEwNzI2LCJleHAiOjE2MDYzOTA3MjYsIm5iZiI6MTYwNjIxMDcyNiwianRpIjoiNXBERjJIYjY5SWJ5Y3JCdiIsInN1YiI6OSwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9._ddCBmnzRZ-DZDm5Lgt03xryVhqU7S935FNqg_Y-6X0");

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    fetch('https://htf2020.zinderlabs.com/api/datacenters', requestOptions)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);
        })
        .catch(function (err) {
            console.log(err)
        });
}

