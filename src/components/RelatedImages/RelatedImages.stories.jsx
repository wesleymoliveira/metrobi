import React from 'react';
import { RelatedImages } from './RelatedImages';

const RelatedImagesArgTypes = {
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
	title: 'components/RelatedImages',
	component: RelatedImages,
	argTypes: RelatedImagesArgTypes
};

export const Default = (args) => <RelatedImages {...args} />;
