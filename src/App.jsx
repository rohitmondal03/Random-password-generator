import React, { useRef, useState, useEffect } from 'react'


import "./App.css"


// RANDOM PASSWORD GENERATOR
import randomExt from 'random-ext'

// MATERIAL UI
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

// FRAMER-MOTION
import { motion } from 'framer-motion'

// COMPONENTS
import ProgressDemo from './components/ProgressBar'



const App = () => {
  const passwordTextRef = useRef();
  const emailTextRef = useRef();
  const submitBtnRef = useRef();
  const copyBtn = useRef();

  // FOR CHECKING THE CONDITIONS
  const uppercaseCheck = useRef();
  const numericCheck = useRef();
  const specialCharCheck = useRef();
  const passwordLengthCheck = useRef();

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [progressBarLength, setProgressBarLength] = useState(0)
  const [progressBarBackgroundColor, setProgressBarBackgroundColor] = useState('red')
  const [submitButtonActive, setSubmitButtonActive] = useState(false)


  // LIST ITEMS FOR CHECKING PASSWORD CONDITIONS 
  const listItems = [
    {
      id: 1,
      item: 'Should contain atleast one uppercase letter.',
      ref: uppercaseCheck
    },
    {
      id: 2,
      item: 'Should contain atleast one or more number.',
      ref: numericCheck
    },
    {
      id: 3,
      item: 'Should contain atleast one or more special chars',
      ref: specialCharCheck
    },
    {
      id: 4,
      item: 'Should have greater that 10 characters.',
      ref: passwordLengthCheck
    },
  ]



  useEffect(() => {
    const passwordLengthInstance = passwordTextRef.current.value.length

    if (passwordLengthInstance === 0) {
      setProgressBarLength(0)
      setProgressBarBackgroundColor('red')
    }
    else if (passwordLengthInstance > 0 && passwordLengthInstance <= 2) {
      setProgressBarLength(16.66666666)
      setProgressBarBackgroundColor('red')
    }
    else if (passwordLengthInstance > 2 && passwordLengthInstance <= 4) {
      setProgressBarLength(33.33333333)
      setProgressBarBackgroundColor('rgb(221, 221, 0)')
    }
    else if (passwordLengthInstance > 4 && passwordLengthInstance <= 6) {
      setProgressBarLength(50)
      setProgressBarBackgroundColor('rgb(221, 221, 0)')
    }
    else if (passwordLengthInstance > 6 && passwordLengthInstance <= 8) {
      setProgressBarLength(66.66666666)
      setProgressBarBackgroundColor('rgb(138, 230, 0)')
    }
    else if (passwordLengthInstance > 8 && passwordLengthInstance <= 9) {
      setProgressBarLength(83.33333333)
      setProgressBarBackgroundColor('rgb(138, 200, 0)')
    }
    else if (passwordLengthInstance >= 10) {
      setProgressBarLength(100)
      setProgressBarBackgroundColor('rgb(0, 200, 0)')
    }
  }, [password])



  useEffect(function () {
    // uppercaseCheck
    passwordTextRef.current.value.match(/[A-Z]/)
      ? uppercaseCheck.current.classList.add('text-emerald-500', 'font-bold', 'text-lg')
      : uppercaseCheck.current.classList.remove('text-emerald-500', 'font-bold', 'text-lg')

    // numericCheck
    passwordTextRef.current.value.match(/[0-9]/)
      ? numericCheck.current.classList.add('text-emerald-500', 'font-bold', 'text-lg')
      : numericCheck.current.classList.remove('text-emerald-500', 'font-bold', 'text-lg')

    // specialCharCheck
    passwordTextRef.current.value.match(/[!, @, #, $, %, ^, &, *]/)
      ? specialCharCheck.current.classList.add('text-emerald-500', 'font-bold', 'text-lg')
      : specialCharCheck.current.classList.remove('text-emerald-500', 'font-bold', 'text-lg')

    // passwordLengthCheck
    passwordTextRef.current.value.length >= 10
      ? passwordLengthCheck.current.classList.add('text-emerald-500', 'font-bold', 'text-lg')
      : passwordLengthCheck.current.classList.remove('text-emerald-500', 'font-bold', 'text-lg')
  }, [password])



  useEffect(() => {
    const passwordLengthInstance = passwordTextRef.current.value.length
    const passwordSpecialCharChk = passwordTextRef.current.value.match(/[!, @, #, $, %, ^, &, *]/)
    const passwordNumericChk = passwordTextRef.current.value.match(/[0-9]/)
    const passwordUpperCaseChk = passwordTextRef.current.value.match(/[A-Z]/)


    if (passwordLengthInstance >= 10 && passwordSpecialCharChk && passwordNumericChk && passwordUpperCaseChk) {
      setSubmitButtonActive(true)
    } else {
      setSubmitButtonActive(false);
    }

    submitButtonActive ? "" : submitBtnRef.current.disabled = true;
  }, [submitButtonActive, password, email])


  function generateRandomPassword() {
    var randomPass = randomExt.restrictedString(
      [randomExt.CHAR_TYPE.LOWERCASE, randomExt.CHAR_TYPE.NUMERIC, randomExt.CHAR_TYPE.UPPERCASE, randomExt.CHAR_TYPE.SPECIAL],
      20,
      10
    )
    setPassword(randomPass);  // having the random in password field.

    copyBtn.current.classList.remove('hidden')
  }

  function handleClick() {
    console.log('heheheh');
  }


  return (
    <>
      <div className='h-screen w-full relative'>
        <div className='p-[5rem] rounded-lg bg-pink-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-pink-500'>

          <h1 className='font-bold text-4xl text-center text-cyan-400 underline'>Random password generator</h1>

          <form
            className='mt-10 flex flex-col'
          >

            {/* --- INPUT FIELDS --- */}

            <input
              className='border-2 border-red-400 px-6 py-1 rounded-lg my-2 placeholder:text-zinc-400'
              placeholder="e.g. example@gmail.com"
              type='text'
              ref={emailTextRef}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />

            <div className='flex flex-row items-center justify-center gap-4'>
              <input
                className='border-2 border-red-400 px-6 py-1 rounded-lg my-2 placeholder:text-zinc-400'
                placeholder='password'
                type='password'
                ref={passwordTextRef}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />

              <div
                className='hidden cursor-pointer transition duration-300 active:scale-95 hover:scale-110'
                ref={copyBtn}
                onClick={() => {
                  navigator.clipboard.writeText(password)
                }}
              >
                <ContentCopyIcon
                  fontSize='large'
                  className='bg-blue-500 p-2 rounded-lg'
                />
              </div>
            </div>

            {submitButtonActive && (
              <motion.p
                className='text-center text-xl font-semibold mt-2 text-yellow-400 underline'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .5 }}
              >
                Now you can submit !!!
              </motion.p>
            )}



            {/* --- STRENGTH SECTION --- */}

            <div className='mb-10 mt-8'>
              <h1 className='text-2xl font-medium text-white px-2 transition duration-500'>
                {submitButtonActive ? 'Satisfied...' : 'Password Conditions:'}
              </h1>

              <ul className='my-2 list-decimal'>
                {listItems.map((item => (
                  <li
                    key={item.id}
                    ref={item.ref}
                    className='duration-500 '
                  >
                    {item.item}
                  </li>
                )))}
              </ul>

              <ProgressDemo
                progressBarLength={progressBarLength}
                progressBarBackgroundColor={progressBarBackgroundColor}
              />
            </div>


            {/* --- BUTTONS --- */}

            <div className='mx-auto flex flex-col justify-center items-center'>
              <button
                text='Submit'
                type='submit'
                className={`px-5 py-2 rounded-lg font-bold text-zinc-200 mb-2 transition duration-500 ease-out ${submitButtonActive ? 'bg-blue-700 hover:scale-110 active:scale-95 cursor-pointer' : 'bg-red-700 cursor-not-allowed'}`}
                ref={submitBtnRef}
              >
                Submit
              </button>

              <button
                text="Generate random password"
                type='button'
                className='px-5 py-1 rounded-lg bg-pink-200 font-bold text-black'
                onClick={generateRandomPassword}
              >
                Generate random password
              </button>
            </div>

          </form>

        </div>
      </div>
    </>
  )
}



export default App