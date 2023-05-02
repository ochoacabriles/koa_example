const Router = require('@koa/router');
const studentsController = require('../controller/student');

const studentsRouter = new Router({ prefix: '/students' });

studentsRouter.get('/', async (ctx) => {
  ctx.body = await studentsController.getAll();
});

studentsRouter.get('/:id', async (ctx) => {
  const student = await studentsController.getById(ctx.params.id);
  if (student) {
    ctx.body = student;
  } else {
    ctx.status = 404;
  }
});

studentsRouter.post('/', async (ctx) => {
  const studentData = ctx.request.body;
  const student = await studentsController.create(studentData);
  ctx.body = student;
});

module.exports = studentsRouter;
