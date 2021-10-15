import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Article } from '../Article'
import { render } from '@testing-library/react'

const props = { header: '', imgsrc: '', text: '', articleLinks: [''] }

test('Article renders', () => {
    const { getByTestId } = render(<Article {...props} />)
    const article = getByTestId('article')
    expect(article).toBeTruthy()
})
