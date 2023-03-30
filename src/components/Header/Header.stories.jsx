import React from 'react';
import { Header } from './Header';

const HeaderArgTypes = {
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
	title: 'components/Header',
	component: Header,
	argTypes: HeaderArgTypes
};

export const Default = (args) => <Header {...args} />;
