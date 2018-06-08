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

    static  deleteTask(tasks, task) {
    let index = tasks.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
    }
    return true;
    }
}
export { DataService as default}