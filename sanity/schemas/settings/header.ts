export default {
	name: 'settings.header',
	title: 'Header',
	type: 'object',
	fields: [
		{
			name: 'links',
			title: 'Navigation Links',
			type: 'array',
			of: [
				{
					type: 'internalLink',
					name: 'link',
				},
			],
		},
		{
			name: 'cta',
			title: 'Call to Action Label',
			description: 'Label for a call to action button in the navigation.',
			type: 'string',
		},
	],
	preview: {
		prepare() {
			return {
				title: 'Header',
			}
		},
	},
}
