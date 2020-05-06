var firebaseConfig = {
apiKey: "AIzaSyB0avl9w02fhuC1Rz6qnPbxzdt-bP2H_lM",
authDomain: "temu-admi-2019.firebaseapp.com",
databaseURL: "https://temu-admi-2019.firebaseio.com",
projectId: "temu-admi-2019",
storageBucket: "temu-admi-2019.appspot.com",
messagingSenderId: "555978522723",
appId: "1:555978522723:web:caf04bec6c89902e"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const form = document.querySelector('#actual-form');
const submit = document.querySelector('.submit-btn')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('peserta').add({
        univ: form.university.value,
        nama1: form.name1.value,
        nama2: form.name2.value,
        nama3: form.name3.value, 
        nama4: form.name4.value
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        form.reset();
        submit.textContent = 'Pendaftaran Berhasil';
        submit.setAttribute('class', 'submit-btn success')
        
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
        submit.textContent= 'Terjadi Kesalahan';
        submit.setAttribute('class', 'submit-btn failed');
    });
})
