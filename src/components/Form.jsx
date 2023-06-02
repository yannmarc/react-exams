import React from 'react'

const Form = () => {
  return (
    <main>
      <div className="container">
        <form action=" ">
          <div className="form-group">
            <h1>2<sup>nd</sup>  Semester Sign Up</h1>
          </div>
          <div className="form-group">
            <label htmlFor=""></label>
            <input type="email" placeholder='youremail@domain.com'/>
          </div>
          <div className="form-group">
            <label htmlFor=""></label>
            <input type="email" placeholder='youremail@domain.com'/>
          </div>
          <div className="form-group">
            <button type="submit">sign up</button>
          </div>
          <span></span>
        </form>
      </div>
    </main>
  )
}

export default Form