import { MdSettings } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";
import { BiSolidShareAlt } from "react-icons/bi";

// prettier-ignore
export const structure = (S) => {
  const singlePage = (title, schema, icon, docId) => {
    return S.listItem()
      .title(title)
      .icon(icon || undefined)
      .child(
        S.editor()
          .schemaType(schema)
          .documentId(docId || title)
      )
  }

  return S.list()
  .title('Content')
  .items([

    ...S.documentTypeListItems().filter(
      (listItem) => 
          ![
          'settings',
            'social',
          'ctaSettings', 
            'socialIcons'
              // ...
        ].includes(listItem.getId())),
        S.divider(),
        S.listItem()
        .title('Settings')
        .icon(MdSettings)
          .child(
            S.list()
              .title('Settings')
              .items([
                singlePage('CTA Settings', 'ctaSettings', null, 'ctaSettings'), 
                singlePage('Site Settings', 'settings', null, 'settingds'), 
                singlePage('Social Media', 'socialIcons', BiSolidShareAlt, 'socialIcons')
              ]),
      ),

  ])

}
