import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {eachCourseDetails} = props

  const {courseTitle, description, duration, tagsList} = eachCourseDetails

  return (
    <>
      <div className="course-name-and-duration">
        <h1>{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <ul className="tags-container">
        {tagsList.map(eachTag => (
          <li className="tag-list">
            <p>{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CourseTimelineCard
