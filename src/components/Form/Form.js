import React from 'react'
import PropTypes from 'prop-types'

const Form = ({email, password, inputChange, submit, error }) => {
  return (
    <div className='login-form'>
      <input 
        type='text'
        name='email'
        className='input-field'
        placeholder='Email'
        value={email || ''}
        onChange={inputChange} 
      />
      <input 
        type='password'
        name='password'
        className='input-field'
        placeholder='Password'
        value={password || ''} 
        onChange={inputChange} 
      />
      {!!error && 
        <p>{error}</p>
      }
      <input type='submit' className='btn-submit' onClick={submit} />
    </div>
  )
}

Form.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  inputChange: PropTypes.func,
  submit: PropTypes.func,
  error: PropTypes.string
}

export default Form;