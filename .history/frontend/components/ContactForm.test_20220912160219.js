import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

test('renders without errors', () => {
    render(<ContactForm />)
});

test('renders the contact form header', () => {
    render(<ContactForm />)
    const header = screen.getByText('Contact Form')

   expect(header).toHaveTextContent(/Contact Form/i);  
   
   expect(header).toBeInTheDocument();
   expect(header).toBeTruthy();
   expect(header).toHaveTextContent(/Contact Form/i)
});

test('renders ONE error message if user enters less then 5 characters into firstname.', async () => {
   render(<ContactForm />)
    
    const nameInput = screen.getByLabelText(/First Name*/i);
     userEvent.type(nameInput, "123")
     
     const errorMessageOne =  await screen.findAllByTestId("error")
     expect(errorMessageOne).toHaveLength(1);
  
     
});

test('renders THREE error messages if user enters no values into any fields.', async () => {
    render(<ContactForm />)

    const submitButton = screen.getByRole('button')
    userEvent.click(submitButton)

    const errorMessageTwo =  await screen.findAllByTestId("error")
     expect(errorMessageTwo).toHaveLength(3);
    
    
});

test('renders ONE error message if user enters a valid first name and last name but no email.', async () => {
    render(<ContactForm />)
    
    const nameInput = screen.getByLabelText(/First Name*/i);
    userEvent.type(nameInput, "Kolten")

    const lastInput = screen.getByLabelText(/Last Name*/i);
    userEvent.type(lastInput, "Bramall")

    const submitButton = screen.getByRole('button')
    userEvent.click(submitButton)
   
    const errorMessageThree =  await screen.findAllByTestId("error")
    expect(errorMessageThree).toHaveLength(1);


});

test('renders "email must be a valid email address" if an invalid email is entered', async () => {
    render(<ContactForm />)
    
    const emailInput = screen.getByLabelText(/Email*/i);
    userEvent.type(emailInput, "123")
    
    const errorMessageOne =  await screen.findAllByTestId("error")
    expect(errorMessageOne).toHaveLength(1);
});

test('renders "lastName is a required field" if an last name is not entered and the submit button is clicked', async () => {
    render(<ContactForm />)
    const nameInput = screen.getByLabelText(/First Name*/i);
    userEvent.type(nameInput, "Kolten")

    const emailInput = screen.getByLabelText(/Email*/i);
    userEvent.type(emailInput, "Kbramall11@gmail.com")

    const submitButton = screen.getByRole('button')
    userEvent.click(submitButton)
   
    const errorMessageThree =  await screen.findAllByTestId("error")
    expect(errorMessageThree).toHaveLength(1);
});

test('renders all firstName, lastName and email text when submitted. Does NOT render message if message is not submitted.', async () => {

});

test('renders all fields text when all fields are submitted.', async () => {

});
