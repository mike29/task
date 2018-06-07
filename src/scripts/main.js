/**
 * Created by Michael M. Simon on 6/7/2018.
 */
import Task from './task.js';


(function () {
   let t = new Task(123, 'title', 'desc', 'high', 'Mike', 'done');
   let id = t.getId('123');
   let title = t.getTitle();
   let desc = t.getDesc('Some description');

   console.log(id + title + desc);

})();

function getTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let taskDisplay = document.getElementById('taskDisplayContainer');


    taskDisplay.innerHTML = '';
}
