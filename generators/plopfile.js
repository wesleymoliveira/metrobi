module.exports = plop => {
	plop.setGenerator('component', {
		description: 'Create a component',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'What is your component name?'
			}
		],
		actions: [
			{
				type: 'add',
				path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.jsx',
				templateFile: 'templates/Component.jsx.hbs'
			},
			{
				type: 'add',
				path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.styled.js',
				templateFile: 'templates/styled.js.hbs'
			},
			{
				type: 'add',
				path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.jsx',
				templateFile: 'templates/stories.jsx.hbs'
			},
			{
				type: 'add',
				path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.test.jsx',
				templateFile: 'templates/test.jsx.hbs'
			},
			{
				type: 'add',
				path: '../src/components/{{pascalCase name}}/index.js',
				templateFile: 'templates/index.js.hbs'
			},
			{
				type: 'append',
				path: '../src/components/index.js',
				template: "export * from './{{pascalCase name}}';"
			}
		]
	});
};
