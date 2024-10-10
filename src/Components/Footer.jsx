import { useState } from 'react'
const Footer = () => {
  const [data, setData] = useState({ email: '', name: '', surname: '' })

  function handleFromSubmit(e) {
    e.preventDefault()
  }

  function handleInputChange(e, key) {
    setData({ ...data, [key]: e.target.value })
  }

  return (
    <div className='footer'>
      <h1>Fill in form to contact us!</h1>
      <form className='formSubmit' onSubmit={handleFromSubmit}>
        <label>
          Email:
          <input
            type='email'
            value={data.email}
            onChange={(e) => handleInputChange(e, 'email')}
          />
        </label>
        <label>
          Name:
          <input
            type='text'
            value={data.name}
            onChange={(e) => handleInputChange(e, 'name')}
          />
        </label>
        <label>
          Surname:
          <input
            type='text'
            value={data.surname}
            onChange={(e) => handleInputChange(e, 'surname')}
          />
        </label>
      </form>
      <button type='submit' title='Submit' className='submitButton'>
        Submit
      </button>
    </div>
  )
}

export default Footer
