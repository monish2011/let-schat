//YOUR FIREBASE LINKS
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
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
Name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + Name + "<ring class = 'user_tick' src = 'tick.png'></h4>";
message_with_tag = "<h4 class='message_4'>"+ message+"</h4>";
like_button = "<button class='btn btn-success' id=" + firebase_message_id +" value=" +like+"onclick='updateLike(this.id)'>";
span_with_tag  = "<span class = 'glyphicon glyphicon-thumbs-up'> Like:"+like+"</span></button><hr>"; 
row = name_with_tag + message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML += row;


//End code
    } });  }); }
getData();
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}
function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like: 0


    });
    document.getElementById("msg").value = "";
}

function updateLike(message_id){
    console.log("clicked on the button - "+ message_id)
    button_id=message_id;
    likes = document.getElementById(button_id).value;
    updated_likes=Number(likes)+1;
    console.log(updated_liked);
    firebase.database().ref(room_name).child(message_id).update({
          likes: updated_likes
    })

}