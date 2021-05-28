
import React from 'react'
import ArticleCard from '../../components/cards/article-card'
import Filters from '../../components/filter'
import Loader from '../../components/base/loader'
import Button from '../../components/base/button'
import Sort from '../../components/sort'
import './style.scss'

function SearchPage({
    list,
    isloading,
    onSort,
    filters,
    onFilterBy,
    isloadingNextPage,
    clearFilters
}) {

    return (
        <div className='serach-page'>
            <div className='clear-and-sort'>
                <Button
                    text='Clear'
                    onClick={clearFilters}
                />
                <Sort
                    onSort={onSort}
                    active={filters.sortBy}
                />
            </div>
            <div className='news-search'>
                <div className='filter-content'>
                    <Filters
                        onFilterBy={onFilterBy}
                        filters={filters}
                    />
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
                    {
                        !isloading && list && list.length === 0 && (
                            <span
                                style={{
                                    textAlign: 'center',
                                    margin: 'auto'
                                }}
                            > No Result</span>
                        )
                    }
                </div>
                {
                    isloadingNextPage && (
                        <Loader />
                    )
                }
            </div>
        </div>
    );
}

export default SearchPage;
