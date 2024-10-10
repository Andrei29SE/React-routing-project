import { Link } from 'react-router-dom'
import courses from '../data/courses'
import { useNavigate, useParams } from 'react-router'
// import NotFound from './NotFound'

import { useEffect, useState } from 'react'
const SingleCourse = ({ add, delite, count }) => {
  const [isLoading, setIsLoading] = useState(false)
  const params = useParams()
  const navigate = useNavigate()
  const course = courses.find((course) => course.slug === params.slug)
  // Easy way  if (!course) {
  //     return <NotFound />}
  useEffect(() => {
    if (!course) {
      setIsLoading(true)
      setTimeout(() => {
        navigate('..', { relative: 'path' })
      }, 3000)
    }
  }, [navigate, course])
  if (course && !isLoading) {
    return (
      <div className='courseCard'>
        <h1>{course?.title}</h1>
        <h2>Main language: {course?.slug}</h2>
        <h3>Price per course: {course?.price}$</h3>
        <Link to='..' relative='path'>
          All courses
        </Link>
        <button onClick={add}>Add to busket</button>
        {count > 0 && (
          <button onClick={delite} disabled={count <= 0}>
            Delete from busket
          </button>
        )}
      </div>
    )
  } else {
    return (
      <>
        <h1> Course is not found! Redirect to Courses page!</h1>
        <div className='loader'></div>
      </>
    )
  }
}

export default SingleCourse
