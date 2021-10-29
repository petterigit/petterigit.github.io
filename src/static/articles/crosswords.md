# Crosswords

Introducing Crosswords, the browser word game inspired by Scrabble! We play Scrabble with a few friends on a weekly basis. In the digital world, features such as word-checking, online-play, or getting your scrabble-skills mocked by an AI can be brought to life.

This project has been started with a TDD mentality. Project structure and first passed tests are now done! Take a look of the source code on
<a href="https://github.com/petterigit/crosswords" target="_blank" rel="noreferrer">GitHub</a>.

---

## TDD

Test Driven Developement has some drawbacks. Each line of code produced takes longer, it does not completetly remove the manual testing aspect in development, and testing coverage will never be 100%. The benefits come with long-term maintenance, and quicker developement process overall. While this site for example does not need rigorous unit tests to remain agile in it's developement process, a project such as Crosswords will benefit from the testing over time.

Here's some examples of testing done! More to come later.

```ts
test('GameModeButton takes in props', () => {
    const buttons = [
        { id: '1', text: 'Play Along' },
        { id: '2', text: 'Play Vs. A Bot' },
        { id: '3', text: 'Word Checker' },
    ]
    render(
        <div>
            {buttons.map((button) => (
                <GameModeButton text={button.text} key={button.id} />
            ))}
        </div>
    )

    const renderedButtons = screen.getAllByTitle('Game Mode Button')
    for (let i = 0; i < buttons.length; i++) {
        const buttonEl = renderedButtons[i]
        expect(buttonEl).toBeTruthy()
        expect(buttonEl.textContent).toBe(buttons[i].text)
    }
})
```

---

## ARIA Roles

Not only do ARIA roles make the outputted HTML more accessible, they also help with unnecessary cluttering in test queries. Check it out! You can learn more about ARIA roles on [MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles).

```ts
import React from 'react'
import './main-content.scss'

import { MainContentProps } from '../../types/propTypes'
import { GameModeContainer } from './GameModeContainer'

export const MainContent = ({ layoutStyle }: MainContentProps) => {
    return (
        <div className={`main-content ${layoutStyle}`} role="main">
            <GameModeContainer />
        </div>
    )
}
```

```ts
test('MainContent renders', () => {
    render(<MainContent />)
    const mainContent = screen.getByRole('main')
    expect(mainContent).toBeTruthy()
})
```
