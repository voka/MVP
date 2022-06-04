import React , { useState }from "react";
import styled from 'styled-components';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';


import TimeSelector from './TimeSelector';


export default function Filter(){
  const [title, setTitle] = useState<string>("선택지")
  return (
    <Quick_Filter>
      <Items>
      <DropdownButton as={ButtonGroup} title={title} id="bg-vertical-dropdown-1">
        <Dropdown.Item eventKey="1" onClick={(event: any)=>setTitle(event.target.innerText)}>걸어서</Dropdown.Item>
        <Dropdown.Item eventKey="2" onClick={(event: any)=>setTitle(event.target.innerText)}>차타고</Dropdown.Item>
        <Dropdown.Item eventKey="3" onClick={(event: any)=>setTitle(event.target.innerText)}>기차로</Dropdown.Item>
      </DropdownButton>
      <TimeSelector/>
      </Items>
    </Quick_Filter>
  )
}

const Quick_Filter = styled.div`
  margin : 15px;
  box-sizing:border-box;
`

const Items = styled.div`
  position: relative;
  width: 100%;
  align-items: center;
  height: 60px;
  display: flex;
  justify-content: space-between;
`