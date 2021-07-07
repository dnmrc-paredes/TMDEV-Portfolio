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
    new Skill(1, html, 'html'),
    new Skill(2, css, 'css'),
    new Skill(3, js, 'js'),
    new Skill(4, nodejs, 'nodejs'),
    new Skill(5, react, 'react'),
    new Skill(6, ts, 'ts'),
    new Skill(7, vue, 'vue'),
    new Skill(8, sass, 'sass'),
    new Skill(9, npm, 'npm'),
    new Skill(10, mongodb, 'mongodb'),
    new Skill(11, mysql, 'mysql'),
    new Skill(12, gql, 'gql'),
    // new Skill('s, "https://img.icons8.com/color/100/000000/sass.png")
]
