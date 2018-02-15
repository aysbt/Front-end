$(document).ready( function() {

    //This code will run after your page loads

    $(".yeti").mousedown(function() {
        alert("Yaaaarrrr!");
    });

});

var div = document.createNode('div');
div.innerHTML ="Hello Udacity";
var parent = document.querySelector('#parent');
parent.appendChild(div);

('#parent').append("<div>Hello Udacity."</div>);
