/**
 * Created by Michael M. Simon on 6/7/2018.
 */

class DataService {
    static getTasks() {
        return JSON.parse(localStorage.getItem('tasks'));
    }
}
export { DataService as default}