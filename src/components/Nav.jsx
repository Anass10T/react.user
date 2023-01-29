import React, { useState } from "react"

const Nav = () => {
  const [sidebar, setSidebar] = useState(false)
  return (
    <>
      <header>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>
              .<span>K</span>NTRO
          
            </h1>
          </div>
          <nav>
            <button className='toggle' onClick={() => setSidebar(!sidebar)}>
              {sidebar ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}
            </button>
            <ul className={sidebar ? "nav-links-sidebar" : "nav-links"} onClick={() => setSidebar(false)}>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='https://www.google.com/search?q=%D8%A7%D9%84%D8%AF%D9%88%D8%B1%D9%8A+%D8%A7%D9%84%D9%81%D8%B1%D9%86%D8%B3%D9%8A&rlz=1C1BNSD_frMA975MA975&sxsrf=AJOqlzU-ptoEmzr1a5IMd9mhR-gQpBrTdg%3A1674156077525&ei=LZjJY9LaH6yckdUPlMu6yAo&ved=0ahUKEwiSpbKyrdT8AhUsTqQEHZSlDqkQ4dUDCA8&uact=5&oq=%D8%A7%D9%84%D8%AF%D9%88%D8%B1%D9%8A+%D8%A7%D9%84%D9%81%D8%B1%D9%86%D8%B3%D9%8A&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECC4QJzIECCMQJzIECCMQJzIFCC4QgAQyBQgAEIAEMgUILhCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6CggAEEcQ1gQQsAM6BwgAELADEEM6BggAEBYQHjoICAAQFhAeEAo6BwgjEOoCECc6DQguEMcBEK8BEOoCECc6BwguEOoCECdKBAhBGABKBAhGGABQgARYsRJgthZoAnABeAOAAbUMiAGMKpIBCzItMS4wLjEuOC0zmAEAoAEBoAECsAEKyAEKwAEB&sclient=gws-wiz-serp#sie=lg;/g/11pzkdpbgw;2;/m/044hxl;mt;fp;1;;;'>الدوري الفرنسي</a>
              </li>
              <li>
                <a href='https://www.google.com/search?q=%D8%A7%D9%84%D8%AF%D9%88%D8%B1%D9%8A+%D8%A7%D9%84%D8%A5%D9%86%D8%AC%D9%84%D9%8A%D8%B2%D9%8A+%D8%A7%D9%84%D9%85%D9%85%D8%AA%D8%A7%D8%B2&rlz=1C1BNSD_frMA975MA975&sxsrf=AJOqlzXwxZGYtmFH3lhFQS3H6O4_JYKNxQ%3A1674156103874&ei=R5jJY5mBNayKkdUPwa2N8Aw&ved=0ahUKEwjZwPq-rdT8AhUsRaQEHcFWA84Q4dUDCA8&uact=5&oq=%D8%A7%D9%84%D8%AF%D9%88%D8%B1%D9%8A+&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECCMQJzIOCC4QgwEQ1AIQsQMQgAQyBQgAEIAEMgUIABCABDIFCC4QgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoHCCMQsAMQJzoKCAAQRxDWBBCwAzoHCAAQsAMQQzoNCAAQ5AIQ1gQQsAMYAToMCC4QyAMQsAMQQxgCOgQILhAnOgsILhCABBCxAxCDAToECC4QQzoECAAQQ0oECEEYAEoECEYYAVCKBFjUD2CAU2gBcAF4AYABhQiIAbQokgELMy0xLjUuMC4yLjGYAQCgAQHIARLAAQHaAQYIARABGAnaAQYIAhABGAg&sclient=gws-wiz-serp#sie=lg;/g/11pz7zbpnb;2;/m/02_tc;mt;fp;1;;;'>الدوري الإنجليزي</a>
              </li>
              <li>
                <a href='https://www.google.com/search?q=%D8%A7%D9%84%D8%AF%D9%88%D8%B1%D9%8A+%D8%A7%D9%84%D8%A7%D8%B3%D8%A8%D8%A7%D9%86%D9%8A&rlz=1C1BNSD_frMA975MA975&sxsrf=AJOqlzWxkwxWviOWV3_eoLR5mFLesH5TZg%3A1674156314713&ei=GpnJY-efK9-bkdUPwMyssA8&gs_ssp=eJzj4tDP1TewTC-sMGD0kr2x_GbLjfU3O25svNmlAOYsv7H5xgogq-1mFwCmyRem&oq=%D8%A7%D9%84%D8%AF%D9%88%D8%B1%D9%8A+&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgFMgQIIxAnMgQILhAnMgQILhAnMgQILhBDMgQIABBDMgsILhCABBCxAxCDATIECAAQQzILCC4QgAQQsQMQgwEyCwguEIAEELEDEIMBMgQIABBDOgoIABBHENYEELADOgcIABCwAxBDOg0IABDkAhDWBBCwAxgBOgwILhDIAxCwAxBDGAJKBAhBGABKBAhGGAFQpBBYixpg9z5oAXABeAKAAa4QiAHvPJIBDTItMS4xLjctMS4yLjGYAQCgAQHIARPAAQHaAQYIARABGAnaAQYIAhABGAg&sclient=gws-wiz-serp#sie=lg;/g/11sqj24s0_;2;/m/09gqx;mt;fp;1;;;'>الدوري الاسباني</a>
              </li>
              <li>
                <a href='https://www.google.com/search?q=%D8%A7%D9%84%D8%AF%D9%88%D8%B1%D9%8A+%D8%A7%D9%84%D8%A7%D9%8A%D8%B7%D8%A7%D9%84%D9%8A&rlz=1C1BNSD_frMA975MA975&sxsrf=AJOqlzVliJhjqy8gYARRegxs8iclsb9lTQ%3A1674156353828&ei=QZnJY6uQMquYkdUPsdCR2AM&gs_ssp=eJzj4tDP1TcwriqzNGD0kr2x_GbLjfU3O25svNmlAOYsv9l1YzuIdbMLAJ_kF14&oq=%D8%A7%D9%84%D8%AF%D9%88%D8%B1%D9%8A+&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgGMgQILhAnMgQIIxAnMgQILhAnMgsILhCABBCxAxCDATILCC4QgAQQsQMQgwEyBAguEEMyCwguEIAEELEDEIMBMgsILhCABBCxAxCDATILCC4QgAQQsQMQgwEyCwguEIAEELEDEIMBOgoIABBHENYEELADOgcIABCwAxBDOg0IABDkAhDWBBCwAxgBOgwILhDIAxCwAxBDGAI6BQgAEIAEOgUILhCABEoECEEYAEoECEYYAVDFA1iHD2D0MGgBcAF4AIABvASIAYwSkgELMC4zLjIuMS4xLjGYAQCgAQHIARPAAQHaAQYIARABGAnaAQYIAhABGAg&sclient=gws-wiz-serp#sie=lg;/g/11sqvtnwvb;2;/m/03zv9;mt;fp;1;;;'>الدوري الايطالي</a>
              </li>
              <li>
                <a href='https://www.google.com/search?q=%D8%A7%D9%84%D8%AF%D9%88%D8%B1%D9%8A+%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8%D9%8A&rlz=1C1BNSD_frMA975MA975&sxsrf=AJOqlzUvd5QTZ6m5oOHGkl6RTELkyF1Z-w%3A1674156178917&ei=kpjJY7bRN_uCkdUPycONgA0&gs_ssp=eJzj4tTP1TdILisoTjZg9JK-sfxmy431NztubLzZpQDi3Gy9sevGxhsrbnYBAI1aFsw&oq=%D8%A7%D9%84%D8%AF%D9%88%D8%B1%D9%8A+&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgDMgkIIxAnEEYQ_QEyBAguECcyBAguECcyCwguEIAEELEDEIMBMgsILhCABBCxAxCDATILCC4QgAQQsQMQgwEyCwguEIAEELEDEIMBMgsILhCABBCxAxCDATILCC4QgAQQsQMQgwEyCAguEIAEENQCOgoIABBHENYEELADOgcIABCwAxBDOg0IABDkAhDWBBCwAxgBOgwILhDIAxCwAxBDGAI6DwguENQCEMgDELADEEMYAkoECEEYAEoECEYYAVCzBVipHWDq_QVoAXABeAGAAacRiAHfS5IBDTMtMS4xLjIuOC0zLjGYAQCgAQHIARHAAQHaAQYIARABGAnaAQYIAhABGAg&sclient=gws-wiz-serp#sie=lg;/g/11s461dg3g;2;/m/0cvpsc;mt;fp;1;;;'>الدوري المغربي</a>
              </li>
              <li>
                <a href='/'>Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Nav
