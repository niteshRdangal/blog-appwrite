import React from 'react'
import Navbar from '../components/Navbar'

function about() {
  return (
    <>
    <Navbar></Navbar>
    <div className="container mx-auto py-6">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="text-gray-600 mb-6">
            Welcome to our blog! We are passionate about sharing insightful and engaging content with our readers. Our goal is to provide you with valuable information, inspiration, and practical tips on a variety of topics.
          </p>
          <p className="text-gray-600 mb-6">
            At our blog, you'll find articles on a wide range of subjects, including technology, lifestyle, travel, health, and much more. We strive to deliver well-researched and well-crafted content that adds value to your life and keeps you informed and entertained.
          </p>
          <p className="text-gray-600 mb-6">
            Our team of experienced writers is dedicated to producing high-quality articles that resonate with our audience. We believe in the power of storytelling and aim to create compelling narratives that captivate and inspire.
          </p>
          <p className="text-gray-600 mb-6">
            Thank you for visiting our blog. We hope you enjoy exploring our content and find it valuable. If you have any questions, suggestions, or feedback, please don't hesitate to get in touch. We would love to hear from you!
          </p>
        </div>
      </div>
      </>
  )
}

export default about