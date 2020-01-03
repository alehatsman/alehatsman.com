export function isProd() {
  return process.env.NODE_ENV === 'production'
}

export default {
  isProd
}
