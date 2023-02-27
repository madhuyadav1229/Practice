import React from 'react'
import ResumeApi from './ResumeApi'
import './Resume.css'
import Card from './Card'



const Resume = () => {
  return (
    <>
    <section className='Resume' id='Resume'>
        <div className='container top'>
            <div className='heading text-center'>
                <h4>2+ YEARS OF EXPERINCE </h4>
                <h1>My Resume</h1>
            </div>
            <div className='content-section mtop d-flex'>
                <div className='left'>
                    <div className='heading'>
                        <h4>2017-2021</h4>
                        <h1>Education Quality</h1>
                    </div>
                    <div className='content'></div>
                   {ResumeApi.map((val,id)=>{
                    if (val.category === "education") {
                        return <Card key={id} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                      }
                   })} 
                </div>
                <div className='left'>
              <div className='heading'>
                <h4>2022-2023</h4>
                <h1>Job Experience</h1>
              </div>

              <div className='content'>
                {ResumeApi.map((val, index)=> {
                  if (val.category === "experience") {
                    return <Card key={index} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                  }
                })}
              </div>
            </div> 
            </div>
        </div>
    </section>
    </>
  )
}

export default Resume
