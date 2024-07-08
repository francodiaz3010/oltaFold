const path = require("path");
const express = require("express");



const main = {
    enter: (req,res) =>{
        res.sendFile(path.resolve("../views/home.html"))
    }
}

module.exports = main;

