import React from 'react';
import SinCanvas from '../components/sinCanvas.js';
import { withKnobs } from "@storybook/addon-knobs";



export default {
  title: 'Animations Sine',
  component: SinCanvas,
  decorators: [withKnobs],
  includeStories: ['SinCanvasStory']
};


export const SinCanvasStory = () => (
  <React.Fragment>
      <SinCanvas/>
  </React.Fragment>
);

