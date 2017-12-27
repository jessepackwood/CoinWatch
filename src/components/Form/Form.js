import React from 'react'

const Form = ({email, password, inputChange, submit, error}) => {
  return (
    <div className='login'>
      <input type='text' name='email' className='email-input' value={email} onChange={inputChange} />
      <input type='text' name='password' className='password-input'value={password} onChange={inputChange} />
      {!!error && 
        <p>{error}</p>
      }
      <input type='submit' className='btn-submit' onClick={submit} />
    </div>
    )
}

export default Form;