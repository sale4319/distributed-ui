## The idea

Build distributed UI system with typescript and storybook.

## Running the project locally

After cloning the project navigate to it and run `yarn install`

After installing run `yarn sb` to start storybook

## Contributing

Create branch and open pull request

Structural changes need to be properly indexed for rollup to pack them:

```
├── src
│ ├── components
| │ ├── Button
| | │ ├── Button.tsx
| | │ └── index.ts
| │ └── index.ts
│ └── index.ts
├── package.json
└── yarn.lock
```
After changes are approved run `yarn rbl` to build the current state of the application

Run `npm publish` to make changes available outside

## Development path

- [x] Prmitive `npm init`
- [x] Prmitive `git init`
- [x] `yarn add -D react-dom typescript @types/react`
- [x] Introduce componenet structure
- [x] Initialize and configure TypeScript `npx tsc --init`
- [x] Add initial components
- [x] Add Rollup
- [x] Rollup build & `npm publish`
- [x] Add storybook (webpack 5) & enable css modules
