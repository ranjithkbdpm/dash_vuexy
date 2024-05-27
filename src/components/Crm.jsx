// import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faChartColumn, faEllipsisVertical, faCartShopping, faChartPie, faPlus, faListOl, faTable } from '@fortawesome/free-solid-svg-icons';
import { faChartBar, faFileLines } from '@fortawesome/free-regular-svg-icons';
import BrowserStates from '../data/browserState.js';
import { CircularProgressbar} from 'react-circular-progressbar';
import '../assets/logos/chrome.png';
import ActiveProject from '../data/activeProject.js';
import Transactions from '../data/transactions.js';
import a3 from '../assets/img/3.png';
import EarningReportChart from './graphComponent/EarningReportChart.jsx';
import RadialGraph from './graphComponent/RadialGraph.jsx';
import SalesLine from './graphComponent/SalesLine.jsx';
import RevenueGrowth from './graphComponent/RevenueGrowth.jsx';
import ProjectStatus from './graphComponent/ProjectStatus.jsx';
import { useState } from 'react';




function Crm({isDarkMode}) {

  const [chartSeries, setChartSeries] = useState([
    {
        name: 'Order',
        data: [28,10,45,38,15,30,35,30,8]
    }  
  ]);

  const handleGraphData = (data) => {
    let newData;
    switch (data) {
      case 'order':
        newData = [
          {
            name: 'Order',
            data: [28, 10, 45, 38, 15, 30, 35, 30, 8]
          }
        ];
        break;
      case 'sales':
        newData = [
          {
            name: 'Sales',
            data: [35, 25, 15, 40, 42, 25, 48, 8, 30]
          }
        ];
        break;
      case 'profit':
        newData = [
          {
            name: 'Profit',
            data: [10, 22, 27, 33, 42, 32, 27, 22, 8]
          }
        ];
        break;
      case 'income':
        newData = [
          {
            name: 'Income',
            data: [5, 9, 12, 18, 20, 25, 30, 36, 48]
          }
        ];
        break;
      // default:
      //   newData = [];
    }
  
    setChartSeries(newData);
  };

  return (
    <>
      <div className='row crmWrapper w-100'>

          {/* sales */}
            <div className={`col-6 col-xl-2 col-md-4 mb-4`}>
                <div className={`card salesCard ${isDarkMode ? 'darkTheme rounded' : 'bg-light rounded'}`}>
                    <div className={`card-header pt-3 border-0 ${isDarkMode ? 'darkBg' : 'bg-light whiteText'} `}>
                        <h5 className={`mb-0`}>Sales</h5>
                        <small>Last Year</small>
                    </div>
                    <div className={`card-body p-0 border-0 ${isDarkMode ? 'darkBg' : 'bg-light whiteText'} `}>
                      {/* sales graph */}
                      <div className={`w-100 h-100`} 
                      style={{minHeight:'70px', minWidth:'120px'}}
                      >
                        <SalesLine/>
                      </div>
                      <div className='d-flex px-3 mt-0 justify-content-between'>
                            <h5>175k</h5>
                            <small className='text-danger p-1'>-16.4%</small>
                        </div>
                    </div>
                </div>
            </div>


            {/* Session */}
            <div className={`col-6 col-xl-2 col-md-4 mb-4`}>
                <div className={`card sessionCard ${isDarkMode ? 'darkTheme' : 'bg-light whiteText'}`}>
                    <div  className={`card-header pt-3 border-0 ${isDarkMode ? 'darkBg' : 'bg-light'} `}>
                        <h5 className={`mb-0`}>Sessions</h5>
                        <small>Last Month</small>
                    </div>
                    <div  className={`card-body p-0 border-0 ${isDarkMode ? 'darkBg' : 'bg-light'} `} >
                      {/* saleGraph */}
                        <div className={`w-100 h-100`} 
                           style={{minHeight:'65px', minWidth:'120px'}}
                        >
                            <SalesLine/></div>
                        <div className='d-flex px-3 mt-0  justify-content-between'>
                            <h5>45.1k</h5>
                            <small className='text-success p-1'>12.4%</small>
                        </div>
                    </div>
                </div>
            </div>


            {/* total Profit */}
            <div className='col-6 col-xl-2 col-md-4 mb-4'>
                <div className={`card totalProfitCard ${isDarkMode ? 'darkTheme' : 'bg-light whiteText'}`}>
                    <div className={`card-body border-0 ${isDarkMode ? 'darkBg' : 'bg-light'} `} >
                        <div className={``}><FontAwesomeIcon className={`bg-danger p-2 rounded text-white`} icon={faDollarSign} /></div>
                        <h5 className={`mb-0 mt-2`}>Total Profit</h5>
                        <small>Last Week</small>
                        <h5 className='mt-2'>1.28k</h5>
                        <small className={`rounded mt-2 p-1 ${isDarkMode ? 'bg-secondary border-0' : 'bg-light text-secondary border-0'}`}>-12.4%</small>                        
                    </div>
                </div>
            </div>


            {/* total sales */}
            <div className='col-6 col-xl-2 col-md-4 col-6 mb-4'>
                <div className={`card totalSaleCard ${isDarkMode ? 'darkTheme' : 'bg-light whiteText'}`}>
                    <div className={`card-body border-0 ${isDarkMode ? 'darkBg' : 'bg-light'} `} >
                        <div><FontAwesomeIcon className={`bg-primary p-2 rounded text-white`} icon={faChartColumn} /></div>
                        <h5 className={`mb-0 mt-2`}>Total Sales</h5>
                        <small>Last Week</small>
                        <h5 className='mt-2'>$4,673</h5>
                        <small className={`rounded p-1 mt-2 ${isDarkMode ? 'bg-secondary border-0' : 'bg-light text-secondary border-0'}`}>+25.4%</small>                        
                    </div>
                </div>
            </div>


            {/* total revenue */}
            <div className='col-xl-4 col-md-8 mb-4'>
                <div className={`card revenueCard ${isDarkMode ? 'darkTheme' : 'bg-light whiteText'}`}>
                    <div className={`card-body border-0 ${isDarkMode ? 'darkBg' : 'bg-light'} `} >
                        <div className ='row'>
                          <div className='col-5 pe-0'>
                            <div className={`mb-0`}>Revenue Growth</div>
                            <small>Weekly Report</small>
                            <h4 className='mt-5'>$4,673</h4>
                            <small className={`rounded p-1 ${isDarkMode ? 'bg-success text-white border-0' : 'bg-success text-white border-0'}`}>+25.4%</small>
                          </div>
                          <div className='col-7 p-0'>
                            {/* Revenue Graph */}
                            <div className={`w-100 h-100`} 
                               style={{minHeight:'170px', minWidth:'157px'}}
                            >
                              <RevenueGrowth isDarkMode={isDarkMode}/>
                            </div>                              
                          </div>                          
                        </div>                       
                    </div>
                </div>
            </div>


            {/* Earning Report */}
            <div className='col-12 col-xl-8 mb-4'>
                <div className={`card earningCard ${isDarkMode ? 'darkTheme rounded' : 'bg-light whiteText rounded'}`}>
                  {/* Title and option button */}
                    <div className={`card-header pt-3 border-0 d-flex justify-content-between ${isDarkMode ? 'darkBg' : 'bg-light'} `}>
                        <div>
                          <h4 className={`mb-0`}>Earning Reports</h4>
                          <small>Yearly Earning Overview</small>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </div>
                    </div>
                    {/* chart options */}
                    <div className={`card-body border-0 ${isDarkMode ? 'darkBg' : 'bg-light'} `}>
                        <div className='d-flex'>
                          <button className={`order me-2 d-flex flex-column align-items-center justify-content-center rounded p-1 ${isDarkMode ? 'darkBg darkText dotBorder' : 'bg-light whiteText dotBorder'}`} onClick={()=>handleGraphData('order')}>
                            <span><FontAwesomeIcon icon={faCartShopping} /></span>
                            <span>Order</span>
                          </button>
                          <button className={`order me-2 d-flex flex-column align-items-center justify-content-center rounded p-1 ${isDarkMode ? 'darkBg darkText dotBorder' : 'bg-light whiteText dotBorder'}`} onClick={()=>handleGraphData('sales')}>
                            <span><FontAwesomeIcon icon={faChartBar} /></span>
                            <span>Sales</span>
                          </button>
                          <button className={`order me-2 d-flex flex-column align-items-center justify-content-center rounded p-1 ${isDarkMode ? 'darkBg darkText dotBorder' : 'bg-light whiteText dotBorder'}`} onClick={()=>handleGraphData('profit')}>
                            <span><FontAwesomeIcon icon={faDollarSign} /></span>
                            <span>Profit</span>
                          </button>
                          <button className={`order me-2 d-flex flex-column align-items-center justify-content-center rounded p-1 ${isDarkMode ? 'darkBg darkText dotBorder' : 'bg-light whiteText dotBorder'}`} onClick={()=>handleGraphData('income')}>
                            <span><FontAwesomeIcon icon={faChartPie} /></span>
                            <span>Income</span>
                          </button>
                          <button className={`order me-2 d-flex flex-column align-items-center justify-content-center rounded p-1 ${isDarkMode ? 'darkBg dotBorder' : 'bg-light dotBorder'}`}>
                            <div><FontAwesomeIcon icon={faPlus} /></div>
                          </button>
                        </div>
                        {/* Earning chart */}
                        <div className={`w-100 h-100`} 
                          style={{minWidth:'680px', minHeight:'250px'}}
                        >
                          <EarningReportChart isDarkMode={isDarkMode} chartSeries={chartSeries}/>
                        </div>                        
                    </div>
                </div>
            </div>


            {/* Sale chart */}
            <div className='col-xl-4 col-md-6 mb-4'>
                <div className={`card saleChartCard ${isDarkMode ? 'darkTheme rounded' : 'bg-light rounded whiteText'}`}>
                  {/* Title and option button */}
                    <div className={`card-header pt-3 border-0 d-flex justify-content-between ${isDarkMode ? 'darkBg' : 'bg-light'} `}>
                        <div>
                          <h4 className={`mb-0`}>Sales</h4>
                          <small>Last 6 months</small>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </div>                       
                    </div>
                    <div className={`card-body border-0 ${isDarkMode ? 'darkBg' : 'bg-light'} `}>
                      {/* Radial Graph */}
                      <div className={`w-100 h-100`} 
                         style={{minHeight:'330px', minWidth:'315px'}}
                      >
                          <RadialGraph/>
                      </div>
                    </div> 
                </div>
            </div>


            {/* Browser states */}
            <div className='col-xl-4 col-md-6 mb-4'>
                <div className={`card browserCard ${isDarkMode ? 'darkTheme rounded' : 'bg-light whiteText rounded'}`}>
                  {/* Title and option button */}
                    <div className={`card-header pt-3 border-0 d-flex justify-content-between ${isDarkMode ? 'darkBg' : 'bg-light'} `}>
                        <div>
                          <h4 className={`mb-0`}>Browser States</h4>
                          <small>Counter April 2022</small>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </div>                       
                    </div>


                    {/* list of browsers */}
                    <div className={`card-body  ${isDarkMode ? 'darkBg' : 'bg-light'} `}>
                    <ul className={`list-unstyled`}>
                      {BrowserStates.map((Bstate, index) => (
                          <li key={index} className='d-flex align-items-center mb-3'>
                            <div className='me-2'>
                              <img src={Bstate.img} alt={'logo'} style={{ width: '24px', height: '24px' }} />
                            </div>              
                            
                            <div className='d-flex flex-grow-1'>
                              <div>{Bstate.title}</div>
                              <div className="ms-auto">{Bstate.barValue}%</div> 
                            </div>
                                                       
                            <div className='radialBar ms-2'>
                              <CircularProgressbar className='radialProgress'
                                value={Bstate.barValue} 
                              />
                            </div>
                          </li>
                          ))
                      }
                    </ul>
                    </div>
                </div>                              
            </div>
            


            {/* project status */}
            <div className='col-12 col-xl-4 col-md-6 mb-4'>
                <div className={`card saleChartCard ${isDarkMode ? 'darkTheme rounded' : 'bg-light rounded whiteText'}`}>
                  {/* Title and option button */}
                    <div className={`card-header pt-3 border-0 d-flex justify-content-between ${isDarkMode ? 'darkBg' : 'bg-light'} `}>
                        <div>
                          <h4 className={`mb-0`}>Project Status</h4>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </div>                       
                    </div>
                    <div className={`card-body border-0 ${isDarkMode ? 'darkBg' : 'bg-light'} `}>
                      <div className={`d-flex align-items-center`}>
                        <div className={`me-3`}><FontAwesomeIcon className={`bg-warning p-3 rounded text-white`} icon={faDollarSign} /></div>
                        <div>
                          <div>
                            <div className={`h5 mb-0`}>$4,673</div>
                            <small>Your Earnings</small>
                          </div>                          
                        </div>
                        <small className='text-success p-1 ms-auto'>10.2%</small>
                      </div>
                      <div className={`w-100 h-100`} style={{minHeight:'220px'}}> 
                          <ProjectStatus/>
                      </div>
                      <div>
                        <ul className={`list-unstyled`}>
                          <li className='d-flex'>
                            <div className={`me-3`}>Donate</div>
                            <div className={`d-flex ms-auto  justify-content-between`}>
                              <div>
                                $756.26
                              </div>
                              <div className={`text-danger ms-3`}>
                                -139.34
                              </div>
                            </div>
                          </li>
                          <li className={`d-flex`}>
                            <div className={`me-3`}>Postcasts</div>
                            <div className={`d-flex ms-auto justify-content-between`}>
                              <div>
                                $2207.03
                              </div>
                              <div className={`text-success ms-3`}>
                                +576.24
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div> 
                    </div>
                </div>
            </div>
          


            {/* Active Project */}
            <div className='col-xl-4 col-md-6 mb-4'>
              <div className={`card browserCard ${isDarkMode ? 'darkTheme rounded' : 'bg-light whiteText rounded'}`}>
                {/* Title and option button */}
                <div className={`card-header pt-3 border-0 d-flex justify-content-between ${isDarkMode ? 'darkBg' : 'bg-light'} `}>
                  <div>
                    <h4 className={`mb-0`}>Active Projects</h4>
                    <small>Average 72% Completed</small>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </div>
                </div>
                {/* list of Active Projects */}
                <div className={`card-body ${isDarkMode ? 'darkBg' : 'bg-light'} `}>
                  <ul className={`list-unstyled`}>
                    {ActiveProject.map((Bstate, index) => (
                      <li key={index} className='d-flex align-items-center mb-4'>
                        <div className='me-3'>
                          <img src={Bstate.img} alt={'logo'} style={{ width: '24px', height: '24px' }} />
                        </div>
                        <div className=''>{Bstate.title}</div>
                        <div className='ms-auto d-flex align-items-center'>
                          <div className="progress me-3" style={{ height: '10px', width:'80px' }}>
                            <div className="progress-bar" role="progressbar" aria-valuenow={Bstate.barValue} aria-valuemin="0" aria-valuemax="100" style={{ width: `${Bstate.barValue}%`, backgroundColor:`${Bstate.color}` }}>
                              <span className="sr-only">{Bstate.barValue}% Complete</span>
                            </div>
                          </div>
                          <div className="">{Bstate.barValue}%</div>
                        </div>                        
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            

            {/* Last Transaction */}
            <div className='col-lg-6 mb-4 mb-lg-0'>
                <div className={`card saleChartCard ${isDarkMode ? 'darkTheme rounded' : 'bg-light rounded whiteText'}`}>
                  {/* Title and option button */}
                  <div className={`card-header pt-3 border-0 d-flex justify-content-between ${isDarkMode ? 'darkBg' : 'bg-light'} `}>
                    <div>
                      <h4 className={`mb-0`}>Last Transaction</h4>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faEllipsisVertical} />
                    </div>
                  </div>
                  <div className={`card-body border-0 ${isDarkMode ? 'darkBg' : 'bg-light whiteText'}`}>
                    <table className={`w-100 ${isDarkMode ? 'table-dark' : 'bg-light whiteText'}`} style={isDarkMode ? { backgroundColor: '#2f3349', color: 'rgb(182, 190, 227)' } : { backgroundColor: '#f8f9fa', color: '#000000' }}>
                      <thead className={`${isDarkMode ? 'darkBg' : 'bg-light whiteText'}`}>
                        <tr className={`border-bottom`}>
                          <th className={`pb-3`}>CARD</th>
                          <th className={`pb-3`}>DATE</th>
                          <th className={`pb-3`}>STATUS</th>
                          <th className={`pb-3`}>TREND</th>
                        </tr>
                      </thead>
                      <tbody className={`${isDarkMode ? 'darkBg' : 'bg-light whiteText'}`}>
                        {Transactions.map((transaction, index) => (
                          <tr key={index} className={``}>
                            <td className={`d-flex align-items-center mb-3 pt-1`}>
                              <div className={`me-2`}>
                                <img src={transaction.img} alt={`${transaction.img}`} style={{ width: '45px', height: '25px' }} />
                              </div>
                              <div>
                                <div className={`mb-0`}>*{transaction.cardNo}</div>
                                <small className={`mt-0`}>credit</small>
                              </div>
                            </td>
                            <td className={`mb-3`}>
                              <div>
                                <div className={`mb-0`}>Sent</div>
                                <small className={`mt-0`}>{transaction.date}</small>
                              </div>
                            </td>
                            <td className={`mb-3`}>
                              <div className={`rounded w-md-50 w-lg-50 w-xl-65 text-center ${transaction.status === 'Verified' ? 'verified' : transaction.status === 'Pending' ? 'pending' : 'rejected'}`}>
                                {transaction.status}
                              </div>
                            </td>
                            <td className={`mb-3 ps-2`}>
                              <div>{transaction.Trend}</div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>



            {/* Activity Timeline */}
            <div className='col-lg-6 col-md-12'>
                <div className={`card saleChartCard ${isDarkMode ? 'darkTheme rounded' : 'bg-light rounded whiteText'}`}>
                  {/* Title and option button */}
                    <div className={`card-header pt-3 mb-3 border-0 d-flex justify-content-between ${isDarkMode ? 'darkBg' : 'bg-light'} `}>
                        <div className={`d-flex align-items-baseline`}>
                          <FontAwesomeIcon className={`me-2`} icon={faListOl} />
                          <h5 className={`mb-0`}>Activity Timeline</h5>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </div>                       
                    </div>
                    {/* ---------------- time line ------------ */}
                    <div className={`card-body border-0 ${isDarkMode ? 'darkBg' : 'bg-light'} `}>
                      <div className={`timeline ${isDarkMode ? 'darkBg' : 'bg-light'}`}>
                        <ul className={`list-unstyled`}>
                          <li className={`timelineList mb-3`}>
                            <div className={`timelineIconWarning`}></div>
                            <div className={`timelineContent`}>
                                <div className={`d-flex justify-content-between`}>
                                  <div>
                                    <div>Client Meeting</div>
                                    <small>Project meeting with john @10:15am</small>
                                  </div>
                                  <small>Today</small>
                                </div>
                                <div className={`d-flex mt-2`}>
                                  <div><img src={a3} alt="avatar" className={`aLogo`}/></div>
                                  <div className={`ms-3`}>
                                    <div className={`mb-0`}>Lester McCarthy (Client)</div>
                                    <div>CEO of Infibeam</div>
                                  </div>
                                </div>
                            </div>                            
                          </li>
                          <li className={`timelineList mb-3`}>
                            <div className={`timelineIconPrimary`}></div>
                            <div className={`timelineContent`}>
                                <div className={`d-flex justify-content-between`}>
                                  <div>
                                    <div>Create a new project for client</div>
                                    <small>Add files to new design folder</small>
                                  </div>
                                  <small>2 Day Ago</small>
                                </div>
                            </div>                            
                          </li>
                          <li className={`timelineList mb-3`}>
                            <div className={`timelineIconlightBlue`}></div>
                            <div className={`timelineContent`}>
                                <div className={`d-flex justify-content-between`}>
                                  <div>
                                    <div>Shared 2 New Project Files</div>
                                    <small>Sent by Mollie Dixon</small>
                                  </div>
                                  <small>6 Day Ago</small>
                                </div>
                                <div className={`d-flex mt-2`}>
                                  <div className={`me-3`}>
                                    <FontAwesomeIcon className={`me-2 text-warning`} icon={faFileLines}/>
                                    <span>App Guidelines</span></div>
                                  <div className={`me-3`}>
                                    <FontAwesomeIcon className={`me-2 text-success`} icon={faTable} />
                                    <span>Testing Results</span></div>
                                </div>
                            </div>                            
                          </li>
                          <li className={`timelineList mb-3`}>
                            <div className={`timelineIconSecondary`}></div>
                            <div className={`timelineContent`}>
                                <div className={`d-flex justify-content-between`}>
                                  <div>
                                    <div>Project status updated</div>
                                    <small>Woocommerce iOS App Completed</small>
                                  </div>
                                  <small>10 Day Ago</small>
                                </div>
                            </div>                            
                          </li>
                        </ul>
                      </div>
                    </div> 
                </div>
            </div>
      
      </div>
    </>
  )
}

export default Crm;