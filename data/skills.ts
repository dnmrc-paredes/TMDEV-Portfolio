import html from './../public/html.svg'
import css from './../public/css.svg'
import js from './../public/js.svg'
import nodejs from './../public/nodejs.svg'
import gql from './../public/gql.svg'
import mongodb from './../public/mongodb.svg'
import mysql from './../public/mysql.svg'
import react from './../public/react.svg'
import vue from './../public/vue.svg'
import ts from './../public/ts.svg'
import npm from './../public/npm.svg'
import sass from './../public/sass.svg'
import nextjs from './../public/nextjs.svg'

export class Skill {

    id: number
    url: string
    title: string

    constructor(id: number, url: string, title: string) {
        this.id = id
        this.url = url
        this.title = title
    }
}

export const skills = [
    new Skill(1, html, 'HTML'),
    new Skill(2, css, 'CSS'),
    new Skill(3, js, 'JavaScript'),
    new Skill(4, nodejs, 'Node JS'),
    new Skill(5, react, 'React JS'),
    new Skill(6, ts, 'TypeScript'),
    new Skill(7, vue, 'Vue JS'),
    new Skill(8, sass, 'Sass'),
    new Skill(9, npm, 'NPM'),
    new Skill(10, mongodb, 'Mongo DB'),
    new Skill(11, mysql, 'MySQL'),
    new Skill(12, gql, 'GraphQL'),
    new Skill(13, nextjs, 'Next JS')
]
