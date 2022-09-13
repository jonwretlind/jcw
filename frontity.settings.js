const settings = {
  "name": "jcw",
  "state": {
    "frontity": {
      "url": "https://jonwretlind.com/",
      "title": "Jon C. Wretlind",
      "description": "Digital Design | Web Development | Consulting"
    }
  },
  "packages": [
    {
      "name": "@frontity/twentytwenty-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Hi",
              "/"
            ],
            [
              "My Work",
              "/portfolio/"
            ],
            [
              "Who Am I?",
              "/about/"
            ],
            [
              "My Services",
              "/services/"
            ],
            [
              "What I Think",
              "/blog/"
            ],
            [
              "Connect With Me",
              "/contact/"
            ]
          ],
          "showAllContentOnArchive": true,
          "featured": {
            "showOnList": true,
            "showOnPost": true
          },
          "colors": {
            "bodyBg": "#ffffff"
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://jonwretlind.com/",
          "homepage": "home",
          "postsPage": "portfolio"
        }
      }
    },
    {
    "name": "@frontity/tiny-router",
    "state": {
        "theme": {
          "autoPrefetch": "all", // values: no | hover | in-view | all
        },
        "router": {
          "autoFetch": true,
        }
      },
    },
    "@frontity/html2react"
  ]
};

export default settings;
