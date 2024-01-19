import { ReactNode } from 'react'

const Resume = () => {
  const buildResumeSection = (
    institution: string,
    city: string,
    dateRange: string,
    position?: string
  ): ReactNode => {
    return (
      <div className='resume-section'>
        <div className='resume-section-summary'>
          <b>{institution}</b>
          <b>•</b>
          {city}
          {position ? (
            <>
              <b>•</b>
              <i>{position}</i>
            </>
          ) : (
            ''
          )}
        </div>
        <div className='resume-date'>{dateRange}</div>
      </div>
    )
  }

  return (
    <>
      <div className='resume-download'>
        <a
          href={require('../assets/bianca_regulski_resume.pdf')}
          download='myFile'
        >
          Download resume as PDF
        </a>
      </div>
      <p>
        Innovative full-stack software engineer with three years of professional
        experience designing, building, testing, and deploying software
        solutions in Ruby on Rails, React, Python, and Java
      </p>
      <p className='resume-header'>Experience</p>
      {buildResumeSection(
        'Validity',
        'Boston, MA',
        'January 2021 — Present',
        'Software Engineer'
      )}
      <p>
        <ul>
          <li>
            Led the development and deployment of an upgraded version of an
            email verification REST API, adding pagination features and
            meticulous error handling, with robust automated unit and
            integration testing, improving response times and ensuring
            continuous uptime for tens of thousands of users.
          </li>
          <li>
            mplemented the front-end and back-end of an inter-account credit
            transfer system in Ruby on Rails, improving organizational
            efficiency and speed by automating work that was previously handled
            manually by non-technical employees.
          </li>
          <li>
            Integrated Validity's email validation API into a widget in the
            Salesforce app, with automatic importation of Salesforce accounts in
            Validity's internal account system, increasing Validity sales among
            Salesforce users.
          </li>
        </ul>
      </p>

      {buildResumeSection(
        'Validity',
        'Boston, MA',
        'August 2020 — December 2020',
        'Co-op Software Engineer'
      )}
      <p>
        <ul>
          <li>
            Collaborated with a large agile team to migrate a legacy codebase
            from VB .NET to Java Spring/React, resulting in a modernized user
            experience, faster performance, and expanding to Mac compatibility.
          </li>
          <li>
            Enhanced front-end design by developing responsive UIs with a focus
            on intuitive navigation and optimized website performance.
          </li>
          <li>
            Optimized loading times for Liquibase queries with indexing,
            resulting in decreased page loading times by 30% for APIs pulling
            large numbers of records.
          </li>
        </ul>
      </p>

      <p className='resume-header'>Projects</p>
      <div className='resume-section'>
        <b>Park Finder</b>
      </div>
      <p>
        <ul>
          <li>
            Developed web app in Python and React that calculates and displays
            the optimal parks between two addresses based on transportation
            time.
          </li>
          <li>
            Utilized Google Maps API for both calculating the midpoint
            coordinate on the back-end and displaying interactive map with
            responsive pins on the front-end.
          </li>
        </ul>
      </p>

      <p className='resume-header'>Skills</p>
      <div className='resume-section'>
        <p>
          Ruby on Rails | Python | Java | HTML | CSS | JavaScript | TypeScript |
          React | SQL | Git
        </p>
      </div>

      <p className='resume-header'>Education</p>
      {buildResumeSection(
        'Florida State University',
        'Tallahassee, FL',
        'August 2016 — May 2020'
      )}
      <p>Bachelor's in Computer Science • Minor in Philosophy</p>
    </>
  )
}

export default Resume
