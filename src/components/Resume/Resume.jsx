import React from 'react'
import './Resume.scss'
import ResumeItem from '../ResumeItem/ResumeItem'
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign } from "react-icons/fa"

export default function Resume({ income, expense, total }) {
  return (
    <div>
        <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={income} />
        <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense}  />
        <ResumeItem title="Total" Icon={FaDollarSign} value={total} />
    </div>
  )
}
