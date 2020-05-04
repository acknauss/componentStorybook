import React from 'react';
import StyledButton from '../components/styledButton';


export default {
  title: 'Styled Component Button',
  component: StyledButton,
  includeStories: ['StyledComponentButton', 'CustomStyledColors']
};


export const StyledComponentButton = () => (
  <React.Fragment>
  <div>
            <StyledButton color="green" variant="primary">
                Primary Button
            </StyledButton>
            <br />
            <br />
            <StyledButton color="green" variant="secondary">
                Secondary Button
            </StyledButton>
            <br />
            <br />
            <StyledButton color="BrightBlue" variant="primary">
                Blue Primary
            </StyledButton>
            <br />
            <br />
            <StyledButton color="BrightBlue" variant="secondary">
                Blue Secondary
            </StyledButton>
            <br />
            <br />
            <StyledButton variant="primary">Default Primary</StyledButton>
            <br />
            <br />
            <StyledButton variant="secondary">Default Secondary</StyledButton>
        </div>
  </React.Fragment>
);

export const CustomStyledColors = () => ( 
  <React.Fragment>
      <StyledButton color="red" variant="primary" hoverColor="redMuted">
            Custom Primary
        </StyledButton>
      <br />
      <br />
      <StyledButton color="purple" variant="secondary">
          Custom Secondary
      </StyledButton>
  </React.Fragment>
)
