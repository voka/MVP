import React , { useState}from "react";
import styled from 'styled-components';
import TimePicker, { TimePickerValue } from 'react-time-picker'


export default function TimeSelector(){

  const [value, setValue] = React.useState<TimePickerValue>(new Date());
  return(
    <TimeZone>
      <TimePicker value={value} onChange={setValue}>
      </TimePicker>
    </TimeZone>
  )
}


const TimeZone = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  margin-right: 18px;
`