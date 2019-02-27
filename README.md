<!-- ![Logo of the project](./images/logo.sample.png) -->

# Application Development Workspace &middot; [![Hiptest Status](https://app.hiptest.com/badges/folder/722126)](https://app.hiptest.com/projects/105770/test-plan/folders/722126) [![pipeline status](https://gitlab.com/bohushvitali/sandbox/badges/master/pipeline.svg)](https://gitlab.com/bohushvitali/sandbox/commits/master)

> Work in progress

The Project's purpose is to demonstrate technology integrations to ensure best practices compliance

## Target state

- Eclipse Thea containerized development workspace.
- Git workflow. GitOps pull requests flow.
- Skaffold tool for development / build / deployment
- Bazel managed language-agnostic local / remove build execution and dependencies caching.
- Buildkite CI/CD pipeline.
- Helm packaged stack-independent back-end services.
- Wasm packaged language-agnostic libraries.
- Nx workspace + xplat architecture.
- Framework-independent application state management system.
- Acceptance test-driven development flow.
- Progressive web applications: Angular / Stencil / React.
- Cross-platform native applications: NativeScript / Unreal Engine.
- Cloud platform-agnostic kubernetes deployment.
- Cloud platform-agnostic serverless functions deployment.

## Done

- [x] [Skaffold](https://github.com/GoogleContainerTools/skaffold) tool for developing Multi-language Applications and Services
- [x] A performant Continuous Delivery Pipeline: Local Minikube GitLab CI Runner with [Minio](https://www.minio.io/) Storage for dependency caching, [Verdaccio](https://verdaccio.org/) NPM proxy registry
- [x] [NX](https://nrwl.io/nx/what-is-nx) Monorepo Workspace with [Xplat](https://nstudio.io/xplat/) architecture for [cross-platform development](https://docs.google.com/document/d/1gUcPuHWjyO6nI3FLWCCfj-7rgAkcHUewdMYj_Izlm9U), Progressive web applications with [Angular](https://angular.io/)
- [x] Server-side Rendering with [Universal Development Kit](https://github.com/enten/udk), [Firebase](https://firebase.google.com/) platform for Serverless functions deployment,
- [x] Page Prerender with [Prerender SPA Plugin](https://github.com/chrisvfritz/prerender-spa-plugin),
- [x] Acceptance Test Driven Development with [Codecept](https://codecept.io/) and [Jest](https://jestjs.io/)
- [x] Design System Development using [Storybook](https://storybook.js.org/)
- [x] [Nest.js](https://nestjs.com/) Backend
- [x] Machine Learning Capabilities: [TensorFlow.js](https://js.tensorflow.org/)
- [x] Components Libraries: [Angular Material](https://material.angular.io/), [Covalent UI Platform](https://teradata.github.io/covalent/)
- [x] [WebAssembly](https://webassembly.org/) Integration
- [x] Stencil.js Application example

## In progress

- [ ] Bazel Build System
- [ ] Components Libraries: Material Web Components, MDBootstrap
- [ ] Cross-platform application: NativeScript Integration, Ionic Integration, Capacitor Integration: iOS, Android, Electron
- [ ] Graphics Libraries: REGL, Babylon.js, Three.js
- [ ] Application Features: NGXS State Manager, Google Tag Manager, Firebase Auth, Winston logging
- [ ] Cloud Backends: Firebase Platform, AWS AppSync, Prisma database API
- [ ] Offline Storages: RxDB
- [ ] Communication Styles: GraphQL with Apollo, REST, gRPC
- [ ] Functional Programming Style: RxJS, Lodash FP, Lodash Decorators
- [ ] API Integrations: Google APIs, Trello API, Coinbase API
- [ ] Blockchain Networks Integrations, Blockchain API, Ethereum API
- [ ] Smart Contracts Development: Solidity, OpenZeppelin
- [ ] Decentralized Platform Integrations: SingularityNET, Holochain Network, Solid Platform, IPFS, IPLD

## Subprojects

- [x] ATDD application development - Tour of Heroes Angular Example
- [x] Rust and WebAssembly Example

## Checklist

- [Project Guidelines](https://github.com/elsewhencode/project-guidelines)
- [Clean Code Cheat Sheet ](https://www.planetgeek.ch/wp-content/uploads/2014/11/Clean-Code-V2.4.pdf)
- [The Twelve-Factor App](https://12factor.net). [Beyond the Twelve-Factor App](https://assets.dynatrace.com/en/docs/report/beyond-the-twelve-factor-app-dynatrace-paper.pdf)
- [Clean Architecture Cheat Sheet ](https://www.planetgeek.ch/wp-content/uploads/2016/03/Clean-Architecture-V1.0.pdf)
- [Cloud Native Computing Organizational Readiness Review](https://github.com/jdumars/cncorr)