import { Link, NavLink } from 'react-router-dom'
import courses from '../data/courses'

const Courses = () => {
  return (
    <div className='linkBlock'>
      <h1>Courses</h1>
      {courses.map((course) => {
        return (
          <NavLink className='courseLink' to={course.slug} key={course.id}>
            {course.title}
          </NavLink>
        )
      })}
      <br />
      <Link to='/'>Go home</Link>
    </div>
  )
}
export default Courses
