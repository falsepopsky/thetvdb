# :rocket: API Reference

This package consists of two primary classes, [TheTVDB](/api/thetvdb) and
[TheTVDBExtended](/api/thetvdb-extended), each of which supports multiple endpoints. In this
documentation, we will divide the information into two sections, one for each class, and provide
details on their respective methods.

::: info

This package is currently in beta but is production-ready. Please note that while the package is
fully functional and can be used in production environments, there may be future updates that
introduce breaking changes when it reaches the stable version 1.0.0. We recommend reviewing the
changelogs and updating your implementation accordingly to accommodate any breaking changes in
future updates.

:::

## Constructor

| params | type     | Required | Description          |
| ------ | -------- | :------: | -------------------- |
| token  | `string` |   Yes    | Your TVDB API token. |

::: danger WARNING

All required parameters must be provided, otherwise an error will be thrown.

:::

### Set token <Badge type="tip" text="example" />

```js
import { TheTVDBExtended } from '@untidy/thetvdb';

new TheTVDBExtended('your token');
```
