/*
const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");
const { getStorage, ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const { getFirestore, collection, addDoc, getDocs, doc, getDoc, query, where, deleteDoc, setDoc } = require("firebase/firestore");

const express = require('express');
const router = express.Router();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBECB8VVsQUVxMwvmjPxv-oRsc9jf-0Ko8",
  authDomain: "fire-ce64b.firebaseapp.com",
  projectId: "fire-ce64b",
  storageBucket: "fire-ce64b.appspot.com",
  messagingSenderId: "608401885057",
  appId: "1:608401885057:web:b02a3944529d46c1014a80"
};

// Initialize Firebase
const { app } = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

module.exports = { auth, db, storage, router };

router.post('/send-profesor', (req, res) => {
  console.log('Index working');
  res.send('recibido');
  const { nombre, correo, edad, materia, cedula } = req.body;
  const profesor = {
    nombre,
    correo,
    edad,
    materia,
    cedula
  };
  console.log(profesor);
  const coleccionProfesores = db.collection('profesores');
  coleccionProfesores.add(profesor);
});

*/