module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve: 'gatsby-source-firestore',
      options: {
        credential: require("./credentials").FIRESTORE_CREDENTIALS,
        types: [
          {
            type: 'Image',
            collection: 'images',
            map: doc => ({
              name: doc.name,
              category: doc.category,
              src: doc.src,
              project: doc.project              
            }),
          }
        ],
      },
    },
    'gatsby-plugin-react-helmet'],
}
