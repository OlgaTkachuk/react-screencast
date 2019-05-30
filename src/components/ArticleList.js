import React from 'react'
import Article from "./Article";

export default function ArticleList({articles}) {
    return (
        <ul>
            <li><Article atricle = {articles[0]}/></li>
            <li><Article atricle = {articles[1]}/></li>
            <li><Article atricle = {articles[2]}/></li>
            <li><Article atricle = {articles[3]}/></li>
        </ul>
    )
}