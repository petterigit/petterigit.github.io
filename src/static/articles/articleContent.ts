import vilperiMeMD from './vilperi.md'
import cardsAgainstHumanityMD from './cah.md'

const pageRefs = {
    vilperiMe: '/',
    cah: '/cah',
}

export const articleNavHeaders = [
    { text: 'vilperi.me', ref: '.' + pageRefs.vilperiMe },
    { text: 'Cards Against Humanity', ref: '.' + pageRefs.cah },
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
