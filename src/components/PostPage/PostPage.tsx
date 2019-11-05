import Head from 'next/head'
import Link from 'next/link'

import Content from '@/components/Content'
import Footer from '@/components/Footer'

import { PostPageContainer, HomeLink } from './PostPage.styled'

export default function PostPage (props) {
  return (
    <PostPageContainer>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description}/>
        <meta name="keywords" content={props.tags.join(',')}/>
        <meta name="author" content="Aleh Atsman"/>
      </Head>
      <Link href='/' passHref>
        <HomeLink>
          { '<-' }
        </HomeLink>
      </Link>
      <Content Doc={props.doc} />
      <Footer id={props.id}/>
    </PostPageContainer>
  )
}
