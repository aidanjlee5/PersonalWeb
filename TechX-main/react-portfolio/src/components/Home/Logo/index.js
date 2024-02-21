import { useEffect, useRef } from 'react'
//import { TouchableOpacity,Text, Image, View, StyleSheet } from 'react-native'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
/*import LogoS from '../../../assets/images/logo-s.png'*/
import Headshot from '../../../assets/images/AidanHeadshotCircle.png'
import TechLogo from '../../../assets/images/TechXLogo.png'
import UNCLogo from '../../../assets/images/UNCLogo.png'
import './index.scss'



const Logo = () => {
  const bgRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={TechLogo}
        alt="JavaScript,  Developer"
      />
    </div>
  )
}

export default Logo
