import { connect, styled } from "frontity";
import { useEffect } from "react";
import SectionContainer from "../styles/section-container";

const AnimatedSquares = ({ state, id, className, actions }) => {
    /**
     * Prefetch so everything is ready and it loads instantly.
     * Plus the JS code for the animation
     */
    useEffect(() => {
      actions.source.fetch("/");
      // animation scripts
    }, []);


  return (
    <Squares>
        <div className="container">
        <div className="square black">
        <div className="square">
        <div className="square black">
        <div className="square">
        <div className="square black">
        <div className="square">
        <div className="square black">
        <div className="square">
        <div className="square black">
        <div className="square">
        <div className="square black">
        <div className="square">
        <div className="square black">
        <div className="square">
        <div className="square black">
        <div className="square">
        <div className="square black">
        <div className="square">
        <div className="square black">
        <div className="square">
        <div className="square black">
        <div className="square">
        <div className="square black">
        <div className="square">
        <div className="square black">
        <div className="square">
        <div className="square black">
        <div className="square">
        <div className="square black">
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    </Squares>
  );

};

export default connect(AnimatedSquares);

const Squares = styled.div`
position: fixed;

.container{
  height: 300px;
  width: 300px;
  position: absolute;
  top: 11vh;
  left: 64vw;
}

.square{
  height: 94%;
  width: 94%;
  border: 1px solid #999;
  background: transparent;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0;
}

.black{
  background: transparent;
  animation: rotate 20s infinite linear;
}

@keyframes rotate{
  0%{ transform: rotate(0deg); }
	100%{ transform: rotate(360deg); }
}

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

`;
