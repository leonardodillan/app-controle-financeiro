import React from 'react'

import './ResumeItem.scss'

export default function ResumeItem({ title, Icon, value }) {
  return (
    <div className='resumeItem'>
        <div className="header">
            <p>{title}</p>
            <Icon />
        </div>
        <span>{value}</span>
    </div>
  )
}
