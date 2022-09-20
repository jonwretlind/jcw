import { connect, styled } from "frontity";
import { useEffect } from "react";
import Img from "@frontity/components/image";
import SectionContainer from "../styles/section-container";
import anime from 'animejs/lib/anime.es.js';

const AnimatedBubbles = ({ state, id, className, actions }) => {
    /**
     * Prefetch so everything is ready and it loads instantly.
     * Plus the JS code for the animation
     */
    useEffect(() => {
      actions.source.fetch("/");

      // animation
      var timeout = null;
      function fitElementToParent(el, padding) {
        function resize() {
          if (timeout) clearTimeout(timeout);
          anime.set(el, {scale: 1});
          var pad = padding || 0;
          var parentEl = el.parentNode;
          var elOffsetWidth = el.offsetWidth - pad;
          var parentOffsetWidth = parentEl.offsetWidth;
          var ratio = parentOffsetWidth / elOffsetWidth;
          timeout = setTimeout(anime.set(el, {scale: ratio}), 10);
        }
        resize();
        window.addEventListener('resize', resize);
      }

      var advancedStaggeringAnimation = (function() {

        var staggerVisualizerEl = document.querySelector('.stagger-visualizer');
        var dotsWrapperEl = staggerVisualizerEl.querySelector('.dots-wrapper');
        var dotsFragment = document.createDocumentFragment();
        var grid = [20, 5];
        var cell = 55;
        var numberOfElements = grid[0] * grid[1];
        var animation;
        var paused = true;

        fitElementToParent(staggerVisualizerEl, 0);

        for (var i = 0; i < numberOfElements; i++) {
          var dotEl = document.createElement('div');
          dotEl.classList.add('dot');
          dotsFragment.appendChild(dotEl);
        }

        dotsWrapperEl.appendChild(dotsFragment);

        var index = anime.random(0, numberOfElements-1);
        var nextIndex = 0;

        anime.set('.stagger-visualizer .cursor', {
          translateX: anime.stagger(-cell, {grid: grid, from: index, axis: 'x'}),
          translateY: anime.stagger(-cell, {grid: grid, from: index, axis: 'y'}),
          translateZ: 0,
          scale: 1.5,
        });
        var count = 0;
        function play() {
          count ++;
          if (count > 9) {
            clearTimeout(timeout);
            return;
          }
          paused = false;
          if (animation) animation.pause();

          nextIndex = anime.random(0, numberOfElements-1);

          animation = anime.timeline({
            easing: 'easeInOutQuad',
            complete: play
          })
          .add({
            targets: '.stagger-visualizer .cursor',
            keyframes: [
              { scale: .75, duration: 120},
              { scale: 2.5, duration: 220},
              { scale: 1.5, duration: 450},
            ],
            duration: 300
          })
          .add({
            targets: '.stagger-visualizer .dot',
            keyframes: [
              {
                translateX: anime.stagger('-2px', {grid: grid, from: index, axis: 'x'}),
                translateY: anime.stagger('-2px', {grid: grid, from: index, axis: 'y'}),
                duration: 100
              }, {
                translateX: anime.stagger('4px', {grid: grid, from: index, axis: 'x'}),
                translateY: anime.stagger('4px', {grid: grid, from: index, axis: 'y'}),
                scale: anime.stagger([2.6, 1], {grid: grid, from: index}),
                duration: 225
              }, {
                translateX: 0,
                translateY: 0,
                scale: 1,
                duration: 1200,
              }
            ],
            delay: anime.stagger(80, {grid: grid, from: index})
          }, 30)
          .add({
            targets: '.stagger-visualizer .cursor',
            translateX: { value: anime.stagger(-cell, {grid: grid, from: nextIndex, axis: 'x'}) },
            translateY: { value: anime.stagger(-cell, {grid: grid, from: nextIndex, axis: 'y'}) },
            scale: 1.5,
            easing: 'cubicBezier(.075, .2, .165, 1)'
          }, '-=800')

          index = nextIndex;

        }

        play();
      })();

    }, []);


  return (
    <Bubbles>
      <div className="animation-wrapper">
        <div className="stagger-visualizer">
          <div className="cursor color-red"></div>
          <div className="dots-wrapper"></div>
        </div>
      </div>
    </Bubbles>

  );

};

export default connect(AnimatedBubbles);

const Bubbles = styled.div`
  position: fixed;
  width: 100%;
  color: #C45400;

  @media (max-width: 768px) {
    bottom: 40vh;
  }

  .animation-wrapper {
    width: 100%;
    height: 35vh;

    &::before {
      content: " ";
      position: fixed;
      width: 100%;
      height: 100vh;
      top: 0px;
      left: 0px;
      background: linear-gradient(120deg,#fff 40%,transparent);
      z-index: 2;
    }
  }

  .stagger-visualizer {
    position: absolute;
    width: 1100px;
    right: 0px;
    transform: unset !important;
    bottom: 0px;
  }

  .stagger-visualizer .dots-wrapper {
    transform: translateZ(0);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .stagger-visualizer .dot {
    position: relative;
    z-index: 1;
    width: 23px;
    height: 23px;
    margin: 16px;
    background-color: transparent;
    content: url('https://jonwretlind.com/wp-content/uploads/2022/09/human.svg');
    opacity: .2;
    overflow: hidden;
  }

  @media (max-width: 1200px) {
    .stagger-visualizer {
      transform: unset !important;
    }
  }


  .stagger-visualizer .cursor {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 37px;
    height: 37px;
    margin: 9px;
    border: 6px solid currentColor;
    border-radius: 50%;
  }
`;
