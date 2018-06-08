/**
 * Created by Michael M. Simon on 6/8/2018.
 */
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;


const TaskSchema = mongoose.Schema({
    content: String,
    title: String,
    description: String,
    assignedTO: String,
    priority: String,
    status: String,
    date: String
});

const Task = module.exports = mongoose.model('Task', TaskSchema);

module.exports.getTaskById = function(id, callback){
    Task.findById(id, callback);
};
module.exports.getTaskByOps = function(content, callback){
    const query = content;
    Task.findOne(query, callback);
};
module.exports.addTask = function(newTask, callback){
    newTask.save(newArticle);
};