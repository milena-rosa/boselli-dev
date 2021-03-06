import React from 'react'
import { SiJava, SiJavascript, SiPhp, SiTypescript } from 'react-icons/si'

interface IconProps {
  language: string
}

const Icon: React.FC<IconProps> = ({ language }) => {
  return (
    <span>
      {
        {
          Java: <SiJava color="#444750" size={24} />,
          JavaScript: <SiJavascript color="#444750" size={24} />,
          TypeScript: <SiTypescript color="#444750" size={24} />,
          PHP: <SiPhp color="#444750" size={24} />,
          Kotlin: <p>Kotlin</p>,
          'Objective-C': <p>Objective-C</p>
        }[language]
      }
    </span>
  )
}

export default Icon
