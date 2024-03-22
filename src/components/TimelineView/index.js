// Write your code here
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const categoryConstant = {
  course: 'COURSE',
  project: 'PROJECT',
}

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <div className="bg-container">
      <h1 className="main-heading">
        MY JOURNEY OF
        <br />
        CCBP 4.0
      </h1>
      <div className="chrono-container">
        <Chrono
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
          theme={{
            primary: '#2b237c',
            secondary: '#0967d2',
            cardBgColor: 'white',
            cardForeColor: 'violet',
            titleColor: '#1e293b',
          }}
        >
          {timelineItemsList.map(eachCard =>
            eachCard.categoryId === categoryConstant.course ? (
              <CourseTimelineCard
                eachCourseDetails={eachCard}
                key={eachCard.id}
              />
            ) : (
              <ProjectTimelineCard
                eachProjectDetails={eachCard}
                key={eachCard.id}
              />
            ),
          )}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
