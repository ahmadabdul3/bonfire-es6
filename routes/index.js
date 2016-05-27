import express from 'express';
import React from 'react';
import ReactDom from 'react-dom/server';
import InfoBoxes from '../react-component-packages/info-boxes/components/info-boxes.jsx';
//import logger from '../custom-modules/logging/logger.js'
import NewStoryFrom from '../react-component-packages/add-story-form/components/form.jsx';
import Button from '../react-components/button/button.jsx';

var router = express.Router();
//logger.info('log to file');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { 
        reacthtml: ReactDom.renderToString(<InfoBoxes />),
        addStoryForm: ReactDom.renderToString(<NewStoryFrom/>),
        button: ReactDom.renderToString(<Button/>)
    });
});


export default router;