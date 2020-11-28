const express = require('express');
const User = require('../models/user');

// declaração de rotas 

const router = express.Router();

//rota para envio dos dados

router.post('/register', async (req,res)=>{


    // testa se o usuário foi enviado, em caso de erro ele retorna a falha
try{

    const user = await User.create(req.body);

    return res.send({ user});
    

}catch(err){
    
    return res.status(400).send({error: 'Falha no registro'});

}

})

module.exports = app => app.use('/auth', router);