import styled from 'styled-components'

const GameBoxWrapper = styled.div`
	display: flex;
  flex-direction: column;
	min-height: 100vh;
  align-items: center;
  justify-content: space-between;
  
  .game-footer{
    width: 100%;
    border-top: 2px solid #E5E5E5;
    text-align: center;
  }
`
export default GameBoxWrapper;