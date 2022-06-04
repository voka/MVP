import styled from 'styled-components';
import { Link } from 'react-router-dom';
export default function Header(){
  return (
    <BoxSizing>
      <Bottomline>
        <Head>
          <Title>
            <Link to="/">Choice Food</Link>
          </Title>
        </Head>
      </Bottomline>
    </BoxSizing>
  )
}

const BoxSizing = styled.div`
  box-sizing:border-box;
  margin : 0px 10px;
`

const Bottomline = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(225, 225, 225, 0.65);
`

const Head = styled.div`
  position: relative;
  width: 100%;
  -webkit-box-align: center;
  align-items: center;
  height: 56px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
`

const Title = styled.div`
  width: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`

