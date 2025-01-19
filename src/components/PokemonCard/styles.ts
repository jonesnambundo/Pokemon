import styled from 'styled-components'

export const Card = styled.div`
  width: 280px;
  height: 304px;
  border-radius: 12px;
  background-color: #f9f9f9;
  box-shadow: 0 1px 4px rgba(136, 56, 56, 0.44);
`

export const PokemonImage = styled.div`
  width: 280px;
  height: 208px;
  background-color: #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 28px;
  padding-top: 19px;
`
export const InfoItem = styled.div`
  flex: 1;
  font-size: 14px;
  color: #666;
`
