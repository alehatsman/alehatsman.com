import moment from 'moment'

export interface Post {
  id: string
  title: string
  description: string
  createdAt: moment.Moment
  timeToRead: number
  featuredImage: any
}
