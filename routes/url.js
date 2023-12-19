const express = require("express");

const urlRouter = express.Router();

const { HandleUrl  } =require ("../Controllers/urlController");

urlRouter.use(express.json());



urlRouter.post('/',HandleUrl)





module.exports = {urlRouter}
