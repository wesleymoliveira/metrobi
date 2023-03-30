import React from 'react';
import { ExtraContent } from './ExtraContent';

const ExtraContentArgTypes = {
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
	title: 'components/ExtraContent',
	component: ExtraContent,
	argTypes: ExtraContentArgTypes
};

export const Default = (args) => 
<div style={{ maxWidth: '130rem', margin: '0 auto' }}>
  <ExtraContent {...args} />
</div>;

