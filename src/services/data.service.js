/**
 * Created by Michael M. Simon on 6/7/2018.
 */

class DataService {
    static getTasks() {
        try {
            return JSON.parse(localStorage.getItem('tasks'));
        }
        catch (e) {
            console.log(e.message);
        }

    }

    static setTasks(value) {
        try {
            return  localStorage.setItem('tasks', JSON.stringify(value));
        }
        catch (e) {
            console.log(e.message);
        }

    }

    static deleteTask(tasks, task) {
        console.log(tasks);
        let index = tasks.indexOf(task);
        if (index > -1) {
            tasks.splice(index, 1);
        }
        return true;
    }

    static findTaskById (tobeDeletedID) {
        if(DataService.getTasks() !== null) {
            let tasks = JSON.parse(localStorage.getItem('tasks'));
            for (let i=0; i< tasks.length; i++) {
                if (tasks[i][0].includes(tobeDeletedID)) {
                    this.deleteTask(tasks,tasks[i]);
                }
            }
            this.setTasks(tasks);
        }
    }

    static insertData (storageName, data) {
        let dataAddress = localStorage.getItem(storageName);
        let holdFetchedDataTemp = [];
        if(dataAddress === null) {
            holdFetchedDataTemp.push(data.getAllTasks());
            this.setTasks(holdFetchedDataTemp);
            return true;
        }
        else {
            try{
                holdFetchedDataTemp = this.getTasks();
                holdFetchedDataTemp.push(data.getAllTasks());
                DataService.setTasks(holdFetchedDataTemp);
                return true;
            }
            catch (e) {
                console.log(e.message);
                return false;
            }
        }
    };
}
export { DataService as default}