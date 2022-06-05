import React, {useState} from "react";
import styled from 'styled-components';
import ReactDom from "react-dom";
import moment from "moment";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";


export default function TimeSelector(){

  const [min, setState] = useState<moment.Moment>(moment(`{5}`,"mm"));
  return(
    <TimeZone>
      <StyledTimePicker
          value={min}
          showHour={false}
          showSecond={false}
          inputReadOnly={true}
          onChange={setState}
        /> 분
    </TimeZone>
  )
}


const TimeZone = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  margin-right: 18px;
`


const StyledTimePicker = styled(TimePicker)`
  & .rc-time-picker-panel-select-option-selected {
    background-color: #edeffe;
    font-weight: normal;
  }

  & .rc-time-picker-clear,
  & .rc-time-picker-clear-icon:after {
    font-size: 15px;
  }

  & .rc-time-picker-panel-select,
  & .rc-time-picker-input,
  & .rc-time-picker-panel-input {
    font-family: "Consolas", sans-serif;
    font-size: 16px;
    cursor: pointer;
    width: 70px;
    ::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  & .rc-time-picker-panel {
    width: 60px;
  }
  }
`;