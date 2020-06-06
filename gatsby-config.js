require('dotenv').config();

module.exports = {
  pathPrefix: "/blog",
  siteMetadata: {
    title: `観照日記  📖✍`,
    name: `Kenya Hondoh`,
    siteUrl: `https://kenmikanmi.github.io`,
    description: `kenmikanmi の徒然なるままに書き起こしたブログです。`,
    hero: {
      heading: `観照日記 📖✍️`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/Earllibrary`,
      },
      {
        name: `github`,
        url: `https://github.com/kenmikanmi`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/ken5526`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/kenya-hondoh-2a7067123/`,
      },
      // {
      //   name: `dribbble`,
      //   url: `https://dribbble.com/narativestudio`,
      // },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://kenmikanmi.github.io/blog`,
      }
    },
    'gatsby-plugin-sitemap',
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: `UA-156100961-1`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-emoji`,  // <-- this line adds emoji
          `gatsby-remark-responsive-iframe`
        ]
      }
    },
    {
      resolve: `@lekoarts/gatsby-theme-specimens`,
      options: {
        contrastGuidelines: `AAA`,
        codeExample: false,
        rootFontSize: 32,
      }
    },
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kenmikanmi's blog`,
        short_name: `kenmikanmi`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
