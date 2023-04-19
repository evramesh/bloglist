import ListItem from '../BlogItem'
import './index.css'

const Blog = props => {
  const {blogsNewList} = props
  return (
    <ul>
      {blogsNewList.map(each => (
        <ListItem key={each.id} send={each} />
      ))}
    </ul>
  )
}

export default Blog
