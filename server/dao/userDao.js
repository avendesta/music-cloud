const db = require('../database')

// retrieve all students
exports.getAll = function(){
    // return db.students
    return "implement";
}

// retrieve a student by id
exports.getById = function(id){
    // return db.students.filter(s => s.id==id)
    return "implement";
}

// add a student
exports.addOne = function(student){
    // db.students.push(student)
    return "implement";
    return true
}

// delete a student by id
exports.removeOne = function(id){
    // db.students = db.students.filter(s => s.id != id)
    return "implement";
    return true
}

// replace a student
exports.replaceOne = function(student){
    // db.students = db.students.filter(s => s.id != student.id)
    // db.students.push(student)
    return "implement";
    return true
}
