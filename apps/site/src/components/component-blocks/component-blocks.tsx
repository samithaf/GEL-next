import { component, fields } from '@keystatic/core';

export const ComponentBlocks = {
  // EXAMPLES:
  articles: component({
    label: 'Article',
    preview: props => <>{props.fields.article.value || ''}</>,
    schema: {
      article: fields.relationship({
        label: 'Related article',
        description: 'Article',
        collection: 'articles',
      }),
    },
  }),
};
