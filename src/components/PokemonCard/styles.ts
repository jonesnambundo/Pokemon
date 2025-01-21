import styled from 'styled-components'
import { cores } from '../../styles'

export const CardContainer = styled.div`
  transition: all 0.7s;
  width: 280px;
  height: 304px;
  border-radius: 12px;
  overflow: hidden;
  text-align: center;
  background-color: ${cores.branca};
  box-shadow: 0 1px 4px rgba(136, 56, 56, 0.44);

  img {
    width: 80%;
    height: 200px;
    object-fit: cover;
  }

  h2 {
    margin: 8px 0;
    font-size: 18px;
    line-height: 27px;
    font-weight: 600;
  }

  p {
    font-size: 13px;
    color: ${cores.cinzaclaro};
    margin-bottom: 8px;
    font-weight: 500;
    line-height: 19px;
  }
`
