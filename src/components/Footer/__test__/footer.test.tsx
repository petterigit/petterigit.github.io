import React from 'react'
import { Footer } from '../Footer'
import { render } from '@testing-library/react'

test('Footer renders', () => {
    const { getByTestId } = render(<Footer />)
    const footer = getByTestId('footer')
    expect(footer).toBeTruthy()
})
