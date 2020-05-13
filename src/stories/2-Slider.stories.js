import React from 'react';
import InteractiveSlider from '../components/interactiveSlide';


export default {
  title: 'Animations Slider-esque',
  component: InteractiveSlider,
  includeStories: ['QuizSlidersStory']
};


export const QuizSlidersStory = () => (
  <React.Fragment>
      <InteractiveSlider/>
  </React.Fragment>
);

