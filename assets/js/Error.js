"use strict";

document.addEventListener("DOMContentLoaded", init);

function init(){
    showDatacentersWithError();
}

function showDatacentersWithError(){
    let url = new URL (window.location.href);
    let id = url.searchParams.get("id");
    console.log(id);
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9odGYyMDIwLnppbmRlcmxhYnMuY29tXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjA2MjEwNzI2LCJleHAiOjE2MDYzOTA3MjYsIm5iZiI6MTYwNjIxMDcyNiwianRpIjoiNXBERjJIYjY5SWJ5Y3JCdiIsInN1YiI6OSwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9._ddCBmnzRZ-DZDm5Lgt03xryVhqU7S935FNqg_Y-6X0");

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch('https://htf2020.zinderlabs.com/api/datacenters/'+id+'/errors', requestOptions)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);
            let html = " ";
            data.data.forEach(function (item){
                html = "<tr><td>"+item.datacenterId +"</td><td>"+item.id +"</td><td>"+item.errorTypeId +"</td> <td>"+item.errorTypeLabel +"</td><td>"+item.createdAt +"</td></td></th></tr>";
                document.getElementsByTagName("tbody")[0].innerHTML += html;
            });
        }).catch(function (err) {
        console.log(err)
    });
}






