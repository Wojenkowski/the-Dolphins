"use strict";

document.addEventListener("DOMContentLoaded", init);

function init(){

    login();

}

async function login(url = 'https://htf2020.zinderlabs.com/api/datacenters', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            '"Authorization"': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9odGYyMDIwLnppbmRlcmxhYnMuY29tXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjA2MjEwNzI2LCJleHAiOjE2MDYzOTA3MjYsIm5iZiI6MTYwNjIxMDcyNiwianRpIjoiNXBERjJIYjY5SWJ5Y3JCdiIsInN1YiI6OSwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9._ddCBmnzRZ-DZDm5Lgt03xryVhqU7S935FNqg_Y-6X0'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

postData('https://example.com/answer', { answer: 42 })
    .then(data => {
        console.log(data); // JSON data parsed by `data.json()` call
    });

/* fetch('https://htf2020.zinderlabs.com/api/login').then(function(response) {
     return response.json();
 }).then(function(json) {
     let products = json;
     console.log(products);
 }).catch(function(err) {
     console.log('Fetch problem: ' + err.message);
 });*/
