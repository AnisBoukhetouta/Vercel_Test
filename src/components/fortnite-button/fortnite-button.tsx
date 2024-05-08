import React from 'react';

import './styles.css';

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

  constructor(props: Props) {
    super(props);
    this.buttonRef = React.createRef<HTMLDivElement>();
    this.flushRef = React.createRef<HTMLDivElement>();
  }

  componentDidMount() {
    if (this.buttonRef.current) {
      const thiz = this.buttonRef.current;
      thiz.addEventListener('mouseover', this.mouseOverListener);
      thiz.addEventListener('focus', this.focusListener);
    }
  }

  componentWillUnmount() {
    if (this.buttonRef.current) {
      const thiz = this.buttonRef.current;
      thiz.removeEventListener('mouseover', this.mouseOverListener);
      thiz.removeEventListener('focus', this.focusListener);
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
        [{ opacity: '0' }, { opacity: '0.5', offset: 0.15 }, { opacity: '0' }],
        {
          fill: 'forwards',
          duration: 500,
        }
      );
    }
  };

  render() {
    const { color, children, type, text, subtext } = this.props;
    return (
      <div ref={this.buttonRef} className="fortnite-card">
        <button type="button" className={`fortnite-button ${color}`}>
          <div className="wrapper">
            <div className="vignette-bg" />
            <div className="scrolling-bg" />
            <div className="radial-gradient" />
            <div ref={this.flushRef} className="flash" />
            <div className="bottom-gradient" />
            {children}
            <div className="bottom-gradient" />
            <div className={`text-wrapper text-wrapper--${type}`}>
              <h2 className={`fb-btn-text fb-btn-text--${type}`}>{text}</h2>
              <p className={`fb-btn-subtext fb-btn-subtext--${type}`}>{subtext}</p>
            </div>
            <div className={`bar bar--${type}`} />
          </div>
        </button>
      </div>
    );
  }
}

export default FortniteButton;
