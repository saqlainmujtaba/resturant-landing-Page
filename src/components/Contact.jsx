import React from 'react'

const Contact = () => {
  return (
    <>
     <section id="contact">
      <div className="contact-container container">
        <div className="contact-img">
          <img
            decoding="async"
            src="https://plus.unsplash.com/premium_photo-1661772253149-48ec033cf4b7?w=500&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGluZGlhbiUyMGZvb2QlMjBnaXJsc3xlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
        </div>

        <div className="form-container">
          <h2>Contact Us</h2>

          <textarea cols="30" rows="6" placeholder="Write your opinion here ..."></textarea>
          <a href="#" className="btn btn-primary">Submit</a>
        </div>
      </div>
    </section>   
    </>
  )
}

export default Contact