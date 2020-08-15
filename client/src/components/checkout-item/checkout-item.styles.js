import styled from 'styled-components'

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  
  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`

export const TextContainer = styled.span`
  width: 23%;

  @media screen and (max-width: 800px) {
    width: 22%;
  }
`

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`

export const QuantityContainer = styled(TextContainer)`
  display: flex;

  span {
    margin: 0 10px;
  }

  div {
    cursor: pointer;
  }
`

export const RemoveButtonContainer = styled.span`
  padding-left: 33px;
  cursor: pointer;
`

RemoveButtonContainer.displayName = 'RemoveButtonContainer'

export const MinusSignContainer = styled.div`
  font-size: 15px;
`

MinusSignContainer.displayName = 'MinusSignContainer'

export const PlusSignContainer = styled.div`
  font-size: 15px;
`

PlusSignContainer.displayName = 'PlusSignContainer'