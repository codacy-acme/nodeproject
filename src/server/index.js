const express = require('express')

import { promises as fsp } from 'fs';
import fs from 'fs';
import path from 'path';

const app = express()

app.use(bodyParser.urlencoded({
    extended: true
 }));
 app.set('json spaces', 2)



const index = await fsp.readFile(path.resolve(__dirname, './index.html'), 'utf-8');
const key = fs.readFileSync(path.join(__dirname, './ssl.key'));
await fsp.writeFile(path.resolve(__dirname, './sitemap.xml'), sitemap);

 app.use(bodyParser.json());;
