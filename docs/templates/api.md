---
nav_order: 2
parent: Templates
---

# API

---

## express-rest-api

A REST [resource API] built on the [Express] web framework and deployed with [Gantry].

[View on GitHub](https://github.com/seek-oss/skuba/tree/master/template/express-rest-api)


Added in [3.8.0](https://github.com/seek-oss/skuba/releases/tag/v3.8.0)

<details markdown="block">
  <summary>
    Changelog
  </summary>
  {: .text-delta }

- [3.15.3](https://github.com/seek-oss/skuba/releases/tag/v3.15.3): seek-jobs/gantry v1.5.2 ([#634](https://github.com/seek-oss/skuba/pull/634))

- [3.15.3](https://github.com/seek-oss/skuba/releases/tag/v3.15.3): @seek/logger ^5.0.0 ([#621](https://github.com/seek-oss/skuba/pull/621))

- [3.15.2](https://github.com/seek-oss/skuba/releases/tag/v3.15.2): Remove README tables of contents ([#596](https://github.com/seek-oss/skuba/pull/596))

  GitHub's Markdown renderer now generates its own table of contents.

- [3.15.2](https://github.com/seek-oss/skuba/releases/tag/v3.15.2): seek-jobs/gantry v1.5.1 ([#604](https://github.com/seek-oss/skuba/pull/604))

- [3.15.2](https://github.com/seek-oss/skuba/releases/tag/v3.15.2): pino-pretty ^6.0.0 ([#594](https://github.com/seek-oss/skuba/pull/594))

  pino-pretty@7 requires pino@7, which has not been released on its stable channel yet.

- [3.15.1](https://github.com/seek-oss/skuba/releases/tag/v3.15.1): Remove `unknown` specifier in catch clauses ([#580](https://github.com/seek-oss/skuba/pull/580))

  Strict TypeScript 4.4 now defaults to typing catch clause variables as `unknown`.

- [3.15.0](https://github.com/seek-oss/skuba/releases/tag/v3.15.0): pino-pretty ^7.0.0 ([#506](https://github.com/seek-oss/skuba/pull/506))

- [3.15.0](https://github.com/seek-oss/skuba/releases/tag/v3.15.0): Configure environment variables and volume mounts for Buildkite annotations ([#558](https://github.com/seek-oss/skuba/pull/558))

- [3.15.0](https://github.com/seek-oss/skuba/releases/tag/v3.15.0): serverless-plugin-canary-deployments ^0.7.0 ([#508](https://github.com/seek-oss/skuba/pull/508))

- [3.15.0](https://github.com/seek-oss/skuba/releases/tag/v3.15.0): seek-jobs/gantry v1.4.1 ([#504](https://github.com/seek-oss/skuba/pull/504))

- [3.15.0](https://github.com/seek-oss/skuba/releases/tag/v3.15.0): Remove `@types/node` resolution override ([#498](https://github.com/seek-oss/skuba/pull/498))

  Jest 27.1 is compatible with newer versions of `@types/node`.

- [3.15.0](https://github.com/seek-oss/skuba/releases/tag/v3.15.0): Suggest using a secure header middleware ([#579](https://github.com/seek-oss/skuba/pull/579))

- [3.15.0](https://github.com/seek-oss/skuba/releases/tag/v3.15.0): Remove Yarn cache from worker Docker images ([#499](https://github.com/seek-oss/skuba/pull/499))

  This shrinks the cached Docker images that our worker templates generate.

- [3.14.4](https://github.com/seek-oss/skuba/releases/tag/v3.14.4): @types/node ^14.17.19 ([#490](https://github.com/seek-oss/skuba/pull/490))

- [3.14.4](https://github.com/seek-oss/skuba/releases/tag/v3.14.4): seek-jobs/gantry v1.4.0 ([#483](https://github.com/seek-oss/skuba/pull/483))

- [3.14.4](https://github.com/seek-oss/skuba/releases/tag/v3.14.4): Parameterise AWS region ([#488](https://github.com/seek-oss/skuba/pull/488))

- [3.14.3](https://github.com/seek-oss/skuba/releases/tag/v3.14.3): seek-oss/docker-ecr-cache v1.11.0 ([#467](https://github.com/seek-oss/skuba/pull/467))

- [3.14.3](https://github.com/seek-oss/skuba/releases/tag/v3.14.3): Add `test:ci` script ([#473](https://github.com/seek-oss/skuba/pull/473))

- [3.14.3](https://github.com/seek-oss/skuba/releases/tag/v3.14.3): Force `@jest/types` resolution to fix clean installs ([#468](https://github.com/seek-oss/skuba/pull/468))

- [3.14.3](https://github.com/seek-oss/skuba/releases/tag/v3.14.3): Group Buildkite pipeline anchors ([#474](https://github.com/seek-oss/skuba/pull/474))

  This provides a bit more structure to our `pipeline.yml`s and allows anchored plugins to be recognised by Renovate.

- [3.14.3](https://github.com/seek-oss/skuba/releases/tag/v3.14.3): Use [Docker Build secrets](https://docs.docker.com/develop/develop-images/build_enhancements/#new-docker-build-secret-information) ([#471](https://github.com/seek-oss/skuba/pull/471))

- [3.14.3](https://github.com/seek-oss/skuba/releases/tag/v3.14.3): Reduce app boilerplate ([#478](https://github.com/seek-oss/skuba/pull/478))

- [3.14.3](https://github.com/seek-oss/skuba/releases/tag/v3.14.3): Default Docker Compose image to empty string ([#469](https://github.com/seek-oss/skuba/pull/469))

  This suppresses Docker Compose CLI warnings and errors when running outside of Buildkite.

- [3.14.3](https://github.com/seek-oss/skuba/releases/tag/v3.14.3): Use BUILDKITE_PIPELINE_DEFAULT_BRANCH in `pipeline.yml` ([#475](https://github.com/seek-oss/skuba/pull/475))

- [3.14.3](https://github.com/seek-oss/skuba/releases/tag/v3.14.3): Add placeholder test coverage configuration ([#472](https://github.com/seek-oss/skuba/pull/472))

- [3.14.2](https://github.com/seek-oss/skuba/releases/tag/v3.14.2): Use `seek-oss/docker-ecr-cache` Buildkite plugin ([#453](https://github.com/seek-oss/skuba/pull/453))

- [3.14.2](https://github.com/seek-oss/skuba/releases/tag/v3.14.2): Reuse ECR cache in Docker Compose ([#453](https://github.com/seek-oss/skuba/pull/453))

- [3.14.1](https://github.com/seek-oss/skuba/releases/tag/v3.14.1): pino-pretty ^5.0.0 ([#441](https://github.com/seek-oss/skuba/pull/441))

- [3.14.1](https://github.com/seek-oss/skuba/releases/tag/v3.14.1): seek-jobs/gantry v1.3.0 ([#452](https://github.com/seek-oss/skuba/pull/452))

- [3.14.0](https://github.com/seek-oss/skuba/releases/tag/v3.14.0): Banish `typeof undefined` syntax ([#429](https://github.com/seek-oss/skuba/pull/429))

- [3.14.0](https://github.com/seek-oss/skuba/releases/tag/v3.14.0): Prune `devDependencies` instead of installing twice in Docker ([#435](https://github.com/seek-oss/skuba/pull/435))

  The template-bundled Dockerfiles would previously run `yarn install` twice to build a separate stage for production `dependencies` only. These have been updated to correctly share the Yarn cache across stages and to use `yarn install --production` to perform offline pruning.

- [3.13.1](https://github.com/seek-oss/skuba/releases/tag/v3.13.1): @types/node ^15.0.0 ([#422](https://github.com/seek-oss/skuba/pull/422))

- [3.13.0](https://github.com/seek-oss/skuba/releases/tag/v3.13.0): Upgrade to Node 14 ([#347](https://github.com/seek-oss/skuba/pull/347))

  Node.js 14 is [now supported on AWS Lambda](https://aws.amazon.com/about-aws/whats-new/2021/02/aws-lambda-now-supports-node-js-14/). This lets us upgrade the Node.js requirement for skuba's templates.

  This should only impact newly created projects. You can use the template changes in this PR as an example of how to upgrade an existing project. A future version of skuba may include a fixup command to automatically upgrade your project to the most recent LTS release.

- [3.13.0](https://github.com/seek-oss/skuba/releases/tag/v3.13.0): runtypes-filter ^0.6.0 ([#408](https://github.com/seek-oss/skuba/pull/408))

- [3.13.0](https://github.com/seek-oss/skuba/releases/tag/v3.13.0): Drop region parameterisation ([#363](https://github.com/seek-oss/skuba/pull/363))

- [3.13.0](https://github.com/seek-oss/skuba/releases/tag/v3.13.0): Fail Gantry build if ECR scanning reports vulnerabilities ([#373](https://github.com/seek-oss/skuba/pull/373))

- [3.13.0](https://github.com/seek-oss/skuba/releases/tag/v3.13.0): runtypes ^6.0.0 ([#404](https://github.com/seek-oss/skuba/pull/404))

- [3.13.0](https://github.com/seek-oss/skuba/releases/tag/v3.13.0): Move Gantry region config to plugin options ([#374](https://github.com/seek-oss/skuba/pull/374))

- [3.13.0](https://github.com/seek-oss/skuba/releases/tag/v3.13.0): Add GitHub repository settings and Renovate to init checklist ([#388](https://github.com/seek-oss/skuba/pull/388))

- [3.12.1](https://github.com/seek-oss/skuba/releases/tag/v3.12.1): seek-jobs/gantry v1.2.11 ([#336](https://github.com/seek-oss/skuba/pull/336))

- [3.12.0](https://github.com/seek-oss/skuba/releases/tag/v3.12.0): Use `jest.config.ts` ([#303](https://github.com/seek-oss/skuba/pull/303))

- [3.12.0](https://github.com/seek-oss/skuba/releases/tag/v3.12.0): Enable retry of successful deployment steps ([#311](https://github.com/seek-oss/skuba/pull/311))

  This should be used with caution, but may be necessary if you need to rapidly roll back a broken deployment.

- [3.12.0](https://github.com/seek-oss/skuba/releases/tag/v3.12.0): Supply custom autoscaling policy ([#322](https://github.com/seek-oss/skuba/pull/322))

- [3.12.0](https://github.com/seek-oss/skuba/releases/tag/v3.12.0): Explicitly register `listen.ts` ([#332](https://github.com/seek-oss/skuba/pull/332))

- [3.12.0](https://github.com/seek-oss/skuba/releases/tag/v3.12.0): Clarify health checks and smoke tests ([#332](https://github.com/seek-oss/skuba/pull/332))

- [3.12.0](https://github.com/seek-oss/skuba/releases/tag/v3.12.0): Bump caret ranges ([#331](https://github.com/seek-oss/skuba/pull/331))

- [3.12.0](https://github.com/seek-oss/skuba/releases/tag/v3.12.0): Use Distroless runtime images ([#316](https://github.com/seek-oss/skuba/pull/316))

- [3.12.0](https://github.com/seek-oss/skuba/releases/tag/v3.12.0): Uplift READMEs ([#334](https://github.com/seek-oss/skuba/pull/334))

- [3.11.0](https://github.com/seek-oss/skuba/releases/tag/v3.11.0): Check coverage on default `test` script ([#290](https://github.com/seek-oss/skuba/pull/290))

- [3.11.0](https://github.com/seek-oss/skuba/releases/tag/v3.11.0): Include `test:watch` script ([#290](https://github.com/seek-oss/skuba/pull/290))

- [3.11.0](https://github.com/seek-oss/skuba/releases/tag/v3.11.0): Fix server listener and port ([#289](https://github.com/seek-oss/skuba/pull/289))

- [3.11.0](https://github.com/seek-oss/skuba/releases/tag/v3.11.0): Lock `.nvmrc`s to Node.js 12 ([#281](https://github.com/seek-oss/skuba/pull/281))

- [3.10.2](https://github.com/seek-oss/skuba/releases/tag/v3.10.2): Add `.me` files ([#248](https://github.com/seek-oss/skuba/pull/248))

- [3.10.2](https://github.com/seek-oss/skuba/releases/tag/v3.10.2): seek-jobs/gantry v1.2.9 ([#249](https://github.com/seek-oss/skuba/pull/249))

- [3.10.2](https://github.com/seek-oss/skuba/releases/tag/v3.10.2): supertest ^6.0.0 ([#243](https://github.com/seek-oss/skuba/pull/243))

- [3.10.2](https://github.com/seek-oss/skuba/releases/tag/v3.10.2): runtypes-filter ^0.4.0 ([#257](https://github.com/seek-oss/skuba/pull/257))

- [3.10.2](https://github.com/seek-oss/skuba/releases/tag/v3.10.2): @koa/router ^10.0.0 ([#249](https://github.com/seek-oss/skuba/pull/249))

- [3.10.2](https://github.com/seek-oss/skuba/releases/tag/v3.10.2): Mount working directory in Docker Compose ([#247](https://github.com/seek-oss/skuba/pull/247))

- [3.10.2](https://github.com/seek-oss/skuba/releases/tag/v3.10.2): seek-datadog-custom-metrics ^4.0.0 ([#261](https://github.com/seek-oss/skuba/pull/261))

- [3.10.1](https://github.com/seek-oss/skuba/releases/tag/v3.10.1): seek-jobs/gantry v1.2.8 ([#238](https://github.com/seek-oss/skuba/pull/238))

- [3.10.0](https://github.com/seek-oss/skuba/releases/tag/v3.10.0): supertest ^5.0.0 ([#220](https://github.com/seek-oss/skuba/pull/220))

- [3.10.0](https://github.com/seek-oss/skuba/releases/tag/v3.10.0): Recommend `@seek/logger` ([#225](https://github.com/seek-oss/skuba/pull/225))

  This provides logging structure, trimming and redaction over plain Pino.

- [3.10.0](https://github.com/seek-oss/skuba/releases/tag/v3.10.0): docker-compose v3.7.0 ([#224](https://github.com/seek-oss/skuba/pull/224))

- [3.10.0](https://github.com/seek-oss/skuba/releases/tag/v3.10.0): Unset initial skuba version ([#216](https://github.com/seek-oss/skuba/pull/216))

- [3.10.0](https://github.com/seek-oss/skuba/releases/tag/v3.10.0): Skip pre-build in Docker Compose service ([#222](https://github.com/seek-oss/skuba/pull/222))

- [3.10.0](https://github.com/seek-oss/skuba/releases/tag/v3.10.0): Add `start:debug` scripts ([#230](https://github.com/seek-oss/skuba/pull/230))

- [3.9.2](https://github.com/seek-oss/skuba/releases/tag/v3.9.2): docker-compose v3.6.0 ([#210](https://github.com/seek-oss/skuba/pull/210))

- [3.9.2](https://github.com/seek-oss/skuba/releases/tag/v3.9.2): seek-jobs/gantry v1.2.6 ([#211](https://github.com/seek-oss/skuba/pull/211))

- [3.9.2](https://github.com/seek-oss/skuba/releases/tag/v3.9.2): Bump dep ranges ([#212](https://github.com/seek-oss/skuba/pull/212))

- [3.9.0](https://github.com/seek-oss/skuba/releases/tag/v3.9.0): Use unknown catch clause variables ([#189](https://github.com/seek-oss/skuba/pull/189))

</details>

---

## koa-rest-api

A REST [resource API] built on the [Koa] web framework and deployed with [Gantry].

[View on GitHub](https://github.com/seek-oss/skuba/tree/master/template/koa-rest-api)


Added in [3.4.1](https://github.com/seek-oss/skuba/releases/tag/v3.4.1)

<details markdown="block">
  <summary>
    Changelog
  </summary>
  {: .text-delta }

- [3.15.3](https://github.com/seek-oss/skuba/releases/tag/v3.15.3): seek-jobs/gantry v1.5.2 ([#634](https://github.com/seek-oss/skuba/pull/634))

- [3.15.3](https://github.com/seek-oss/skuba/releases/tag/v3.15.3): @seek/logger ^5.0.0 ([#621](https://github.com/seek-oss/skuba/pull/621))

- [3.15.2](https://github.com/seek-oss/skuba/releases/tag/v3.15.2): Remove README tables of contents ([#596](https://github.com/seek-oss/skuba/pull/596))

  GitHub's Markdown renderer now generates its own table of contents.

- [3.15.2](https://github.com/seek-oss/skuba/releases/tag/v3.15.2): seek-jobs/gantry v1.5.1 ([#604](https://github.com/seek-oss/skuba/pull/604))

- [3.15.2](https://github.com/seek-oss/skuba/releases/tag/v3.15.2): pino-pretty ^6.0.0 ([#594](https://github.com/seek-oss/skuba/pull/594))

  pino-pretty@7 requires pino@7, which has not been released on its stable channel yet.

- [3.15.1](https://github.com/seek-oss/skuba/releases/tag/v3.15.1): Remove `unknown` specifier in catch clauses ([#580](https://github.com/seek-oss/skuba/pull/580))

  Strict TypeScript 4.4 now defaults to typing catch clause variables as `unknown`.

- [3.15.0](https://github.com/seek-oss/skuba/releases/tag/v3.15.0): pino-pretty ^7.0.0 ([#506](https://github.com/seek-oss/skuba/pull/506))

- [3.15.0](https://github.com/seek-oss/skuba/releases/tag/v3.15.0): Configure environment variables and volume mounts for Buildkite annotations ([#558](https://github.com/seek-oss/skuba/pull/558))

- [3.15.0](https://github.com/seek-oss/skuba/releases/tag/v3.15.0): serverless-plugin-canary-deployments ^0.7.0 ([#508](https://github.com/seek-oss/skuba/pull/508))

- [3.15.0](https://github.com/seek-oss/skuba/releases/tag/v3.15.0): seek-jobs/gantry v1.4.1 ([#504](https://github.com/seek-oss/skuba/pull/504))

- [3.15.0](https://github.com/seek-oss/skuba/releases/tag/v3.15.0): Remove `@types/node` resolution override ([#498](https://github.com/seek-oss/skuba/pull/498))

  Jest 27.1 is compatible with newer versions of `@types/node`.

- [3.15.0](https://github.com/seek-oss/skuba/releases/tag/v3.15.0): Suggest using a secure header middleware ([#579](https://github.com/seek-oss/skuba/pull/579))

- [3.15.0](https://github.com/seek-oss/skuba/releases/tag/v3.15.0): Remove Yarn cache from worker Docker images ([#499](https://github.com/seek-oss/skuba/pull/499))

  This shrinks the cached Docker images that our worker templates generate.

- [3.14.4](https://github.com/seek-oss/skuba/releases/tag/v3.14.4): @types/node ^14.17.19 ([#490](https://github.com/seek-oss/skuba/pull/490))

- [3.14.4](https://github.com/seek-oss/skuba/releases/tag/v3.14.4): seek-jobs/gantry v1.4.0 ([#483](https://github.com/seek-oss/skuba/pull/483))

- [3.14.4](https://github.com/seek-oss/skuba/releases/tag/v3.14.4): Parameterise AWS region ([#488](https://github.com/seek-oss/skuba/pull/488))

- [3.14.3](https://github.com/seek-oss/skuba/releases/tag/v3.14.3): seek-oss/docker-ecr-cache v1.11.0 ([#467](https://github.com/seek-oss/skuba/pull/467))

- [3.14.3](https://github.com/seek-oss/skuba/releases/tag/v3.14.3): Add `test:ci` script ([#473](https://github.com/seek-oss/skuba/pull/473))

- [3.14.3](https://github.com/seek-oss/skuba/releases/tag/v3.14.3): Force `@jest/types` resolution to fix clean installs ([#468](https://github.com/seek-oss/skuba/pull/468))

- [3.14.3](https://github.com/seek-oss/skuba/releases/tag/v3.14.3): Group Buildkite pipeline anchors ([#474](https://github.com/seek-oss/skuba/pull/474))

  This provides a bit more structure to our `pipeline.yml`s and allows anchored plugins to be recognised by Renovate.

- [3.14.3](https://github.com/seek-oss/skuba/releases/tag/v3.14.3): Reduce app boilerplate ([#478](https://github.com/seek-oss/skuba/pull/478))

- [3.14.3](https://github.com/seek-oss/skuba/releases/tag/v3.14.3): Default Docker Compose image to empty string ([#469](https://github.com/seek-oss/skuba/pull/469))

  This suppresses Docker Compose CLI warnings and errors when running outside of Buildkite.

- [3.14.3](https://github.com/seek-oss/skuba/releases/tag/v3.14.3): Use BUILDKITE_PIPELINE_DEFAULT_BRANCH in `pipeline.yml` ([#475](https://github.com/seek-oss/skuba/pull/475))

- [3.14.3](https://github.com/seek-oss/skuba/releases/tag/v3.14.3): Add placeholder test coverage configuration ([#472](https://github.com/seek-oss/skuba/pull/472))

- [3.14.3](https://github.com/seek-oss/skuba/releases/tag/v3.14.3): Use [Docker Build secrets](https://docs.docker.com/develop/develop-images/build_enhancements/#new-docker-build-secret-information) ([#471](https://github.com/seek-oss/skuba/pull/471))

- [3.14.2](https://github.com/seek-oss/skuba/releases/tag/v3.14.2): Include success message in smoke test body ([#459](https://github.com/seek-oss/skuba/pull/459))

- [3.14.2](https://github.com/seek-oss/skuba/releases/tag/v3.14.2): Use `seek-oss/docker-ecr-cache` Buildkite plugin ([#453](https://github.com/seek-oss/skuba/pull/453))

- [3.14.2](https://github.com/seek-oss/skuba/releases/tag/v3.14.2): Reuse ECR cache in Docker Compose ([#453](https://github.com/seek-oss/skuba/pull/453))

- [3.14.1](https://github.com/seek-oss/skuba/releases/tag/v3.14.1): pino-pretty ^5.0.0 ([#441](https://github.com/seek-oss/skuba/pull/441))

- [3.14.1](https://github.com/seek-oss/skuba/releases/tag/v3.14.1): seek-jobs/gantry v1.3.0 ([#452](https://github.com/seek-oss/skuba/pull/452))

- [3.14.0](https://github.com/seek-oss/skuba/releases/tag/v3.14.0): Banish `typeof undefined` syntax ([#429](https://github.com/seek-oss/skuba/pull/429))

- [3.14.0](https://github.com/seek-oss/skuba/releases/tag/v3.14.0): Log returned error responses ([#430](https://github.com/seek-oss/skuba/pull/430))

- [3.14.0](https://github.com/seek-oss/skuba/releases/tag/v3.14.0): Prune `devDependencies` instead of installing twice in Docker ([#435](https://github.com/seek-oss/skuba/pull/435))

  The template-bundled Dockerfiles would previously run `yarn install` twice to build a separate stage for production `dependencies` only. These have been updated to correctly share the Yarn cache across stages and to use `yarn install --production` to perform offline pruning.

- [3.13.1](https://github.com/seek-oss/skuba/releases/tag/v3.13.1): @types/node ^15.0.0 ([#422](https://github.com/seek-oss/skuba/pull/422))

- [3.13.0](https://github.com/seek-oss/skuba/releases/tag/v3.13.0): Upgrade to Node 14 ([#347](https://github.com/seek-oss/skuba/pull/347))

  Node.js 14 is [now supported on AWS Lambda](https://aws.amazon.com/about-aws/whats-new/2021/02/aws-lambda-now-supports-node-js-14/). This lets us upgrade the Node.js requirement for skuba's templates.

  This should only impact newly created projects. You can use the template changes in this PR as an example of how to upgrade an existing project. A future version of skuba may include a fixup command to automatically upgrade your project to the most recent LTS release.

- [3.13.0](https://github.com/seek-oss/skuba/releases/tag/v3.13.0): runtypes-filter ^0.6.0 ([#408](https://github.com/seek-oss/skuba/pull/408))

- [3.13.0](https://github.com/seek-oss/skuba/releases/tag/v3.13.0): Fix ineffectual smoke test ([#361](https://github.com/seek-oss/skuba/pull/361))

- [3.13.0](https://github.com/seek-oss/skuba/releases/tag/v3.13.0): Drop region parameterisation ([#363](https://github.com/seek-oss/skuba/pull/363))

- [3.13.0](https://github.com/seek-oss/skuba/releases/tag/v3.13.0): Fail Gantry build if ECR scanning reports vulnerabilities ([#373](https://github.com/seek-oss/skuba/pull/373))

- [3.13.0](https://github.com/seek-oss/skuba/releases/tag/v3.13.0): runtypes ^6.0.0 ([#404](https://github.com/seek-oss/skuba/pull/404))

- [3.13.0](https://github.com/seek-oss/skuba/releases/tag/v3.13.0): Remove awkward request body from GET test ([#362](https://github.com/seek-oss/skuba/pull/362))

- [3.13.0](https://github.com/seek-oss/skuba/releases/tag/v3.13.0): Move Gantry region config to plugin options ([#374](https://github.com/seek-oss/skuba/pull/374))

- [3.13.0](https://github.com/seek-oss/skuba/releases/tag/v3.13.0): Add GitHub repository settings and Renovate to init checklist ([#388](https://github.com/seek-oss/skuba/pull/388))

- [3.12.1](https://github.com/seek-oss/skuba/releases/tag/v3.12.1): Tidy custom Koa types ([#336](https://github.com/seek-oss/skuba/pull/336))

- [3.12.1](https://github.com/seek-oss/skuba/releases/tag/v3.12.1): seek-jobs/gantry v1.2.11 ([#336](https://github.com/seek-oss/skuba/pull/336))

- [3.12.0](https://github.com/seek-oss/skuba/releases/tag/v3.12.0): Type context ([#299](https://github.com/seek-oss/skuba/pull/299))

- [3.12.0](https://github.com/seek-oss/skuba/releases/tag/v3.12.0): Use `jest.config.ts` ([#303](https://github.com/seek-oss/skuba/pull/303))

- [3.12.0](https://github.com/seek-oss/skuba/releases/tag/v3.12.0): Enable retry of successful deployment steps ([#311](https://github.com/seek-oss/skuba/pull/311))

  This should be used with caution, but may be necessary if you need to rapidly roll back a broken deployment.

- [3.12.0](https://github.com/seek-oss/skuba/releases/tag/v3.12.0): Supply custom autoscaling policy ([#322](https://github.com/seek-oss/skuba/pull/322))

- [3.12.0](https://github.com/seek-oss/skuba/releases/tag/v3.12.0): Explicitly register `listen.ts` ([#332](https://github.com/seek-oss/skuba/pull/332))

- [3.12.0](https://github.com/seek-oss/skuba/releases/tag/v3.12.0): Limit request logging to errors ([#294](https://github.com/seek-oss/skuba/pull/294))

- [3.12.0](https://github.com/seek-oss/skuba/releases/tag/v3.12.0): Clarify health checks and smoke tests ([#332](https://github.com/seek-oss/skuba/pull/332))

- [3.12.0](https://github.com/seek-oss/skuba/releases/tag/v3.12.0): Bump caret ranges ([#331](https://github.com/seek-oss/skuba/pull/331))

- [3.12.0](https://github.com/seek-oss/skuba/releases/tag/v3.12.0): Use Distroless runtime images ([#316](https://github.com/seek-oss/skuba/pull/316))

- [3.12.0](https://github.com/seek-oss/skuba/releases/tag/v3.12.0): Uplift READMEs ([#334](https://github.com/seek-oss/skuba/pull/334))

- [3.11.0](https://github.com/seek-oss/skuba/releases/tag/v3.11.0): Check coverage on default `test` script ([#290](https://github.com/seek-oss/skuba/pull/290))

- [3.11.0](https://github.com/seek-oss/skuba/releases/tag/v3.11.0): Include `test:watch` script ([#290](https://github.com/seek-oss/skuba/pull/290))

- [3.11.0](https://github.com/seek-oss/skuba/releases/tag/v3.11.0): Lock `.nvmrc`s to Node.js 12 ([#281](https://github.com/seek-oss/skuba/pull/281))

- [3.10.2](https://github.com/seek-oss/skuba/releases/tag/v3.10.2): Add `.me` files ([#248](https://github.com/seek-oss/skuba/pull/248))

- [3.10.2](https://github.com/seek-oss/skuba/releases/tag/v3.10.2): seek-jobs/gantry v1.2.9 ([#249](https://github.com/seek-oss/skuba/pull/249))

- [3.10.2](https://github.com/seek-oss/skuba/releases/tag/v3.10.2): seek-koala ^5.0.0 ([#260](https://github.com/seek-oss/skuba/pull/260))

- [3.10.2](https://github.com/seek-oss/skuba/releases/tag/v3.10.2): supertest ^6.0.0 ([#243](https://github.com/seek-oss/skuba/pull/243))

- [3.10.2](https://github.com/seek-oss/skuba/releases/tag/v3.10.2): runtypes-filter ^0.4.0 ([#257](https://github.com/seek-oss/skuba/pull/257))

- [3.10.2](https://github.com/seek-oss/skuba/releases/tag/v3.10.2): @koa/router ^10.0.0 ([#249](https://github.com/seek-oss/skuba/pull/249))

- [3.10.2](https://github.com/seek-oss/skuba/releases/tag/v3.10.2): Mount working directory in Docker Compose ([#247](https://github.com/seek-oss/skuba/pull/247))

- [3.10.2](https://github.com/seek-oss/skuba/releases/tag/v3.10.2): seek-datadog-custom-metrics ^4.0.0 ([#261](https://github.com/seek-oss/skuba/pull/261))

- [3.10.1](https://github.com/seek-oss/skuba/releases/tag/v3.10.1): seek-jobs/gantry v1.2.8 ([#238](https://github.com/seek-oss/skuba/pull/238))

- [3.10.0](https://github.com/seek-oss/skuba/releases/tag/v3.10.0): supertest ^5.0.0 ([#220](https://github.com/seek-oss/skuba/pull/220))

- [3.10.0](https://github.com/seek-oss/skuba/releases/tag/v3.10.0): hot-shots ^8.0.0 ([#217](https://github.com/seek-oss/skuba/pull/217))

- [3.10.0](https://github.com/seek-oss/skuba/releases/tag/v3.10.0): Recommend `@seek/logger` ([#225](https://github.com/seek-oss/skuba/pull/225))

  This provides logging structure, trimming and redaction over plain Pino.

- [3.10.0](https://github.com/seek-oss/skuba/releases/tag/v3.10.0): docker-compose v3.7.0 ([#224](https://github.com/seek-oss/skuba/pull/224))

- [3.10.0](https://github.com/seek-oss/skuba/releases/tag/v3.10.0): Unset initial skuba version ([#216](https://github.com/seek-oss/skuba/pull/216))

- [3.10.0](https://github.com/seek-oss/skuba/releases/tag/v3.10.0): Avoid `export =` syntax ([#90](https://github.com/seek-oss/skuba/pull/90))

- [3.10.0](https://github.com/seek-oss/skuba/releases/tag/v3.10.0): Skip pre-build in Docker Compose service ([#222](https://github.com/seek-oss/skuba/pull/222))

- [3.10.0](https://github.com/seek-oss/skuba/releases/tag/v3.10.0): Add `start:debug` scripts ([#230](https://github.com/seek-oss/skuba/pull/230))

- [3.9.2](https://github.com/seek-oss/skuba/releases/tag/v3.9.2): docker-compose v3.6.0 ([#210](https://github.com/seek-oss/skuba/pull/210))

- [3.9.2](https://github.com/seek-oss/skuba/releases/tag/v3.9.2): seek-jobs/gantry v1.2.6 ([#211](https://github.com/seek-oss/skuba/pull/211))

- [3.9.2](https://github.com/seek-oss/skuba/releases/tag/v3.9.2): Remove `koa-cluster` ([#206](https://github.com/seek-oss/skuba/pull/206))

  While Fargate environments with <= 1 vCPU appear to expose multiple threads,
  clustering does not improve performance and only serves to increase idle memory usage.

  You may add `koa-cluster` yourself if you have a CPU-bound workload running on multiple vCPUs.
  Even in such cases, it may be better to run multiple tasks with one vCPU each rather than one task with multiple vCPUs.

- [3.9.2](https://github.com/seek-oss/skuba/releases/tag/v3.9.2): Bump dep ranges ([#212](https://github.com/seek-oss/skuba/pull/212))

- [3.9.0](https://github.com/seek-oss/skuba/releases/tag/v3.9.0): Use unknown catch clause variables ([#189](https://github.com/seek-oss/skuba/pull/189))

- [3.8.0](https://github.com/seek-oss/skuba/releases/tag/v3.8.0): seek-jobs/gantry v1.2.5 ([#174](https://github.com/seek-oss/skuba/pull/174))

- [3.7.7](https://github.com/seek-oss/skuba/releases/tag/v3.7.7): Use per-Gantry environment concurrency group in dev ([#165](https://github.com/seek-oss/skuba/pull/165))

- [3.7.7](https://github.com/seek-oss/skuba/releases/tag/v3.7.7): seek-jobs/gantry v1.2.4 ([#170](https://github.com/seek-oss/skuba/pull/170))

- [3.7.7](https://github.com/seek-oss/skuba/releases/tag/v3.7.7): Simplify supertest-koa bootstrap ([#163](https://github.com/seek-oss/skuba/pull/163))

- [3.7.7](https://github.com/seek-oss/skuba/releases/tag/v3.7.7): Remove explicitly set NPM_READ_TOKEN from Dockerfile commands ([#168](https://github.com/seek-oss/skuba/pull/168))

- [3.7.6](https://github.com/seek-oss/skuba/releases/tag/v3.7.6): runtypes-filter ^0.3.0 ([#160](https://github.com/seek-oss/skuba/pull/160))

- [3.7.6](https://github.com/seek-oss/skuba/releases/tag/v3.7.6): Keep AWS SDK connections alive ([#159](https://github.com/seek-oss/skuba/pull/159))

- [3.7.6](https://github.com/seek-oss/skuba/releases/tag/v3.7.6): seek-jobs/gantry v1.2.3 ([#161](https://github.com/seek-oss/skuba/pull/161))

- [3.7.6](https://github.com/seek-oss/skuba/releases/tag/v3.7.6): docker-compose v3.5.0 ([#153](https://github.com/seek-oss/skuba/pull/153))

- [3.7.6](https://github.com/seek-oss/skuba/releases/tag/v3.7.6): runtypes ^5.0.0 ([#156](https://github.com/seek-oss/skuba/pull/156))

- [3.7.5](https://github.com/seek-oss/skuba/releases/tag/v3.7.5): Add intermediate Dockerfile stages ([#147](https://github.com/seek-oss/skuba/pull/147))

- [3.7.5](https://github.com/seek-oss/skuba/releases/tag/v3.7.5): ecr v2.1.1 ([#144](https://github.com/seek-oss/skuba/pull/144))

- [3.7.5](https://github.com/seek-oss/skuba/releases/tag/v3.7.5): Switch to Runtypes ([#152](https://github.com/seek-oss/skuba/pull/152))

  Yup has overly permissive input coercion (see #151) and weaker type guarantees.

  We already use Runtypes in the Lambda template; other options could be explored in future.

- [3.7.5](https://github.com/seek-oss/skuba/releases/tag/v3.7.5): docker-compose v3.4.0 ([#144](https://github.com/seek-oss/skuba/pull/144))

- [3.7.5](https://github.com/seek-oss/skuba/releases/tag/v3.7.5): Add basic deployment documentation ([#148](https://github.com/seek-oss/skuba/pull/148))

- [3.7.4](https://github.com/seek-oss/skuba/releases/tag/v3.7.4): Redact `err.config.agent` path from logs ([#140](https://github.com/seek-oss/skuba/pull/140))

- [3.7.0](https://github.com/seek-oss/skuba/releases/tag/v3.7.0): Redact `Authorization` headers in logs ([#59](https://github.com/seek-oss/skuba/pull/59))

- [3.7.0](https://github.com/seek-oss/skuba/releases/tag/v3.7.0): Ensure lint passes on init ([#70](https://github.com/seek-oss/skuba/pull/70))

- [3.7.0](https://github.com/seek-oss/skuba/releases/tag/v3.7.0): Redact `err.config.sockets` from logs ([#82](https://github.com/seek-oss/skuba/pull/82))

- [3.7.0](https://github.com/seek-oss/skuba/releases/tag/v3.7.0): Support improved Runtypes error messaging ([#96](https://github.com/seek-oss/skuba/pull/96))

- [3.7.0](https://github.com/seek-oss/skuba/releases/tag/v3.7.0): Drop duplicate team name prompt ([#72](https://github.com/seek-oss/skuba/pull/72))

- [3.7.0](https://github.com/seek-oss/skuba/releases/tag/v3.7.0): Use Koala's error handler ([#44](https://github.com/seek-oss/skuba/pull/44))

- [3.6.0](https://github.com/seek-oss/skuba/releases/tag/v3.6.0): Remove unused function ([#35](https://github.com/seek-oss/skuba/pull/35))

- [3.6.0](https://github.com/seek-oss/skuba/releases/tag/v3.6.0): Pass through Gantry environment as ENVIRONMENT ([#37](https://github.com/seek-oss/skuba/pull/37))

- [3.5.0](https://github.com/seek-oss/skuba/releases/tag/v3.5.0): Switch to `seek-datadog-custom-metrics` ([#28](https://github.com/seek-oss/skuba/pull/28))

- [3.5.0](https://github.com/seek-oss/skuba/releases/tag/v3.5.0): Switch to `seek-koala` ([#28](https://github.com/seek-oss/skuba/pull/28))

- [3.5.0](https://github.com/seek-oss/skuba/releases/tag/v3.5.0): Bump Gantry plugin to v1.2.2 ([#8](https://github.com/seek-oss/skuba/pull/8))

</details>

[express]: https://expressjs.com/
[gantry]: https://gantry.ssod.skinfra.xyz
[koa]: https://koajs.com/
[resource api]: https://tech-strategy.ssod.skinfra.xyz/docs/v1/components.html#resource-api
