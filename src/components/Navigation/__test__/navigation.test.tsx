import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Navigation } from '../Navigation'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from '../../../App'

import {
    articleNavHeaders,
    articleNavHeadersEmpty,
} from '../../../utils/articleTestContent'

test('Navigation bar renders', () => {
    const { getByTestId } = render(
        <Router>
            <Navigation articleNavHeaders={articleNavHeaders} />
        </Router>
    )
    const navigationBar = getByTestId('navigation-bar')
    expect(navigationBar).toBeTruthy()
})

test('Navigation through buttons works', () => {
    const { getByTestId } = render(<App />)
    const navigationBar = getByTestId('navigation-bar')
    const screen = getByTestId('app')
    expect(navigationBar).toBeTruthy()
    expect(screen).toBeInTheDocument()

    const leftClick = { button: 0 }
    for (let i = 0; i < articleNavHeaders.length; i++) {
        const buttonText = articleNavHeaders[i].text
        const pageRef = articleNavHeaders[i].ref.substring(1)
        const navButton = getByTestId(buttonText)
        expect(navButton).toHaveTextContent(buttonText)
        userEvent.click(navButton, leftClick)
        expect(window.location.pathname).toEqual(pageRef)
    }
})

test('Navigation bar renders with empty nav headers', () => {
    const { getByTestId } = render(
        <Router>
            <Navigation articleNavHeaders={articleNavHeadersEmpty} />
        </Router>
    )
    const navigationBar = getByTestId('navigation-bar')
    expect(navigationBar).toBeTruthy()
})
