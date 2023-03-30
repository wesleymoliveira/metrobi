import React from 'react';
import { Hero } from './Hero';

const HeroArgTypes = {
  label: {
    name: 'label',
    type: { name: 'string', required: false },
    description: 'overwritten description',
    table: {
      type: { 
        summary: 'something short', 
        detail: 'something really really long' 
      },

    },
    control: {
      type: 'string'
    }
  }
};

export default {
	title: 'components/Hero',
	component: Hero,
	argTypes: HeroArgTypes
};

export const Default = (args) => <Hero {...args} />;
