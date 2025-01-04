//endPoints.js
const express = require('express');
const router = express.Router();
const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");
const { getStorage, ref, uploadBytes, getDownloadURL, uploadBytesResumable } = require("firebase/storage");
const { getFirestore, collection, addDoc, getDocs, doc, getDoc, query, where, deleteDoc, setDoc } = require("firebase/firestore");
const { v4: uuidv4 } = require('uuid');
const multer  = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNdD_nYupB3f9phnvt85YrVIrFU8b-0WM",
  authDomain: "liceo-77ef7.firebaseapp.com",
  projectId: "liceo-77ef7",
  storageBucket: "liceo-77ef7.appspot.com",
  messagingSenderId: "437290497367",
  appId: "1:437290497367:web:189a9e451a53140fa87a12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// module.exports = { auth, db, storage, router };

// RUTAS
//REGISTRAR PROFESOR
router.post('/send-profesor', (req, res) => {
  try {
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
  const coleccionProfesores = collection(db, 'profesores'); // Utiliza la variable db que ya contiene la instancia de Firestore
  addDoc(coleccionProfesores, profesor)
    .then((docRef) => {
      console.log('Profesor registrado con ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error al agregar el profesor: ', error);
    });
  } catch (error) {
    throw error;
  }
});

//imagen
router.post('/upload-img', upload.single('img'),async(req, res) => {
  try {
    const img = req.file; // Aquí puedes acceder al archivo subido a través de req.file
  console.log(img);
  
  const uniqueFileName = uuidv4(); // Generar un UUID v4 para el nombre del archivo
  const storageRef = ref(storage, 'img-profesores/' + uniqueFileName);
 
  const metadata = {
    contentType: req.file.mimetype,
};

 
  const snapshot = await uploadBytesResumable(storageRef, img.buffer, metadata);
  
    // Grab the public url
  const downloadURL = await getDownloadURL(snapshot.ref);

    console.log('File successfully uploaded.');
    return res.send({
        message: 'file uploaded to firebase storage',
        name: req.file.originalname,
        type: req.file.mimetype,
        downloadURL: downloadURL
    })
} catch (error) {
    return res.status(400).send(error.message)
}
});

router.post('/registar-profesor', upload.single('img'),async (req, res) => {
  try {
    const { nombre, correo, edad, materia, cedula } = req.body;
    const img = req.file;

    //subir imagen
    const uniqueFileName = uuidv4(); // Generar un UUID v4 para el nombre del archivo
    const storageRef = ref(storage, 'img-profesores/' + uniqueFileName);
    const metadata = {
      contentType: img.mimetype,
    }
    const snapshot = await uploadBytesResumable(storageRef, img.buffer, metadata);
    const downloadURL = await getDownloadURL(snapshot.ref);

    // Crear objeto del profesor
    const profesor = {
      nombre,
      correo,
      edad,
      materia,
      cedula,
      imagen: downloadURL,
    };

    // Agregar el profesor a la colección 'profesores'
    const coleccionProfesores = collection(db, 'profesores');
    await addDoc(coleccionProfesores, profesor);
    res.send({
      message: 'Profesor registrado exitosamente',
      data: profesor
    });
    console.log(profesor,img);
  } catch (error) {
    
  }
});
//esto seria para agregarle la fecha a la imagen
/*
const giveCurrentDateTime = () => {
  const today = new Date();
  const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const dateTime = date + ' ' + time;
  return dateTime;
}
*/

//OBTENER PROFESORES
router.get('/profesores', async (req, res) => {
    try {
      const coleccionProfesores = collection(db, 'profesores');
      const querySnapshot = await getDocs(coleccionProfesores);
  
      let profesores = [];
      querySnapshot.forEach((doc) => {
        profesores.push({
          id: doc.id,
          data: doc.data()
        });
      });
  
      res.json(profesores);
    } catch (error) {
      console.error('Error al obtener los profesores: ', error);
      res.status(500).send('Error al obtener los profesores');
    }
  });


//ELIMINAR PROFESOR
// Definir una ruta DELETE para manejar la eliminación de un profesor
router.delete('/profesores/:id', async (req, res) => {
    const idProfesor = req.params.id;
    
    try {
        await deleteDoc(doc(db, 'profesores', idProfesor));
        console.log('Profesor eliminado correctamente');
        res.status(200).send('Profesor eliminado correctamente');
    } catch (error) {
        console.error('Error al eliminar el profesor:', error);
        res.status(500).send('Error al eliminar el profesor');
    }
});


router.delete('/delete-profesor/:id', async (req, res) => {
  const { id } = req.params;
  const coleccionProfesores = collection(db, 'profesores');
  const querySnapshot = await getDocs(coleccionProfesores);
  querySnapshot.forEach((doc) => {
    if (doc.id === id) {
      deleteDoc(doc.ref);
      res.send('Profesor eliminado correctamente');
    }
  });
});

router.get('/get-profesor/:id', async (req, res) => {
  const { id } = req.params;

  try {
      const coleccionProfesores = collection(db, 'profesores');
      const querySnapshot = await getDocs(coleccionProfesores);
      let profesorEncontrado = null;

      querySnapshot.forEach((doc) => {
          if (doc.id === id) {
              profesorEncontrado = {
                  id: doc.id,
                  data: doc.data()
              };
          }
      });

      if (profesorEncontrado) {
          res.json(profesorEncontrado);
          console.log("Profesor encontrado:", profesorEncontrado);
      } else {
          res.status(404).send('No se encontró ningún profesor con el ID proporcionado');
          console.log("No se encontró ningún profesor con el ID proporcionado");
      }
  } catch (error) {
      console.error('Error al buscar el profesor:', error);
      res.status(500).send('Error al buscar el profesor');
  }
});

// EDITAR PROFESOR
router.put('/edit-profesores/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, correo, edad, materia, cedula } = req.body;
  console.log(nombre, correo, edad, materia, cedula );
  
  try {
      const profesorRef = doc(db, 'profesores', id);
      const profesorSnapshot = await getDoc(profesorRef);
      
      if (profesorSnapshot.exists()) {
          // El documento existe, proceder con la actualización
          await setDoc(profesorRef, {
              nombre,
              correo,
              edad,
              materia,
              cedula
          }, { merge: true });
          
          console.log('Profesor actualizado correctamente');
          res.status(200).send('Profesor actualizado correctamente');
      } else {
          // El documento no fue encontrado
          console.error('El profesor con el ID proporcionado no fue encontrado');
          res.status(404).send('El profesor con el ID proporcionado no fue encontrado');
      }
  } catch (error) {
      console.error('Error al actualizar el profesor:', error);
      res.status(500).send('Error al actualizar el profesor');
  }
});


router.post('/send-crud',(req,res)=>{
    
    console.log('Index working');
    res.send('recibido');
    console.log(res)
});



//HORARIOS
// ******************5to Año****************************

//5to E
router.post('/add-horario-5toE', (req, res) => {
  const { lunes700, lunes745, lunes830, lunes915, lunes1000, lunes1045, lunes1130, martes700, martes745, martes830, martes915, martes1000, martes1045, martes1130, miercoles700, 
    miercoles745, miercoles830, miercoles915, miercoles1000, miercoles1045, miercoles1130, jueves700, jueves745, jueves830, jueves915, jueves1000, jueves1045, jueves1130,
    viernes700, viernes745, viernes830, viernes915, viernes1000, viernes1045, viernes1130
   } = req.body;
  console.log(lunes700, lunes745, lunes830, lunes915, lunes1000, lunes1045, lunes1130, martes700, martes745, martes830, martes915, martes1000, martes1045, martes1130, miercoles700, 
    miercoles745, miercoles830, miercoles915, miercoles1000, miercoles1045, miercoles1130, jueves700, jueves745, jueves830, jueves915, jueves1000, jueves1045, jueves1130,
    viernes700, viernes745, viernes830, viernes915, viernes1000, viernes1045, viernes1130);

    const horario5toE = {
      lunes700: lunes700 || '',
      lunes745: lunes745 || '',
      lunes830: lunes830 || '',
      lunes915: lunes915 || '',
      lunes1000: lunes1000 || '',
      lunes1045: lunes1045 || '',
      lunes1130: lunes1130 || '',
      martes700: martes700 || '',
      martes745: martes745 || '',
      martes830: martes830 || '',
      martes915: martes915 || '',
      martes1000: martes1000 || '',
      martes1045: martes1045 || '',
      martes1130: martes1130 || '',
      miercoles700: miercoles700 || '',
      miercoles745: miercoles745 || '',
      miercoles830: miercoles830 || '',
      miercoles915: miercoles915 || '',
      miercoles1000: miercoles1000 || '',
      miercoles1045: miercoles1045 || '',
      miercoles1130: miercoles1130 || '',
      jueves700: jueves700 || '',
      jueves745: jueves745 || '',
      jueves830: jueves830 || '',
      jueves915: jueves915 || '',
      jueves1000: jueves1000 || '',
      jueves1045: jueves1045 || '',
      jueves1130: jueves1130 || '',
      viernes700: viernes700 || '',
      viernes745: viernes745 || '',
      viernes830: viernes830 || '',
      viernes915: viernes915 || '',
      viernes1000: viernes1000 || '',
      viernes1045: viernes1045 || '',
      viernes1130: viernes1130 || ''
    };
  
    try {
      const coleccionProfesores = collection(db, 'horario-5toE'); // Utiliza la variable db que ya contiene la instancia de Firestore
      addDoc(coleccionProfesores, horario5toE)
      .then((docRef) => {
        console.log('horario registrado con ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error al agregar el horario: ', error);
      });
    } catch (error) {
      throw error;
    } 
}
)

//cargar horario
router.get('/ver-horario-5toE', async (req, res) => {
  try {
    const coleccionProfesores = collection(db, 'horario-5toE');
    const querySnapshot = await getDocs(coleccionProfesores);
  
    const horarioCargado = querySnapshot.docs.map(doc => ({
      id: doc.id,
      data: doc.data()
    }));
    
    res.json(horarioCargado);
    console.log("Horario cargado:", horarioCargado);
  } catch (error) {
    console.error('Error al obtener el horario:', error);
    res.status(500).send('Error al obtener el horario');
  }
});

//Modificar horario
router.put('/update-horario-5toE/:id', async (req, res) => {
  const { id } = req.params;
  const { lunes700, lunes745, lunes830, lunes915, lunes1000, lunes1045, lunes1130, martes700, martes745, martes830, martes915, martes1000, martes1045, martes1130, miercoles700, miercoles745, miercoles830, miercoles915, miercoles1000, miercoles1045, miercoles1130, jueves700, jueves745, jueves830, jueves915, jueves1000, jueves1045, jueves1130, viernes700, viernes745, viernes830, viernes915, viernes1000, viernes1045, viernes1130
  } = req.body;

  try {
    const horarioRef = doc(db, 'horario-5toE', id);
    const horarioSnapshot = await getDoc(horarioRef);

    if (horarioSnapshot.exists()) {
      // El documento existe, proceder con la actualización
      const updatedFields = Object.fromEntries(
        Object.entries({
          lunes700,
          lunes745,
          lunes830,
          lunes915,
          lunes1000,
          lunes1045,
          lunes1130,
          martes700,
          martes745,
          martes830,
          martes915,
          martes1000,
          martes1045,
          martes1130,
          miercoles700,
          miercoles745,
          miercoles830,
          miercoles915,
          miercoles1000,
          miercoles1045,
          miercoles1130,
          jueves700,
          jueves745,
          jueves830,
          jueves915,
          jueves1000,
          jueves1045,
          jueves1130,
          viernes700,
          viernes745,
          viernes830,
          viernes915,
          viernes1000,
          viernes1045,
          viernes1130
        }).filter(([, value]) => value !== undefined)
      );

      await setDoc(horarioRef, updatedFields, { merge: true });

      console.log('Horario actualizado correctamente');
      res.status(200).send('Horario actualizado correctamente');
    } else {
      // El documento no fue encontrado
      console.error('El horario con el ID proporcionado no fue encontrado');
      res.status(404).send('El horario con el ID proporcionado no fue encontrado');
    }
  } catch (error) {
    console.error('Error al actualizar el horario:', error);
    res.status(500).send('Error al actualizar el horario');
  }
});



const profesoresRoutes = require('./profesores'); // Importa tus rutas de profesores
// Usa las rutas de profesores
router.use('/profesores', profesoresRoutes);

const horariosRoutes = require('./horarios'); // Importa tus rutas de horarios
// Usa las rutas de horarios
router.use('/horarios', horariosRoutes);

const sesionRoutes = require('./sesion'); // Importa tus rutas de sesion
// Usa las rutas de sesion
router.use('/sesion', sesionRoutes);

const calendarioRoutes = require('./calendario'); // Importa tus rutas de calendario
// Usa las rutas de calendario
router.use('/calendario', calendarioRoutes);

module.exports = router;