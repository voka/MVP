import styled from 'styled-components';


import {FoodInfos} from '../Data/Foods';
import Header from '../components/Header';
import Filter from '../components/Filter';
import FoodImage from '../components/FoodImage';


export default function Homepage(){
  return (
    <BoxSizing>
      <Header/>
      <Filter/>
      <Grid>
        {FoodInfos.map((food,i)=>{
          return (<FoodImage food={food} key={i}/>);
        })}
      </Grid>
    </BoxSizing>
  )
}




const BoxSizing = styled.div`
  height: 100%;
  width: 100%;
  box-sizing:border-box;
  max-width: 650px !important;
  margin: 0px auto !important;
  float: none !important;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0px, 1fr));
  gap: 2px;
`

