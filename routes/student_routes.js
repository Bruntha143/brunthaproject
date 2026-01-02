const express = require("express");
const router = express.Router();
let students = [
    {
        id: 1, name: "John", age: 20, dept: 'CSE'
    },
    {
        id: 2, name: "Jane", age: 22, dept: 'CSE'
    }
];

router.get('/', (req, res) => {
    res.json(students);
});

router.put('/', (req, res) => {
    const updates = req.body;
    updates.forEach(update => {
        students = students.map(student =>
            student.id === update.id ? { ...student, name: update.name, age: update.age, dept: update.dept } : student
        );
    });
    res.json(students);



});

router.post('/', (req, res) => {
    const newStudent = req.body;
    students.push(newStudent);
    res.status(201).json({
        message: "Student Added Successfully" ,students});
});
module.exports = router;
