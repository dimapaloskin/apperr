# apperr

Dead simple AppError class without any babeling or minification

## Usage example

```js
import AppError from 'apperr'

try {
  throw new AppError('Hey ho, gonna catch me', {
    code: 31337
  })
} catch (err) {
  if (err instanceof AppError) {
    // do something
    console.log(err.meta.code) // 31337
  } else {
    // do something else
  }
}

```
