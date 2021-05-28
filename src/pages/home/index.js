import React from 'react'
import SourceCard from '../../components/cards/source-card'
import Loader from '../../components/base/loader'
import './style.scss'

function Homepage({
  list,
  onClickFilterBySource,
  isloading
}) {

  return (
    <div className='news-hompage'>
      <span className='hompage-title'>Sources </span>
      <div className='source-conntent'>
        {
          isloading && (
            <Loader />
          )
        }
        {
          !isloading && list && list.map(source => {
            return (
              <SourceCard
                key={source.id}
                data={source}
                onClick={() => onClickFilterBySource(source.id)}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default Homepage;
