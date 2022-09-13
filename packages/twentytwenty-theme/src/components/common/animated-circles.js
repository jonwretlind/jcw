import { connect, styled } from "frontity";
import { useEffect } from "react";
import Img from "@frontity/components/image";
import SectionContainer from "../styles/section-container";
import anime from 'animejs/lib/anime.es.js';

const AnimatedCircles= ({ state, id, className, actions }) => {
    /**
     * Prefetch so everything is ready and it loads instantly.
     * Plus the JS code for the animation
     */
    useEffect(() => {
      actions.source.fetch("/");

      // animation
      $(window).load(function(){
        for (var i = 0; i < 50; i++) {
          var names = ['x1','x2','y1','y2'],
              name = names[Math.floor(Math.random() * names.length)];
          $('.circles').append('<div class="circle-container c'+i+'"><div class="circle i'+ i +'"></div></div>');
          $('.c'+i).css({
            'animation': 'z 5s .'+ i +'s linear infinite'
          });
          $('.i'+i).css({
            'animation': name + ' 7.5s .'+ i +'s linear infinite'
          });
        }
      });
    }, []);


  return (
    <Circles>
      <div className="circle-outer-container">
        <div className="circles"></div>
      </div>
    </Circles>

  );

};

export default connect(AnimatedCircles);

const Circles = styled.div`
.circle-outer-container {
  position: fixed;
  width: 100%;
  min-height: 100%;
  background: #282828;
}
.circles,
.circle-container,
.circle{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  width: 300px;
  height: 300px;
}
.circles {
  animation: z 10s linear infinite alternate;
}
.circle {
  border: 1px solid #f7f7f7;
  border-radius: 100%;
  opacity: 0;
}
@keyframes x1 {
  0% {
    transform: rotateX(0deg) translate(-150px,0);
    opacity: 0;
  }
  25% {
    transform: rotateX(360deg) translate(0,0);
    opacity: 0.5;
  }
  50% {
    transform: rotateX(0deg) translate(150px,0);
    opacity: 0;
  }
  75% {
    transform: rotateX(360deg) translate(0,0);
    opacity: 0.5;
  }
  100% {
    transform: rotateX(0deg) translate(-150px,0);
    opacity: 0;
  }

}
@keyframes x2 {
  0% {
    transform: rotateX(0deg) translate(150px,0);
    opacity: 0;
  }
  25% {
    transform: rotateX(360deg) translate(0,0);
    opacity: 0.5;
  }
  50% {
    transform: rotateX(0deg) translate(-150px,0);
    opacity: 0;
  }
  75% {
    transform: rotateX(360deg) translate(0,0);
    opacity: 0.5;
  }
  100% {
    transform: rotateX(0deg) translate(150px,0);
    opacity: 0;
  }

}
@keyframes y1 {
  0% {
    transform: rotateY(0deg) translate(0,-150px);
    opacity: 0;
  }
  25% {
    transform: rotateY(360deg) translate(0,0);
    opacity: 0.5;
  }
  50% {
    transform: rotateY(0deg) translate(0,150px);
    opacity: 0;
  }
  75% {
    transform: rotateY(360deg) translate(0,0);
    opacity: 0.5;
  }
  100% {
    transform: rotateY(0deg) translate(0,-150px);
    opacity: 0;
  }
}
@keyframes y2 {
  0% {
    transform: rotateY(0deg) translate(0,150px);
    opacity: 0;
  }
  25% {
    transform: rotateY(360deg) translate(0,0);
    opacity: 0.5;
  }
  50% {
    transform: rotateY(0deg) translate(0,-150px);
    opacity: 0;
  }
  75% {
    transform: rotateY(360deg) translate(0,0);
    opacity: 0.5;
  }
  100% {
    transform: rotateY(0deg) translate(0,150px);
    opacity: 0;
  }
}
@keyframes z {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
`;
