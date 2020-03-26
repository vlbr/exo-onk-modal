import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { Typography } from '@ornikar/kitt';

// automatically import all files named stories.js
const req = require.context('../src', true, /.*\/stories\.js$/);
req.keys().forEach(filename => console.log(filename));

function loadStories() {
  require('./base.css');
  req.keys().forEach(filename => req(filename));
}

const GlobalDecorator = (storyFn) => {
  return <Typography.div base="body">{storyFn()}</Typography.div>;
};

addDecorator(GlobalDecorator);

configure(loadStories, module);