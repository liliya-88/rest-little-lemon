/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import Image1 from '../../assets/about/interior-of-the-restaurant.jpg'
import Image2 from '../../assets/about/restaurant-chefs.jpg'

const Reservations = () => {
  const ls = typeof window !== 'undefined' ? window.localStorage : null

  const [inputV, setInputV] = useState(() => {
    const formData = ls ? JSON.parse(ls.getItem('formData')) : null
    return {
      first_name: formData ? formData.first_name || '' : '',
      last_name: formData ? formData.last_name || '' : '',
      email: formData ? formData.email || '' : '',
      phone: formData ? formData.phone || '' : '',
      username: formData ? formData.username || '' : '',
      password: formData ? formData.password || '' : '',
      confirm_password: formData ? formData.confirm_password || '' : '',
      date: formData ? formData.date || '' : '',
      time: formData ? formData.time || '' : '',
      number_of_diners: formData ? formData.number_of_diners || '' : '',
      occasion: formData ? formData.occasion || '' : '',
      special_request: formData ? formData.special_request || '' : '',
    }
  })
  console.log(inputV)
  /*  const [inputV, setInputV] = useState({
    first_name: '' || ls.getItem('formData'),
    last_name: '' || ls.getItem('formData'),
    email: '' || ls.getItem('formData'),
    phone: '' || ls.getItem('formData'),
    username: '',
    password: '',
    confirm_password: '',
    date: '',
    time: '' || ls.getItem('formData'),
    number_of_diners: '',
    occasion: '',
    special_request: '',
  }) */
  const [showPassword, setShowPassword] = useState(false)
  const [currentTab, setCurrentTab] = useState(0)
  const [submit, setSubmit] = useState(false)
  const [hide, setHide] = useState(false)
  const [notValid, setNotValid] = useState(true)
  /* +++ */
  const [errors, setErrors] = useState({})
  /* +++ */
  let number = 1
  let startAgain = 0

  /* ----------- */

  /* useEffects */
  useEffect(() => {
    if (inputV && ls) {
      localStorage.setItem('formData', JSON.stringify(inputV))
    }
  }, [inputV, ls])

  useEffect(() => {
    if (ls && ls.getItem('formData')) {
      setInputV(JSON.parse(ls.getItem('formData')))
    }
  }, [ls])

  /* end of useEffects */
  function handlePrev() {
    setCurrentTab(currentTab - number)
    if (currentTab < number) {
      setHide(true)
    } else {
      setHide(false)
    }
  }
  /* for validation email and phane */

  /* ======================================================= */
  /* setInputV({ ...inputV, email: e.target.value } */

  function handleSubmit(e) {
    /* validation of the first section */
    if (
      currentTab === 0 &&
      inputV.data !== '' &&
      inputV.time !== '' &&
      inputV.number_of_diners !== '' &&
      inputV.occasion !== ''
    ) {
      setNotValid(false)
      setCurrentTab(currentTab + number)
      if (currentTab > 1) {
        setSubmit(true)
      } else {
        setSubmit(false)
      }
      if (currentTab < number) setHide(true)
      return
    }
    /* validation of the second section */
    if (
      currentTab === 1 &&
      inputV.name !== '' &&
      inputV.last_name !== '' &&
      inputV.email !== '' &&
      inputV.phone !== ''
    ) {
      setNotValid(false)
      setCurrentTab(currentTab + number)

      if (currentTab > 1) {
        setSubmit(true)
      } else {
        setSubmit(false)
      }
      if (currentTab < number) setHide(true)
    }
    /* validation of the second section - last step before submitting */
    if (
      currentTab === 2 &&
      inputV.username !== '' &&
      inputV.password !== '' &&
      inputV.confirm_password !== ''
    ) {
      e.preventDefault()
      if (inputV.password !== inputV.confirm_password) {
        alert(
          'The password and the confirmation password are not the same.Please try again.'
        )
        return
      } else {
        alert('Thanks for signing up!')
        setTimeout(() => {
          // Reset the form
          setInputV({
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            username: '',
            password: '',
            confirm_password: '',
            date: '',
            time: '',
            number_of_diners: '',
            occasion: '',
            special_request: '',
          })
          return setCurrentTab(startAgain)
        }, 2000)
      }

      //Clear localStorage after form submission
      localStorage.removeItem('formData')
      // Reset the form
    }
  }

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
          <form id='regForm'>
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
              <p
                className={
                  currentTab === 0 && notValid ? 'not_valid show' : 'not_valid'
                }>
                {/* Please fill in all the fields correctly */}
              </p>
              <p>
                <label htmlFor='number_of_diners'>
                  <sup>*</sup>Number of diners: <br />
                  <select
                    value={inputV.number_of_diners}
                    name='number_of_diners'
                    className='form_input'
                    placeholder='number_of_diners'
                    onChange={(e) =>
                      setInputV({
                        ...inputV,
                        number_of_diners: e.target.value,
                      })
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
                    autoCapitalize='true'
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
              {errors.email && (
                <p
                  className={
                    currentTab === 0 && notValid
                      ? 'not_valid show'
                      : 'not_valid'
                  }>
                  Please enter a valid email address
                </p>
              )}
              <p>
                <label htmlFor='phone'>
                  <sup>*</sup>Phone <br />
                  <input
                    type='tel'
                    value={inputV.phone}
                    className='form_input'
                    name='phone'
                    pattern='[0-9]{1,2}[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}'
                    placeholder='+X(910)-XXX-XXXX'
                    onChange={(e) =>
                      setInputV({ ...inputV, phone: e.target.value })
                    }
                    autoCapitalize='true'
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
              {errors.phone && <p>{errors.phone}</p>}
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
                    autoCapitalize='true'
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
                    autoCapitalize='true'
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
                      setInputV({
                        ...inputV,
                        confirm_password: e.target.value,
                      })
                    }
                    autoCapitalize='true'
                    required
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
                      setInputV({
                        ...inputV,
                        special_request: e.target.value,
                      })
                    }></textarea>
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
                    type='submit'
                    id='nextBtn'
                    className='btn'
                    onClick={handleSubmit}>
                    Next →
                  </button>
                )}
              </div>
            </div>
            {/* ++++++ */}
            {/*  */}
            {/* circles which indicates the steps of the form */}
            <div style={{ textAlign: 'center' }} className='steps'>
              <span
                className={currentTab === 0 ? 'step active' : 'step'}></span>
              <span
                className={currentTab === 1 ? 'step active' : 'step'}></span>
              <span
                className={currentTab === 2 ? 'step active' : 'step'}></span>
            </div>
            {/* +++++++ */}
          </form>
        </div>
      </section>
    </>
  )
}

export default Reservations
