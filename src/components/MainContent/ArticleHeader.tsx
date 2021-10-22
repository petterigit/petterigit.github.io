import './maincontent.scss'
import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { CommitRes } from '../../types/httpTypes'
import { ArticleHeaderProps } from '../../types/propTypes'

export const ArticleHeader = ({ toggleArticle }: ArticleHeaderProps) => {
    const [modifiedDate, setModifiedDate] = useState('')

    useEffect(() => {
        axios
            .get<CommitRes>(
                ' https://api.github.com/repos/petterigit/petterigit.github.io/commits/gh-pages'
            )
            .then((response) => {
                const data = response.data
                console.log(data)
                let date = new Date(data.commit.author.date)
                let dateStr = date.toDateString()
                setModifiedDate('- last modified: ' + dateStr)
                console.log(dateStr)
            })
    }, [])

    return (
        <div className="app-main-header">
            <p className="app-main-header-text"> vilperi.me {modifiedDate}</p>
            <button onClick={toggleArticle} className="app-main-header-exit">
                X
            </button>
        </div>
    )
}
