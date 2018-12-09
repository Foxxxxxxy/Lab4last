const express = require('express');
const gitVersion = require('git-tag-version');
const app = express();
const port = 5000;
const tag = gitVersion();


app.listen(port, () => {
    console.log(`Server running on port ${port}, version: ${tag}`);
});