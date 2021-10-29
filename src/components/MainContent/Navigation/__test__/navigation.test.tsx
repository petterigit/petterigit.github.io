import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Navigation } from '../Navigation'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from '../../../../App'

import { articleNavHeaders } from '../../../../static/articles/articleContent'

test('Navigation bar renders', () => {
    render(
        <Router>
            <Navigation articleNavHeaders={articleNavHeaders} />
        </Router>
    )
    const navigationBar = screen.getByRole('navigation')
    expect(navigationBar).toBeTruthy()
})

test('Navigation through buttons works', () => {
    const { getByTestId } = render(<App />)
    const navigationBar = screen.getByRole('navigation')
    const application = screen.getByRole('main')
    expect(navigationBar).toBeTruthy()
    expect(application).toBeInTheDocument()

    const leftClick = { button: 0 }
    for (let i = 0; i < articleNavHeaders.length; i++) {
        const buttonText = articleNavHeaders[i].text
        const pageRef = articleNavHeaders[i].ref
        const navButton = getByTestId(buttonText)
        expect(navButton).toHaveTextContent(buttonText)
        userEvent.click(navButton, leftClick)
        expect(window.location.hash).toEqual('#' + pageRef)
    }
})
