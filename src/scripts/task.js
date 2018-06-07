/**
 * Created by Michael M. Simon on 6/7/2018.
 */
class Task {
    constructor(id, title, priority, assignedTo, status) {
        let _id = id;
        let _title = title;
        let _priority = priority;
        let _assignedTo = assignedTo;
        let _status = status;

        this.setId = function(id) { _id = id};
        this.getId = function() { return _id;};
    }




}
export { Task as default}