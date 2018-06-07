/**
 * Created by Michael M. Simon on 6/7/2018.
 */
class Task {
    constructor(id, title, desc, priority, assignedTo, status) {
        let _id = id;
        let _title = title;
        let _desc = desc;
        let _priority = priority;
        let _assignedTo = assignedTo;
        let _status = status;

        this.setId = function(id) { _id = id};
        this.getId = function() { return _id;};

        this.setTitle = function(desc) { _title = desc};
        this.getTitle = function() { return _title;};

        this.setDesc = function(desc) { _desc = desc};
        this.getDesc = function() { return _desc;};

        this.setPriority = function(priority) { _priority = priority};
        this.getPriority = function() { return _priority;};

        this.setAssignedTo = function(assignedTo) { _assignedTo = assignedTo};
        this.getAssignedTo = function() { return _assignedTo;};

        this.setStatus = function(status) { _status = status};
        this.getStatus = function() { return _status;};
    }
}
export { Task as default}