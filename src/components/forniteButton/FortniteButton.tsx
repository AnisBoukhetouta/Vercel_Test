import React, { createRef } from "react";
import "./styles.css";

interface Props {
  color?: string;
  text: string | React.ReactElement;
  subtext: string | React.ReactElement;
  type: string;
  children?: React.ReactNode;
}

class FortniteButton extends React.Component<Props> {
  private buttonRef;
  private flushRef;

  constructor(props) {
    super(props);
    this.buttonRef = React.createRef<HTMLDivElement>();
    this.flushRef = React.createRef<HTMLDivElement>();
  }

  componentDidMount() {
    if (this.buttonRef.current) {
      const thiz = this.buttonRef.current;
      thiz.addEventListener("mouseover", this.mouseOverListener);
      thiz.addEventListener("focus", this.focusListener);
    }
  }

  componentWillUnmount() {
    if (this.buttonRef.current) {
      const thiz = this.buttonRef.current;
      thiz.removeEventListener("mouseover", this.mouseOverListener);
      thiz.removeEventListener("focus", this.focusListener);
    }
  }

  mouseOverListener = () => {
    this.playFlashAnimation();
  };

  focusListener = () => {
    this.playFlashAnimation();
  };

  playFlashAnimation = () => {
    if (this.flushRef.current) {
      this.flushRef.current.animate(
        [{ opacity: "0" }, { opacity: "0.5", offset: 0.15 }, { opacity: "0" }],
        {
          fill: "forwards",
          duration: 500,
        }
      );
    }
  };

  render() {
    return (
      <div ref={this.buttonRef} className="fortnite-card">
        <button className={"fortnite-button " + this.props.color}>
          <div className="wrapper">
            <div className="vignette-bg"></div>
            <div className="scrolling-bg"></div>
            <div className="radial-gradient"></div>
            <div ref={this.flushRef} className="flash"></div>
            <div className="bottom-gradient"></div>
            {this.props.children}
            <div className="bottom-gradient"></div>
            <div className={`text-wrapper text-wrapper--${this.props.type}`}>
              <h2 className={`fb-btn-text fb-btn-text--${this.props.type}`}>
                {this.props.text}
              </h2>
              <p className={`fb-btn-subtext fb-btn-subtext--${this.props.type}`}>
                {this.props.subtext}
              </p>
            </div>
            <div className={`bar bar--${this.props.type}`}></div>
          </div>
        </button>
      </div>
    );
  }
}

export default FortniteButton;
