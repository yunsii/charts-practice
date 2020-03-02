import React from 'react';
import { HelloWorld } from '../src';

export default {
  title: 'Hello',
};

export const hello = () => <HelloWorld />;

hello.story = {
  name: 'Hello World',
};
