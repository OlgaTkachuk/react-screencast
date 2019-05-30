import React from 'react'
import Article from "./Article";

export default function ArticleList({articles = []}) {
    return (
        <ul>
            {articles.map(el =>
                (<li><Article article = {el}/></li>))}
        </ul>
    )

}
