class AppError extends Error {
  constructor (message, meta = {}) {
    super(message)
    this.meta = meta
  }
}

export default AppError
