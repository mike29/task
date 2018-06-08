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
}
export { DataService as default}