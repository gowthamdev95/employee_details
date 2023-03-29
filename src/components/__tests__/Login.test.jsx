import Login from '../Login';
import { render, screen, fireEvent } from '@testing-library/react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

describe('Login component', () => {
  test('calls signInWithEmailAndPassword and navigates to /employee', () => {
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(jest.fn());

    const signInWithEmailAndPasswordMock = jest.fn();
    jest.spyOn(getAuth(), 'signInWithEmailAndPassword').mockImplementation(signInWithEmailAndPasswordMock);

    render(<Login />);
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(submitButton);

    expect(signInWithEmailAndPasswordMock).toHaveBeenCalledWith(getAuth(), 'test@test.com', 'password');

    useNavigate.mockReturnValue(navigateMock);
    navigateMock.mockReturnValue();
    expect(navigateMock).toHaveBeenCalledWith('/employee');
  });
});
