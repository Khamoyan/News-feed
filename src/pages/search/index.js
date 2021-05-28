
import React from 'react'
import ArticleCard from '../../components/cards/article-card'
import Filters from '../../components/filter'
import Loader from '../../components/base/loader'
import Button from '../../components/base/button'
import Sort from '../../components/sort'
import './style.scss'

function SearchPage({
    list,
    isloading
}) {
    return (
        <div className='serach-page'>
            <div className='clear-and-sort'>
                <Button text='Clear' />
                <Sort />
            </div>
            <div className='news-search'>
                <div className='filter-content'>
                    <Filters />
                </div>
                <div className='articles-conntent'>
                    {
                        isloading && (
                            <Loader />
                        )
                    }
                    {
                        !isloading && list && list.map((article, index) => {
                            return (
                                <ArticleCard
                                    key={index.toString()}
                                    data={article}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default SearchPage;
