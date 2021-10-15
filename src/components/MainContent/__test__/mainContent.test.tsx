import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { MainContent } from '../MainContent'
import { render } from '@testing-library/react'

test('MainContent renders', () => {
    const { getByTestId } = render(
        <Router>
            <MainContent />
        </Router>
    )
    const mainContent = getByTestId('mainContent')
    expect(mainContent).toBeTruthy()
})
