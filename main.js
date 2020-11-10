var P1_ID = null;
var P2_ID = null;
function storeUser(){
     P1_ID = document.getElementById("P1_name").value;
     P2_ID = document.getElementById("P2_name").value;
     localStorage.setItem("P1_name", P1_ID);
     localStorage.setItem("P2_name", P2_ID);
     window.location = "game.html";
}



