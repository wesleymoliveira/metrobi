import React from 'react';
import { Typography } from './Typography';

const TypographyArgTypes = {
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
	title: 'components/Typography',
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
	component: Typography,
	argTypes: TypographyArgTypes
};

export const Default = (args) => 
  <div style={{ display: 'flex', flexDirection: 'column'}}>
    <Typography {...args}>Default</Typography>
    <Typography {...args} size='small'>Small</Typography>
    <Typography {...args} size='medium'>Medium</Typography>
    <Typography {...args} size='large'>Large</Typography>
    <Typography {...args} size='xlarge'>XLarge</Typography>
    <Typography {...args} size='xxlarge'>XXLarge</Typography>
  </div>
