import vilperiMeMD from './vilperi.md'
import cardsAgainstHumanityMD from './projects.md'

const pageRefs = {
    vilperiMe: '/',
    cah: '/projects',
}

export const articleNavHeaders = [
    { text: 'About', ref: '.' + pageRefs.vilperiMe },
    { text: 'Projects', ref: '.' + pageRefs.cah },
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
]
