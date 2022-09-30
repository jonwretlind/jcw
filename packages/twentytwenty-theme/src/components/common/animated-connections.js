import { connect, styled } from "frontity";
import { useEffect } from "react";
import Img from "@frontity/components/image";
import SectionContainer from "../styles/section-container";
import $ from "jquery";

const AnimatedConnections= ({ state, id, className, actions }) => {
    /**
     * Prefetch so everything is ready and it loads instantly.
     * Plus the JS code for the animation
     */
    useEffect(() => {
      actions.source.fetch("/");

      // animation
      $(window).ready(function(){
        "use strict";

        var canvas = document.getElementById('canvas'),
            ctx = canvas.getContext('2d'),
            w = canvas.width = window.innerHeight,
            h = canvas.height = window.innerWidth,
            points = [],
            amount = 320, // relative to screen size
            speed = 24,
            size = 2,
            lineWidth = 1,
            connectionDistance = 210,
            randomSize = .5,
            mouseX = 0,
            mouseY = 0,
            mouseRadius = 0;

        window.addEventListener('resize', function(){
          w = canvas.width = window.innerWidth,
          h = canvas.height = window.innerHeight;

          ctx.fillStyle = 'hsl(26, 100%, 38%)';
          ctx.fillRect(0,0,w,h);
        }, false);

        function setup()
        {
          w = canvas.width = window.innerWidth,
          h = canvas.height = window.innerHeight;

          var screenDelta = Math.sqrt(w + h) / 100;
          var useAmount = amount * screenDelta;

          for (var i = 0; i < useAmount; i++) {
            var x = (Math.random() * w);
            var y = (Math.random() * h);
            var xSpeed = (Math.random() * (speed / 10)) - (speed / 20);
            var ySpeed = (Math.random() * (speed / 10)) - (speed / 20);

            points.push(new Point(x,y,xSpeed,ySpeed));
          }

          ctx.fillStyle = 'hsl(26, 100%, 38%)';
          ctx.fillRect(0,0,w,h);

          draw();
        }

        function draw()
        {
          ctx.globalCompositeOperation = "source-over";

          ctx.fillStyle = 'hsla(0, 0%, 100%, 0.1)';
          ctx.fillRect(0,0,w,h);

          ctx.lineWidth = lineWidth;
          ctx.fillStyle = 'hsl(26, 100%, 38%)';

          var screenDelta = Math.sqrt(w + h) / 100;
          var useDistance = connectionDistance * screenDelta;

          ctx.globalCompositeOperation = "lighter";

          points.each(function(point){
            points.each(function(connection){
              var distanceX = Math.pow((connection.x - point.x), 2);
              var distanceY = Math.pow((connection.y - point.y), 2);
              var distance = Math.sqrt(distanceX + distanceY);

              if (distance <= useDistance) {
                var alpha = 1.0 - (distance / useDistance);

                ctx.strokeStyle = 'hsla(26, 100%, 38%'+alpha+')';

                ctx.beginPath();
                ctx.moveTo(point.x,point.y);
                ctx.lineTo(connection.x,connection.y);
                ctx.stroke();
                ctx.closePath();
              }
            });
          });

          ctx.globalCompositeOperation = "source-over";

          points.each(function(point){
            point.draw();
          });

          window.requestAnimationFrame(draw);
        }

        var Point = function (_x, _y, _xSpeed, _ySpeed) {
          this.x = _x;
          this.y = _y;
          this.xSpeed = _xSpeed;
          this.ySpeed = _ySpeed;

          var _this = this;

          this.draw = function() {
            var xNoise = ((Math.random() * randomSize) -randomSize/2);
            var yNoise = ((Math.random() * randomSize) -randomSize/2);

            _this.x += _this.xSpeed + xNoise;
            _this.y += _this.ySpeed + yNoise;

            if (_this.x < size || _this.x > (w - size)) {
              _this.xSpeed = -_this.xSpeed;
            }

            if (_this.y < size || _this.y > (h - size)) {
              _this.ySpeed = -_this.ySpeed;
            }

            if (_this.x < 0) {
              _this.x = 2;
            }

            if (_this.x > w) {
              _this.x = w - 2;
            }

            if (_this.y < 0) {
              _this.y = 2;
            }

            if (_this.y > h) {
              _this.y = h - 2;
            }

            ctx.beginPath();
            ctx.arc(_this.x,_this.y,size,0,2*Math.PI);
            ctx.fill();
            ctx.closePath();
          };
        };

        // Faster than .forEach
        Array.prototype.each = function(a) {
          var l = this.length;
          for(var i=0;i<l;i++)a(this[i],i)
        };

        setTimeout(setup, 10);
    }, []);
  });


  return (
    <Connections>
      <div className="animation-wrapper">
        <canvas id="canvas"></canvas>
      </div>
    </Connections>

  );

};

export default connect(AnimatedConnections);

  const Connections = styled.div`
  canvas {
    position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
  }
  .animation-wrapper::before {
      content: " ";
      position: fixed;
      width: 100%;
      height: 100vh;
      top: 0px;
      left: 0px;
      background: linear-gradient(120deg,#fff 40%,transparent);
      z-index: 1;
  }
`;
