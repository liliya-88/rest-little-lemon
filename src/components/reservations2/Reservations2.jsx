/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from 'react'

const Reservations2 = () => {
  const [minDate, setMinDate] = useState('')

  const [chosenDate, setChosenDate] = useState('')
  const [chosenTime, setChosenTime] = useState('')
  const [chosenId, setChosenId] = useState('')
  const [indexOfChosenSlot, setIndexOfChosenSlot] = useState(null)

  const [availableDatesAndTimes, setAvailableDatesAndTimes] = useState([
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
        { time: '13:00', chosen: false },
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
  ])
  const [chosenObj, setChosenObj] = useState(null)
  const [test, setTest] = useState(false)
  /* ------------------------ */
  /* useEffects */
  useEffect(() => {
    const now = new Date().toISOString().split('T')[0]
    setMinDate(now)
  }, [chosenDate])
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
  /* ======================= */

  const handleInputBlur = useCallback(() => {
    setChosenDate((prevDate) => prevDate)
    setChosenTime((prevTime) => prevTime)
  }, [])

  /* fn */
  function handleDateChange(e) {
    setChosenDate(e.target.value)
  }

  function handleTimeChange(e) {
    setChosenTime(e.target.value)
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
  return (
    <>
      <div className='form_container flashIn'>
        <form
          id='regForm2'
          method='POST'
          name='reservation'
          action='https://usebasin.com/f/6eee2fc7b10c'
          encType='multipart/form-data'>
          <h1 className='form_title'>Find a table for any occasion</h1>
          <div className='tab sign'>
            <p>
              <label htmlFor='date'>
                <sup>*</sup>Date: <br />
                <input
                  type='date'
                  value={chosenDate}
                  name='date'
                  onBeforeInput={handleInputBlur}
                  className='form_input'
                  placeholder='username'
                  autoCapitalize='true'
                  onChange={handleDateChange}
                  max='2023-10-05'
                  min={minDate}
                  required
                />
              </label>
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
                  <option value=''>Time</option>
                  {!chosenDate && <option value=''>Time</option>}
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
            </p>
            <button type='button' onClick={() => setTest(true)} className='btn'>
              Click
            </button>
            <button type='submit' className='btn m-auto'>
              Submit
            </button>
          </div>

          {/* ++++++++++ */}
        </form>
      </div>
    </>
  )
}

export default Reservations2
