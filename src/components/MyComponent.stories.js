import React from "react";
import MyComponent from "./MyComponent";
import isChromatic from 'chromatic/isChromatic'
export default {
  component: MyComponent,
  title: "MyComponent",
};

const Template = (args) => <MyComponent {...args} />;

export const HoverState = Template.bind({});
HoverState.args = {
  isHovered: true,
  label: `I'm :hover`,
};

export const ActiveState = Template.bind({});
ActiveState.args = {
  isActive: true,
  label: `I'm :active`,
};


// Tests is Chromatic
export const IsChromatic= Template.bind({});
IsChromatic.args={
  label:isChromatic()? `I'm in Chromatic`: `Not in Chromatic`
}
//