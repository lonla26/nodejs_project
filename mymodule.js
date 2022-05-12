const fs = require("fs")
const path = require("path")

const filteredFiles = (dirNamePath, fileExt, callback) => {
    fs.readdir(dirNamePath, (err, data) => {
        if (err) {
            return callback(err);
        }
        const filtered = data.filter(el =>path.extname(el)===`.${fileExt}`);
        return callback(null, filtered);
    });

};

module.exports = filteredFiles;