import React from 'react';
import ExpandingPanel from '../components/expandingPanel';


export default {
  title: 'Expanding Panel',
};


export const ExpandingPanelStory = () => (
  <React.Fragment>
    <h2>This is an expanding panel that will smoothly open and close </h2>
          <ExpandingPanel title="CLOSED on Render" subtitle="hello here is subtitle" isDefaultOpen={false}>
            <div><p>children this is the childrens</p></div>
          </ExpandingPanel>
          <ExpandingPanel title="OPEN on Render" subtitle="hello here is subtitle" isDefaultOpen={true}>
            <div><p>children this is the childrens</p></div>
          </ExpandingPanel>
  </React.Fragment>
);
