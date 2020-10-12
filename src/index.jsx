import React, { Suspense } from 'react'
import { render } from 'react-dom'

const renderApp = () => (
  <Suspense fallback={<p>Loading</p>}>
    <p>
      Hello World
    </p>
  </Suspense>
)

render(renderApp(), document.getElementById('app'))
