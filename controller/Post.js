/*const mongoose = require('mongoose');*/

const postModel = require('../models/Post');
let allTheposts;
const homePage = async (req, res) => {
    await postModel.find().sort({ created_at: -1 })
        .then(result => {
            allTheposts = result;
                res.render('feed/index', {
                    allposts: result,
                    formError: ''
                });
            })
            .catch( err => {
                console.log(err)
            })
}

const addpost = (req, res) => {
    if (req.body.name !== '' && req.body.message !== '') {
        let namelenght = req.body.Name.split(" ").join("");
        let messagelenght = req.body.Message.split(" ").join("");
        if (namelenght.length >= 15) {
            if (messagelenght.length >= 40) {
                let post = new postModel(req.body);
                post.save()
                .then(() => {
                    res.redirect('feed')
                })
                .catch(err => {
                    console.log(err)
                })
            }
            else {
                res.render('feed', {
                    allposts: allTheposts,
                    formError: 'The Message field must be longer than 40 character.'
                })
            }
        }
        else {
            res.render('feed', {
                allposts: allTheposts,
                formError: 'The Name field must be longer than 15 characters.'
            })
        }
    }
    else {
        res.render('feed', {
            allposts: allTheposts,
            formError: 'All fields are required and can not be empty.'
        })
    }
}

const editpost = (req, res) => {
    console.log("edit");
    postModel.findById(req.query.post_id)
        .then(post => {
            res.render('feed/edit', {
                post: post,
                formError: ''
            })
        })
        .catch(err => {
            console.log(err)
        })
}

const confirmEdit = (req, res) => {
    postModel.findByIdAndUpdate(req.query.post_id, req.body, function (err, newData) {
        if (err) throw err
        res.redirect('/feed')
    })
}
const viewpost = async (req, res) => {
    await postModel.findById(req.query.post_id)
        .then(result => {
            res.render('feed/view', {
                post: result
            });
        })
        .catch(err => {
            console.log(err)
        })
}
const deletepost = (req, res) => {
    postModel.findByIdAndDelete(req.query.post_id)
        .then(() => {
            res.redirect('/feed')
            //res.render('feed', {
            //    allposts: allTheposts,
            //    formError: ''
            //});
        })
        .catch(err => {
            console.log(err)
        })
}
const notFound =  (req, res) => {
    res.render('notFound')
}

module.exports = {
    homePage,
    notFound,
    addpost,
    editpost,
    confirmEdit,
    viewpost,
    deletepost
}