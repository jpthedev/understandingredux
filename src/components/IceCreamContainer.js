import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { buyIceCream } from '../redux'
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: palevioletred;
  color: ${props => (props.primary ? 'violet' : 'palevioletred')};
  border: ${props =>
    props.primary ? '2px solid violet' : '2px solid palevioletred'};
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    color: white;
    background-color: ${props =>
      props.primary ? 'violet' : 'palevioletred'};
  }
`;
const GreenButton = styled(Button)`
  background-color: white;
  color: green;
  border-color: green;
`;

const MainWrapper = styled.div`
  color: yellow;
  font-family: 'sans-serif',
  font-size: 12px;
`;


function IceCreamContainer() {

    const numOfCount = useSelector(state => state.iceCream.numOfCounts);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Num of IceCream: {numOfCount}</h2>
            <Button onClick={() => dispatch(buyIceCream())}>Buy IceCream</Button>
            <Button>I am a  3rd button</Button>
            <Button primary>I am a Primary Button</Button>
            <GreenButton primary>I am a Secondary Button</GreenButton>
        </div>
    )
}

export default IceCreamContainer