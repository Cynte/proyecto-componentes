import React from 'react'
import { Link } from 'react-router-dom'

const SchedulerBtn = () => {

  return (
    <Link to='/proyecto-componentes/trips' className='schedulerBtnWrapper' style={{ textDecoration: 'none', color: '#000000' }}>
        <button className='schedulerBtn'>Ver excursiones</button>
    </Link>
  )
}

export default SchedulerBtn