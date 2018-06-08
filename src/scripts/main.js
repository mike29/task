/**
 * Created by Michael M. Simon on 6/7/2018.
 */
import Task from './task.js';
import DataService from '../services/data.service.js';
import View from '../lib/viewLib.js';


(()=> {
   // getTasks();

    let elements = {
        taskDisplay: document.getElementById('taskDisplayContainer'),
        saveForm: document.getElementById('taskInputForm'),
        description: document.getElementById('taskDescription'),
        assignTo: document.getElementById('taskAssignTo'),
        title: document.getElementById('taskTitle'),
        priority: document.getElementsByName('options')
    };

    elements.saveForm.addEventListener('submit', storeTask);
    function storeTask(e) {
        e.preventDefault();
        let $id = chance.guid();
        let $title = elements.title.value;
        let $desc = elements.description.value;
        let $assignedTo = elements.assignTo.value;
        let $priority = View.getSelectedOption(elements.priority);

        let newTask = new Task();
        newTask.setId($id);
        newTask.setTitle($title);
        newTask.setDesc($desc);
        newTask.setPriority($priority);
        newTask.setAssignedTo($assignedTo);
        newTask.setStatus('open');

        let vv = [];
        if(localStorage.getItem('tasks') === null) {
                vv.push(newTask.getAllTasks());
            localStorage.setItem('tasks', JSON.stringify(vv));
        }
        else {
            try{
                let tasks = DataService.getTasks();
                    tasks.push(newTask.getAllTasks());
                localStorage.setItem('tasks', JSON.stringify(tasks));
            }
            catch (e) {
                console.log(e.message);
            }

        }
        elements.saveForm.reset();
        getTasks();

    }

    function getTasks() {
        let tasks = DataService.getTasks();
        let task = new Task();

        for (let i=0; i < tasks.length; i++) {
            task.setId(tasks[i].$id);
            task.setTitle(tasks[i].$title);
            task.setDesc(tasks[i].$description);
            task.setAssignedTo(tasks[i].$assignedTo);
            task.setStatus(tasks[i].$status);
            task.setPriority(tasks[i].$priority);

            // Generate UI task view
            View.createTaskView(
                task.getId(),
                task.getTitle(),
                task.getDesc(),
                task.getPriority(),
                task.getAssignedTo(),
                task.getStatus(),
                elements.taskDisplay
            );
        }
    }


})();


