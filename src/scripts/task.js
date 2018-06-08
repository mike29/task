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

        let _allTasks= [] ;

        this.setId = function(id) { _id = id; _allTasks.push(id)};
        this.getId = function() { return _id;};

        this.setTitle = function(title) { _title = title; _allTasks.push(title)};
        this.getTitle = function() { return _title;};

        this.setDesc = function(desc) { _desc = desc; _allTasks.push(desc)};
        this.getDesc = function() { return _desc;};

        this.setPriority = function(priority) { _priority = priority; _allTasks.push(priority)};
        this.getPriority = function() { return _priority;};

        this.setAssignedTo = function(assignedTo) { _assignedTo = assignedTo; _allTasks.push(assignedTo)};
        this.getAssignedTo = function() { return _assignedTo;};

        this.setStatus = function(status) { _status = status; _allTasks.push(status)};
        this.getStatus = function() { return _status;};

        this.getAllTasks = function() {
            return _allTasks;
        };

    }
}
export { Task as default}