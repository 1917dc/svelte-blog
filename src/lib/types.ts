export type Categories = 'instrospecção' | 'estudo' | 'filosofia' | 'programação' | 'resenhas'

export type Post = {
    title: string
    slug: string
    description: string
    date: string
    categories: Categories
    published: boolean
}