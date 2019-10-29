import Link from 'next/link'
import moment from 'moment'
import { PostListWrapper, PostWrapper, PostTitle, PostDescription, PostDate } from './PostList.styled'

function formatDate (date) {
  return moment(date, 'YYYY-MM-DD')
    .format('MMM D, YYYY')
}

function postHref (id) {
  return `/post/${id}.html`
}

const Post = ({ id, title, description, createdAt }) => (
  <Link href={{ pathname: '/post', query: { id } }} as={postHref(id)} passHref>
    <PostWrapper>
      <PostTitle>{title}</PostTitle>
      <PostDescription>{description}</PostDescription>
      <PostDate>{formatDate(createdAt)}</PostDate>
    </PostWrapper>
  </Link>
)

const PostList = ({ posts }) => (
  <PostListWrapper>
    {
      posts.map(post => <Post key={post.id} {...post} />)
    }
  </PostListWrapper>
)

export default PostList
