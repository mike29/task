/**
 * Created by Michael M. Simon on 6/7/2018.
 */
import Task from './task.js';


(function () {
    let x = "Hello!!";      // I will invoke myself
    console.log(x);
})();

function getTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let taskDisplay = document.getElementById('taskDisplayContainer');


    taskDisplay.innerHTML = '';
}
