/**
 * Created by Michael M. Simon on 6/8/2018.
 */

const express = require('express');
const Task = require('../model/task');
const config = require('../config/database');

module.exports = (router) => {

    router.post('/add', (req, res) => {
        let dateObject = new Date();
        let day = dateObject.getUTCDate();
        let month = dateObject.getUTCMonth();
        let year = dateObject.getUTCFullYear();
        let date = day + "." + (month + 1) + "." + year;

      //  console.log(req.body.data.title + " " + req.body.data.author + ' ' + req.body.data.contentType);
        let newTask = new Task({
            content: req.body.data,
            title: req.body.title,
            description: req.body.description,
            assignedTO: req.body.assignedTO,
            priority: req.body.priority,
            status: req.body.status,
            date: date

        });

        newTask.save((err) => {
            if (err) {
                res.status(400);
                res.json({success: false, message: 'Failed to add task'});
            } else {
                res.status(200);
                res.json({success: true, message: 'Task added'});
            }
        });

    });

    router.get('/add', (req, res) => {
        let content = new Task({
            content: String,
            title: String,
            description: String,
            assignedTO: String,
            priority: String,
            status: String,
            date: String
        });
        console.log("rote add called");
        Task.find().exec(function(err, content){
            if(err){
                res.status(500);
                res.send(err.message);
            }
            res.status(200);
            res.send(content);
        });
    });

    router.delete('/add/:id', function(req, res){
        let deletedContent = new Task({
            content: String,
            title: String,
            description: String,
            assignedTO: String,
            priority: String,
            status: String,
            date: String
        });
        console.log('deleting a task');
        Task.findByIdAndRemove(req.params.id, function(err, deletedContent){
            if(err){
                res.status(500);
                res.send(err.message);
            }
            res.status(200);
            res.json(deletedContent);
        });
    });
    return router;
};