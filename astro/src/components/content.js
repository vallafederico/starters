/* --- Data */
export const content = {
  links: [],
};

/* --- Dynamic Pages */
export async function getPages() {
  const pages = import.meta.glob("../pages/work/*.md");
  const pageArray = [];

  for (const path in pages) {
    pageArray.push(await pages[path]());
  }

  //   pageArray.sort((a, b ) => Date.parse(b.frontmatter.date) - Date.parse(a.frontmatter.date))

  return pageArray;
}
