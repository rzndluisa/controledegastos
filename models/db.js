const mongoose = require('mongoose');

// Conexão com o MongoDB
const connectDB=() =>{
    mongoose.connect('mongodb+srv://rzndluisa:9unWO6zgv38qd8nf@cluster0.jeln2.mongodb.net');

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Erro na conexão com o MongoDB:'));
    db.once('open', () => console.log ('Conectado ao MongoDB.'));
};

module.exports = connectDB;