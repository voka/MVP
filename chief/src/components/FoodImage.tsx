import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Urls {
  imageUrl: string,
  mapUrl: string
}


export default function FoodImage(props : Urls){
  return (
    <BoxSizing>
      <Cell>
        <Image src={props.imageUrl} onClick = {() => window.open( `${props.mapUrl}`,"_blank")} >
        </Image>
        <WhiteSpace></WhiteSpace>
      </Cell>
    </BoxSizing>
  )
}

const BoxSizing = styled.div`
  box-sizing:border-box;
`

const Cell = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  background-color: rgb(244, 244, 244);
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  inset: 0px;
  cursor: pointer;
`

const WhiteSpace = styled.div`
  position: relative;
  height: 0px;
`