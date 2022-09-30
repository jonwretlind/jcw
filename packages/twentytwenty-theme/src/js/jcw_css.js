import { Global, css, connect } from "frontity";

const JcwStyle = ({state}) => {
  return (
    <Global
      styles={css`
        #HomeAnimated {
            font-size: 8rem !important;
            opacity: 0;
            animation: head-fade-in;
            animation-duration: 0.5s;
            animation-timing-function: ease-in;
            animation-fill-mode: forwards;
            display: block;
            font-weight: 100;
            color: #C55400;
            left: -0.8rem;
            position: relative;
        }
        @keyframes head-fade-in {
          from    { opacity: 0; transform: translateX( -50px); }
          to      { opacity: 1; transform: translateX(   0px); }
        }

        h1[class*="HomePageTitle"] { position: absolute; top: -1000px; }

        #HomeAnimatedHead {
          min-width: 25rem;
          padding-right: 2px;
          display: inline-block;
          border-bottom: 2px solid #777;
          min-height: 1rem;
          overflow: hidden;
          height: 10rem;
          top:  2.78rem;
          position: relative;
          color: #777;

          &.last {
            font-weight: 900;
            letter-spacing: -3px;
            border-bottom: 3px solid #222;
            color: #222;
          }

          & > div {
            position: relative;
            animation: head-up;
            animation-duration: 0.5s;
            animation-fill-mode: forwards;
          }


          @keyframes head-up {
            from    { margin-top:  1rem; }
            to      { margin-top:  0rem; }
          }

        }
        @media (max-width: 768px) {
          #HomeAnimated {
            font-size: 5.5rem !important;
            min-width: 21rem;
          }
          #HomeAnimatedHead {
            height: 7rem;
            top:  2rem;
            &.last {
              letter-spacing: 0px;
            }
          }
        }
        #Mark {
          font-weight: 300;
          color: #777;

          &.period {
            font-weight: 900;
            color: #C55400;
          }
        }
        #root.archive, #root.page:not(.home) {
          main {
            padding-top: 9rem;
            max-width: unset;
          }
        }
        @media (max-width: 1200px) {
          @media screen and (orientation:landscape) {
            #root.archive, #root.page:not(.home) {
              main {
                padding-top: 8rem;
                max-width: unset;
              }
            }
          }
        }
        #page.home {
          main {
            max-width: 93rem;
            margin: 0 auto;
          }
        }

        body.contact {
          .wp-block-image {
            display: none;
          }
          .wpcf7 .screen-reader-response {
          	position: absolute;
          	overflow: hidden;
          	clip: rect(1px, 1px, 1px, 1px);
          	clip-path: inset(50%);
          	height: 1px;
          	width: 1px;
          	margin: -1px;
          	padding: 0;
          	border: 0;
          	word-wrap: normal !important;
          }

          .wpcf7 form .wpcf7-response-output {
          	margin: 2em 0.5em 1em;
          	padding: 0.2em 1em;
          	border: 2px solid #00a0d2; /* Blue */
          }

          .wpcf7 form.init .wpcf7-response-output,
          .wpcf7 form.resetting .wpcf7-response-output,
          .wpcf7 form.submitting .wpcf7-response-output {
          	display: none;
          }

          .wpcf7 form.sent .wpcf7-response-output {
          	border-color: #46b450; /* Green */
          }

          .wpcf7 form.failed .wpcf7-response-output,
          .wpcf7 form.aborted .wpcf7-response-output {
          	border-color: #dc3232; /* Red */
          }

          .wpcf7 form.spam .wpcf7-response-output {
          	border-color: #f56e28; /* Orange */
          }

          .wpcf7 form.invalid .wpcf7-response-output,
          .wpcf7 form.unaccepted .wpcf7-response-output,
          .wpcf7 form.payment-required .wpcf7-response-output {
          	border-color: #ffb900; /* Yellow */
          }

          .wpcf7-form-control-wrap {
          	position: relative;
            width: 100%;
            display: inline-block;
            margin-bottom: 0.75rem;
            input, textarea {
              width: 100%;
              padding: 1rem;
              border: unset;
              border-bottom: 2px solid #999;
              background-color: #f7f7f7;
              border-radius: 0px;

              &:hover, &:focus {
                border-bottom: 2px solid #c45400;
                background-color: #efefef;
                outline: none;
              }

              ::placeholder {
                color: #999;
              }
            }
          }

          .wpcf7-not-valid-tip {
          	color: #dc3232; /* Red */
          	font-size: 1em;
          	font-weight: normal;
          	display: block;
          }

          .use-floating-validation-tip .wpcf7-not-valid-tip {
          	position: relative;
          	top: -2ex;
          	left: 1em;
          	z-index: 100;
          	border: 1px solid #dc3232;
          	background: #fff;
          	padding: .2em .8em;
          	width: 24em;
          }

          .wpcf7-list-item {
          	display: inline-block;
          	margin: 0 0 0 1em;
          }

          .wpcf7-list-item-label::before,
          .wpcf7-list-item-label::after {
          	content: " ";
          }

          .wpcf7-spinner {
          	visibility: hidden;
          	display: inline-block;
          	background-color: #23282d; /* Dark Gray 800 */
          	opacity: 0.75;
          	width: 24px;
          	height: 24px;
          	border: none;
          	border-radius: 100%;
          	padding: 0;
          	margin: 0 24px;
          	position: relative;
          }

          form.submitting .wpcf7-spinner {
          	visibility: visible;
          }

          .wpcf7-spinner::before {
          	content: '';
          	position: absolute;
          	background-color: #fbfbfc; /* Light Gray 100 */
          	top: 4px;
          	left: 4px;
          	width: 6px;
          	height: 6px;
          	border: none;
          	border-radius: 100%;
          	transform-origin: 8px 8px;
          	animation-name: spin;
          	animation-duration: 1000ms;
          	animation-timing-function: linear;
          	animation-iteration-count: infinite;
          }

          @media (prefers-reduced-motion: reduce) {
          	.wpcf7-spinner::before {
          		animation-name: blink;
          		animation-duration: 2000ms;
          	}
          }

          @keyframes spin {
          	from {
          		transform: rotate(0deg);
          	}

          	to {
          		transform: rotate(360deg);
          	}
          }

          @keyframes blink {
          	from {
          		opacity: 0;
          	}

          	50% {
          		opacity: 1;
          	}

          	to {
          		opacity: 0;
          	}
          }

          .wpcf7 input[type="file"] {
          	cursor: pointer;
          }

          .wpcf7 input[type="file"]:disabled {
          	cursor: default;
          }

          .wpcf7 .wpcf7-submit:disabled {
          	cursor: not-allowed;
          }

          .wpcf7 input[type="url"],
          .wpcf7 input[type="email"],
          .wpcf7 input[type="tel"] {
          	direction: ltr;
          }

          div[class*="props-css"] {
              display: block;
          }

          input.btn-submit {
            padding: .7rem 3rem;
            background-color: #C55400;
            color: white;
            font-size: 16px;
            border: none;
            border-radius: 0;
            font-weight: 500;
            &:hover {
              background-color: #222;
            }
          }

        }

        /* BLOG ARTICLES */
        #root.archive.blog {
          #main > div {
              display: flex;
              flex-direction: row-reverse;
              flex-wrap: wrap;
          }
          article {
            margin: 0 auto;
            box-shadow: unset;
            border: none;
          }
          article:not(.active) {
            display: block;
            width: 24.5vw;
            height: 20vw;
            z-index: 10;
            flex: 1 0 auto;
            border: 1px solid white;
            @media (max-width: 768px) {
              width: 49.5vw;
            }

            .arrow {
              display: none;
            }
            div.post-container {
              margin-left: unset;

              header.post-header {
                padding: 0px;
                margin-top: -1px;
                overflow: hidden;
                @media (max-width: 768px) {
                  width: 49.5vw;
                }
              }
              .overlay {
                width: inherit;
                height: 20vw;
                background-color: rgba(196, 84, 0, 0.9);
                position: relative;
                margin-bottom: -100%;
                @media (max-width: 768px) {
                  width: 49.5vw;
                }
              }
              a.post-link {
                display: block;
                z-index: 10;
                position: absolute;
              }
              div.entry-categories {
                display: none;
              }
              div.entry-content {
                max-width: unset;
                margin-top: -5rem;
              }
              h2, h3, h4, h5, h6  {
                display: none;
              }
              h1.post-title {
                margin: 2rem;
                position: relative;
                width: 23vw;
                font-size: 2.8rem!important;
                font-weight: 300;
                bottom: 1rem;
                color: #fff;
                &:hover {
                  color: #222;
                }
                @media (max-width: 768px) {
                  font-size: 2.2rem!important;
                  font-weight: 700;
                  width: 45vw;
                }
              }
              p, figcaption, ul, ol {
                display: none;
              }
              figure {
                position: relative;
                z-index: -1;
                display: none;
                &:first-of-type {
                  display: block;
                  img {
                    max-width: unset;
                    visibility: visible !important;
                    height: 33vw;
                    min-width: 100%;
                    @media (max-width: 768px) {
                      height: 50vh;
                      width: auto;
                      min-width: unset;
                      margin-top: -20vh;
                    }
                  }
                }
              }
            }
            figure#image {
              display: none !important;
            }
          }
          a.post-link:hover {
            text-decoration: none;
          }
          article.active {
            height: unset;
            flex-direction: row-reverse;
            order: -1;
            justify-content: center;
            padding: 0 10vw;
            @media (max-width: 14px) {
              padding: 0 3rem;
            }
            @media (max-width: 768px) {
              padding: 0 3rem;
            }

                figure#image {
                  display: none !important;

              }
              h1.post-title{
                font-size: 5rem !important;
                color: #C45400;
                font-weight: 200;
                &:hover {
                  color: #222;
                }
              }
              div.entry-content{
                max-width: unset;
              }
              div.entry-categories {
                display: none;
              }
              div.post-inner ul {
                margin-bottom: 2rem;
              }
              div.section-container {
                max-width: 980px;
              }
              div.post-inner {
                display: flex;
                flex-direction: column-reverse;
              }
              div.post-container {
                margin-left: 20px;
                margin-right: 80px;
                @media (max-width: 768px) {
                  padding: 0 3rem;
                }
                @media (max-width: 425px) {
                  margin: 0 20px;
                }
              }
              h4, .heading-size-4 {
                  font-size: 1.5rem;
              }
              p:last-of-type span {
                display: none;
              }
              p, figcaption, ul, ol {
                font-size: 1.5rem;
                @media (max-width: 768px) {
                  font-size: 2rem;
                }
                @media (max-width: 425px) {
                  font-size: 2.5rem;
                }
              }
              figure {
                margin-bottom: 1rem;
                height: unset;
                padding: 0;
              }
              figcaption, .wp-caption-text {
                  color: #777;
                  display: block;
                  font-size: 1.3rem;
                  font-weight: 500;
                  line-height: .9rem;
                  margin-top: 0.5rem;
                  margin-bottom: 3.5rem;
                  font-style: italic;
                  text-align: center;
              }
            }
            .arrow {
              height: 90vh;
              position: fixed;
              @media (max-width: 768px) {
                height: 100vh;
                top: 0px;
              }
            }
        }

        /* SINGLE BLOG PAGE */
        #root.archive.single {
          article {
            display: block;
            height: unset;
            flex-direction: row-reverse;
            order: -1;
            justify-content: center;
            padding-bottom: 8rem;
            box-shadow: unset;
            border: unset;
            max-width: 980px;
            @media (max-width: 768px) {
              padding: 0 3rem;
            }

                figure#image {
                display: none !important;

                  img {
                    max-width: 100%;
                    height: auto;
                    max-height: 200px;
                  }
              }
              header {
                padding: 4rem 0 1rem 0;
              }
              h1.post-title {
                font-size: 6rem !important;
                color: #C45400;
                font-weight: 200;
                &:hover {
                  color: #222;
                }
              }

              p, figcaption, ul, ol
              {
                font-size: 1.5rem;
                @media (max-width: 768px) {
                  font-size: 2rem;
                }
                @media (max-width: 425px) {
                  font-size: 2.5rem;
                }
              }
              div.entry-content, .css-11rmm0t {
                max-width: unset !important;
              }
              div.post-meta {
                margin-bottom: 3rem;
              }

              & > div {
                display: flex;
                flex-direction: column-reverse;
              }
              div.post-container {
                margin-left: 20px;
                margin-right: 80px;
                border-left: 1px solid #999;
              }
              h4, .heading-size-4 {
                  font-size: 1.5rem;
              }
              p:last-of-type span {
                display: none;
              }
              figure {
                margin-bottom: 1rem;
                height: unset;
                padding: 0;
                justify-self: center;
              }
              figcaption, .wp-caption-text {
                  color: #777;
                  display: block;
                  font-size: 1.3rem;
                  font-weight: 500;
                  line-height: .9rem;
                  margin-top: 0.5rem;
                  margin-bottom: 3.5rem;
                  font-style: italic;
                  text-align: center;
              }
            }
            .arrow {
              height: 90vh;
              position: fixed;
            }
        }




        body.services .img-container figure#image {
          @media (max-width: 768px) {
            right: -200px;
          }
          @media (max-width: 425px) {
            right: -67px;
            width: 47vw;
          }
          @media (max-width: 375px) {
            width: 53vw;
          }
          img {
              margin: 50px;
              @media (max-width: 1200px) {
                transform: translate(-30px, -110px) rotate(-30deg);
              }
              @media (max-width: 768px) {
                transform: translate(-50px, -110px) rotate(-30deg);
                margin: 78px;
            }
          }
        }
        .loader div {
          width: 100px;
          height: auto;
        }

        .btn-container {
          display: flex;
          font-size: 16px;
          padding-top: 20px;

          @media (max-width: 768px) {
            flex-direction: column;
            flex-direction: column;
            width: 100%;
            justify-items: flex-start;
          }

          input[type="submit"], button {
            padding: .7rem 3rem;
            background-color: #C55400;
            color: white;
            &:hover {
              background-color: #222;
            }
          }
          a:last-child > button {
            margin-left: 2rem;
          }
          @media (max-width: 768px) {
            button {
              min-width: 250px;
              text-align: center;
              &:last-child {
                margin-top: 2rem;
                margin-left: unset !important;
            }
          }
        }
      `}
    />
  );
};

export default connect(JcwStyle);
