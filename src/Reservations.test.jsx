import Reservations from './components/reservations/Reservations'
import { describe, it, expect } from 'vitest'
import { render, screen, userEvent } from './utils/test-utils'
import sinon from 'sinon'


describe('Render the Reservations headingElement', () => {
  it('the title is visible', () => {
    render(<Reservations />)
    expect(screen.getByText(/Little Lemon/)).toBeInTheDocument()
  })
})

describe('Reserve a table', () => {
  it('User is able to submit the form if all the fields are filled', async () => {
    const handleSubmit = sinon.spy
    render(<Reservations onSubmit={handleSubmit} />)
    // Fill in the form inputs
    await userEvent.type(screen.getByLabelText(/date/i), '2022-09-28')
    await userEvent.type(screen.getByLabelText(/time/i), '18:00')
    await userEvent.type(screen.getByLabelText(/Number of diners/i), '4')
    await userEvent.type(screen.getByLabelText(/occasion/i), 'Birthday')
    await userEvent.type(screen.getByLabelText(/First Name/i), 'John')
    await userEvent.type(screen.getByLabelText(/Last name/i), 'Doe')
    await userEvent.type(
      screen.getByLabelText(/email/i),
      'johndoeexample@gmail.com'
    )
    await userEvent.type(screen.getByLabelText(/phone/i), '1234567890')
    await userEvent.type(screen.getByLabelText(/username/i), 'johndoe')
    await userEvent.type(screen.getByLabelText(/passwоrd/i), 'password888')
    await userEvent.type(
      screen.getByLabelText(/Confirm password/i),
      'password888'
    )

    // Submit the form
    await userEvent.click(screen.getByRole('button'))

    // Assert that the form data is sent correctly
    setTimeout(() => {
      expect(handleSubmit.called).toBe(true)
    }, 5500)
  })
}, 10000)

describe('Reserve a table', () => {
  it('User is able to submit the form if all the fields are filled correctly', async () => {
    const handleSubmit = sinon.spy
    render(<Reservations onSubmit={handleSubmit} />)

    // Fill in the form inputs
    const dateInput = screen.getByLabelText(/date/i)
    const timeInput = screen.getByLabelText(/time/i)
    const numberOfDinersInput = screen.getByLabelText(/Number of diners/i)
    const occasionInput = screen.getByLabelText(/occasion/i)
    const firstNameInput = screen.getByLabelText(/First Name/i)
    const lastNameInput = screen.getByLabelText(/Last name/i)
    const emailInput = screen.getByLabelText(/email/i)
    const phoneInput = screen.getByLabelText(/phone/i)
    const userInput = screen.getByLabelText(/username/i)

    const passwordInput = screen.getByLabelText(/passwоrd/i)
    const confirmPasswordInput = screen.getByLabelText(/Confirm password/i)
    // Set values for the input fields
    await userEvent.type(dateInput, '2022-09-28')
    await userEvent.type(timeInput, '18:00')
    await userEvent.type(numberOfDinersInput, '4')
    await userEvent.type(occasionInput, 'Birthday')
    await userEvent.type(firstNameInput, 'John')
    await userEvent.type(lastNameInput, 'Doe')

    await userEvent.type(emailInput, 'johndoe@gmail.com')
    await userEvent.type(phoneInput, '1234567890')
    await userEvent.type(userInput, 'johndoe')

    await userEvent.type(passwordInput, 'password')
    await userEvent.type(confirmPasswordInput, 'password888')

    // Submit the form
    /* await userEvent.click(screen.getByRole('button')) */
    setTimeout(async () => {
      await userEvent.click(screen.getByTestId('Submit'))
    }, 3800)

    // Assert that the form data is sent correctly
    setTimeout(() => {
      expect(handleSubmit).toHaveBeenCalledWith({
        dateInput,
        timeInput,
        numberOfDinersInput,
        occasionInput,
        firstNameInput,
        lastNameInput,
        emailInput,
        userInput,
        passwordInput,
        confirmPasswordInput,
      })
    }, 5500)
  })
}, 10000)
/* Thanks! */
/* import '@testing-library/jest-dom'
import { expect, test } from 'vitest'

import { render, screen } from '@testing-library/react'
import Reservations from './components/reservations/Reservations'

test('Render the Reservations headingElement', () => {
  render(<Reservations />)
  const headingElement = screen.getByText('Submit')
  expect(headingElement).toBeInTheDocument()
})  */

/* describe('Reserve a table', () => {
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
    render(Reservations)
    // Find the form element
    const form = screen.getByRole('form')
    // Simulate a form submission
    userEvent.submit(form)

    const dateInput = screen.getByLabelText(/Date/)
    userEvent.type(dateInput, { target: { value: date } })

    const timeInput = screen.getByLabelText(/Time/)
    userEvent.type(timeInput, { target: { value: time } })

    const numberOfDinersInput = screen.getByLabelText(/Number Of diners/)
    userEvent.type(numberOfDinersInput, {
      target: { value: numberOfDiners },
    })

    const occasionInput = screen.getByLabelText(/Occasion/)
    userEvent.type(occasionInput, { target: { value: occasion } })

    const nameInput = screen.getByLabelText(/Name/)
    userEvent.type(nameInput, { target: { value: name } })

    const lastNameInput = screen.getByLabelText(/Last Name/)
    userEvent.type(lastNameInput, { target: { value: lastName } })

    const emailInput = screen.getByLabelText(/Email/)
    userEvent.type(emailInput, { target: { value: email } })

    const phoneInput = screen.getByLabelText(/Phone/)
    userEvent.type(phoneInput, { target: { value: phone } })

    const passwordInput = screen.getByLabelText(/Password/)
    userEvent.type(passwordInput, { target: { value: password } })

    const usernameInput = screen.getByLabelText(/username/)
    userEvent.type(usernameInput, { target: { value: username } })

    const confirmInput = screen.getByLabelText(/Confirm password/)
    userEvent.type(confirmInput, { target: { value: confirm } })

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

  render(Reservations)
  // Find the form element
  const form = screen.getByRole('form')
  // Simulate a form submission
  userEvent.submit(form)
  const dateInput = screen.getByLabelText(/Date/)
  userEvent.type(dateInput, { target: { value: date } })

  const timeInput = screen.getByLabelText(/Time/)
  userEvent.type(timeInput, { target: { value: time } })

  const numberOfDinersInput = screen.getByLabelText(/Number Of diners/)
  userEvent.type(numberOfDinersInput, { target: { value: numberOfDiners } })

  const occasionInput = screen.getByLabelText(/Occasion/)
  userEvent.type(occasionInput, { target: { value: occasion } })

  const nameInput = screen.getByLabelText(/Name/)
  userEvent.type(nameInput, { target: { value: name } })

  const lastNameInput = screen.getByLabelText(/Last Name/)
  userEvent.type(lastNameInput, { target: { value: lastName } })

  const emailInput = screen.getByLabelText(/Email/)
  userEvent.type(emailInput, { target: { value: email } })

  const phoneInput = screen.getByLabelText(/Phone/)
  userEvent.type(phoneInput, { target: { value: phone } })

  const passwordInput = screen.getByLabelText(/Password/)
  userEvent.type(passwordInput, { target: { value: password } })

  const usernameInput = screen.getByLabelText(/username/)
  userEvent.type(usernameInput, { target: { value: username } })

  const confirmInput = screen.getByLabelText(/Confirm password/)
  userEvent.type(confirmInput, { target: { value: confirm } })

  const submitButton = screen.getByRole('button')
  userEvent.click(submitButton)

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
 */
