# About this site

GitHub  
<a href="https://github.com/petterigit/petterigit.github.io" target="_blank">Website Git Link</a>

<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> ![Typescript](../articleElements/ts-logo-128.svg 'Typescript')</a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"> ![React](../articleElements/react-logo-128.png 'React')</a>
<a href="https://sass-lang.com/" target="_blank" rel="noreferrer"> ![Sass](../articleElements/sass-logo-128.png 'Sass')</a>
<a href="https://threejs.org/" target="_blank" rel="noreferrer"> ![ThreeJS](../articleElements/threejs-logo-128.png 'ThreeJS')</a>
<a href="https://www.blender.org/" target="_blank" rel="noreferrer"> ![Blender](../articleElements/blender-logo-128.svg 'Blender')</a>

---

## React Project

This app was created with Create React App & the TypeScript template. Everything, aside from the markdown articles, has been created with TS. Styles have been made with SASS, and close to everything has been self-built on top of normalize.css. Here's a few code examples!

---

### _navigationbar.scss_

```scss
@use '../../../styles/colors' as *;
@use '../../../styles/fonts' as *;
@use '../../../styles/media-breakpoints' as *;

.navigation-bar {
    /* Layout */
    display: flex;
    background-color: $background-color-editor-nav;
    padding-left: 2em;
    padding-right: 2em;
    ul {
        flex-basis: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;

        @media (min-width: $tablet-bp) {
            justify-content: flex-start;
        }
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
    li:focus-within,
    li:hover {
        background-color: $background-color-editor-nav-hover;
    }
    a {
        @media (min-width: $tablet-bp) {
            font-size: $font-size-navigation-bar-desktop;
        }
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

```typescript
import './navigationbar.scss'
import { HeaderProps } from '../../../types/propTypes'

import { Link } from 'react-router-dom'

export const Navigation = ({ articleNavHeaders }: HeaderProps) => {
  return (
    <nav className="navigation-bar">
        {articleNavHeaders && (
            <ul>
                {articleNavHeaders.map((header, i) => (
                    <li key={i}>
                        <Link
                            replace
                            to={header.ref}
                        >
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

Did you see the code syntax highlighting? I know, it's cool. Here's how the article component functions. MarkdownIt is used to process the articles. Prism.JS is used for syntax highlighting. DOMPurify is used to sanitize the HTML since innerHTML of the article needs to be accessed.

### _Article.tsx_

```typescript
export const Article = (props: ArticleProps) => {
    const { mdFile, articleSize } = props

    const [articleHtml, setArticleHtml] = useState(
        '<h2> Getting article.. </h2>'
    )

    const articleClass = (size: ArticleSize): string => {
        const articleClass = 'article'
        switch (size) {
            case ArticleSize.windowed:
                return `${articleClass} article-layout`
            case ArticleSize.full:
                return `${articleClass} article-layout-enlarged`
        }
    }

    useEffect(() => {
        const md = new MarkdownIt({ html: true })
        fetch(mdFile)
            .then((response) => response.text())
            .then((text) => {
                const htmlString = md.render(text)
                const sanitizedHtml = DOMPurify.sanitize(htmlString)
                setArticleHtml(sanitizedHtml)
                window.Prism?.highlightAll()
            })
    }, [mdFile])

    return (
        <article className={articleClass(articleSize)}>
            <p
                className="article-text"
                dangerouslySetInnerHTML={{
                    __html: articleHtml,
                }}
            ></p>
        </article>
    )
}

```



---

## Articles as MD files

If you are familiar with markdown, you can probably see it already in this article. Perhaps it just seems familiar somehow. Whatever the case: Yes, it is markdown, used in for example GitHub readme files. With markdown, the contents can be written in a pre-defined format that has been created for writing content, instead of bunching together HTML elements. As an additional plus, you get to write most of your webpage through a dedicated markdown editor.

---

## GitHub Actions, GitHub Pages, Devops, CI/CD

This project contains the essentials of devops provided by GitHub. The essentials for this project include:

1. Version control in GitHub. 
2. CI/CD pipeline through GitHub actions
3. Dedicated hosting environment through GitHub Pages

---

## Lastly, the koala bear!

Yep, it's a koala. I made it myself on Blender! This includes both creating the model from basic shapes, texturing it with proper colours, rigging it to have a bone structure, and finally animating it. Blender conveniently exports the model as a GLB - this can further be loaded with threeJS.

![Blender Koala](../articleElements/vilperiModelBlender-256.png)
![ThreeJS Koala](../articleElements/threeJSTweak-256.png)