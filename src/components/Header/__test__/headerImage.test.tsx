import React from 'react'
import { HeaderImage } from '../HeaderImage'
import { render, screen } from '@testing-library/react'

test('HeaderImage renders', () => {
    render(<HeaderImage />)
    const headerImage = screen.getByTestId('headerImage')
    expect(headerImage).toBeTruthy()
})
