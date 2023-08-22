import { pageDefaultsSeo, pageDefaultsGroup } from "./_defaults.js";

export default {
  name: "page",
  title: "Pages",
  groups: [...pageDefaultsGroup],

  type: "document",
  fields: [
    ...pageDefaultsSeo,
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "head",
      title: "Head",
      type: "head",
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "head.image",
      subtitle: "head.description",
    },
  },
};
