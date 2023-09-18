/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from 'react'
import Image1 from '../../assets/about/interior-of-the-restaurant.jpg'
import Image2 from '../../assets/about/restaurant-chefs.jpg'
// const nodemailer = require('nodemail')

/* zlbqrmpaptgcpsna */
const Reservations = () => {
  const ls = typeof window !== 'undefined' ? window.localStorage : null
  const [minDate, setMinDate] = useState('')
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

  const [showPassword, setShowPassword] = useState(false)
  const [currentTab, setCurrentTab] = useState(0)
  const [submit, setSubmit] = useState(false)
  const [hide, setHide] = useState(false)
  const [notValid, setNotValid] = useState(true)
  /* +++ */
  /* for date and time functionality */
  const [chosenTime, setChosenTime] = useState('')
  const [chosenId, setChosenId] = useState('')
  const [indexOfChosenSlot, setIndexOfChosenSlot] = useState(null)
  const [availableDatesAndTimes, setAvailableDatesAndTimes] = useState(() => {
    const storedData = ls
      ? JSON.parse(ls.getItem('availableDatesAndTimes'))
      : null
    return storedData
      ? storedData
      : [
          {
            id: '2023-09-18',
            availableTimes: [
              { time: '13:00', chosen: true },
              { time: '14:00', chosen: false },
              { time: '15:00', chosen: false },
              { time: '16:00', chosen: false },
              { time: '17:00', chosen: false },
              { time: '18:00', chosen: true },
              { time: '19:00', chosen: false },
              { time: '20:00', chosen: false },
              { time: '21:00', chosen: false },
            ],
          },
          {
            id: '2023-09-19',
            availableTimes: [
              { time: '13:00', chosen: false },
              { time: '14:00', chosen: true },
              { time: '15:00', chosen: true },
              { time: '16:00', chosen: false },
              { time: '17:00', chosen: false },
              { time: '18:00', chosen: false },
              { time: '19:00', chosen: false },
              { time: '20:00', chosen: false },
              { time: '21:00', chosen: false },
            ],
          },
          {
            id: '2023-09-20',
            availableTimes: [
              { time: '13:00', chosen: false },
              { time: '14:00', chosen: false },
              { time: '15:00', chosen: false },
              { time: '16:00', chosen: true },
              { time: '17:00', chosen: true },
              { time: '18:00', chosen: false },
              { time: '19:00', chosen: false },
              { time: '20:00', chosen: false },
              { time: '21:00', chosen: false },
            ],
          },
          {
            id: '2023-09-21',
            availableTimes: [
              { time: '13:00', chosen: false },
              { time: '14:00', chosen: false },
              { time: '15:00', chosen: false },
              { time: '16:00', chosen: false },
              { time: '17:00', chosen: false },
              { time: '18:00', chosen: false },
              { time: '19:00', chosen: true },
              { time: '20:00', chosen: true },
              { time: '21:00', chosen: true },
            ],
          },
          {
            id: '2023-09-22',
            availableTimes: [
              { time: '13:00', chosen: true },
              { time: '14:00', chosen: false },
              { time: '15:00', chosen: false },
              { time: '16:00', chosen: true },
              { time: '17:00', chosen: false },
              { time: '18:00', chosen: false },
              { time: '19:00', chosen: false },
              { time: '20:00', chosen: false },
              { time: '21:00', chosen: false },
            ],
          },
          {
            id: '2023-09-23',
            availableTimes: [
              { time: '13:00', chosen: false },
              { time: '14:00', chosen: true },
              { time: '15:00', chosen: false },
              { time: '16:00', chosen: true },
              { time: '17:00', chosen: false },
              { time: '18:00', chosen: true },
              { time: '19:00', chosen: false },
              { time: '20:00', chosen: false },
              { time: '21:00', chosen: false },
            ],
          },
          {
            id: '2023-09-24',
            availableTimes: [
              { time: '13:00', chosen: false },
              { time: '14:00', chosen: false },
              { time: '15:00', chosen: false },
              { time: '16:00', chosen: false },
              { time: '17:00', chosen: false },
              { time: '18:00', chosen: false },
              { time: '19:00', chosen: false },
              { time: '20:00', chosen: false },
              { time: '21:00', chosen: false },
            ],
          },
          {
            id: '2023-09-25',
            availableTimes: [
              { time: '13:00', chosen: false },
              { time: '14:00', chosen: true },
              { time: '15:00', chosen: false },
              { time: '16:00', chosen: false },
              { time: '17:00', chosen: false },
              { time: '18:00', chosen: false },
              { time: '19:00', chosen: false },
              { time: '20:00', chosen: false },
              { time: '21:00', chosen: false },
            ],
          },
          {
            id: '2023-09-26',
            availableTimes: [
              { time: '13:00', chosen: false },
              { time: '14:00', chosen: false },
              { time: '15:00', chosen: false },
              { time: '16:00', chosen: true },
              { time: '17:00', chosen: true },
              { time: '18:00', chosen: false },
              { time: '19:00', chosen: false },
              { time: '20:00', chosen: true },
              { time: '21:00', chosen: false },
            ],
          },
          {
            id: '2023-09-27',
            availableTimes: [
              { time: '13:00', chosen: false },
              { time: '14:00', chosen: false },
              { time: '15:00', chosen: false },
              { time: '16:00', chosen: false },
              { time: '17:00', chosen: false },
              { time: '18:00', chosen: false },
              { time: '19:00', chosen: false },
              { time: '20:00', chosen: false },
              { time: '21:00', chosen: false },
            ],
          },
          {
            id: '2023-09-28',
            availableTimes: [
              { time: '13:00', chosen: true },
              { time: '14:00', chosen: false },
              { time: '15:00', chosen: false },
              { time: '16:00', chosen: false },
              { time: '17:00', chosen: true },
              { time: '18:00', chosen: false },
              { time: '19:00', chosen: false },
              { time: '20:00', chosen: false },
              { time: '21:00', chosen: true },
            ],
          },
          {
            id: '2023-09-29',
            availableTimes: [
              { time: '13:00', chosen: false },
              { time: '14:00', chosen: false },
              { time: '15:00', chosen: false },
              { time: '16:00', chosen: false },
              { time: '17:00', chosen: false },
              { time: '18:00', chosen: true },
              { time: '19:00', chosen: true },
              { time: '20:00', chosen: false },
              { time: '21:00', chosen: false },
            ],
          },
          {
            id: '2023-09-30',
            availableTimes: [
              { time: '13:00', chosen: true },
              { time: '14:00', chosen: false },
              { time: '15:00', chosen: false },
              { time: '16:00', chosen: false },
              { time: '17:00', chosen: false },
              { time: '18:00', chosen: false },
              { time: '19:00', chosen: true },
              { time: '20:00', chosen: false },
              { time: '21:00', chosen: false },
            ],
          },
          {
            id: '2023-10-01',
            availableTimes: [
              { time: '13:00', chosen: false },
              { time: '14:00', chosen: false },
              { time: '15:00', chosen: false },
              { time: '16:00', chosen: false },
              { time: '17:00', chosen: true },
              { time: '18:00', chosen: false },
              { time: '19:00', chosen: false },
              { time: '20:00', chosen: false },
              { time: '21:00', chosen: false },
            ],
          },
          {
            id: '2023-10-02',
            availableTimes: [
              { time: '13:00', chosen: false },
              { time: '14:00', chosen: false },
              { time: '15:00', chosen: false },
              { time: '16:00', chosen: false },
              { time: '17:00', chosen: false },
              { time: '18:00', chosen: false },
              { time: '19:00', chosen: false },
              { time: '20:00', chosen: false },
              { time: '21:00', chosen: false },
            ],
          },
          {
            id: '2023-10-03',
            availableTimes: [
              { time: '13:00', chosen: false },
              { time: '14:00', chosen: true },
              { time: '15:00', chosen: false },
              { time: '16:00', chosen: false },
              { time: '17:00', chosen: false },
              { time: '18:00', chosen: false },
              { time: '19:00', chosen: true },
              { time: '20:00', chosen: false },
              { time: '21:00', chosen: false },
            ],
          },
          {
            id: '2023-10-04',
            availableTimes: [
              { time: '13:00', chosen: false },
              { time: '14:00', chosen: false },
              { time: '15:00', chosen: false },
              { time: '16:00', chosen: true },
              { time: '17:00', chosen: false },
              { time: '18:00', chosen: false },
              { time: '19:00', chosen: true },
              { time: '20:00', chosen: false },
              { time: '21:00', chosen: false },
            ],
          },
          {
            id: '2023-10-05',
            availableTimes: [
              { time: '13:00', chosen: false },
              { time: '14:00', chosen: false },
              { time: '15:00', chosen: false },
              { time: '16:00', chosen: false },
              { time: '17:00', chosen: false },
              { time: '18:00', chosen: true },
              { time: '19:00', chosen: false },
              { time: '20:00', chosen: false },
              { time: '21:00', chosen: true },
            ],
          },
        ]
  })

  const [chosenObj, setChosenObj] = useState(null)
  const [test, setTest] = useState(false)
  /* -----------end of for date and time functionality---------------- */
  const [errors, setErrors] = useState(false)
  const [errors1, setErrors1] = useState(false)
  const [errors2, setErrors2] = useState(false)
  const [errors3, setErrors3] = useState(false)
  const [success, setSuccess] = useState(false)
  const [preloader, setPreloader] = useState(false)
  const [sentMessage, setSentMessage] = useState(false)
  /* +++ */
  let number = 1
  let startAgain = 0
  /* ===================testing||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\ */

  /* ===================++++++++++++++||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\ */
  /* ----------- */
  /* useEffects */
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
  /* +++for date and time useEffects */
  useEffect(() => {
    if (availableDatesAndTimes && ls) {
      localStorage.setItem(
        'availableDatesAndTimes',
        JSON.stringify(availableDatesAndTimes)
      )
    }
  }, [availableDatesAndTimes, ls])

  useEffect(() => {
    if (ls && ls.getItem('availableDatesAndTimes')) {
      setAvailableDatesAndTimes(
        JSON.parse(ls.getItem('availableDatesAndTimes'))
      )
    }
  }, [ls])

  useEffect(() => {
    if (chosenTime && test && preloader) {
      setAvailableDatesAndTimes((prevState) => {
        return prevState.map((dateObj) => {
          if (dateObj.id === inputV) {
            return {
              id: dateObj.id,
              availableTimes: dateObj.availableTimes.map((timeObj) => {
                if (timeObj.time === chosenTime) {
                  return { time: timeObj.time, chosen: true }
                }
              }),
            }
          }
          return dateObj
        })
      })
    }
  }, [inputV, chosenTime, test, preloader])
  useEffect(() => {})
  /* +++end of for date and time useEffects */
  /* +++ */
  useEffect(() => {
    const now = new Date().toISOString().split('T')[0]
    setMinDate(now)
  }, [inputV])

  /* -- */
  useEffect(() => {
    if (sentMessage && !preloader) {
      setSuccess(false)
      localStorage.removeItem('formData')
      setTest(false)
    }
  }, [success, preloader, sentMessage])
  /*  setInputV((prev) => {
        return { ...prev, time: chosenTime }
      }) */
  /* function for date and time */
  function handleTimeChange(e) {
    setChosenTime(e.target.value)
    setInputV((prev) => {
      return { ...prev, time: chosenTime }
    })
  }
  /* end of function for date and time */
  useEffect(() => {
    if (inputV.date) {
      const chosenObj = availableDatesAndTimes.find(
        (obj) => obj.id === inputV.date
      )
      setChosenObj(chosenObj)
    }
    if (chosenObj) {
      const index = availableDatesAndTimes.indexOf(chosenObj)
      setIndexOfChosenSlot(index)
      setChosenId(chosenObj.id)
    }
  }, [availableDatesAndTimes, inputV.date, chosenObj])
  /* end of useEffects */

  const handleChange = (event) => {
    const { name, value } = event.target
    setInputV((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  // console.log(inputV)
  const handleInputBlur = useCallback(() => {
    setInputV((prevState) => ({
      ...prevState,
      date: prevState.date,
      time: prevState.time,
      number_of_diners: prevState.number_of_diners,
      occasion: prevState.occasion,
      first_name: prevState.first_name,
      last_name: prevState.last_name,
      email: prevState.email,
      phone: prevState.phone,
      username: prevState.username,
      password: prevState.password,
      confirm_password: prevState.confirm_password,
      special_request: prevState.special_request,
    }))
    setInputV((prev) => {
      return { ...prev, time: prev.date }
    })
    setChosenTime((prevTime) => prevTime)
  }, [])

  function handlePrev() {
    setCurrentTab(currentTab - number)
    if (currentTab < number) {
      setHide(true)
    } else {
      setHide(false)
    }
  }

  /* ======================================================= */

  async function handleSubmit(e) {
    /* validation of the first section */
    if (
      currentTab === 0 &&
      inputV.date !== '' &&
      currentTab !== '' &&
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
      const reEmail =
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

      if (reEmail.test(inputV.email)) {
        setNotValid(false)
      } else {
        setErrors(true)
        setTimeout(() => {
          setErrors(false)
          /*       setInputV((prev) => {
            return { ...prev, email: '' }
          }) */
        }, 2000)
        return
      }
      const phoneNumberRegex = /^[0-9]{10,13}$/
      if (phoneNumberRegex.test(inputV.phone)) {
        setNotValid(false)
      } else {
        setErrors3(true)
        setTimeout(() => {
          setErrors3(false)
        }, 2000)
        return
      }

      setCurrentTab(currentTab + number)
      if (currentTab > 1) {
        setSubmit(true)
      } else {
        setSubmit(false)
      }
      if (currentTab < number) setHide(true)
    }
    /*  'Content-Type': 'application/x-www-form-urlencoded' */
    /* validation of the second section - last step before submitting */
    if (
      currentTab === 2 &&
      inputV.username !== '' &&
      inputV.password !== '' &&
      inputV.confirm_password !== ''
    ) {
      // e.preventDefault()
      if (inputV.password !== inputV.confirm_password) {
        setErrors1(true)
        setTimeout(() => {
          setErrors1(false)
        }, 2000)
        return
      }
      setPreloader(true)
      //sending the message
      if (preloader && currentTab === 2) {
        const url = 'https://usebasin.com/f/6eee2fc7b10c'
        const createMessage = async (url, data) => {
          const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data),
          })
          setSentMessage(true)
          return await response.json()
        }
        const messageForm = `Name:${inputV.first_name} ${inputV.last_name},
          Email: ${inputV.email},
          Phone: ${inputV.phone},
          Date for reservation: ${inputV.date},
          Time for reservation: ${inputV.time},
          Number of diners: ${inputV.number_of_diners},
          Occasion: ${inputV.occasion},
          Special Request: ${inputV.special_request},
          Username: ${inputV.username},
          Password: ${inputV.password}`

        const createResponse = await createMessage(url, messageForm)
      }
      /* ------------------------------------- */
      setTimeout(() => {
        setPreloader(false)
        setSuccess(true)
      }, 3500)
      setTimeout(async () => {
        const createResponse = await createMessage(url, messageForm)
        setSuccess(false)
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
      }, 4500)
      //Clear localStorage after form submission
      localStorage.removeItem('formData')
      // Reset the form
    }
  }

  /* ----------------------- */
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
        <div className='form_container flashIn'>
          <form
            id='regForm'
            onSubmit={handleSubmit}
            method='POST'
            name='reservation'
            action='https://usebasin.com/f/6eee2fc7b10c'
            encType='multipart/form-data'>
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
                    placeholder='username'
                    onChange={handleChange}
                    onBlur={handleInputBlur}
                    autoCapitalize='true'
                    max='2023-10-05'
                    min={minDate}
                    required
                  />
                </label>
                <span className='clear_input'>📅</span>
              </p>
              <p>
                <label htmlFor='time'>
                  <sup>*</sup>Time
                  <br />{' '}
                  <select
                    name='time'
                    className='form_input'
                    onChange={handleTimeChange}
                    onBeforeInput={handleInputBlur}
                    required>
                    {/*     <option value=''>Time</option> */}
                    {!inputV.date && <option value=''>Time</option>}
                    {availableDatesAndTimes[
                      indexOfChosenSlot
                    ]?.availableTimes.map((chosen) => (
                      <option
                        key={chosen.time + Math.random}
                        value={chosen.time}
                        disabled={chosen.chosen}>
                        {chosen.time}
                      </option>
                    ))}
                  </select>
                </label>
                <span className='clear_input'>🕒</span>
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
                    onChange={handleChange}
                    onBlur={handleInputBlur}
                    required>
                    <option value='' disabled>
                      Number of diners
                    </option>
                    <option value='1'>&nbsp;1</option>
                    <option value='2'>&nbsp;2</option>
                    <option value='3'>&nbsp;3</option>
                    <option value='4'>&nbsp;4</option>
                    <option value='6'>&nbsp;6</option>
                    <option value='8'>&nbsp;8</option>
                    <option value='10'>10</option>
                    <option value='12'>12</option>
                    <option value='14'>14</option>
                    <option value='16'>16</option>
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
                    onChange={handleChange}
                    onBlur={handleInputBlur}
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
                    onChange={handleChange}
                    onBlur={handleInputBlur}
                    autoComplete='true'
                    maxLength={15}
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
                    onChange={handleChange}
                    onBlur={handleInputBlur}
                    autoComplete='true'
                    maxLength={15}
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
                    onChange={handleChange}
                    onBlur={handleInputBlur}
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
              <p>
                <label htmlFor='phone'>
                  <sup>*</sup>Phone <br />
                  <input
                    type='tel'
                    value={inputV.phone}
                    className='form_input'
                    name='phone'
                    pattern='[0-9]{1,2}[0-9]{3}[0-9]{3}[0-9]{4}'
                    placeholder='X(910)-XXX-XXXX'
                    onChange={handleChange}
                    onBlur={handleInputBlur}
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
                    onChange={handleChange}
                    onBlur={handleInputBlur}
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
                    onChange={handleChange}
                    onBlur={handleInputBlur}
                    autoComplete='true'
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
                    paddingTop: '0.7vh',
                    fontSize: '80%',
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
                    onChange={handleChange}
                    onBlur={handleInputBlur}
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
                    paddingTop: '0.7vh',
                    fontSize: '80%',
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
                      setInputV((prev) => ({
                        ...prev,
                        special_request: e.target.value || 'No special request',
                      }))
                    }
                    onBlur={handleInputBlur}></textarea>
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

          {errors && (
            <div id='message' className='show-message'>
              <div className='error'>
                <h3>Ooops!</h3>
                <p className='error'>
                  You forgot to give me a valid email address. Please fix that
                  and try again!
                </p>
              </div>
            </div>
          )}
          {errors1 && (
            <div id='message' className='show-message'>
              <div className='error'>
                <h3>Ooops!</h3>
                <p className='error'>
                  The password and the confirmation password are not the
                  same.Please try again.
                </p>
              </div>
            </div>
          )}
          {errors2 && (
            <div id='message' className='show-message'>
              <div className='error'>
                <h3>Ooops!</h3>
                <p>
                  All the fields are reqired, that&apos;s how we know who you
                  are. Please fix that and try again!
                </p>
              </div>
            </div>
          )}
          {errors3 && (
            <div id='message' className='show-message'>
              <div className='error'>
                <h3>Ooops!</h3>
                <p className='error'>
                  The phone number is not valid.Please try again.
                </p>
              </div>
            </div>
          )}
          {success && (
            <div id='message' className='show-message'>
              <div className='success'>
                <h3>Thanks!</h3>
                <p>
                  Your reservation has been successfully submitted, and we will
                  reach out to you soon.
                </p>
              </div>
            </div>
          )}
          {preloader && (
            <div id='message' className='show-message '>
              <div className='preloader'>
                <div className='loading-dot'></div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Reservations
