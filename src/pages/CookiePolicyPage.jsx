import { useEffect } from 'react'
import NavCookie from '../components/cookie/NavCookie'
import Footer from '../components/general/Footer'
import ArrowPhantom from '../hooks/ArrowPhantom'

const CookiePolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <NavCookie />
      <main
        className='main pt-4 flashIn'
        style={{
          background: 'rgba(0,0,0,0.7)',
          backgroundBlendMode: 'overlay',
        }}>
        <div className='title_center'>
          <h1>Cookie Policy</h1>
        </div>
        <section className='center'>
          <div className='pb_3'>
            <h4 className='h4_cookie'>What are Cookies?</h4>
            <p className='p_cookie'>
              Cookies are small text files that are stored on your computer or
              mobile device when you visit a website. They are widely used to
              make websites work more efficiently and provide a better browsing
              experience. Cookies may be session cookies (which are temporary
              and deleted when you close your browser) or persistent cookies
              (which remain on your device until they expire or are deleted).
            </p>
          </div>
          <div className='pb_3'>
            <h4 className='h4_cookie'>How We Use Cookies</h4>
            <p className='p_cookie'>
              We use cookies for the following purposes:
              <br />
              <br />
              1.<strong> Essential Cookies</strong>: These cookies are necessary
              for the website to function properly and cannot be disabled. They
              enable basic functions such as page navigation, secure login, and
              access to certain areas of the website. <br />
              2. <strong>Analytics Cookies</strong>: We use analytics cookies to
              collect information about how visitors use our website, such as
              the pages they visit and the links they click on. This helps us
              improve our website and provide a better user experience. The data
              collected is anonymized and aggregated. <br />
              3. <strong>Marketing Cookies</strong>: We may use marketing
              cookies to track visitors across websites and display personalized
              advertisements based on their browsing behavior. These cookies may
              be set by third-party advertising networks. <br />
              <br />
              <div>
                <h4 className='h4_cookie'>Managing and Disabling Cookies</h4>
                <p className='p_cookie'>
                  You can manage or disable cookies through your browser
                  settings. Please note that disabling certain cookies may
                  affect the functionality of our website and your user
                  experience. For more information on managing cookies, please
                  refer to the documentation provided by your browser.
                </p>
              </div>
            </p>
          </div>
          <div className='pb_3'>
            <h4 className='h4_cookie'>Third-Party Cookies</h4>
            <p className='p_cookie'>
              Our website may include content or features from third-party
              providers, such as embedded videos or social media sharing
              buttons. These third-party providers may use cookies to track your
              interaction with their content. We have no control over the
              cookies used by these providers. Please refer to their respective
              privacy policies and cookie policies for more information.
            </p>
          </div>
          <div className='pb_3'>
            <h4 className='h4_cookie'>Updates to this Cookie Policy</h4>
            <p className='p_cookie'>
              We may update this Cookie Policy from time to time to reflect
              changes in our use of cookies or applicable laws and regulations.
              Any updates will be posted on this page with a revised effective
              date.
            </p>
          </div>
          <div className='pb_3'>
            <h4 className='h4_cookie'>Contact Us</h4>
            <p className='p_cookie'>
              If you have any questions or concerns about our Cookie Policy,
              please contact us at email address:
              <a href='mailto:lipro.ecommerce@gmail.com' className='a_style'>
                <small>lipro.ecommerce@gmail.com</small>
              </a>
            </p>
          </div>
        </section>
      </main>
      <ArrowPhantom />
      <Footer />
    </>
  )
}

export default CookiePolicyPage
