# webcomponents 101 Part 2: Modular styles of web-components with CSS

[![Continuous Build](https://github.com/quatico-solutions/webcomponents-101-part2/actions/workflows/continuous-build.yml/badge.svg?event=push)](https://github.com/quatico-solutions/webcomponents-101-part2/actions/workflows/continuous-build.yml)

An introduction into modern styling of web-components with CSS.

This workshop introduces the concept of modular and self-contained styling for web-components. The shadow root as component boundary, style composition with Sass and style parameterization with CSS variables are presented as the key to components with isolated styling that can be placed freely on a page. We'll learn three fundamental features of Sass that will help you to use the BEM (block-element-modifier) methodology in your daily coding. We'll practice style composition with Sass silent classes, CSS variables, and special CSS selectors for web-components to learn how composition supersedes the known uses of style inheritance for shadowed and exposed HTML elements.

## Contents

* Using CSS Classes with BEM
* Modular styling for shadowed and exposed components
* The visual boundary of components
* Style composition with BEM
* Parameterization of styles with CSS variables

## Getting Started

Before we start, we need to install `yarn >=1.22.0 < 2` and `node >=16`. Make sure
your can execute the following commands from the command-line:

```bash
node --version  # e.g. v16.12.1
yarn -v         # e.g. 1.22.18
```

## Build script files with TypeScript

All script files in `./src`. To get started all you need to do is run `yarn` and `yarn build`.
You can use the following additional `yarn` commands:

* `clean` - Clean all build folders in the project.
* `lint` - Lint all script files in the project.
* `build` - Run the TypeScript compiler to build script file to `./dist`.
* `test` - Run Jest to test all script files in the project.
* `test:watch` - Run Jest in watch mode to test modified script files in the project.
* `dist` - Build all script files in the project for production.

You can run every command in the project directory using `yarn`, .e.g. `yarn lint` to lint all files. You can also run
commands individually for each exercise or solution.

Check for linting errors for an individual exercise or solution using `yarn build:exercise-name` or `yarn build:solution-name`. For example:

* `build:example-step-1`: Build all script files for example step 1.
* `build:exercise1`: Build all script files for exercise 1.
* `build:exercise2`: Build all script files for exercise 2.
* `build:solution1`: Build all script files for solution 1.
* `build:solution2`: Build all script files for solution 2.

Run the code for an individual exercise or solution using `yarn run:exercise-name` or `yarn run:solution-name`. For example:

* `run:example-step-1`:  Run script files for example step 1.
* `run:exercise1`:  Run script files for exercise 1.
* `run:exercise2`:  Run script files for exercise 2.
* `run:solution1`:  Run script files for solution 1.
* `run:solution2`:  Run script files for solution 2.

Run Jest to test the code for an individual exercise or solution using `yarn test:exercise-name` or `yarn test:solution-name`. For example:

* `test:example-step-1`: Run Jest to test all script files for example step 1.
* `test:exercise1`: Run Jest to test all script files for exercise 1.
* `test:exercise2`: Run Jest to test all script files for exercise 2.
* `test:solution1`: Run Jest to test all script files for solution 1.
* `test:solution2`: Run Jest to test all script files for solution 2.
