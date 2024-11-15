import React, { useState, useEffect } from 'react'
import axios from 'axios' // Make sure to import axios
import './Btnform.css'

const Btnform = ({ onClose }) => {
  const [isSent, setIsSent] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
  })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX
      const y = e.clientY

      const middleX = window.innerWidth / 2
      const middleY = window.innerHeight / 2

      const offsetX = ((x - middleX) / middleX) * 10
      const offsetY = ((y - middleY) / middleY) * 10

      document
        .querySelector('.BtnContact')
        .style.setProperty('--rotateX', -1 * offsetY + 'deg')
      document
        .querySelector('.BtnContact')
        .style.setProperty('--rotateY', offsetX + 'deg')
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const validate = () => {
    const newErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email || !emailPattern.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    // Contact number validation (10 digits, starting with 7, 8, or 9)
    const contactPattern = /^[789]\d{9}$/
    if (!formData.contact || !contactPattern.test(formData.contact)) {
      newErrors.contact = 'Please enter a valid 10-digit Indian mobile number'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0 // Return true if no errors
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formValues = {
      name: formData.name,
      email: formData.email,
      contact: formData.contact,
    }

    try {
      const response = await axios.post(
        'https://serverbackend-0nvg.onrender.com/api/submit',
        formValues
      )
      console.log('Form Submitted:', response.data)
      alert('Form submitted successfully!')
      onClose()

      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        contact: '',
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('An error occurred while submitting the form.')
    }
  }

  return (
    <div className="BtnSuperContainer">
      <div className={`BtnContainer BtnContact ${isSent ? 'BtnSent' : ''}`}>
        <button onClick={onClose} className="BtnClose">
          X
        </button>
        <span className="BtnMail"></span>
        <span className="BtnHidden">Thank you so much! 😊</span>
        <div className="BtnTopHeading">
          <h1>Get in Touch with Our Team</h1>
        </div>
        <form className="BtnContactForm" onSubmit={handleSubmit}>
          <div className="BtnBlock">
            <div className="BtnField BtnContactName">
              <label>Your Name</label>
              <input
                className="Btncntip name-input"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="BtnField BtnContactEmail">
              <label>Your E-mail</label>
              <input
                className="Btncntip email-input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
          </div>
          <div className="BtnField BtnContact">
            <label>Contact No.</label>
            <input
              className="Btncntip contact-input"
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
            />
            {errors.contact && <span className="error">{errors.contact}</span>}
          </div>
          <div className="BtnButtonContainer">
            <button className="BtnSend" type="submit">
              Send
            </button>
            <button
              type="reset"
              onClick={() => setFormData({ name: '', email: '', contact: '' })}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Btnform
