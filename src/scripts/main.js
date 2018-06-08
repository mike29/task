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

    // fetch all tasks
    getTasks();

    // Add kart added
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

        let holdFetchedDataTemp = [];
        elements.taskDisplay.innerHTML = '';
        let dataAddress = localStorage.getItem('tasks');
        if(dataAddress === null) {
            holdFetchedDataTemp.push(newTask.getAllTasks());
            DataService.setTasks(holdFetchedDataTemp);
        }
        else {
            try{
                let tasks = DataService.getTasks();
                    tasks.push(newTask.getAllTasks());
                    DataService.setTasks(tasks);
            }
            catch (e) {
                console.log(e.message);
            }
        }
        elements.saveForm.reset();
        getTasks();
    }

    function deleteTask(tasks, task) {
        let index = tasks.indexOf(task);
        if (index > -1) {
            tasks.splice(index, 1);
        }
        return true;
    }
    function userConfirmed(message) {
        let r = confirm(message);
        return r === true;
    }
    // Find the selected item id
    function findTaskById (tobeDeletedID) {
        if(DataService.getTasks() !== null) {
            let tasks = JSON.parse(localStorage.getItem('tasks'));
            for (let i=0; i< tasks.length; i++) {
                if (tasks[i][0].includes(tobeDeletedID)) {
                        console.log(tasks.indexOf(tasks[i]));
                         deleteTask(tasks, tasks[i]);
                }
                else {

                }
            }
            DataService.setTasks(tasks)
        }
    }

    function getTasks() {
        let tasks =DataService.getTasks();
        let elem = elements.taskDisplay;

        if (DataService.getTasks() !== null ) {
            tasks = tasks.reverse();
            for (let i=0; i < tasks.length; i++) {
                let task = new Task();
                task.setId(tasks[i][0]);
                task.setTitle(tasks[i][1]);
                task.setDesc(tasks[i][2]);
                task.setAssignedTo(tasks[i][4]);
                task.setStatus(tasks[i][5]);
                task.setPriority(tasks[i][3]);

                // Generate UI task view
                View.createTaskView(task.getId(),task.getTitle(),task.getDesc(),
                    task.getPriority(),task.getAssignedTo(),task.getStatus(),elem
                    );
            }
        }
    }

    // Delete Click handler
    // TODO
    // Find a shorter way of getting the ID
    elements.taskDisplay.addEventListener('click', (event)=> {
        event = event || window.event;
        let element = event.target || event.srcElement;
        let parentOfIdHolderElement = '';
        let IndexOfHiddenID = 0;

        while(element){
            if(element.nodeName === "BUTTON" && /dataDelete/ .test(element.className)){
                let isConfirmed = userConfirmed('Confirm delete');
                if(isConfirmed) {
                    element.parentNode.parentNode.style.display = 'none';
                    parentOfIdHolderElement = element.parentNode.parentNode.childNodes;
                    let collectChilds =[];
                    for (let i = 0; i < parentOfIdHolderElement.length; i++) {
                        // Get the first child (the hidden id of span)
                        collectChilds.push(parentOfIdHolderElement[i].firstChild.nodeValue);
                    }
                    findTaskById(collectChilds[IndexOfHiddenID]);
                    break;
                }
            }
            else if (element.nodeName === "BUTTON" && /dataClose/ .test(element.className)) {
                element.parentNode.parentNode.style.display = 'none';
            }
            element = element.parentNode;
        }
    })


})();


