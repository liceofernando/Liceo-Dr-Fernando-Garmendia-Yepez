// Import the functions you need from the SDKs you need
/*
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage"
import { getFirestore, collection, addDoc, getDocs, doc,getDoc, query, where,deleteDoc,setDoc } from "firebase/firestore";

import express from 'express';
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
export const app = initializeApp(firebaseConfig);

const auth  = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {auth,db,storage}



////RUTAS

router.post('/send-profesor',(req,res)=>{
    
  console.log('Index working');
  res.send('recibido');
  const {nombre,
  correo,
  edad,
  materia,
  cedula} = req.body
  const profesor = {
      nombre,
      correo,
      edad,
      materia,
      cedula
  }
  console.log(profesor);

 
});

*/