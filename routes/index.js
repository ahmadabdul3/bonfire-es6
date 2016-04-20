/*
var express = require('express');
var router = express.Router();
var React = require('react');
var ReactDom = require('react-dom/server');
var Component1 = require('../react-components/info-box/info-box.jsx');
var ComponentFactory = React.createFactory(Component1);
*/
import express from 'express';
import React from 'react';
import ReactDom from 'react-dom/server';
import InfoBoxes from '../react-component-wrappers/info-boxes/components/info-boxes.jsx';

var router = express.Router();
//let InfoBoxFactory = React.createFactory(InfoBox);

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { 
        reacthtml: ReactDom.renderToString(<InfoBoxes />)
    });
});

//module.exports = router;
export default router;