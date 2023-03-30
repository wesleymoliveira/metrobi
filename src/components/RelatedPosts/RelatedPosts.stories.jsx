import React from 'react';
import { RelatedPosts } from './RelatedPosts';

const RelatedPostsArgTypes = {
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
	title: 'components/RelatedPosts',
	component: RelatedPosts,
	argTypes: RelatedPostsArgTypes
};

export const Default = (args) => <RelatedPosts {...args} />;
