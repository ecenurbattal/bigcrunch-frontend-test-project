import React from 'react'
import { BackdropWrapper } from './Backdrop.styles'

const Backdrop = ({onClick}) => {
    return (
        <BackdropWrapper onClick={onClick}/>
    )
}

export default Backdrop
