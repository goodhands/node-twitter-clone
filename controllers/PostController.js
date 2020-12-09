const Post = require('../models/Post');

const PostController = {

    async add(req, res){
        const post = new Post({user: user, content: "I love u, I hate u, I hate that I love u", metadata:{likes: 12, comments: 90}});
        await post.save();
        
        res.status(201).json({
            post: post
        });
    }
    
}

module.exports = PostController;