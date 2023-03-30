# METROBI CHALLENGE - Wesley M Oliveira

## Important notes

- Components are developed atomically, allowing for their reuse.
- All components have at least one rendering test and one snapshot test to ensure that no style is added or altered, respecting their original idea. Take a look at the Typography component.
- The answers to the questions are in: ```src/questions```. To view question 3, run ```yarn start``` and it will be presented as the home page.
- Tests were also performed on the functions of the questions.

## Table of Contents

- [METROBI CHALLENGE](#metrobi-challenge-wesley-m-oliveira)
  - [Important Notes](#important-notes)
  - [Table of Contents](#table-of-contents)
	- [Main Dependencies](#main-dependencies)
		- [Styled Components](#styled-components)
		- [Jest](#jest)
		- [Plop](#plop)
		- [Storybook](#storybook)
  - [Instructions](#instructions)
    - [How to run the aplication?](#how-to-run-the-aplication)
    - [Commands - yarn](#commands---yarn)
    - [Creating new components](#creating-new-components)
  - [Tests](#tests)
	  - [Snapshot tests](#snapshot-tests)
	- [Desired improvements](#desired-improvements)


## Main dependencies

### Styled-components
Styled-components is a CSS-in-JS styling framework that uses tagged template literals in JavaScript and the power of CSS to provide a platform that allows you to write actual CSS to style React components.

Styled components are easy-to-make React components that you write with the styled-components library, where you can style your components with plain CSS inside your JavaScript code. ```import styled, { css } from 'styled-components'```

### Jest
Jest is a JavaScript Testing Framework with a focus on simplicity, with almost zero configuration. ```yarn test```

It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!

### Plop
Plop is like a "micro-generator framework." It is a small tool that gives you a simple way to generate code or any other type of flat text files in a consistent way. ```yarn generate MyComponent```

### Storybook
Storybook is a frontend workshop for building UI components and pages in isolation. ```yarn storybook```
Take a look at this real world example: [Grafana UI](https://developers.grafana.com/ui/latest/)

## Instructions

### How to run the application?

- First, download the project repository. Then inside the folder `/metrobi`, execute the command `yarn install` to install all the dependencies.
- Executing ```yarn start``` the main page have the ```Question 3``` answer.

### Commands - yarn

- [x] start: runs your application on localhost:3000
- [x] build: creates the production build version
- [x] test: runs all jest tests
- [x] storybook: runs storybook on localhost:6006
- [x] build-storybook: create the build version of storybook
- [x] generate: create a component structure using 'plop' lib, including test, styles and index ex: ```yarn generate MyComponent```

### Creating new components

- Please make sure to use ```yarn generate``` command to create new components
- Please separate the stylizations in the `*.styled.tsx` file of each component
- Please create a Storybook of your component with all possible variations
- Please make at list one test render and snapshot test of your component. We are using Jest and React-testing-library for that.

You can take a look at this example:
src/components/Typography

### Tests
- ```yarn test``` inside the project root folder.
- If you change any component that has a snapshot test, it will fail. If you really want to update it: after running ```yarn test``` it will show a failed test case related to snapshot, press ```u``` to update it.

## Snapshot tests
- Snapshot tests in Jest are a type of automated testing that compares the current output of a component or function to a previously saved "snapshot" of the expected output. These tests are commonly used for testing UI components to ensure that they are rendering correctly and consistently.




### Desired improvements?
- I like to use [Husky](https://typicode.github.io/husky/#/) lib. Husky improves our commits.
	We can use it to lint our commit messages, run tests, lint code, etc... when you commit or push code. 
- Typescript