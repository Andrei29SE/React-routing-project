import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import courses from '../data/courses'
import quertString from 'query-string'
import { useEffect, useState } from 'react'
// key in the funct bellow are title,id,slug from courses array of objects

const SORT_KEY = ['title', 'slug', 'id']
function sortCourses(courses, key) {
  const sortedCourses = [...courses]
  if (!key || !SORT_KEY.includes(key)) {
    return sortedCourses
  }
  sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1))
  return sortedCourses
}

const Courses = () => {
  const location = useLocation()
  const query = quertString.parse(location.search)
  const [sortkey, setSortKey] = useState(query.sort)
  const [sort, setSort] = useState(sortCourses(courses, sortkey))
  const navigate = useNavigate()
  useEffect(() => {
    if (!SORT_KEY.includes(sortkey)) {
      navigate('.')
      setSortKey()
      setSort([...courses])
    }
  }, [sortkey, navigate])

  return (
    <div className='linkBlock'>
      <select multiple size='1'>
        {sort.map((course) => {
          return <option key={course.id}>{course.slug}</option>
        })}
      </select>

      <h1>{sortkey ? `Corses sorted by ${sortkey}` : `Courses`}</h1>
      {sort.map((course) => {
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
