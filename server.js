require('dotenv').config();
const Koa = require('koa');
const { koaBody } = require('koa-body');
const studentsRouter = require('./routes/students');
const connectToDb = require('./config/connectToDb');


const app = new Koa();

app.use(koaBody());
app.use(studentsRouter.routes());

connectToDb()
  .then(() => {
    app.listen(3000, () => {
      console.log('Server is running at http://localhost:3000');
    });
  })
  .catch((error) => console.error(error));
