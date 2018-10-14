import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/styles.scss';
import Classrooms from './Classrooms.js';
import Students from './Students.js';
import $ from 'jquery';



$(document).ready(function(){
  let newClassroom = new Classrooms();
  for(let i = 0; i < 20; i++){
    let newStudent1 = new Students("male", "race", "reading", "writing", "math", "sped", "behavior", "nopair");
    let newStudent2 = new Students("female", "race", "reading", "writing", "math", "sped", "behavior", "nopair");
    newClassroom.studentsArray.push(newStudent1);
    newClassroom.studentsArray.push(newStudent2);
  }
  newClassroom.sortClass(3);
  console.log(newClassroom);
});
