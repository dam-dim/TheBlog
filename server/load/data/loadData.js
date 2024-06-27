const getPosts = require("./posts/getPosts");

function loadData() {
    const output = {
        posts: getPosts(),
    };

    return output;
}

module.exports = loadData;
