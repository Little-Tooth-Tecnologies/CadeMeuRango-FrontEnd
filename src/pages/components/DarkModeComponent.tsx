import React, { useContext } from 'react'
import { GiMoon } from 'react-icons/gi'
import { BsSun } from 'react-icons/bs'
import { DarkModeContext } from '../../utils/context/DarkModeContext'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

function DarkModeComponent() {

  const { isDarkMode, toggleDarkMode} = useContext(DarkModeContext)
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const renderTooltip = (props: any) => (
        <Tooltip {...props}>
          Mudar para o modo {isDarkMode? 'claro' : 'escuro'}?
        </Tooltip>
      );


  return (
    <OverlayTrigger overlay={renderTooltip} placement='bottom'>
    <button className='absolute p-2 right-8 mt-2 bg-orange_primary rounded-full' onClick={toggleDarkMode}>
        {!isDarkMode ? <GiMoon className='text-2xl transition-all text-white'/> : <BsSun className='text-2xl transition-all text-white' />}
    </button>
    </OverlayTrigger>
  )
}

export default DarkModeComponent