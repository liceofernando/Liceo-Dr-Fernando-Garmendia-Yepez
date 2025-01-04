// horario.js
const express = require('express');
const router = express.Router();
const { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, setDoc, getDoc, query, where } = require("firebase/firestore");

const { app } = require('./firebase'); // Asegúrate de tener la configuración de Firebase en un archivo
const db = getFirestore(app);

router.get('/update/:year/:seccion', async (req, res) => {
    const { year, seccion } = req.params;
    console.log(`ID del documento: ${year}Año-${seccion}`);
    
    try {
        const docRef = doc(db, 'horarios', `${year}Año-${seccion}`); // Esto está bien
        const docSnap = await getDoc(docRef); // Usar getDoc para obtener el documento
  
        if (!docSnap.exists()) {
            return res.status(404).json({ error: 'Horario no encontrado' });
        }
        res.json(docSnap.data());
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el horario' });
    }
  });

// Endpoint para crear o actualizar un horario
router.post('/save', async (req, res) => {
    console.log('Datos recibidos:', req.body); // Agrega esta línea para ver los datos

    const { año, seccion, data } = req.body;

    if (!año || !seccion || !data) {
        return res.status(400).json({ error: 'Faltan datos requeridos' });
    }

    try {
        const docRef = doc(db, 'horarios', `${año}Año-${seccion}`); // Referencia al documento
        await setDoc(docRef, { data }); // Usar setDoc para guardar el horario
        res.json({ message: 'Horario guardado correctamente' });
    } catch (error) {
        console.error('Error al guardar el horario:', error); // Agrega esta línea
        res.status(500).json({ error: 'Error al guardar el horario' });
    }
});

// Endpoint para obtener todas las secciones disponibles para un año
router.get('/secciones/:año', async (req, res) => {
    try {
        const q = query(collection(db, 'horarios'), where('año', '==', req.params.año)); // Usar query para filtrar
        const snapshot = await getDocs(q); // Obtener los documentos que cumplen la condición
        const secciones = [];
        snapshot.forEach(doc => {
            secciones.push(doc.id.split('-')[1]);
        });
        res.json(secciones);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las secciones' });
    }
});

module.exports = router;
