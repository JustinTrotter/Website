const  jsonData = require("./src/data/resume.json");
const express= require('express');

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  jsonData.projects.forEach(portfolio => {
    createPage({
      path: `/portfolio/${portfolio.name}`,
      component: require.resolve(`./src/templates/portfolio-template.js`),
      context: { portfolio },
    })
  })
  }

exports.onCreateDevServer=({app})=>{
    app.use(express.static('public'))
}