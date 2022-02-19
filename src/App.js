import React from 'react'
import styled from 'styled-components'

const TestComponent = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: center;
  background-color: aliceblue;
`

function App () {
  return (
    <>
      <TestComponent>
        <h1>First commit</h1>
      </TestComponent>
    </>
  )
}

export default App
