const express = require('express');
import v1_Router  from "./V1/v1Router";

const router = express.Router();

router.use('/v1', v1_Router);


export=router

