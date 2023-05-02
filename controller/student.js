const Student = require("../model/student");

const studentController = {
  getAll: async () => Student.find(),
  getById: async (id) => Student.findById(id),
  create: async (student) => Student.create(student),
};

module.exports = studentController;
