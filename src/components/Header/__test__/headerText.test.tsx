import React from 'react'
import { HeaderText } from '../HeaderText'
import { render, screen } from '@testing-library/react'

test('HeaderText renders', () => {
    render(<HeaderText />)
    const headerText = screen.getByTestId('headerText')
    expect(headerText).toBeTruthy()
})
