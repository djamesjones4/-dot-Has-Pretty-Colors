$(document).ready(function(){



  function allowDrop(event) {
      ev.preventDefault();
  }

  function drag(event) {
      ev.dataTransfer.setData("text", ev.target.id);
  }

  function drop(event) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));
  }















})
