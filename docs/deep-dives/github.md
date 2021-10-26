---
parent: Deep dives
---

# GitHub

---

GitHub is SEEK's git repository of choice.

This topic details GitHub integration features baked into **skuba**

---

## GitHub annotations

**skuba** can output issues detected by [`skuba lint`] as GitHub annotations via the [GitHub Checks API]. **skuba** will limit the maximum number of annotations displayed on Github per check run to 200.

This can be enabled by propagating Buildkite environment variables and the GitHub API token.
For example, with the Docker plugin:

```yaml
steps:
  - command: yarn lint
    plugins:
      - *aws-sm
      - *private-npm
      - *docker-ecr-cache
      - docker#v3.8.0:
          environment:
            # Enable GitHub annotation support.
            - BUILDKITE_REPO
            - BUILDKITE_COMMIT
            - BUILDKITE_BUILD_NUMBER
            - GITHUB_API_TOKEN
          volumes:
            # Mount cached dependencies.
            - /workdir/node_modules
```

With Docker Compose,
declare the environment variables and volume mounts in your [Compose file]:

```yaml
services:
  app:
    environment:
      # Enable GitHub annotation support.
      - BUILDKITE_REPO
      - BUILDKITE_COMMIT
      - BUILDKITE_BUILD_NUMBER
      - GITHUB_API_TOKEN
    volumes:
      - ./:/workdir
      # Mount cached dependencies.
      - /workdir/node_modules
```

This feature is also planned for [`skuba test`] in future.

---

[`skuba lint`]: ../cli/lint.md#skuba-lint
[`skuba test`]: ../cli/test.md#skuba-test
[github checks api]: https://docs.github.com/en/rest/reference/checks/
[compose file]: https://docs.docker.com/compose/compose-file
[docker buildkite plugin]: https://github.com/buildkite-plugins/docker-buildkite-plugin