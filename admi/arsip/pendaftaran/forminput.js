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
    const submit = document.querySelector('.submit-btn');
    const loader = document.querySelector('.loader-wrapper')

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        loader.setAttribute('style', 'display: block');

        db.collection('peserta').add({
            univ: form.university.value,
            nama1: form.name1.value,
            nama2: form.name2.value,
            nama3: form.name3.value, 
            nama4: form.name4.value,
            angkatan1: form.angkatan1.value,
            angkatan2: form.angkatan2.value,
            angkatan3: form.angkatan3.value,
            angkatan4: form.angkatan4.value,
            ttl1: form.ttl1.value,
            ttl2: form.ttl2.value,
            ttl3: form.ttl3.value,
            ttl4: form.ttl4.value,
            kota1: form.kota1.value,
            kota2: form.kota2.value,
            kota3: form.kota3.value,
            kota4: form.kota4.value,
            email1: form.email1.value,
            email2: form.email2.value,
            email3: form.email3.value,
            email4: form.email4.value,
            tel1: form.tel1.value,
            tel2: form.tel2.value,
            tel3: form.tel3.value,
            tel4: form.tel4.value,
            sosmed1: form.sosmed1.value,
            sosmed2: form.sosmed2.value,
            sosmed3: form.sosmed3.value,
            sosmed4: form.sosmed4.value,
            penyakit1: form.penyakit1.value,
            penyakit2: form.penyakit2.value,
            penyakit3: form.penyakit3.value,
            penyakit4: form.penyakit4.value,
            keanggotaan: form.keanggotaan.value,
            subtema: form.subtema.value
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            form.reset();
            submit.textContent = 'Pendaftaran Berhasil';
            submit.setAttribute('class', 'submit-btn success');
            loader.setAttribute('style', 'display: none');
            
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
            submit.textContent= 'Terjadi Kesalahan';
            submit.setAttribute('class', 'submit-btn failed');
            loader.setAttribute('style', 'display: none');
        });
    })
    