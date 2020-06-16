/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

const heapAnalytics = require('./gatsby/heapAnalytics')

exports.onClientEntry = () => {
  heapAnalytics({
    appId: '1890589631',
    enableOnDevMode: false
  })
}
