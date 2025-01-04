// sesion.js
const express = require('express');
const router = express.Router();
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");
const { getFirestore, collection, addDoc, getDocs, doc, getDoc, query, where, deleteDoc, setDoc } = require("firebase/firestore");

const { app } = require('./firebase'); // Asegúrate de tener la configuración de Firebase en un archivo
const auth = getAuth(app);



router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user; // Accede al usuario desde las credenciales
  
      if (user) {
        const token = await user.getIdToken();
        res.status(200).json({ token });
      } else {
        res.status(401).send('No se pudo obtener el token de autenticación');
      }
    } catch (error) {
      console.log(error);
      res.status(401).send('Credenciales inválidas o error en la autenticación');
    }
  });
  
module.exports = router;