"use strict";

document.addEventListener("DOMContentLoaded", init);

function init(){
    showDatacentersWithError();
}

function showDatacentersWithError(){
    let url = new URL (window.location.href);
    let id = url.searchParams.get("id");

    let myHeaders = new Headers();
    let bear = sessionStorage.getItem("token");
    if(bear== null){
        window.location.replace("index.html");
    }
    myHeaders.append("Authorization", "Bearer " + bear);
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






