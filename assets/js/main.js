"use strict";

document.addEventListener("DOMContentLoaded", init);

function init(){
    showDatacenters();

}

function showDatacenters(){
    let myHeaders = new Headers();
    let bear = sessionStorage.getItem("token");
    myHeaders.append("Authorization", "Bearer " + bear);

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
            let html = " ";
            data.data.forEach(function (item){
                html = "<tr><td>"+item.id +"</td><td>"+item.name +"</td><td>"+item.location.lng +"</td> <td>"+item.location.lng +"</td><td>"+item.provider +"</td><td>"+item.inIsolation +"</td><td><button id="+item.id+" type=\"button\" class=\"btn btn-primary\">show errors</button></td></th></tr>";
                document.getElementsByTagName("tbody")[0].innerHTML += html;
            });
            let strains = document.querySelectorAll('button');

            for (let i = 0; i < strains.length; i++) {
                strains[i].addEventListener('click', nextpage);
            }
        }).catch(function (err) {
        console.log(err)
    });
}

function nextpage(e){
    console.log(e.target.id);
   window.location.href = "errors.html?id="+e.target.id;
}






