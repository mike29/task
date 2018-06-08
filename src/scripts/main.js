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

    let createTask = ()=> {
        let newTask = new Task();
        newTask.setId(chance.guid());
        newTask.setTitle(elements.title.value);
        newTask.setDesc(elements.description.value);
        newTask.setPriority(View.getSelectedOption(elements.priority));
        newTask.setAssignedTo(elements.assignTo.value);
        newTask.setStatus('open');
        return newTask
    };

    // fetch all tasks
    fetchTasks();

    // Add new task handler
    elements.saveForm.addEventListener('submit', storeTaskHandler);
    function storeTaskHandler(e) {
        e.preventDefault();
        elements.taskDisplay.innerHTML = '';
        let newTask = createTask();
        let dataInserted = DataService.insertData('tasks',newTask);
        if (dataInserted) {
            elements.saveForm.reset();
            fetchTasks();
        }
        else {
            alert('Saving failed! try again');
        }
    }

    // fetch all items from local storage
    function fetchTasks() {
        let tasks =DataService.getTasks();
        let elem = elements.taskDisplay;

        if (DataService.getTasks() !== null ) {
            tasks = tasks.reverse();
            for (let i=0; i < tasks.length; i++) {
                // Create task "instance"
                let task = new Task();
                task.setId(tasks[i][0]);
                task.setTitle(tasks[i][1]);
                task.setDesc(tasks[i][2]);
                task.setAssignedTo(tasks[i][4]);
                task.setStatus(tasks[i][5]);
                task.setPriority(tasks[i][3]);

                // Generate UI of task view
                View.createTaskView(task.getId(),task.getTitle(),task.getDesc(),
                    task.getPriority(),task.getAssignedTo(),task.getStatus(),elem
                    );
            }
        }
    }

    let getClickedElement = (event)=> {
        event = event || window.event;
        return event.target || event.srcElement;
    };
    // Delete Click handler
    // TODO
    // Find a shorter way of getting the ID
    elements.taskDisplay.addEventListener('click', (event)=> {
        const deleteTask = 'Confirm delete';
        let element = getClickedElement(event);
        while(element){
            if(element.nodeName === "BUTTON"){
                if(/dataDelete/ .test(element.className)) {
                    if(View.userConfirm(deleteTask)) {
                        // Find clicked item from storage by ID
                        DataService.findTaskById(getClickedItemId(element));
                        break;
                    }
                }
                else if (/dataClose/ .test(element.className)) {
                    element.parentNode.parentNode.style.display = 'none';
                }
            }
            element = element.parentNode;
        }
    });

    let getClickedItemId = (element) => {
        let IndexOfHiddenID = 0;
        let selectedElementDiv = element.parentNode.parentNode;
        let collectChilds =[];
        for (let i = 0; i < selectedElementDiv.childNodes.length; i++) {
            //Get the first child (the hidden id of span)
            collectChilds.push(selectedElementDiv.childNodes[i].firstChild.nodeValue);
        }
        let clickedId = collectChilds[IndexOfHiddenID];
        //Hide clicked Div
        selectedElementDiv.style.display = 'none';
        return clickedId;
    }


})();


