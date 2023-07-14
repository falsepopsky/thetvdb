# FAQ

[[toc]]

## Why don't you support CommonJS?

This is a complex question, and it involves several factors. While there are bundlers available that
can handle both CommonJS (CJS) and ECMAScript Modules (ESM), it often leads to complications. One of
the challenges is that bundlers may sometimes ship incorrect types due to developer
misconfigurations or limitations in emitting declaration files correctly. This can require
additional plugins, configurations, and tools to fix the issues.

Moreover, there is a strong belief in embracing the new standard and moving away from CommonJS. It's
not that CommonJS is inherently bad, but rather that we prefer to focus on writing modern code
without the need for additional installations or workarounds. By adopting ESM, we can leverage the
latest language features, improve code modularity, and benefit from the advancements in the
JavaScript ecosystem.

We understand that there may be projects or legacy systems still using CommonJS, and we encourage
developers to consider migrating to ESM when feasible. However, for the purposes of this package, we
have chosen to prioritize ESM support to align with modern development practices and to streamline
the development experience.

## Why isn't Node.js version 16 supported?

The main reason for not supporting Node.js version 16 is because it is reaching its
[end-of-life](https://github.com/nodejs/release#release-schedule) soon. As a result, dedicating time
and resources to support an outdated version no longer makes sense. Node.js, like many software
projects, has a lifecycle where older versions eventually reach their end-of-life, meaning they will
no longer receive updates, security patches, or community support.

By focusing on supporting the latest versions of Node.js, we ensure compatibility with the most
recent features, improvements, and security enhancements provided by the Node.js development team.
This approach allows us to maintain a high-quality package and deliver the best possible experience
for our users.

We strongly recommend upgrading to a supported version of Node.js to benefit from the latest
advancements and to ensure a secure and reliable development environment.

## Is this an official package?

No, this package is unofficial and is not affiliated with or endorsed by TheTVDB. While it utilizes
the official TheTVDB API endpoints to retrieve information, it is important to note that it is not
developed or maintained by TheTVDB organization itself.

## Why are some endpoints from the API not supported?

Some endpoints from the API are not supported for various reasons. Each endpoint undergoes
evaluation for potential implementation, but not all endpoints will be supported.

For instance, let's consider the **login** endpoint. It is intentionally not supported as I believe
that handling the authentication process and obtaining the auth token should be left to the
developer. This allows developers to have more control and flexibility in implementing the
authentication flow that best fits their application's requirements.

Consider the example of the **user** endpoint. This endpoint might not be supported unless you, as
the developer, have a specific and compelling use case that requires heavy utilization of this
endpoint by your end users. Without a significant need or clear value for your application,
supporting this particular endpoint may not be prioritized to avoid unnecessary complexity.

The decision to support or exclude specific endpoints is made to provide a focused and efficient
package that caters to the most essential functionalities. By streamlining the package in this
manner, we aim to deliver an optimized development experience for our users.
