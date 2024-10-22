const express =require('express');
const app = express();
const port=8000;
app.get('/',(req,res) => {
    res.send('Test');

});
app.listen(port,()=>{
    console.log(`Application à l écoute sur le port ${port} !` );
});