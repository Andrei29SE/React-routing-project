import courses from '../data/courses'
import { useParams } from 'react-router'
const SingleCourse = () => {
  const params = useParams()
  console.log(params)
  //   const course = courses.find((course) => course.slug === params.slug)
  return <h1>Single Course</h1>
}

export default SingleCourse
