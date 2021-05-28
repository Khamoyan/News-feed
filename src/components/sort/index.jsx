import React, { useState } from 'react'
// import './style.scss'
import Button from '../base/button'
function Sort() {

    const sortData = [
        'relevance', 'popularity', 'published date'
    ]
    const [openModal, setopenModal] = useState(false)

    return (
        <>
            <div className=''>
                <Button text='Sort by' onClick={() => setopenModal(oldState => !oldState)} />
            </div>
            {
                openModal && (
                    <div
                        onClick={() => setopenModal(false)}
                        id="myModal" className="modal"
                    >

                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="modal-content">
                            {
                                sortData.map((data, index) => {
                                    return (
                                        <Button text={data} key={index.toString()} />
                                    )
                                })
                            }
                        </div>

                    </div>

                )
            }
        </>
    );
}

export default Sort;
