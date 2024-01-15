import {
  MdContactMail,
  MdContactPage,
  MdCookie,
  MdError,
  MdGavel,
  MdHome,
  MdInsertDriveFile,
  MdPages,
  MdSettings,
} from 'react-icons/md'
import {RiInputCursorMove, RiLayoutBottom2Line, RiLayoutTop2Line} from 'react-icons/ri'
import {AiOutlineFileSearch} from 'react-icons/ai'
import {HiDocumentText} from 'react-icons/hi'
import {IconType} from 'react-icons/lib'
import {BsReverseListColumnsReverse} from 'react-icons/bs'

export const structure = (S) => {
  const pageList = (title: string, schema: string, icon?: IconType) => {
    return S.listItem()
      .title(title)
      .icon(icon || HiDocumentText)
      .child(S.documentTypeList(schema))
  }

  const singlePage = (title: string, schema: string, icon: IconType, docId?: string) => {
    return S.listItem()
      .title(title)
      .icon(icon || HiDocumentText)
      .child(
        S.editor()
          .schemaType(schema)
          .documentId(docId || title)
      )
  }

  return S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Pages')
        .icon(MdInsertDriveFile)
        .child(
          S.list()
            .title('Pages')
            .items([
              singlePage('Home', 'home', MdHome, 'home'),
              // singlePage('Who we are', 'about', MdContactPage, 'about'),
              // singlePage('Error (404)', 'error', MdError, 'error'),

              pageList('Project Pages', 'project', MdPages),
              S.divider(),
              pageList('Legal Pages', 'legal', MdGavel),
            ])
        ),
      // pageList('Lists', 'settings.lists', BsReverseListColumnsReverse),
      S.divider(),
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.list()
            .title('Settings')
            .items([
              // S.listItem()
              //   .title('Header')
              //   .icon(RiLayoutTop2Line)
              //   .child(S.editor().schemaType('settings.header').documentId('settings.header')),
              S.listItem()
                .title('Footer')
                .icon(RiLayoutBottom2Line)
                .child(S.editor().schemaType('settings.footer').documentId('settings.footer')),
            ])
        ),

      // S.listItem()
      //   .title('Lists')
      //   .icon(BsReverseListColumnsReverse)
      //   .id('settings.lists')
      //   .child(
      //     S.list()
      //       .title('Lists')
      //       .id('lists')
      //       .items([pageList('Lists', 'settings.lists')])
      //   ),
    ])
}
