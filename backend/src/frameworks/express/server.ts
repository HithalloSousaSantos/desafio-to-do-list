import express from 'express';
import routes from './routes/routes';
import path from 'path';
import conexaoBanco from '../sequelize/models/AutenticateBD';

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));


// app.use(express.static(path.resolve(__dirname, 'frontend')));

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'));
// });

app.locals.editSuccess = false;

app.use(express.json())

app.use(routes);

conexaoBanco().then(() => {
    app.emit('pronto');
}).catch((erro: any) => {
    console.error('Erro ao conectar no banco de dados: ', erro);
});

app.on('pronto', () => {
    app.listen(3003, () => {
        console.log('Servidor executando na porta 3003.');
        console.log('Acessar http://localhost:3003');
    });
});
