//routes/relations.js

const express = require('express');
var router = express.Router();
var Relation = require('../models/Relation');
var https = require('https');
var http = require('http');
var qs = require('querystring');
var request = require("request");

//index
router.get("/", function(req, res){

});

//find relation by idname
router.get("/uid/:uid", function(req, res){
  Relation.find({uid:req.params.uid}, function(err, db_dt){
    if(err)
      res.json(err);
    else{
      if(db_dt == null)
      {
        //no data
        res.json();
      }
      else{
        console.log("eid", db_dt);
        res.json(db_dt);
      }
    }
  });
});

//find relation by eid
router.get("/eid/:eid", function(req, res){
  Relation.find({eid:req.params.eid}, function(err, db_dt){
    if(err)
      res.json(err);
    else{
      if(db_dt == null)
      {
        //no data
        res.json();
      }
      else{
        console.log(db_dt);
        res.json(db_dt);
      }
    }
  });
});

//create
router.post("/", function(req, res){
  Relation.create({uid:req.body.uid, eid:req.body.eid}, function(err, relation){
    if(err)
      res.json(err);
    else
    {
      console.log("create", relation);
      res.json(relation);
    }
  });
});


//delete by eid and uid
router.delete("/", function(req, res){
  Relation.remove({eid:req.body.eid, uid:req.body.uid}, function(err, response){
    res.json({delete:"complete"});
  });
});

router.delete("/eid/:eid", function(req, res){
  Relation.remove({eid:req.params.eid}, function(req, response){
    res.json({delete:"complete"});
  });
});

//delete by uid
router.delete("/uid/:uid", function(req, res){
  Relation.remove({uid:req.params.uid}, function(req, response){
    res.json({delete:"complete"});
  });
});

//module & export
module.exports = router; 
