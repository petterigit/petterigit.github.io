# About this site

---

GitHub  
<a href="https://github.com/petterigit/petterigit.github.io" target="_blank">Website Git Link</a>

<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> ![Typescript](./articleElements/ts-logo-128.svg 'Typescript')</a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"> ![React](./articleElements/react-logo-128.png 'React')</a>
<a href="https://jestjs.io/" target="_blank" rel="noreferrer"> ![Jest](./articleElements/jest-logo-128.png 'Jest')</a>
<a href="https://sass-lang.com/" target="_blank" rel="noreferrer"> ![Sass](./articleElements/sass-logo-128.png 'Sass')</a>
<a href="https://threejs.org/" target="_blank" rel="noreferrer"> ![ThreeJS](./articleElements/threejs-logo-128.png 'ThreeJS')</a>
<a href="https://www.blender.org/" target="_blank" rel="noreferrer"> ![Blender](./articleElements/blender-logo-128.svg 'Blender')</a>

---

## First things first, the koala bear!

Yep, it's a koala. I made it myself on Blender! This includes both creating the model from basic shapes, texturing it with proper colours, rigging it to have a bone structure, and finally animating it. Blender conveniently exports the model as a GLB - this can further be loaded with threeJS.

![Blender Koala](./articleElements/vilperiModelBlender-256.png)
![ThreeJS Koala](./articleElements/threeJSTweak-256.png)

## React Project

This app was created with Create React App & the TypeScript template. Everything, aside from the MarkDown articles & a JavaScript WebGL boilerplate code, has been created with TS. Styles have been made with SASS, and close to everything has been self-built on top of normalize.css. Here's a few code examples!

---

### _navigationbar.scss_

```scss
@use '../../../styles/colors' as *;
@use '../../../styles/fonts' as *;

.navigation-bar {
    /* Layout */
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: $background-color-editor-nav;
    padding-left: 2em;
    padding-right: 2em;

    ul {
        flex-basis: 100%;
        display: flex;
        flex-direction: row;
        align-content: center;
    }
    li {
        flex: 1 1 none;
        text-align: center;
        cursor: pointer;
        border-right: 1px solid $black;
    }
    li:last-child {
        border-right: none;
    }
    li:hover {
        background-color: $background-color-editor-nav-hover;
    }
    a {
        font-size: $font-size-navigation-bar;
        text-transform: uppercase;
        text-decoration: none;

        display: inline-block;
        padding: 0.5em;
    }
    :visited {
        color: $font-color-primary;
    }
    :link {
        color: $font-color-primary;
    }
}
```

---

### _Navigation.tsx_

```tsx
import React from 'react'
import './navigationbar.scss'
import { HeaderProps } from '../../../types/propTypes'

import { Link } from 'react-router-dom'

export const Navigation = ({ articleNavHeaders }: HeaderProps) => {
    return (
        <nav className="navigation-bar" data-testid="navigation-bar">
            {articleNavHeaders && (
                <ul>
                    {articleNavHeaders.map((header, i) => (
                        <li key={i}>
                            <Link to={header.ref} data-testid={header.text}>
                                {header.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    )
}
```

---

## Articles as MD files

If you are familiar with MarkDown, you can probably see it already in this article. Perhaps it just seems familiar somehow. Whatever the case: Yes, it is MarkDown, used in for example GitHub readme files. With MarkDown, the contents can be written in a pre-defined format that has been created for writing content, instead of bunching together HTML elements.

---

## CI/CD

This project contains separate branches for development, master, and build.

The CI/CD process of the site is roughly as follows:

1. Changes are made into the development branch
    - Every commit made into the branch is tested through GitHub actions. The application can also be tested locally through npm & react-jest
2. Pull requests are created against the master branch whenever a new version is ready
    - Application is further tested with all new features
3. A new pull request triggers a build into gh-pages branch
    - GitHub Actions provides a module that enables this through npm & react-scripts
4. New version is available online within seconds of accepted pull request
    - Essentially, the CI/CD line allows Test-Driven-Development with an arbitary number of collaborators
