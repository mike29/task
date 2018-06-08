/**
 * Created by Michael M. Simon on 6/7/2018.
 */
import Task from './task.js';
import DataService from '../services/data.service.js';
import View from '../lib/viewLib.js';


(()=> {

    let elements = {
        taskDisplay: document.getElementById('taskDisplayContainer'),
        saveForm: document.getElementById('taskInputForm'),
        description: document.getElementById('taskDescription'),
        assignTo: document.getElementById('taskAssignTo'),
        title: document.getElementById('taskTitle'),
        priority: document.getElementsByName('options')
    };

    getTasks();

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
        elements.taskDisplay.innerHTML = '';
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
        let elem = elements.taskDisplay;

        tasks = tasks.reverse();
        for (let i=0; i < tasks.length; i++) {
            let task = new Task();
            console.log(tasks[i][1]);
            task.setId(tasks[i][0]);
            task.setTitle(tasks[i][1]);
            task.setDesc(tasks[i][2]);
            task.setAssignedTo(tasks[i][4]);
            task.setStatus(tasks[i][5]);
            task.setPriority(tasks[i][3]);

            // Generate UI task view
            View.createTaskView(
                task.getId(),
                task.getTitle(),
                task.getDesc(),
                task.getPriority(),
                task.getAssignedTo(),
                task.getStatus(),
                elem
            );
        }
    }


})();


