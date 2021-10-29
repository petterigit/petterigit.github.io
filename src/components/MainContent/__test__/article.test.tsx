import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Article } from '../Article'
import { render, screen } from '@testing-library/react'

const props = { mdFile: '' }

test('Article renders', () => {
    render(<Article {...props} />)
    const article = screen.getByRole('article')
    expect(article).toBeTruthy()
})
