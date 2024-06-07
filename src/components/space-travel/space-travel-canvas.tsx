'use client';

import React, { useRef, useEffect } from 'react';

import { useGameContext } from 'src/game/hook/use-game-context';

import './style.css';
import SpaceTravel from './lib/space-travel';

const SpaceTravelCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { progress } = useGameContext();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error('Canvas not found');
      return;
    }

    let paused = false;
    let throttle = progress;

    const spaceTravel = new SpaceTravel({
      canvas,
      throttle,
    });

    const handleVisibilityChange = () => {
      if (paused) {
        return;
      }
      if (document.hidden) {
        spaceTravel.pause();
      } else {
        spaceTravel.resume();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      const { code } = event;
      if (code === 'Space') {
        if (paused) {
          spaceTravel.resume();
        } else {
          spaceTravel.pause();
        }
        paused = !paused;
      }

      if (code === 'ArrowDown') {
        throttle = Math.max(0, throttle - 0.2);
        spaceTravel.throttle = throttle;
      }

      if (code === 'ArrowUp') {
        throttle = Math.min(1, throttle + 0.2);
        spaceTravel.throttle = throttle;
      }
    };

    const handleResize = () => {
      spaceTravel.resize();
    };


    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    spaceTravel.start();

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
      spaceTravel.pause();
    };
  }, [progress]);

  return <canvas id="space-travel" ref={canvasRef} />;
};

export default SpaceTravelCanvas;
