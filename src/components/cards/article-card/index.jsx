import React from 'react'
import './style.scss'

function ArticleCard({
    data
}) {
    return (
        <article className='article-card'>
            <div className='article-cover'>
                <img src={data.urlToImage} alt='' />
            </div>
            <div className='article-info'>
                <span className='truncated'>{data.title}</span>
                <span className='description-marginY truncated-lines'>{data.description}</span>
                <span className='text-end'>
                    May 17, 2021
                </span>
            </div>
        </article>
    );
}

export default ArticleCard;
