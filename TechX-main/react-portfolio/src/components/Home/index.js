import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
/*import LogoTitle from '../../assets/images/logo-s.png'*/
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['A','i', 'd', 'a', 'n', '', 'L', 'e', 'e']
  const jobArray = [
    'C',
    'S',
    '',
    's',
    't',
    'u',
    'd',
    'e',
    'n',
    't',
  ]

  useEffect(() => { /*Hover effect*/
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            
            <img
              /*src={LogoTitle} Use your own logo here
              alt="JavaScript Developer Name, Web Developer Name"*/
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={16}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>UNC Chapel Hill Student / TechX Pledge / Aspiring CS Student</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="ball-triangle-path" />
    </>
  )
}

export default Home