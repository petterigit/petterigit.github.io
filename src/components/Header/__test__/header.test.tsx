import React from 'react'
import { Header } from '../Header'
import { render } from '@testing-library/react'

test('HeaderFooter renders', () => {
    const { getByTestId } = render(<Header />)
    const header = getByTestId('header')
    expect(header).toBeTruthy()
})
