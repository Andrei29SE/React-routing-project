import { Link } from 'react-router-dom'
import courses from '../data/courses'
import { useParams } from 'react-router'
const SingleCourse = () => {
  const params = useParams()
  console.log(params)
  const course = courses.find((course) => course.slug === params.slug)
  return (
    <div className='courseCard'>
      <h1>{course.title}</h1>
      <h2>Main language: {course.slug}</h2>
      <h3>Price per course: {course.price}$</h3>
      <Link to='..' relative='path'>
        All courses
      </Link>
    </div>
  )
}

export default SingleCourse
