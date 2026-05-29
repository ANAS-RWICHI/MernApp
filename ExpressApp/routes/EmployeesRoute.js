const express = require('express');
const employeeController = require('../Controllers/EmployeesController.js');
const router = express.Router();

//get all employees
router.get('/', employeeController.getEmployees);
//add new employee
router.post('/add', employeeController.addEmployee);
//get employee by id
router.get('/:id', employeeController.getEmployeeById);
//update employee
router.put('/:id/update', employeeController.updateEmployee);
//delete employee
router.delete('/:id/delete', employeeController.deleteEmployee);


module.exports = router;