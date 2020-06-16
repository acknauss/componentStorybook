import React from 'react';
import SinCanvas from '../components/sinCanvas.js';
import TwirlFinal from '../components/twirlFinal.js';
import { withKnobs } from "@storybook/addon-knobs";



export default {
  title: 'Animations Sine',
  component: SinCanvas,
  decorators: [withKnobs],
  includeStories: ['SinCanvasStory', 'TwirlFinalStory']
};


export const SinCanvasStory = () => (
  <React.Fragment>
      <SinCanvas/>
  </React.Fragment>
);

export const TwirlFinalStory = () => (
  <React.Fragment>
      <TwirlFinal/>
  </React.Fragment>
);

