import { component } from '@astrojs/markdoc/config';

import type { Tag } from './types';

export const social_link: Tag = {
  render: component('@components/markdoc/SocialLink.astro'),
  selfClosing: true,
  attributes: {
    name: {
      type: String,
      required: true
    }
  }
};

export const citizen_name_pack_list: Tag = {
  render: component('@components/markdoc/CitizenNamePackList.astro'),
  selfClosing: true
};

export const content_block: Tag = {
  render: component('@components/markdoc/content/RegularContentBlock.astro'),
  attributes: {
    image: {
      type: String,
      required: true
    },
    image_alt: {
      type: String,
      required: false
    },
    cols: {
      type: Number,
      default: 4
    }
  }
};

export const image_row: Tag = {
  render: component('@components/markdoc/util/ImageRow.astro')
};
