
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBZZtZMLaBmcPq54UbJPJfjH2Q7EQC8J6E",
      authDomain: "kwitter-540ac.firebaseapp.com",
      databaseURL: "https://kwitter-540ac-default-rtdb.firebaseio.com",
      projectId: "kwitter-540ac",
      storageBucket: "kwitter-540ac.appspot.com",
      messagingSenderId: "635590586872",
      appId: "1:635590586872:web:973f4b465bf92258f0e60d"
    };
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
    
    firebase.initializeApp(firebaseConfig);
    function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"   });
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Names - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)'># " + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML = row;


      //End code
      });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location("kwitter_page.html");
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}