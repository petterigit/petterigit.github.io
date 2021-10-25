import vilperiMeMD from './vilperi.md'
import cardsAgainstHumanityMD from './projects.md'
import scrabbleMD from './scrabble.md'

const pageRefs = {
    vilperiMe: '/',
    cah: '/projects',
    scrabble: '/scrabble',
}

export const articleNavHeaders = [
    { text: 'About', ref: '.' + pageRefs.vilperiMe },
    { text: 'Projects', ref: '.' + pageRefs.cah },
    { text: 'Scrabble', ref: '.' + pageRefs.scrabble },
]

export const articles = [
    {
        path: pageRefs.vilperiMe,
        mdFile: vilperiMeMD,
    },
    {
        path: pageRefs.cah,
        mdFile: cardsAgainstHumanityMD,
    },
    {
        path: pageRefs.scrabble,
        mdFile: scrabbleMD,
    },
]
