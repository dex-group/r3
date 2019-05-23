const path = require('path')

exports.onCreateWebpackConfig = require('./gatsby/onCreateWebpackConfig')

//Projects

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allPrismicProject {
        edges {
          node {
            uid
          }
        }
      }
    }
  `)

  const projectTemplate = path.resolve('src/templates/project.js');

  const projectsList = pages.data.allPrismicProject.edges;

  projectsList.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: projectTemplate,
      context: {
        uid: edge.node.uid,
      },
    });
  });

}