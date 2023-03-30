import React from 'react';
import { Sidebar } from './Sidebar';

const SidebarArgTypes = {
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
	title: 'components/Sidebar',
	component: Sidebar,
	argTypes: SidebarArgTypes
};

export const Default = (args) => <Sidebar {...args} />;
