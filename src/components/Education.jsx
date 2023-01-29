import React from "react"
import { education } from "../dummydata"
import Common from "./common/Common"

const Education = () => {
  return (
    <>
      <section className='education creative'>
        <div className='container'>
          <div className='itemContent'>
            <Common title='education' />

            <div className='content flex'>
              <div className='contentRight'>
                <img src='./images/education-bg.jpg' alt='' />
              </div>
              <div className='contentLeft'>
                <p></p>
                {education.map((val) => {
                  return (
                    <>
                      <div className='box flex'>
                        <h1>{val.id}.</h1>
                        <h2>
                          {val.name} <br />
                          <span>{val.program}</span>
                          <br />
                          <span>{val.year}</span>
                        </h2>
                      </div>
                    </>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Education
