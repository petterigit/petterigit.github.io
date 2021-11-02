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

## Accessibility through ARIA roles

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

---

## Refs for tracking React components

For the time being, I am quite proud of the solution below. Using React refs, it's possible to create mouse listeners that listen to react components accurately. The component below creates a dropdown menu, that when clicked displays the dropdown. When user clicks outside of the dropdown, it closes. Extra points for being generic through prop children!

```ts
import React from 'react'
import { HeaderMenuProps, HeaderDropDownMenuProps } from '../../types/propTypes'
import { useState, useEffect, useRef } from 'react'

import './header.scss'

export const HeaderMenu = ({ title, children }: HeaderMenuProps) => {
    const [dropdownVisibility, setDropdownVisibility] = useState(false)

    const dropdownRef = useRef<HTMLUListElement>(null)
    CreateDropdownListener(
        dropdownRef,
        dropdownVisibility,
        setDropdownVisibility
    )

    return (
        <li>
            <button
                aria-haspopup="true"
                className="header-menu-button"
                title={title}
                onClick={() => setDropdownVisibility(!dropdownVisibility)}
            >
                {title}
            </button>
            {dropdownVisibility && (
                <HeaderDropDownMenu
                    ref={dropdownRef}
                    title={`${title} Dropdown`}
                >
                    {children}
                </HeaderDropDownMenu>
            )}
        </li>
    )
}

const HeaderDropDownMenu = React.forwardRef<
    HTMLUListElement,
    HeaderDropDownMenuProps
>(({ title, children }, ref) => (
    <ul ref={ref} className="header-menu-drop" role="menu" title={title}>
        {children}
    </ul>
))

const CreateDropdownListener = (
    dropdownRef: React.RefObject<HTMLUListElement>,
    dropdownVisibility: boolean,
    setDropdownVisibility: React.Dispatch<React.SetStateAction<boolean>>
) => {
    /* Using Refs to handle eventListener for clicks outside of dropdown menu */

    useEffect(() => {
        // Create eventListener Callback
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setDropdownVisibility(!dropdownVisibility)
            }
        }

        // Bind callback function
        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            // Cleanup callback function when unmounting component
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [dropdownRef, dropdownVisibility, setDropdownVisibility])
}
```
