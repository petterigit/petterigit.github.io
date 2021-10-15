import React from 'react'
import { HeaderImage } from '../HeaderImage'
import { render } from '@testing-library/react'

test('HeaderImage renders', () => {
    const { getByTestId } = render(<HeaderImage />)
    const headerImage = getByTestId('headerImage')
    expect(headerImage).toBeTruthy()
})
