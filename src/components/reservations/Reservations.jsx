/* eslint-disable no-unused-vars */

import { useCallback, useEffect, useState } from 'react'
import Image1 from '../../assets/about/interior-of-the-restaurant.jpg'
import Image2 from '../../assets/about/restaurant-chefs.jpg'

const Reservations = () => {
  const ls = typeof window !== 'undefined' ? window.localStorage : null
  const locSt = typeof window !== 'undefined' ? window.localStorage : null
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
  /* const for reservations without date and time */
  const [showPassword, setShowPassword] = useState(false)
  const [currentTab, setCurrentTab] = useState(0)
  const [submit, setSubmit] = useState(false)
  const [hide, setHide] = useState(false)
  const [notValid, setNotValid] = useState(true)
  /* +++ */
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
  /* end of const for reservations without date and time */
  /* -############# cost for date and time */
  const [chosenDate, setChosenDate] = useState('')
  const [chosenTime, setChosenTime] = useState('')
  const [chosenId, setChosenId] = useState('')
  const [indexOfChosenSlot, setIndexOfChosenSlot] = useState(null)
  const [availableDatesAndTimes, setAvailableDatesAndTimes] = useState(() => {
    const storedData = locSt ? JSON.parse(locSt.getItem('storedData')) : null
    return storedData
      ? storedData
      : [
          {
            id: '2023-09-19',
            availableTimes: [
              { time: '', chosen: false },
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
              { time: '', chosen: false },
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
              { time: '', chosen: false },
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
              { time: '', chosen: false },
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
              { time: '', chosen: false },
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
              { time: '', chosen: false },
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
              { time: '', chosen: false },
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
              { time: '', chosen: false },
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
              { time: '', chosen: false },
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
              { time: '', chosen: false },
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
              { time: '', chosen: false },
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
              { time: '', chosen: false },
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
              { time: '', chosen: false },
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
              { time: '', chosen: false },
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
              { time: '', chosen: false },
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
              { time: '', chosen: false },
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
              { time: '', chosen: false },
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
          {
            id: '2023-10-06',
            availableTimes: [
              { time: '', chosen: false },
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
        ]
  })

  const [chosenObj, setChosenObj] = useState(null)
  const [test, setTest] = useState(false)
  /* -############# end of cost for date and time */
  /* useEffects for reservations without date and time*/
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  useEffect(() => {
    const now = new Date().toISOString().split('T')[0]
    setMinDate(now)
  }, [chosenDate])

  useEffect(() => {
    if (availableDatesAndTimes && locSt) {
      localStorage.setItem('storedData', JSON.stringify(availableDatesAndTimes))
    }
    if (inputV && ls) {
      localStorage.setItem('formData', JSON.stringify(inputV))
    }
  }, [inputV, ls, availableDatesAndTimes, locSt])

  useEffect(() => {
    if (locSt && locSt.getItem('storedData')) {
      setAvailableDatesAndTimes(JSON.parse(locSt.getItem('storedData')))
    }
    if (ls && ls.getItem('formData')) {
      setInputV(JSON.parse(ls.getItem('formData')))
    }
  }, [ls, locSt])
  /* ########## useEffects for date and time */

  /* * */
  useEffect(() => {
    if (chosenDate) {
      const chosenObj = availableDatesAndTimes.find(
        (obj) => obj.id === chosenDate
      )
      setChosenObj(chosenObj)
    }
    if (chosenObj) {
      const index = availableDatesAndTimes.indexOf(chosenObj)
      setIndexOfChosenSlot(index)
      setChosenId(chosenObj.id)
    }
  }, [availableDatesAndTimes, chosenDate, chosenObj])

  /* ########## end of useEffects for date and time */
  useEffect(() => {
    if (success) {
      /*  localStorage.removeItem('availableDatesAndTimes') */
      setTest(false)
      localStorage.removeItem('formData')
    }
    if (sentMessage && !preloader) {
      setSuccess(false)
      setTest(true)
    }
  }, [success, preloader, sentMessage])

  /* end of useEffects */
  /*---end of useEffects for reservations without date and time----*/

  /* funcions for reservations without date and time*/
  const handleChange = (event) => {
    const { name, value } = event.target
    setInputV((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

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
  }, [])

  const handleInputBlurDateTime = useCallback(() => {
    setChosenDate((prevDate) => prevDate)
    if (chosenDate) {
      setInputV((prevState) => ({
        ...prevState,
        date: chosenDate,
      }))

      setInputV((prevState) => ({
        ...prevState,
        time: chosenTime,
      }))
    } else {
      setChosenDate((prevDate) => prevDate)
      setChosenTime((prevTime) => prevTime)
    }
  }, [chosenDate, chosenTime])

  function handlePrev() {
    setCurrentTab(currentTab - number)
    if (currentTab < number) {
      setHide(true)
    } else {
      setHide(false)
    }
  }

  /* --- end of functions for reservations without date and time --- */
  /* ##### functions for for date and time ##### */
  function handleDateTime(e) {
    setChosenDate(e.target.value)
    setInputV((prevState) => ({
      ...prevState,
      date: chosenDate,
    }))
  }
  function handleTimeChange(e) {
    setChosenTime(e.target.value)
    setInputV((prevState) => ({
      ...prevState,
      time: chosenTime,
    }))
  }
  useEffect(() => {
    setTest(false)
    if (chosenTime && test) {
      setAvailableDatesAndTimes((prevState) => {
        return prevState.map((dateObj) => {
          if (dateObj.id === chosenDate) {
            return {
              id: dateObj.id,
              availableTimes: dateObj.availableTimes.map((timeObj) => {
                if (timeObj.time === chosenTime) {
                  return { time: timeObj.time, chosen: true }
                }
                return timeObj
              }),
            }
          }
          return dateObj
        })
      })
    }
  }, [chosenDate, chosenTime, test])
  /* ##### end of functions for for date and time #####  */
  console.log(chosenDate, inputV.date, '- date')
  console.log(chosenTime, inputV.time, '- time')
  /* ======================================================= */
  /* !!!!async function for sending data to email */
  async function handleSubmit(e) {
    /* validation of the first section */
    if (
      currentTab === 0 &&
      chosenDate !== '' &&
      chosenTime !== '' &&
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
      if (inputV.password !== inputV.confirm_password) {
        setErrors1(true)
        e.preventDefault()
        setTimeout(() => {
          setErrors1(false)
        }, 2000)
        return
      } else {
        setPreloader(true)
        setTest(true)
      }
      //sending the message
      const url = 'https://usebasin.com/f/6eee2fc7b10c'
      if (preloader && currentTab === 2) {
        const createMessage = async (url, data) => {
          const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data),
          })
         /*  setSentMessage(true) */
          setTest(true)
          localStorage.removeItem('formData')
          return await response.json()
        }
        const messageForm = `Name:${inputV.first_name} ${inputV.last_name},
          Email: ${inputV.email},
          Phone: ${inputV.phone},
          Date for reservation: ${chosenDate},
          Time for reservation: ${chosenTime},
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
        /*  const createResponse = await createMessage(url, messageForm) */
        setSuccess(false)
         setSentMessage(true)
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
      }, 5500)
      //Clear localStorage after form submission
      /*   localStorage.removeItem('availableDatesAndTimes') */
      localStorage.removeItem('formData')
      // Reset the form
    }
  }
  /* ----end of async function for sending data to email ------ */
  return (
    <>
      <section className='main_wrapper_form pt-4 flashIn'>
        <div className='title_wrapper'>
          <div className='title-hero '>
            <h2 className='h1_title'>
              Little Lemon<span className='h1_span'>Chicago</span>
            </h2>
          </div>
        </div>
        <div className='form_container'>
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
                    value={chosenDate}
                    name='date'
                    className='form_input'
                    onBlur={handleInputBlurDateTime}
                    onBeforeInput={handleInputBlurDateTime}
                    onChange={handleDateTime}
                    max='2023-10-06'
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
                    onBlur={handleInputBlurDateTime}
                    onBeforeInput={handleInputBlurDateTime}
                    onChange={handleTimeChange}
                    required>
                    {/*  <option value=''>Time</option> */}
                    {!chosenDate && <option value=''>Time</option>}
                    {availableDatesAndTimes[
                      indexOfChosenSlot
                    ]?.availableTimes.map((chosen) => (
                      <option
                        key={chosen.time + Math.random}
                        value={chosen.time}
                        disabled={chosen.chosen}>
                        {chosen.time === '' ? 'Choose time' : chosen.time}
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
                {/*  disabled={inputV.password !== inputV.confirm_password} */}
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
