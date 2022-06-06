
import { useState }from "react";
import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal'

import {FoodInfo} from '../Data/Foods'

export default function FoodImage({food} : {food:FoodInfo}){
  const [lgShow, setLgShow] = useState(false);
  return (
    <BoxSizing>
      <Cell>
        <Image src={food.imgUrl} onClick={() => setLgShow(true)}>
        </Image>
        <WhiteSpace></WhiteSpace>
      </Cell>
    <StyledModal
      show={lgShow}
      onHide={() => setLgShow(false)}
      dialogClassName="modal-100w"
      aria-labelledby="contained-modal-title-vcenter"
    >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <MapLink onClick={() => window.open(`${food.mapUrl}`, "_blank")}>
              지도에서
            </MapLink>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </StyledModal>
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

const StyledModal = styled(Modal)`
  .modal{
    bottom:0;
  }
`

const MapLink = styled.text
`
text-align:right;
text-decoration: none;
font-weight: bold;
font-size: 20px;
cursor:pointer`