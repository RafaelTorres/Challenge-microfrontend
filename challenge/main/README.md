<h1 align="center">Host - Challenge Acid Labs</h1>

Welcome to Host - Challenge AcidLabs, a project focused on testing the developer's knowledge using the **Module Federation**, through a web page developed using **React JS**, where you will be able to see iteration between components using module federation with ***Next JS***


## Getting Started 🚀

These instructions will allow you to get a copy of the project running on your local machine for development and testing purposes.

### Pre-requirements 📋

[//]: # (This is an internal comment not shown in the README visually)
[//]: # (What things do you need to work with the project and how to install them)

* [Git](https://git-scm.com/downloads)
* [Node JS 18.3.0](https://nodejs.org/es/download)
* [Remote - Challenge Acid Labs](../counter/README.md) ***Important***

### Installation 🔧

[//]: # (A series of step-by-step examples that tells you what to run to have a development environment running)

1. Clone repository:

  ```shell
  git clone https://github.com/RafaelTorres/Challenge-microfrontend.git
  ```

1. Go to the project folder:

  ```shell
  cd Challenge-microfrontend/challenge/main
  ```

1. Install dependencies:

  ```shell
  npm ci
  ```

1. Run the project:

  ```shell
  npm run dev
  ```

1. Open browser:

  ```shell
  http://localhost:3000
  ```

## Running the tests ⚙️
### Running unit tests 🔩

The tests for this project are designed to test the pieces in a unit and not in an integrated way like `e2e`, the **framework** used for the unit tests
is `jest` with the library `@testing-library`.

> To generate a test file is only neccesary create a `__test__` folder,  adding a file with extension `.test.ts`.


```shell
// General testing
npm run test

// Testing with coverage
npm run test:coverage

// Testing with watcher
npm run test:watch

// Refresh test snapshot
npm run test:snapshot
```

***Note:*** The current coverage is: `100%`

### Running linter 🖋

The project work with linter configuration using **ESlint** and code formatter using **Prettier** as rules template.

```shell
// To analyze and fix format in code
npm run format:fix

// To check conding formatter
npm run format:check
```

## Deployment 📦

### Build project 🔨

```shell
npm run build
```

## Built with 🛠️

The Tools used in this development were as follows:

* Framework: [Next JS](https://nextjs.org/)
* Tecnology Reference: [React JS](https://reactjs.org/)
* Module Federations: [MF](https://github.com/module-federation/universe/tree/main#readme)
* Stylesheet: [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* Code Linter: [ESLint](https://eslint.org/)
* Code Formatter: [Prettier](https://prettier.io/)
* Testing utilities: [React test utilities](https://testing-library.com/docs/react-testing-library/intro/)
* Testing Framework: [Jest](https://jestjs.io/)

## Extra Steps ⚡

<Add extra steps that you can run as part of building tasks>

## License 📄

<Add project license here></Add>
See more in the [License section](../LICENSE).

## Author 👨🏻‍💻

**Rafael Torres**

Software Engineer, passionate about learning, sharing and contributing to this great world of programming.

* LinkedIn: [@rafael-torres](https://www.linkedin.com/in/rafael-torres-18b3a6128)
