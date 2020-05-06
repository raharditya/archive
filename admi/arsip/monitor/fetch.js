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


function inflater(doc){
    console.log("inflating...");
    const body = document.querySelector('body');
    const wrapper = document.createElement('section');

    // Univ Header constructor
    const contentWrapper = document.createElement('div');
    const univWrapper = document.createElement('div');
    const univTitle = document.createElement('h3');
    const univSubtitle = document.createElement('p');

    contentWrapper.classList.add('content-wrapper');
    univWrapper.classList.add('univ-wrapper');
    univTitle.classList.add('univ-title');
    univSubtitle.classList.add('univ-subtitle');

    univTitle.textContent = doc.data().univ;
    univSubtitle.textContent = doc.data().keanggotaan + ' - ' + doc.data().subtema;

    // Info setion 1 constructor
    const infoWrapper = document.createElement('table');
    infoWrapper.classList.add('info-wrapper');

    const header = document.createElement('tr');
    const delegasi = document.createElement('th');
    const name = document.createElement('th');
    const ttl = document.createElement('th');
    const kota = document.createElement('th');
    const angkatan = document.createElement('th');
    const email = document.createElement('th');
    const tel = document.createElement('th');
    const sosmed = document.createElement('th');
    const penyakit = document.createElement('th');

    delegasi.textContent = ' ';
    name.textContent = 'Nama';
    ttl.textContent = 'Tempat Tanggal Lahir';
    kota.textContent = 'Kota Asal';
    angkatan.textContent = 'Angkatan';
    email.textContent = 'Email';
    tel.textContent = 'Nomor Telepon';
    sosmed.textContent = 'Social Media';
    penyakit.textContent = 'Riwayat Penyakit';

    const row1 = document.createElement('tr');
    const deleg1 = document.createElement('td');
    const name1 = document.createElement('td');
    const ttl1 = document.createElement('td');
    const kota1 = document.createElement('td');
    const angkatan1 = document.createElement('td');
    const email1 = document.createElement('td');
    const tel1 = document.createElement('td');
    const sosmed1 = document.createElement('td');
    const penyakit1 = document.createElement('td');

    row1.classList.add('row', 'row1');
    deleg1.classList.add('col', 'deleg');
    name1.classList.add('col', 'name1');
    ttl1.classList.add('col', 'ttl1');
    kota1.classList.add('col', 'kota1');
    angkatan1.classList.add('col', 'angkatan1');
    email1.classList.add('col', 'email1');
    tel1.classList.add('col', 'tel1');
    sosmed1.classList.add('col', 'sosmed1');
    penyakit1.classList.add('col', 'penyakit1');

    deleg1.textContent = 'Delegasi 1'
    name1.textContent = doc.data().nama1;
    ttl1.textContent = doc.data().ttl1;
    kota1.textContent = doc.data().kota1;
    angkatan1.textContent = doc.data().angkatan1;
    email1.textContent = doc.data().email1;
    tel1.textContent = doc.data().tel1;
    sosmed1.textContent = doc.data().sosmed1;
    penyakit1.textContent = doc.data().penyakit1;

    // Info section 2
    const row2 = document.createElement('tr');
    const deleg2 = document.createElement('td');
    const name2 = document.createElement('td');
    const ttl2 = document.createElement('td');
    const kota2 = document.createElement('td');
    const angkatan2 = document.createElement('td');
    const email2 = document.createElement('td');
    const tel2 = document.createElement('td');
    const sosmed2 = document.createElement('td');
    const penyakit2 = document.createElement('td');

    row2.classList.add('row', 'row2');
    deleg2.classList.add('col', 'deleg');
    name2.classList.add('col', 'name2');
    ttl2.classList.add('col', 'ttl2');
    kota2.classList.add('col', 'kota2');
    angkatan2.classList.add('col', 'angkatan2');
    email2.classList.add('col', 'email2');
    tel2.classList.add('col', 'tel2');
    sosmed2.classList.add('col', 'sosmed2');
    penyakit2.classList.add('col', 'penyakit2');

    deleg2.textContent = 'Delegasi 2'
    name2.textContent = doc.data().nama2;
    ttl2.textContent = doc.data().ttl2;
    kota2.textContent = doc.data().kota2;
    angkatan2.textContent = doc.data().angkatan2;
    email2.textContent = doc.data().email2;
    tel2.textContent = doc.data().tel2;
    sosmed2.textContent = doc.data().sosmed2;
    penyakit2.textContent = doc.data().penyakit2;

    // Info section 3
    const row3 = document.createElement('tr');
    const deleg3 = document.createElement('td');
    const name3 = document.createElement('td');
    const ttl3 = document.createElement('td');
    const kota3 = document.createElement('td');
    const angkatan3 = document.createElement('td');
    const email3 = document.createElement('td');
    const tel3 = document.createElement('td');
    const sosmed3 = document.createElement('td');
    const penyakit3 = document.createElement('td');

    row3.classList.add('row', 'row3');
    deleg3.classList.add('col', 'deleg');
    name3.classList.add('col', 'name3');
    ttl3.classList.add('col', 'ttl3');
    kota3.classList.add('col', 'kota3');
    angkatan3.classList.add('col', 'angkatan3');
    email3.classList.add('col', 'email3');
    tel3.classList.add('col', 'tel3');
    sosmed3.classList.add('col', 'sosmed3');
    penyakit3.classList.add('col', 'penyakit3');

    deleg3.textContent = 'Delegasi 3'
    name3.textContent = doc.data().nama3;
    ttl3.textContent = doc.data().ttl3;
    kota3.textContent = doc.data().kota3;
    angkatan3.textContent = doc.data().angkatan3;
    email3.textContent = doc.data().email3;
    tel3.textContent = doc.data().tel3;
    sosmed3.textContent = doc.data().sosmed3;
    penyakit3.textContent = doc.data().penyakit3;

    // Info section 4
    const row4 = document.createElement('tr');
    const deleg4 = document.createElement('td');
    const name4 = document.createElement('td');
    const ttl4 = document.createElement('td');
    const kota4 = document.createElement('td');
    const angkatan4 = document.createElement('td');
    const email4 = document.createElement('td');
    const tel4 = document.createElement('td');
    const sosmed4 = document.createElement('td');
    const penyakit4 = document.createElement('td');

    row4.classList.add('row', 'row4');
    deleg4.classList.add('col', 'deleg');
    name4.classList.add('col', 'name4');
    ttl4.classList.add('col', 'ttl4');
    kota4.classList.add('col', 'kota4');
    angkatan4.classList.add('col', 'angkatan4');
    email4.classList.add('col', 'email4');
    tel4.classList.add('col', 'tel4');
    sosmed4.classList.add('col', 'sosmed4');
    penyakit4.classList.add('col', 'penyakit4');

    deleg4.textContent = 'Delegasi 4'
    name4.textContent = doc.data().nama4;
    ttl4.textContent = doc.data().ttl4;
    kota4.textContent = doc.data().kota4;
    angkatan4.textContent = doc.data().angkatan4;
    email4.textContent = doc.data().email4;
    tel4.textContent = doc.data().tel4;
    sosmed4.textContent = doc.data().sosmed4;
    penyakit4.textContent = doc.data().penyakit4;


    // Univ header attacher
    univWrapper.appendChild(univTitle);
    univWrapper.appendChild(univSubtitle);
    contentWrapper.appendChild(univWrapper);
    wrapper.appendChild(contentWrapper);

    // Info section attacher
    header.appendChild(delegasi);
    header.appendChild(name);
    header.appendChild(ttl);
    header.appendChild(kota);
    header.appendChild(angkatan);
    header.appendChild(email);
    header.appendChild(tel);
    header.appendChild(sosmed);
    header.appendChild(penyakit);
    infoWrapper.appendChild(header);

    row1.appendChild(deleg1);
    row1.appendChild(name1);
    row1.appendChild(ttl1);
    row1.appendChild(kota1);
    row1.appendChild(angkatan1);
    row1.appendChild(email1);
    row1.appendChild(tel1);
    row1.appendChild(sosmed1);
    row1.appendChild(penyakit1);
    infoWrapper.appendChild(row1);

    row2.appendChild(deleg2);
    row2.appendChild(name2);
    row2.appendChild(ttl2);
    row2.appendChild(kota2);
    row2.appendChild(angkatan2);
    row2.appendChild(email2);
    row2.appendChild(tel2);
    row2.appendChild(sosmed2);
    row2.appendChild(penyakit2);
    infoWrapper.appendChild(row2);

    row3.appendChild(deleg3);
    row3.appendChild(name3);
    row3.appendChild(ttl3);
    row3.appendChild(kota3);
    row3.appendChild(angkatan3);
    row3.appendChild(email3);
    row3.appendChild(tel3);
    row3.appendChild(sosmed3);
    row3.appendChild(penyakit3);
    infoWrapper.appendChild(row3);

    row4.appendChild(deleg4);
    row4.appendChild(name4);
    row4.appendChild(ttl4);
    row4.appendChild(kota4);
    row4.appendChild(angkatan4);
    row4.appendChild(email4);
    row4.appendChild(tel4);
    row4.appendChild(sosmed4);
    row4.appendChild(penyakit4);
    infoWrapper.appendChild(row4);

    contentWrapper.appendChild(infoWrapper);
    wrapper.appendChild(contentWrapper);
    body.appendChild(wrapper);

    console.log("Inflated!");
}

db.collection('peserta').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        console.log(doc.data());
        inflater(doc);
    })
})