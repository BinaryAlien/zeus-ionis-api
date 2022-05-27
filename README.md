# zeus-ionis-api

⚡ TypeScript wrapper for the [Zeus IONIS](https://zeus.ionis-it.com/) API.

## Installing

Using [NPM](https://www.npmjs.com):
```sh
$ npm i zeus-ionis-api
```

## Usage

**Instantiate** a `Zeus` object with a valid **access token**.

```typescript
import { Zeus, types } from 'zeus-ionis-api';

const zeus = new Zeus('ACCESS_TOKEN');
```

(Note that the **types** of the API are available as an **import** as shown above.)

```typescript
import { Zeus } from 'zeus-ionis-api';

const zeus = new Zeus('ACCESS_TOKEN');

// /api/course
const courses = await zeus.course.all();

// /api/group/{id}
const group = await zeus.group.get(id);

// ...
```

See every **endpoint** and their `Zeus` object method **equivalent** on [this wiki page](https://github.com/BinaryAlien/zeus-ionis-api/wiki/Endpoints).

The code JSDoc is identical to the [official documentation](https://zeus.ionis-it.com/swagger/index.html).
