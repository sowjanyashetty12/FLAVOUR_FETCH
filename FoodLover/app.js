window.onload = function(){
// app.js
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
    
    $('#login-btn').on('click', (e) => {
        e.preventDefault();
        const email = form.email.value;
        const password = form.password.value;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            if (!user.emailVerified) {
            user.sendEmailVerification()
                .then(() => {
                alert('A verification email has been sent to your email address. Please verify your email and sign in again.');
                })
                .catch((error) => {
                console.error(error);
                });
            } else {
            alert('Signed in successfully!');
            }
        })
        .catch((error) => {
            console.error(error);
        });
    });
}