const getCategories = require("./categories/getCategories");
const getComments = require("./comments/getComments");
const getPosts = require("./posts/getPosts");

function loadData() {
    const output = {
        posts: getPosts(),
        // categories: getCategories(),
        comments: getComments(),
    };

    return output;
}

module.exports = loadData;
