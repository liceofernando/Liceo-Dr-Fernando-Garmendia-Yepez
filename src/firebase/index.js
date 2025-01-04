const {Router} = require('express');
const router = Router();
const ap = require('./app');

ap.listen(ap.get('port'));
console.log('Server running on port', ap.get('port'));

router.get('/',(req,res)=>{
    
    console.log('Index working');
    res.send('recibido');
});
