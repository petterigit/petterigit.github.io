import React from 'react'
import { HeaderText } from '../HeaderText'
import { render } from '@testing-library/react'

test('HeaderText renders', () => {
    const { getByTestId } = render(<HeaderText />)
    const headerText = getByTestId('headerText')
    expect(headerText).toBeTruthy()
})
