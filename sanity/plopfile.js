export default function (plop) {
  plop.setGenerator('create', {
    description: 'Create a new slice or component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name?',
      },
    ],
    actions: (data) => {
      const actions = []
      actions.push({
        type: 'add',
        // Pass to Handlebars file
        data: {
          name: data.name,
        },
        path: "schemas/slices/{{camelCase name}}.ts",
        templateFile: 'plop/sanitySlice.hbs',
      });

      actions.push({
        type: 'append',
        // Pass to Handlebars file
        data: {
          name: data.name,
        },
        pattern: /const globalPageSlices = \[/gi,
        path: "schemas/slices/index.ts",
        template: '{{camelCase name}},',
      });
      actions.push({
        type: 'append',
        // Pass to Handlebars file
        data: {
          name: data.name,
        },
        pattern: /const contentPageSlices = \[/gi,
        path: "schemas/slices/index.ts",
        template: '{{camelCase name}},',
      });

      // Register in PageSlices component
      // actions.push({
      //   type: 'append',
      //   // Pass to Handlebars file
      //   data: {
      //     name: data.name,
      //   },
      //   pattern: /const sliceList = \{/gi,
      //   path: "packages/ui/slices/PageSlices.vue",
      //   templateFile: 'packages/config/plop/sliceEntry.hbs',
      // })
      return actions;
    }
  });
}
