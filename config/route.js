const express = require('express');
const route = express.Router()

const PostController = require('../controller/Post');


route.get('/', PostController.homePage)
route.get('/feed', PostController.homePage)
route.post('/feed', PostController.addpost)
route.post('/feed/edit-p', PostController.editpost)
/*route.post('/feed/edit-p', (req, res) => { console.log("edit") })*/
route.get('/feed/view', PostController.viewpost)
route.post('/feed/delete_post', PostController.deletepost)
route.post('/feed/confirm-edit', PostController.confirmEdit)
route.get('/*', PostController.notFound)


module.exports = route;