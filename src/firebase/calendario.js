// calendario.js
const express = require('express');
const router = express.Router();
const { getFirestore, collection, addDoc, getDocs, doc, deleteDoc } = require("firebase/firestore");
const { app } = require('./firebase'); // Asegúrate de tener la configuración de Firebase en un archivo
const db = getFirestore(app);

// Endpoint para obtener todos los eventos
router.get('/get-events', async (req, res) => {
    try {
        const snapshot = await getDocs(collection(db, 'events'));
        const events = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        res.json(events);
    } catch (error) {
        console.error('Error al obtener eventos:', error);
        res.status(500).json({ error: 'Error al obtener eventos' });
    }
});

// Endpoint para guardar un evento
router.post('/save', async (req, res) => {
    const { title, description, start, end } = req.body;

    if (!title || !start) {
        return res.status(400).json({ error: 'Faltan datos requeridos' });
    }

    try {
        const newEvent = {
            title,
            description,
            start: new Date(start),
            end: new Date(end),
        };
        const docRef = await addDoc(collection(db, 'events'), newEvent);
        res.status(201).json({ id: docRef.id, ...newEvent });
    } catch (error) {
        console.error('Error al guardar el evento:', error);
        res.status(500).json({ error: 'Error al guardar el evento' });
    }
});

// Endpoint para eliminar un evento
router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const eventRef = doc(db, 'events', id);
        await deleteDoc(eventRef);
        res.status(204).send(); // No content
    } catch (error) {
        console.error('Error al eliminar el evento:', error);
        res.status(500).json({ error: 'Error al eliminar el evento' });
    }
});

module.exports = router;
