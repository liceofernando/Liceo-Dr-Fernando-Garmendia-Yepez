//profesores.js
const express = require('express');
const router = express.Router();
const { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, setDoc } = require("firebase/firestore");
const { v4: uuidv4 } = require('uuid');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

const { app } = require('./firebase'); // Asegúrate de tener la configuración de Firebase en un archivo
const db = getFirestore(app);

// Rutas para manejar profesores
router.get('/tirar', async (req, res) => {
   return res.send('Hello World!!!');
});

router.get('/check-prof', async (req, res) => {
   return res.send('checkeado!!!');
});

// Otras rutas para manejar profesores...

module.exports = router;

