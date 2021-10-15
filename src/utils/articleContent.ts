const pageRefs = {
    vilperiMe: '/',
    cah1: '/cah1',
    cah2: '/cah2',
    cah3: '/cah3',
}

export const articleNavHeaders = [
    { text: 'vilperi.me', ref: '.' + pageRefs.vilperiMe },
    { text: 'Cards Against Humanity', ref: '.' + pageRefs.cah1 },
    { text: 'Super Cool Thing', ref: '.' + pageRefs.cah2 },
    { text: 'Do not click', ref: '.' + pageRefs.cah3 },
]

export const articles = [
    {
        path: pageRefs.vilperiMe,
        header: 'Vilperi.me',
        imgsrc: 'https://cdn.discordapp.com/attachments/671042990478852096/895195178774716426/unknown.png',
        text: 'Hello and welcome to my site! This site was created with React & Typescript. Threejs brings the site to life, while hosting has been covered through [Your Mom]',
        articleLinks: ['GitHub: https://github.com/petterigit/vilperime'],
    },
    {
        path: pageRefs.cah1,
        header: 'Cards against humanity',
        imgsrc: 'https://media.discordapp.net/attachments/702911139280846868/834828718161133638/unknown.png?width=1003&height=382',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Donec a diam lectus. Set sit amet ipsum mauris.
        Maecenas congue ligula as quam viverra nec consectetur
        ant hendrerit. Donec et mollis dolor. Praesent et diam
        eget libero egestas mattis sit amet vitae augue. Nam
        tincidunt congue enim, ut porta lorem lacinia
        consectetur.`,
        articleLinks: ['Link to repo', 'Website link'],
    },
    {
        path: pageRefs.cah2,
        header: 'Cards against humanity2',
        imgsrc: 'https://media.discordapp.net/attachments/702911139280846868/834828718161133638/unknown.png?width=1003&height=382',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Donec a diam lectus. Set sit amet ipsum mauris.
        Maecenas congue ligula as quam viverra nec consectetur
        ant hendrerit. Donec et mollis dolor. Praesent et diam
        eget libero egestas mattis sit amet vitae augue. Nam
        tincidunt congue enim, ut porta lorem lacinia
        consectetur.`,
        articleLinks: ['Link to repo', 'Website link'],
    },
    {
        path: pageRefs.cah3,
        header: 'Cards against humanity2',
        imgsrc: 'https://media.discordapp.net/attachments/702911139280846868/834828718161133638/unknown.png?width=1003&height=382',
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Donec a diam lectus. Set sit amet ipsum mauris.
        Maecenas congue ligula as quam viverra nec consectetur
        ant hendrerit. Donec et mollis dolor. Praesent et diam
        eget libero egestas mattis sit amet vitae augue. Nam
        tincidunt congue enim, ut porta lorem lacinia
        consectetur.`,
        articleLinks: ['Link to repo', 'Website link'],
    },
]
