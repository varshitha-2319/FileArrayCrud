import express from 'express';
import bodyparser from "body-parser";

var router = express.Router();

import {
    postFilterDataFromBodyFunc
} from '../Controllers/entryFile.js';

router.use(bodyparser.json());

router.delete('/:FileName/:Key', postFilterDataFromBodyFunc);

export { router };