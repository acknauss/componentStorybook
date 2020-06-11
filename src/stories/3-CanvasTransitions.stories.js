import React from 'react';
import CanvasWork from '../components/canvasEffects';



export default {
  title: 'Animations Canvas',
  component: CanvasWork,
  includeStories: ['CanvasTest']
};


export const CanvasTest = () => (
  <React.Fragment>
      <CanvasWork/>
  </React.Fragment>
);

