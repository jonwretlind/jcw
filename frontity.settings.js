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
    "@aamodtgroup/frontity-contact-form-7",
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
              "Let's Connect",
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
          "postsPage": "blog",
          "postTypes": [
            {
              type: "portfolio",
              endpoint: "portfolio",
              archive: "/portfolio/"
            },
            {
              type: "blog",
              endpoint: "blog",
              archive: "/blog/"
            }
          ]
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
