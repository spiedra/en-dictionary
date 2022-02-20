import React from 'react'
import styled from 'styled-components'

const TestComponent = styled.div`
  align-items: center; 
  background-color: aliceblue; 
  display: flex; 
  flex-direction: column;
  justify-content: center;
`

function App () {
  return (
    <>
      <main>
        <TestComponent>
          <h1>First commit</h1>
        </TestComponent>
      </main>
    </>
  )
}

export default App
