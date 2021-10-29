import vilperiMeMD from './vilperi.md'
import cardsAgainstHumanityMD from './projects.md'
import crosswordsMD from './crosswords.md'

const pageRefs = {
    vilperiMe: '/',
    cah: '/projects',
    crosswords: '/crosswords',
}

export const articleNavHeaders = [
    { text: 'About', ref: pageRefs.vilperiMe },
    { text: 'Projects', ref: pageRefs.cah },
    { text: 'Crosswords', ref: pageRefs.crosswords },
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
        path: pageRefs.crosswords,
        mdFile: crosswordsMD,
    },
]
