import React , { useState}from "react";
import styled from 'styled-components';
import TimePicker from 'react-time-picker'
import NumberPicker from "react-widgets/NumberPicker";


export default function TimeSelector(){

  const [value, setValue] = useState<string>('05:00');
  return(
    <NumberPick>
      <TimePicker value={value} onChange={setValue}>
      </TimePicker>
    </NumberPick>
  )
}


const NumberPick = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  margin-right: 18px;
`