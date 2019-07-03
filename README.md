# Talk: React and Typescript

- [Slides](https://docs.google.com/presentation/d/1kMeWBTA-TU0u7nwAM4jm6o0vqtpP3MJZC9dqCbz9dh0/edit?usp=sharing)
- [Blog Post](TODO:)

This repository contains the corresponding code to my talk about React and TypeScript.

## Example Code

```js
function add(a, b) {
  return a + b;
}

const favNumber = add(31, 11);
```

```ts
function add(a: number, b: number): number {
  return a + b;
}

const favNumber: number = add(31, 11);
```

```ts
function add(a: number, b: number) {
  return a + b;
}

const favNumber = add(31, 11);
```

```ts
interface User {
  firstName: string;
  lastName: string;
  age: number;
  state: UserState;
}

enum UserState {
  ACTIVE,
  INACTIVE,
  INVITED,
}
```

```ts
interface FunkyUser extends User {
  isDancing: boolean;
}
```

```ts
type UserState =
  "active" |
  "inactive" |
  "invited";
```

```ts
class JavaLover implements User {
  private firstName: string;
  private lastName: string;
  private age: number;
  private state: UserState;
  
  getOpinion() {
    return [ "!!JAVA!1!" ];
  }
}
```