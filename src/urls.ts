import config from '@/config'

function externalize(path: string): string {
  return `${config.host}${path}`
}

function postHref (id: string): string {
  return `/post/${id}.html`
}

function postExternalUrl (id: string): string {
  return externalize(postHref(id))
}

function postGithubUrl (id: string): string {
  return `${config.github}/alehatsman.com/edit/master/content/${id}.mdx`
}

export default {
  externalize,
  postHref,
  postGithubUrl,
  postExternalUrl,
}
