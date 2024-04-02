const firebaseConfig = {
    apiKey: "AIzaSyActiJUTkNwZozZcHTSMSLtp6gnj5Re6Ic",
    authDomain: "chat-app-f083a.firebaseapp.com",
    databaseURL: "https://chat-app-f083a-default-rtdb.firebaseio.com",
    projectId: "chat-app-f083a",
    storageBucket: "chat-app-f083a.appspot.com",
    messagingSenderId: "1000547842111",
    appId: "1:1000547842111:web:042728c31a65773ac9208a"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  function addUser() {
    user_name = document.getElementById("user_name").ariaValueMax;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}