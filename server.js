const express = require('express');
const path = require('path');
const gitVersion = require('git-tag-version');
const app = express();
const port = 5000;
const tag = gitVersion();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'client/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}, version: ${tag}`);
});