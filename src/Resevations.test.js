import { test, describe } from 'vitest'
import { jest } from 'jest'
import { render, screen, fireEvent, expect } from '@testing-library/react'
import Reservations from './components/reservations/Reservations.jsx'

test('Render the Reservations headingElement', () => {
  render(<Reservations />)
  const headingElement = screen.getByText('Submit')
  expect(headingElement).toBeInTheDocument()
})

describe('Reserve a table', () => {
  test('User is able to submit the form if all the fields are filled', () => {
    const date = 'Date'
    const time = 'Time'
    const numberOfDiners = 'Number of diners'
    const occasion = 'Occasion'
    const name = 'Name:'
    const lastName = 'Last Name'
    const email = 'Email'
    const phone = 'Phone'
    const username = 'Username'
    const password = 'Password'
    const confirm = 'Confirm password'
    const handleSubmit = jest.fn()
    render(<Reservations onSubmit={handleSubmit} />)

    const dateInput = screen.getByLabelText(/Date/)
    fireEvent.change(dateInput, { target: { value: date } })

    const timeInput = screen.getByLabelText(/Time/)
    fireEvent.change(timeInput, { target: { value: time } })

    const numberOfDinersInput = screen.getByLabelText(/Number Of diners/)
    fireEvent.change(numberOfDinersInput, { target: { value: numberOfDiners } })

    const occasionInput = screen.getByLabelText(/Occasion/)
    fireEvent.change(occasionInput, { target: { value: occasion } })

    const nameInput = screen.getByLabelText(/Name/)
    fireEvent.change(nameInput, { target: { value: name } })

    const lastNameInput = screen.getByLabelText(/Last Name/)
    fireEvent.change(lastNameInput, { target: { value: lastName } })

    const emailInput = screen.getByLabelText(/Email/)
    fireEvent.change(emailInput, { target: { value: email } })

    const phoneInput = screen.getByLabelText(/Phone/)
    fireEvent.change(phoneInput, { target: { value: phone } })

    const passwordInput = screen.getByLabelText(/Password/)
    fireEvent.change(passwordInput, { target: { value: password } })

    const usernameInput = screen.getByLabelText(/username/)
    fireEvent.change(usernameInput, { target: { value: username } })

    const confirmInput = screen.getByLabelText(/Confirm password/)
    fireEvent.change(confirmInput, { target: { value: confirm } })

    expect(handleSubmit).toHaveBeenCalledWidth({
      date,
      time,
      numberOfDiners,
      occasion,
      name,
      lastName,
      email,
      phone,
      username,
      password,
      confirm,
    })
  })
})

test('User is able to submit the form if all the fields are filled', () => {
  const date = 'Date'
  const time = 'Time'
  const numberOfDiners = 'Number of diners'
  const occasion = 'Occasion'
  const name = 'Name:'
  const lastName = 'Last Name'
  const email = 'Email'
  const phone = 'Phone'
  const username = 'Username'
  const password = 'Password'
  const confirm = 'Confirm password'
  const handleSubmit = jest.fn()

  render(<Reservations onSubmit={handleSubmit} />)

  const dateInput = screen.getByLabelText(/Date/)
  fireEvent.change(dateInput, { target: { value: date } })

  const timeInput = screen.getByLabelText(/Time/)
  fireEvent.change(timeInput, { target: { value: time } })

  const numberOfDinersInput = screen.getByLabelText(/Number Of diners/)
  fireEvent.change(numberOfDinersInput, { target: { value: numberOfDiners } })

  const occasionInput = screen.getByLabelText(/Occasion/)
  fireEvent.change(occasionInput, { target: { value: occasion } })

  const nameInput = screen.getByLabelText(/Name/)
  fireEvent.change(nameInput, { target: { value: name } })

  const lastNameInput = screen.getByLabelText(/Last Name/)
  fireEvent.change(lastNameInput, { target: { value: lastName } })

  const emailInput = screen.getByLabelText(/Email/)
  fireEvent.change(emailInput, { target: { value: email } })

  const phoneInput = screen.getByLabelText(/Phone/)
  fireEvent.change(phoneInput, { target: { value: phone } })

  const passwordInput = screen.getByLabelText(/Password/)
  fireEvent.change(passwordInput, { target: { value: password } })

  const usernameInput = screen.getByLabelText(/username/)
  fireEvent.change(usernameInput, { target: { value: username } })

  const confirmInput = screen.getByLabelText(/Confirm password/)
  fireEvent.change(confirmInput, { target: { value: confirm } })

  const submitButton = screen.getByRole('button')
  fireEvent.click(submitButton)

  expect(handleSubmit).toHaveBeenCalledWidth({
    date,
    time,
    numberOfDiners,
    occasion,
    name,
    lastName,
    email,
    phone,
    username,
    password,
    confirm,
  })
})
