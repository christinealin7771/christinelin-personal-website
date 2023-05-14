import React from 'react'
import './Experiences.css'

const Experiences = () => {
  return (
    <div className='experience'>
        
        <h1>Work Experince</h1>

        <div class="row resume-timeline">


         <div class="col-twelve">

            <div class="timeline-wrap">

                <div class="timeline-block"> 

                  <div class="timeline-ico">
                     <i class="fa fa-briefcase"></i>
                  </div>

                  <div class="timeline-header">
                     <h3>Software Engineer</h3>
                     <p>March 2022 - Present</p>
                  </div>

                  <div class="timeline-content">
                     <h4><a href="https://www.amazon.com/Halo_Membership/b?ie=UTF8&node=23432473011" target="_blank">Amazon</a></h4>
                     <p> Team member at Amazon Health & Wellness Halo Device CVML team. Won first place in healthtech hackathon with softwate prototype to highlight user's milestones and achievement to drive customer engagement.
                     </p>
                  </div>

               </div> 

               <div class="timeline-block"> 

                  <div class="timeline-ico">
                     <i class="fa fa-briefcase"></i>
                  </div>

                  <div class="timeline-header">
                     <h3>Software Engineer</h3>
                     <p>June 2020 - March 2022</p>
                  </div>

                  <div class="timeline-content">
                     <h4><a href="https://www.invitae.com/en/" target="_blank">Invitae</a></h4>
                     <p> Owned fundamental company data transfer pipeline transferring genomic data from lab to compute clusters. Built automation system for troubleshooting sequencing results from variant confirmation process. Created complex and interactive web visualization tool for clinical interpretation based on React framework and Plotly visual tools.
                     </p>
                  </div>

               </div> 


               <div class="timeline-block"> 

                  <div class="timeline-ico">
                     <i class="fa fa-briefcase"></i>
                  </div>

                  <div class="timeline-header">
                     <h3>Bioinformatics Intern</h3>
                     <p>June 2019 - September 2019</p>
                  </div>

                  <div class="timeline-content">
                     <h4>Genentech</h4>
                     <p> Worked in proteomics department under R&D. Created web data analysis & visualization for MS based proteomics using python pyramid server & typescript client. Ran high throughput computation analysis through Spotfire, R, and SQL queries. Was selected for Genentech Leader Intern Exchange program (gLINX) and mentored by senior VP executive
                     </p>
                  </div>

               </div>

               <div class="timeline-block"> 

                  <div class="timeline-ico">
                     <i class="fa fa-briefcase"></i>
                  </div>

                  <div class="timeline-header">
                     <h3>Software Engineer</h3>
                     <p>August 2018 - September 2018</p>
                  </div>

                  <div class="timeline-content">
                     <h4><a href="https://streami.co" target="_blank">Streami Inc.</a></h4>
                     <p> Worked in blockchain company. Performed network performance test between AWS centers located in Asia. Created GOPAX API monitoring tool that would test GOPAX API, create error digest, then would send email alert. Studied zcash transaction after Overwinter Hardfolk.
                     </p>
                  </div>

               </div> 

               </div>
            </div>
        </div>
    </div>
  )
}

export default Experiences