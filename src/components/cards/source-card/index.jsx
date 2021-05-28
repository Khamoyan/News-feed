import React from 'react'
import './style.scss'

function SourcesCard({
    data,
    onClick,
}) {
    function jsUcfirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        <article
            onClick={onClick}
            className='sources-card-article'
        >
            <span className='sources-name'>{data.name}</span>
            <span className='sources-description'>{data.description}</span>
            <div className='info-content'>
                <span>
                    {jsUcfirst(data.category)}
                </span>
                <span>
                    {data.language.toUpperCase()}
                </span>
                <span>
                    {data.country.toUpperCase()}
                </span>
            </div>
        </article>
    );
}

export default SourcesCard;
