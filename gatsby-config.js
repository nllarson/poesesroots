require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Poese\'s Roots',
  },
  plugins: [
    {
      resolve: 'gatsby-source-firestore',
      options: {
        credential: JSON.parse(process.env.GATSBY_FIRESTORE_CREDENTIALS),
        types: [
          {
            type: 'Image',
            collection: 'images',
            map: doc => ({
              name: doc.name,
              category: doc.category,
              src: doc.src,
              project: doc.project,
            }),
          },
        ],
      },
    },
    'gatsby-plugin-react-helmet',
  ],
}
