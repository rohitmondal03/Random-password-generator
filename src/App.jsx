import React, { useRef, useState, useEffect } from 'react'
import "./App.css"

// COMPONENTS
import ProgressDemo from './components/ProgressBar'


const App = () => {
  const passwordTextRef = useRef();
  const emailTextRef = useRef();
  const uppercaseCheck = useRef();
  const numericCheck = useRef();
  const specialCharCheck = useRef();

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    console.log(password);
  }, [password])

  return (
    <div className='h-screen w-full relative'>
      <div className='p-10 rounded-lg bg-pink-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-pink-500'>

        <h1 className='font-bold text-3xl text-center'>Random password generator</h1>

        <form className='mt-10 flex flex-col'>

          {/* --- INPUT FIELDS --- */}
          <input
            className='border-2 border-red-400 px-6 py-1 rounded-lg my-2 placeholder:text-black'
            placeholder="Enter your email"
            type='text'
            ref={emailTextRef}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />

          <input
            className='border-2 border-red-400 px-6 py-1 rounded-lg my-2 placeholder:text-black'
            placeholder="Enter your password"
            type='password'
            ref={passwordTextRef}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />

          {/* --- STRENGTH SECTION --- */}
          <div className='mb-10 mt-2'>
            <h1 className='text-lg font-medium text-rose-700'>Password Strength:</h1>
            <ul className='mt-2 mb-6 list-decimal'>
              <li
                ref={uppercaseCheck}
              >
                Should contain atleast one uppercase letter.
              </li>

              <li
                ref={numericCheck}
              >
                Should contain atleast one or more number.
              </li>

              <li
                ref={specialCharCheck}
              >
                Should contain atleast one or more special chars. ( * , / , ^ , & , $ , @ )
              </li>
            </ul>
            <ProgressDemo />
          </div>

          {/* --- BUTTONS --- */}
          <div className='mt-3 mx-auto flex flex-col justify-center items-center'>
            <button
              text='Submit'
              type='submit'
              className='px-5 py-1 rounded-lg bg-pink-600 text-white my-1'
            >
              Submit
            </button>

            <button
              text="Generate random password"
              type='button'
              className='px-5 py-1 rounded-lg bg-pink-600 text-white my-1'
            >
              Generate random password
            </button>
          </div>

        </form>

      </div>
    </div>
  )
}



const Button = (props) => {
  return (
    <button
      className='px-5 py-1 rounded-lg bg-pink-600 text-white my-1'
      type={props.type}
    >
      {props.text}
    </button>
  )
}


export default App