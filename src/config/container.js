const{createContainer,asValue,InjectionMode,asFunction,asClass} = require('awilix');
const axios = require('axios');
const https = require('https');
const http = require('http');
const winston = require('winston');
require('winston-daily-rotate-file');
const winstonFormat = winston.format;
const logger = require('./LoggerConfig.js')(winston,winstonFormat);
const cors = require('cors');
const express = require('express');


module.exports={
    init:()=>{
        const appContainer = createContainer();
        appContainer.register("app",asValue(express()))
        .register("express",asValue(express))
        .register("http",asValue(http))
        .register("https",asValue(https))
        .register("server",asFunction(require("./server.js")))
        .register("axios",asValue(axios))
        .register("cors",asValue(cors()))
        .register("winston",asValue(winston))
        .register("logger",asValue(logger));

        appContainer.loadModules(['../services/**/*.js','../controller/**/*.js','../router/*.js','../middleware/**/*.js',
        '../repository/**/*.js','../utill/**/*.js'
    ],{
        cwd: __dirname,
        formatName:'camelCase',
        injectionMode:InjectionMode.CLASSIC
    })
    logger.info("Application Modules Loaded Successfully");
    return appContainer;
}
}