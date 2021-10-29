import React from 'react'
import { Footer } from '../Footer'
import { render, screen } from '@testing-library/react'

test('Footer renders', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeTruthy()
})
