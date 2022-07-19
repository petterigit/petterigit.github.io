const articleFolder = 'articles'

const pageUrl = (fileName: string): string => {
    return `${process.env.PUBLIC_URL}/${articleFolder}/${fileName}`
}

const pageRefs = {
    vilperiMe: '/',
    projects: '/projects',
}

export const articleNavHeaders = [
    { text: 'About', ref: pageRefs.vilperiMe },
    { text: 'Projects', ref: pageRefs.projects },
]

export const articles = [
    {
        path: pageRefs.vilperiMe,
        mdFile: pageUrl('vilperi.md'),
    },
    {
        path: pageRefs.projects,
        mdFile: pageUrl('projects.md'),
    },
]
