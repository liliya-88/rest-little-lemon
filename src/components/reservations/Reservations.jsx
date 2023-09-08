/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Image1 from '../../assets/about/interior-of-the-restaurant.jpg'
import Image2 from '../../assets/about/restaurant-chefs.jpg'

const Reservations = () => {
  const [inputV, setInputV] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    username: '',
    password: '',
    date: '',
    time: '',
    number_of_diners: '',
    occasion: '',
    special_request: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [currentTab, setCurrentTab] = useState(0)
  const [submit, setSubmit] = useState(false)
  const [hide, setHide] = useState(false)
  let number = 1

  /* ----------- */
  function handleNext() {
    setCurrentTab(currentTab + number)

    if (currentTab > 1) {
      setSubmit(true)
    } else {
      setSubmit(false)
    }
    if (currentTab < number) setHide(true)
  }
  function handlePrev() {
    setCurrentTab(currentTab - number)
    if (currentTab < number) {
      setHide(true)
    } else {
      setHide(false)
    }
  }
  function handleSubmit(e) {
    e.preventDefault()
    if (inputV.password === inputV.confirm_password) {
      confirm('Thanks for signing up!')
    } else {
      alert('Please enter a correct password')
    }
  }
  /* ------------------- */
  return (
    <>
      <section className='main_wrapper_form pt-4'>
        <div className='title_wrapper'>
          <div className='title-hero '>
            <h1 className='h1_title'>
              Little Lemon<span className='h1_span'>Chicago</span>
            </h1>
          </div>
        </div>

        <div className='form_container' onSubmit={handleSubmit}>
          <form action='' id='regForm' method='POST'>
            <h1 className='form_title'>Find a table for any occasion</h1>
            {/* images */}
            <div className='img_containter_form'>
              <div>
                <img
                  src={Image1}
                  alt='restaurant interior'
                  className='img img_form'
                />
              </div>
              <div>
                <img
                  src={Image2}
                  alt='restaurant chefs'
                  className='img  img_form'
                />
              </div>
            </div>
            {/* end of images */}
            {/* |||||||ONE BLOCK WITH 4 INPUTS||||||||||||| */}
            {/* Date & Time*/}

            <div
              className='tab sign'
              style={{ display: currentTab === 0 ? 'grid' : 'none' }}>
              <p>
                <label htmlFor='date'>
                  <sup>*</sup>Date: <br />
                  <input
                    type='date'
                    value={inputV.date}
                    name='date'
                    className='form_input'
                    // placeholder='username'
                    onChange={(e) =>
                      setInputV({ ...inputV, date: e.target.value })
                    }
                    required
                  />
                </label>
                <span
                  className='clear_input'
                  onClick={() =>
                    setInputV((prev) => {
                      return { ...prev, date: '' }
                    })
                  }>
                  X
                </span>
              </p>
              <p>
                <label htmlFor='time'>
                  <sup>*</sup>Time
                  <br />{' '}
                  <select
                    name='time'
                    value={inputV.time}
                    className='form_input'
                    onChange={(e) =>
                      setInputV({ ...inputV, time: e.target.value })
                    }
                    required>
                    <option value='' disabled>
                      Time
                    </option>
                    <option value='13:00'>13:00</option>
                    <option value='15:00'>15:00</option>
                    <option value='17:30'>17:30</option>
                    <option value='18:00'>18:00</option>
                    <option value='19:00'>19:00</option>
                    <option value='20:00'>20:00</option>
                    <option value='21:00'>21:00</option>
                    <option value='22:00'>22:00</option>
                  </select>
                </label>
                <span
                  className='clear_input'
                  onClick={() =>
                    setInputV((prev) => {
                      return { ...prev, time: '' }
                    })
                  }>
                  X
                </span>
              </p>
            </div>

            {/* ++++++++++ */}
            {/* Numbers of diners & occasions*/}
            <div
              className='tab mt-0'
              style={{ display: currentTab === 0 ? 'grid' : 'none' }}>
              <p>
                <label htmlFor='number_of_diners'>
                  <sup>*</sup>Number of diners: <br />
                  <select
                    value={inputV.number_of_diners}
                    name='number_of_diners'
                    className='form_input'
                    placeholder='number_of_diners'
                    onChange={(e) =>
                      setInputV({ ...inputV, number_of_diners: e.target.value })
                    }
                    required>
                    <option value='' disabled>
                      Number of diners
                    </option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='6'>6</option>
                    <option value='8'>8</option>
                    <option value='10'>10</option>
                    <option value='12'>12</option>
                    <option value='14'>14</option>
                    <option value='16'>16</option>
                    <option value='18'>18</option>
                    <option value='20'>20</option>
                  </select>
                </label>
                <span
                  className='clear_input'
                  onClick={() =>
                    setInputV((prev) => {
                      return { ...prev, number_of_diners: '' }
                    })
                  }>
                  X
                </span>
              </p>
              <p>
                <label htmlFor='occasion'>
                  <sup>*</sup>Occasion
                  <br />
                  <select
                    value={inputV.occasion}
                    className='form_input'
                    name='occasion'
                    onChange={(e) =>
                      setInputV({ ...inputV, occasion: e.target.value })
                    }
                    required>
                    <option value='' disabled>
                      Occasion
                    </option>
                    <option value='🎉  Party'>🎉 Party</option>
                    <option value='🎂  Birthday'>🎂 Birthday</option>
                    <option value='💍  Engagement'>💍 Engagement</option>
                    <option value='📅  Anniversary'>📅 Anniversary</option>
                    <option value='🤝 Business meeting'>
                      🤝 Business meeting
                    </option>
                    <option value='👨‍👩‍👦‍👦 Family gathering'>
                      👨‍👩‍👦‍👦 Family gathering
                    </option>
                    <option value='👫 Date night'>👫 Date night</option>
                  </select>
                </label>
                <span
                  className='clear_input'
                  onClick={() =>
                    setInputV((prev) => {
                      return { ...prev, occasion: '' }
                    })
                  }>
                  X
                </span>
              </p>
            </div>
            {/* END OF ONE BLOCK WITH 4 INPUTS */}

            {/* |||||||ONE BLOCK WITH 4 INPUTS||||||||||||| */}
            {/* Name and Surname*/}
            <div
              className='tab sign'
              style={{ display: currentTab === 1 ? 'grid' : 'none' }}>
              <p>
                <label htmlFor='first_name'>
                  <sup>*</sup>Name: <br />
                  <input
                    type='text'
                    value={inputV.first_name}
                    name='first_name'
                    className='form_input'
                    placeholder='John'
                    onChange={(e) =>
                      setInputV({ ...inputV, first_name: e.target.value })
                    }
                    required
                  />
                </label>
                <span
                  className='clear_input'
                  onClick={() =>
                    setInputV((prev) => {
                      return { ...prev, first_name: '' }
                    })
                  }>
                  X
                </span>
              </p>
              <p>
                <label htmlFor='last_name'>
                  <sup>*</sup>Last Name
                  <br />
                  <input
                    type='text'
                    value={inputV.last_name}
                    className='form_input'
                    name='last_name'
                    placeholder='Doe'
                    onChange={(e) =>
                      setInputV({ ...inputV, last_name: e.target.value })
                    }
                    required
                  />
                </label>
                <span
                  className='clear_input'
                  onClick={() =>
                    setInputV((prev) => {
                      return { ...prev, last_name: '' }
                    })
                  }>
                  X
                </span>
              </p>
            </div>
            {/* ++++++++ */}
            {/* Email & Phone*/}
            <div
              className='tab mt-0'
              style={{ display: currentTab === 1 ? 'grid' : 'none' }}>
              <p>
                <label htmlFor='email'>
                  <sup>*</sup>Email: <br />
                  <input
                    type='email'
                    value={inputV.email}
                    className='form_input'
                    name='email'
                    placeholder='example@gmail.com'
                    onChange={(e) =>
                      setInputV({ ...inputV, email: e.target.value })
                    }
                    required
                  />
                </label>
                <span
                  className='clear_input'
                  onClick={() =>
                    setInputV((prev) => {
                      return { ...prev, email: '' }
                    })
                  }>
                  X
                </span>
              </p>
              <p>
                <label htmlFor='phone'>
                  <sup>*</sup>Phone <br />
                  <input
                    type='tel'
                    value={inputV.phone}
                    className='form_input'
                    name='phone'
                    placeholder='905427730224'
                    onChange={(e) =>
                      setInputV({ ...inputV, phone: e.target.value })
                    }
                    required
                  />
                </label>
                <span
                  className='clear_input'
                  onClick={() =>
                    setInputV((prev) => {
                      return { ...prev, phone: '' }
                    })
                  }>
                  X
                </span>
              </p>
            </div>
            {/* END OF ONE BLOCK WITH 4 INPUTS */}

            {/* =============================================================== */}
            {/* Username & Password*/}
            <div
              className='tab sign'
              style={{ display: currentTab === 2 ? 'grid' : 'none' }}>
              <p>
                <label htmlFor='username'>
                  <sup>*</sup>Username: <br />
                  <input
                    type='text'
                    value={inputV.username}
                    name='username'
                    className='form_input'
                    placeholder='username'
                    onChange={(e) =>
                      setInputV({ ...inputV, username: e.target.value })
                    }
                    required
                  />
                </label>
                <span
                  className='clear_input'
                  onClick={() =>
                    setInputV((prev) => {
                      return { ...prev, first_name: '' }
                    })
                  }>
                  X
                </span>
              </p>
              <p>
                <label htmlFor='password'>
                  <sup>*</sup>Password
                  <br />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    title='minimum 6-character password is required'
                    value={inputV.password}
                    className='form_input'
                    name='password'
                    placeholder='********'
                    minLength={6}
                    maxLength={12}
                    onChange={(e) =>
                      setInputV({ ...inputV, password: e.target.value })
                    }
                    required
                  />
                </label>
                <span
                  className='clear_input'
                  onClick={() =>
                    setInputV((prev) => {
                      return { ...prev, password: '' }
                    })
                  }>
                  X
                </span>
                <span
                  style={{
                    marginTop: '1vh',
                    display: 'block',
                    fontSize: '70%',
                    lineHeight: '1.2',
                  }}>
                  <input
                    type='checkbox'
                    name='password_visability'
                    onClick={() => setShowPassword(!showPassword)}
                  />
                  <span style={{ paddingLeft: '0.3rem' }}>Show password</span>
                </span>
              </p>
            </div>
            {/* ++++++++++ */}
            {/* Login */}
            <div
              className='tab mt-0'
              style={{ display: currentTab === 2 ? 'grid' : 'none' }}>
              <p>
                <label htmlFor='confirm_password'>
                  <sup>*</sup>Confirm password: <br />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={inputV.confirm_password}
                    name='confirm_password'
                    className='form_input'
                    placeholder='confirm password'
                    onChange={(e) =>
                      setInputV({ ...inputV, confirm_password: e.target.value })
                    }
                  />
                </label>

                <span
                  className='clear_input'
                  onClick={() =>
                    setInputV((prev) => {
                      return { ...prev, confirm_password: '' }
                    })
                  }>
                  X
                </span>
                <span
                  style={{
                    marginTop: '1vh',
                    display: 'block',
                    fontSize: '70%',
                    lineHeight: '1.2',
                  }}>
                  <input
                    type='checkbox'
                    name='password_visability'
                    onClick={() => setShowPassword(!showPassword)}
                  />
                  <span style={{ paddingLeft: '0.3rem' }}>Show password</span>
                </span>
              </p>
              <p>
                <label htmlFor='special_request'>
                  Special request
                  <br />
                  <textarea
                    type='text'
                    title='minimum 6-character password is required'
                    value={inputV.special_request}
                    className='form_input resizable'
                    name='text'
                    placeholder='Add a special request (optional)'
                    onChange={(e) =>
                      setInputV({ ...inputV, special_request: e.target.value })
                    }
                    required></textarea>
                </label>
                <span
                  className='clear_input'
                  onClick={() =>
                    setInputV((prev) => {
                      return { ...prev, special_request: '' }
                    })
                  }>
                  X
                </span>
              </p>
            </div>
            {/* ++++++++++ */}
            {/* buttons */}
            <div style={{ overflow: 'auto', padding: '0 1rem' }}>
              <div style={{ float: 'right' }} className='btns_form_container'>
                {currentTab >= 1 && (
                  <button
                    type='button'
                    id='prevBtn'
                    className='btn'
                    onClick={handlePrev}>
                    ⁫←Prev
                  </button>
                )}
                {currentTab >= 2 ? (
                  <button
                    type='submit'
                    id='nextBtn'
                    className='btn'
                    onClick={handleSubmit}>
                    Submit
                  </button>
                ) : (
                  <button
                    type='button'
                    id='nextBtn'
                    className='btn'
                    onClick={handleNext}>
                    Next →
                  </button>
                )}
                {/*     <button
                  type='button'
                  id='nextBtn'
                  className='btn'
                  onClick={handleNext}>
                  Next →
                </button> */}
              </div>
            </div>
            {/* ++++++ */}
            {/* circles which indicates the steps of the form */}
            <div style={{ textAlign: 'center' }}>
              <span className='step'></span>
              <span className='step'></span>
              <span className='step'></span>
            </div>
            {/* +++++++ */}
          </form>
        </div>
      </section>
    </>
  )
}

export default Reservations
