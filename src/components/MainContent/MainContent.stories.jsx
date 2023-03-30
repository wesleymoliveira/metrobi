import React from 'react';
import { MainContent } from './MainContent';

const MainContentArgTypes = {
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
	title: 'components/MainContent',
	component: MainContent,
	argTypes: MainContentArgTypes
};

export const Default = (args) => <MainContent {...args} />;
