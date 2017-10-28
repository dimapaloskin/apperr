# apperr

Dead simple AppError class without any babeling or minification

## The reason why this is exists at all

It's just helps you to avoid `'../../'`. You can use it like common Error object for your app. Or not :)

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
