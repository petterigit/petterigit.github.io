import { useEffect, useState } from 'react'
import { ArticleHeaderProps } from '../../types/propTypes'

export const ArticleHeader = ({ toggleArticle }: ArticleHeaderProps) => {
    const [modifiedDate, setModifiedDate] = useState('')

    useEffect(() => {
        let mounted = true

        async function setHeaderState() {
            const res = await fetch(
                'https://api.github.com/repos/petterigit/petterigit.github.io/commits/gh-pages'
            )
            const json = await res.json()
            if (mounted) {
                let date = new Date(json.commit.author.date)
                let dateStr = date.toDateString()
                setModifiedDate('- last modified: ' + dateStr)
            }
        }

        setHeaderState()

        // Component won't unmount under normal use, but good to have still
        return () => {
            mounted = false
        }
    }, [])

    return (
        <div className="app-main-header">
            <div className="app-main-header-buttons app-main-header-container"></div>
            <p className="app-main-header-text app-main-header-container">
                {' '}
                vilperi.me {modifiedDate}
            </p>
            <div className="app-main-header-container">
                <button className="unstyled-button margin-left-auto">◻</button>
                <button onClick={toggleArticle} className="unstyled-button">
                    X
                </button>
            </div>
        </div>
    )
}
