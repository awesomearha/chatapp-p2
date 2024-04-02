const firebaseConfig = {
    apiKey: "AIzaSyActiJUTkNwZozZcHTSMSLtp6gnj5Re6Ic",
    authDomain: "chat-app-f083a.firebaseapp.com",
    databaseURL: "https://chatapp-f083a-default-rtdb.firebaseio.com",
    projectId: "chat-app-f083a",
    storageBucket: "chat-app-f083a.appspot.com",
    messagingSenderId: "1000547842111",
    appId: "1:1000547842111:web:042728c31a65773ac9208a"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData()
{
    firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_name +"/div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}

function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
      
}