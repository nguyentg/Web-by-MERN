const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/auth')

const Post = require('../models/Post')
const { route } = require('./auth')

// @route GET api/posts
// @desc GET post
// @access Private
router.get('/', verifyToken, async(req, res) => {
    try {
        const posts = await Post.find({ user: req.userId }).populate('user', ['username']) // populate() sẽ chui sang User.js và móc ra các thuộc tính trong đó: username, password, createAt
        res.json({ success: true, posts})
    } catch {
        console.log(error)
        res.status(500).json({ success:false, message: 'Internal server errror'})
    }
})


// @route POST api/posts
// @desc Create post
// @access Private
router.post('/', verifyToken, async(req, res) => {
    const{title, description, url, status} = req.body

    // Simple validation
    if(!title)
    return res
    .status(400)
    .json({success: false, message: 'Title is requited'})

    try {
        const newPost = new Post({
            title, 
            description,
            url: url.startsWith('https://') ? url : `https://${url}`,
            status: status || 'TO LEARN',
            user: req.userId //'6134944820c854740a75a25f'
        })

        await newPost.save()

        res.json({success: true, message: 'Happy learning!', post: newPost})
    } catch (error) {
        console.log(error)
        res.status(500).json({ success:false, message: 'Internal server errror'})
    }
})

// @route PUT api/posts
// @desc Update post
// @access Private
router.put('/:id', verifyToken, async(req, res) => {
    const {title, description, url, status} = req.body

    // Simple validation
    if(!title)
    return res
    .status(400)
    .json({success: false, message: 'Title is requited'})

    try {
        let updatedPost = {
            title,
            description: description || '',
            url: (url.startsWith('https://') ? url : `https://${url}`) || '',
            status: status || 'TO LEARN'
        }

        const postUpdateCondition = {_id: req.params.id, user: req.userId}

        updatedPost = await Post.findOneAndUpdate(postUpdateCondition, updatedPost, {new: true})

        // If User not authorised to update post : không tìm được post
        if (!updatedPost)
        return res
        .status(401)
        .json({success: false, message: 'Post not found or user not authorised'})

        res.json({success: true, message: 'Ecellent progress!', post: updatedPost})
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({ success:false, message: 'Internal server errror'})
    }
})

// @route DELETE api/posts
// @desc Delete post
// @access Private
router.delete('/:id', verifyToken, async(req, res) =>{
    try {
        const postDeleteCondition = {_id: req.params.id, user: req.userId}
        const deletePost = await Post.findOneAndDelete(postDeleteCondition)

        // User not authorised to update post or not found
        if (!deletePost)
        return res
        .status(401)
        .json({success: false, message: 'Post not found or user not authorised'})

        res.json({success: true, post: deletePost})
    } catch (error) {
        console.log(error)
        res.status(500).json({ success:false, message: 'Internal server errror'})
    }
})

module.exports = router