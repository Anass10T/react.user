import React from "react"
import Common from "./common/Common"

const Contact = () => {
  return (
    <>
      <section className='contact creative'>
        <div className='container'>
          <div className='itemContent'>
            <Common title='contact' />
            <div className='content flex'>
              <div className='contentRight'>
                <img src='./images/contact-bg.jpg' alt='' />
              </div>
              <div className='contentLeft'>
                <span>
                  <i className='fa fa-map-marker-alt'> </i>
                  Rabat taza street 250 DJ
                </span>
                <br /> <br />
                <span>
                  <i className='fa fa-envelope'></i>
                  Anass@domain.com
                </span>
                <br /> <br />
                <span>
                  <i className='fa fa-phone'></i>
                 06543565546
                </span>
                <form>
                  <input type='text' placeholder='* YOUR NAME' name='' id='' />
                  <input type='text' placeholder='* YOUR EMAIL' name='' id='' />
                  <input type='text' placeholder='* WHAT ARE YOU INTERSTED IN?  ' name='' id='' />
                  <textarea cols='30' rows='10'>
                    YOUR MESSAGE
                  </textarea>
                  <button className='primary-btn'>
                    SUBMIT <i className='fa fa-long-arrow-alt-right'></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
