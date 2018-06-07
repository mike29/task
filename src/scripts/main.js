/**
 * Created by Michael M. Simon on 6/7/2018.
 */
import Task from './task.js';
import DataService from '../services/data.service.js';
import Inputs from '../lib/viewLib.js';

(()=> {
   // getTasks();

    let elements = {
        taskDisplay: document.getElementById('taskDisplayContainer'),
        saveButton: document.getElementById('taskInputForm'),
        description: document.getElementById('taskDescription'),
        assignTo: document.getElementById('taskAssignTo'),
        title: document.getElementById('taskTitle'),
        priority: document.getElementsByName('options')

    };

    elements.saveButton.addEventListener('submit', storeTask);
    function storeTask(e) {
        e.preventDefault();
        let title = elements.title.value;
        let desc = elements.description.value;
        let assignedTo = elements.assignTo.value;
        let priority = Inputs.getSelectedOption(elements.priority);

        console.log(title + desc + assignedTo + priority);
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
            createTaskView(
                task.getId(),
                task.getTitle(),
                task.getDesc(),
                task.getPriority(),
                task.getAssignedTo(),
                task.getStatus()
            );
        }
    }

    function createTaskView(id,title,desc,priority,assignedTo,status) {
        elements.taskDisplay.innerHTML = '';
        elements.taskDisplay.innerHTML +=
            '<div class="holder">'+
            '<h6>'+'Task Id:' + id + '</h6>'+
            '<h3>'+ title +'</h3>'+
            '<p>' + desc +'</p>'+
            '<p>' + priority +'</p>'+
            '<p>' + assignedTo +'</p>'+
            '<p>' + status +'</p>'+
            '</div>'
    }
})();


