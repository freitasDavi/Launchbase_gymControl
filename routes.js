const express = require('express')
const routes = express.Router()

routes.get('/', function(req, res) {
    return res.redirect("/instructors")
})

routes.get('/instructors', function(req, res) {
    return res.render("instructors/index")
})

routes.get('/members', function(req, res) {
    return res.send("members")
})


module.exports = routes

// server.get("/", function(req, res) {
//     const about = {
//         avatar_url: "https://avatars3.githubusercontent.com/u/63361459?s=460&u=f9a90e4966fdbd1c69b51d5302f971913003b671&v=4",
//         name: "Davi Freitas",
//         role: "Estudante - Rocketseat",
//         description: 'Programador full-stack junior, focado aprender cada vez mais sobre tudo de programação. Estudante da <a href="https://rocketseat.com.br" target="blank">Rocketseat</a>',
//         links: [
//             { name: "Github", url: "https://github.com/Tekunin"},
//             { name: "Twitter", url: "https://twitter.com/Tekunnin"},
//             { name: "Linkedin", url: "ttps://linkedin.com/in/davi-freitas-da-silva-ba15811a9/"}
//         ]
//     }

//     return res.render("about", { about })
// })

// server.get("/portfolio", function(req, res) {
//     return res.render("portfolio", {items: videos})
// })

// server.get("/video", function(req, res) {
//     const id = req.query.id

//     const video = videos.find(function(video) {
//         return video.id == id
//     })

//     if (!video) {
//         return res.send("Video not found !")
//     } 

//     return res.render("video", { item: video })

// }) 