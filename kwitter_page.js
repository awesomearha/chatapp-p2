//YOUR FIREBASE LINKS
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

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}
