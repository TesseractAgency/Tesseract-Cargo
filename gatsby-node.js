const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allContentfulServiceType {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.allContentfulServiceType.nodes.forEach(service => {
    createPage({
      path: `/${service.slug}`,
      component: path.resolve(`src/templates/service-template.js`),
      context: {
        service: service.slug,
      },
    })
  })
}
