const Footer = () => {
  return (
    <div className='footer'>
      <h1>Fill in form to contact us!</h1>
      <form>
        <label>
          Email:
          <input type='email' />
        </label>
        <label>
          Name:
          <input type='text' />
        </label>
        <label>
          Surname:
          <input type='text' />
        </label>
      </form>
    </div>
  )
}

export default Footer
