import config from '@/config'

function postHref (id: string): string {
  return `/post/${id}.html`
}

function postExternalUrl (id: string): string {
  return `${config.host}${postHref(id)}`
}

function postGithubUrl (id: string): string {
  return `${config.github}/alehatsman.com/edit/master/content/${id}.mdx`
}

export default {
  postHref,
  postGithubUrl,
  postExternalUrl,
}
