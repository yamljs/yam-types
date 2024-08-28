# YAML Types and Language Service Plugin
![NPM License](https://img.shields.io/npm/l/%40yaml-js%2Ftypescript)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/yaml-js/typescript/build.yml)
![Sonar Quality Gate](https://img.shields.io/sonar/quality_gate/org.yaml-js.typescript?server=https%3A%2F%2Fsonarcloud.io)
![Sonar Tech Debt](https://img.shields.io/sonar/tech_debt/org.yaml-js.typescript?server=https%3A%2F%2Fsonarcloud.io)
![Sonar Coverage](https://img.shields.io/sonar/coverage/org.yaml-js.typescript?server=https%3A%2F%2Fsonarcloud.io)
[![Known Vulnerabilities](https://snyk.io/test/github/yaml-js/typescript/badge.svg)](https://snyk.io/test/github/yaml-js/typescript/)
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues/yaml-js/typescript)

`@yaml-js/typescript` is a comprehensive library that provides TypeScript types for importing `*.yaml` and `*.yml` files, along with a TypeScript language service plugin to enable IntelliSense for YAML files.

## Features

- **TypeScript Types**: Import `*.yaml` and `*.yml` files with TypeScript types.
- **IntelliSense**: Get code completion and IntelliSense for YAML files in your TypeScript projects.
  - **Schema-based Completion**: Code completion based on the schema file specified in the YAML file.
  - **Data-based Completion**: If no schema file is specified, code completion will be based on the actual data.

## Installation

To install `@yaml-js/typescript`, you can use either npm or yarn:

```bash
npm install @yaml-js/typescript --save-dev
or
yarn add -D @yaml-js/typescript
```

## Usage

To enable the TypeScript language service plugin, add the following to your **tsconfig.json**:

```json
{
  "compilerOptions": {
    "plugins": [
      {
        "name": "@yaml-js/typescript"
      }
    ]
  }
}
````

## Contributing

We welcome contributions to the any project at YAML-JS! To get started:

1. Fork the repository.
2. Clone your fork: `git clone https://github.com/yaml-js/typescript.git`
3. Create a new branch: `git checkout -b feature-name`
4. Make your changes.
5. Ensure your commit messages follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.
6. Verify if the continuous integration tasks will succeed before committing your code changes by running:
   ```bash
   yarn pre-commit
   ```
7. Commit your changes: git commit -m 'feat: add new feature'
8. Push to the branch: git push origin feature-name
9. Open a pull request.

Please ensure your code adheres to the project's coding standards and includes appropriate tests (note that code coverage minimum threshold is set to 80%).

## License
This project is licensed under the MIT License. See the [LICENSE](/LICENSE) file for more information.

## Acknowledgements
* [Vite](https://vitejs.dev/) - The blazing fast frontend tooling.
* [YAML](https://yaml.org/) - A human-friendly data serialization standard.
* [yaml library](github.com/eemeli/yaml) - This fantastic library made our job easier by not having to build a YAML parser

## Contacts for assistance
- [@pedromvgomes](https://github.com/pedromvgomes) - **Pedro Gomes**, Project Founder


If you have any questions, suggestions, or feedback, feel free to open an issue.

