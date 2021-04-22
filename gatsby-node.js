const path = require("path");
const formatPostUrl = require("./gatsby/formatPostUrl");

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              id
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  // Create blog post pages.
  const posts = result.data.allMdx.edges;
  // you'll call `createPage` for each result
  posts.forEach(({ node }, index) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: formatPostUrl(node.frontmatter.id),
      // This component will wrap our MDX content
      component: path.resolve("./src/templates/PostPage.tsx"),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    });
  });
};
