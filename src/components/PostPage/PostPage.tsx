import Head from 'next/head'
import Link from 'next/link'

import Content from '@/components/Content'

import { PostPageContainer, HomeLink } from './PostPage.styled'

export default function PostPage (props) {
  return (
    <PostPageContainer>
      <Head>
        <title>{props.title || ''}</title>
      </Head>
      <Link href='/' passHref>
        <HomeLink>
          { '<-' }
        </HomeLink>
      </Link>
      <Content Doc={props.doc} />
    </PostPageContainer>
  )
}
