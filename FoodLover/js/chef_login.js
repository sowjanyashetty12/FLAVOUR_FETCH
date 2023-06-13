const toggleForm = () => {
    const container = document.querySelector('.container');
    container.classList.toggle('active');
  };

   // Paste the code from Firebase
   const firebaseConfig = {
    apiKey: "AIzaSyBP9Lg6yZ6HjGIR_wDEqu81GoGOk-RJ-HI",
    authDomain: "flavourfetch-2caa3.firebaseapp.com",
    databaseURL: "https://flavourfetch-2caa3-default-rtdb.firebaseio.com",
    projectId: "flavourfetch-2caa3",
    storageBucket: "flavourfetch-2caa3.appspot.com",
    messagingSenderId: "175775485186",
    appId: "1:175775485186:web:fbda4bfd8dea75d0cc061b",
    measurementId: "G-00D4MP5458"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.getElementById("loginbtn").addEventListener('click', e=>{
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
    console.log(error.message);
  });
  const promise = firebase.auth().signInWithEmailAndPassword(email, pass);
  promise.catch(e=>{ console.log(e.message)})
})

firebase.auth().onAuthStateChanged(user=>{ 
  if(user){
    document.getElementById("logout").classList.remove('hide')
  } else{
    document.getElementById("logout").classList.add('hide')
  }
})

document.getElementById("logout").addEventListener('click', e=>{
  firebase.auth().signOut();
  alert('logged out')
})