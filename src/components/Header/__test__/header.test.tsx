import React from 'react'
import { Header } from '../Header'
import { render, screen } from '@testing-library/react'

test('HeaderFooter renders', () => {
    render(<Header />)
    const header = screen.getByRole('banner')
    expect(header).toBeTruthy()
})
