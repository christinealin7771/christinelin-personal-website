import React from 'react'
import './Experiences.css'
import WorkIcon from '@mui/icons-material/Work';
import DomainIcon from '@mui/icons-material/Domain';
import resume from '../resume/Christine_Lin_Resume.pdf'
import Footer from './Footer';

const Experiences = () => {


  return (
    <div className='experience'>
        
        <h1>Work Experience</h1>
        
        <div class="resume-timeline">
            <div class="timeline-wrap">
            
                <div class="timeline-block"> 
                    <div class="timeline-ico">
                        <WorkIcon className='i'/>
                    </div>
                    <div class="timeline-header">
                        <h2>Software Development Intern</h2>
                        <p>May 2023 - Present</p>
                    </div>
                    <div class="timeline-content">
                        <h4>Amazon</h4>
                        <p> 
                            <li>Incoming</li>
                        </p>
                    </div>
                </div>

                <div class="timeline-block"> 
                    <div class="timeline-ico">
                        <WorkIcon className='i'/>
                    </div>
                    <div class="timeline-header">
                        <h2>Software Engineering Intern</h2>
                        <p>June 2022 - August 2022</p>
                    </div>
                    <div class="timeline-content">
                        <h4>Capital One</h4>
                        <p>
                            <li>Created a new SSO gateway using Spring Security 5 to replace the deprecated OAuth2.</li>
                            <li> Used the Spring Security 5 framework, Java, and Spring Boot to authenticate and authorize Java applications.</li>
                            <li> Participated in multiple workshops to learn about Machine Learning, AWS, Agile, DevOps, Golang, APIs, SQL, and React.</li>
                        </p>
                    </div>
                </div>

                <div class="timeline-block"> 
                    <div class="timeline-ico">
                        <WorkIcon className='i'/>
                    </div>
                    <div class="timeline-header">
                        <h2>Computer Science Instructor</h2>
                        <p>May 2021 - March 2022</p>
                    </div>
                    <div class="timeline-content">
                        <h4>Juni Learning</h4>
                        <p>
                            <li> Instructed middle and high school students on the fundamentals of Python and Java concepts.</li>
                            <li> Worked with students on one-on-one projects and assignments that helped them understand computer science concepts.</li>
                        </p>
                    </div>
                </div>

                <div class="timeline-block"> 
                    <div class="timeline-ico">
                        <WorkIcon className='i'/>
                    </div>
                    <div class="timeline-header">
                        <h2>Web Development Intern</h2>
                        <p>January 2021 - April 2021</p>
                    </div>
                    <div class="timeline-content">
                        <h4>Traject</h4>
                        <p>
                            <li> Created a study management web application to help students who have a hard time with time management and to help them create a clear studying schedule.</li>
                            <li> Used the Ruby on Rails Framework with JavaScript, HTML, and Ruby with PostgreSQL as the database.</li>
                            <li> Used and gained experience with CSS frameworks: Bootstrap and Tailwind.</li>
                        </p>
                    </div>
                </div>

            </div>
            <div className='between-spacing'></div>
        </div>

        <h1> Organization Experience</h1>
        
        <div class="resume-timeline">
            <div class="timeline-wrap">
            
                <div class="timeline-block"> 
                    <div class="timeline-ico">
                        <DomainIcon className='i'/>
                    </div>
                    <div class="timeline-header">
                        <h2>Tech Lead</h2>
                        <p>May 2022 - May 2023</p>
                    </div>
                    <div class="timeline-content">
                        <h4>UF WICSE (Women in Computer Science and Engineering)</h4>
                        <p> 
                            <li> Organized and lead weekly technical interview prep sessions to help students prepare for technical portions of the tech-related interviews.</li>
                            <li> Organized and hosted resume and behavioral interview workshops to prepare students for the interview process.</li>
                            <li> Taught and organized weekly React Web Development workshops to teach students how to create frontend applications and learn tools like Git/Github.</li>
                        </p>
                    </div>
                </div>

                <div class="timeline-block"> 
                    <div class="timeline-ico">
                        <DomainIcon className='i'/>
                    </div>
                    <div class="timeline-header">
                        <h2>Software Captain at Team Tech Design Team</h2>
                        <p>June 2022 - August 2022</p>
                    </div>
                    <div class="timeline-content">
                        <h4>University of Florida Society of Women Engineers (UF SWE)</h4>
                        <p>
                            <li> Designed a UAV (Unmanned Aerial Vehicle) for Search and Rescue in the event of building collapse. </li>
                            <li> Lead a team designated to create a Mission Control Software that would facilitate the communication between the user and the UAV. This would include the dimensions of the scans and the retrieval of data for visualization.</li>
                        </p>
                    </div>
                </div>

            </div>
        </div>

        <a href={resume} download="Christine_Lin_Resume" target='_blank'>
        <button class="btn btn-1" >Download Resume </button>
        </a>
        {/* <button class="btn btn-1" onClick={downloadResume}>Download Resume </button> */}
        <p className='spacing'></p>

        
        <Footer/>
    </div>
  )
}

export default Experiences