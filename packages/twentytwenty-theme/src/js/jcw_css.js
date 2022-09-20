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

          button {
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
