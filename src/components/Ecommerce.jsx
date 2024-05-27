// import React from 'react'

function Ecommerce({isDarkMode}) {
  return (
    <div>
        <div className='row'>
            <div className={`col-lg-6 mb-4 ${isDarkMode ? 'darkBg' : 'bg-light'}`}>
                <div className={`card salesCard`}>
                    <div className={`card-header`}>
                        <h4>Sales</h4>
                        <small>Last Year</small>
                    </div>
                    <div className='card-body'>
                        <div>Chart</div>
                        <div className='d-flex justify-content-between'>
                            <h4>175k</h4>
                            <small className='text-danger'>-16.4%</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-3 col-sm-4 mb-4'>2</div>
            <div className='col-lg-3 col-md-6 col-sm-6 mb-4'>3</div>
            <div className='col-lg-6 mb-4'>4</div>
            <div className='col-md-6 mb-4'>5</div>
            <div className='col-xl-4 col-md-6 mb-4'>6</div>
            <div className='col-12 col-xl-4 col-md-6 mb-4'>7</div>
            <div className='col-xl-4 col-md-6 mb-4'>8</div>
            <div className='col-xl-4 col-md-6 order-lg-1 mb-4'>9</div>
            <div className='col-12 col-xl-8 col-sm-12 order-lg-2 mb-4 mb-lg-0'>10</div>
        </div>
    </div>
  )
}

export default Ecommerce;