const asyncHandler = require ("express-async-handler");
const User = require("../models/challenge-models")



const createUsers = asyncHandler(async (req, res) =>{
 const createUsers = await user.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirmation: req.body.passwordConfirmation,
    
 });
 res.status(201).json({ message: "Utilizador Criado com Sucesso!"})

 if (password !== passwordConfirmation) errors.passwordConfirmation = "As senhas não coincidem.";

 try {
    const existingUser = await user.findOne({ email: email });
    if (existingUser) {
      errors.email = "O email já está em uso.";
    }
  } catch (error) {
    return res.status(500).json({errors: { server: error.message } });
  }
});

const createUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
  
    try {
   
      const existingUser = await user.findOne({ email: email });
      if (!existingUser) {
        return res.status(404).json({ message: 'Utilizador não encontrado.' });
      }
  
     
      if (existingUser.password !== password) {
        return res.status(401).json({ message: 'A password introduzida é inválida!' });
      }
  
     
      res.status(200).json({ message: 'Autenticação bem-sucedida.',  });
    } catch (error) {
      res.status(500).json({ errors: { server: error.message } });
    }
  });

const getAllUsers = asyncHandler(async (req, res) => {
 const users = await User.find();

 res.status(200).json({ message: "Todos Users"})

});

const getUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    res.status(200).json({ message: "Obter User"})
})

module.exports = { createUsers, createUser, getAllUsers, getUser};