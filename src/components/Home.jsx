import React from 'react'
import PieChart from './PieChart'
import HomeHeader from './HomeHeader'
import Calendar from './Calendar'
import DailyTasks from './DailyTasks'
import HomeBlock from './HomeBlock'
import podium from '../assets/images/Podium.png' 
import PieChartFilled from './PieChartFilled'
import robot from '../assets/images/rafiki.svg'
import Instructors from './Instructors'
import Rating from './Rating'
import spider from '../assets/images/spider.svg'
import Activity from './Activity'
import RecentProjects from './RecentProjects'

export default function Home() {
  return (
    <div className='home'>
        <HomeHeader />
        <h2>Welcome back, Donald!</h2>
        <div className='dashboard'>
            <div className='tasks'>
              <div className="combine-containers">
                <PieChart />
                <DailyTasks />
              </div>
              <div className="combine-containers">
                <HomeBlock bgColor={"#7D6CAC"} title={"Total Points gained"}>
                  <div className="gained-points">
                    <p className="points">250/300</p>
                    <p className='result'>Amazing results,<br />congratulations!</p>
                  </div>
                </HomeBlock>
                <HomeBlock bgColor={"#452D89"} title={"Your achivements"}>
                  <div className='achievements'>
                    <p>
                      <svg width="30" height="38" viewBox="0 0 30 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.7229 9.80029H13.2468V37.9999H16.7229V9.80029Z" fill="#FEE7A0"/>
                        <path d="M11.3362 24.8439L8.45522 21.4236L2.51221 21.5586L11.5561 10.2993L20.3844 13.5846L11.3362 24.8439Z" fill="#FEE7A0"/>
                        <path opacity="0.2" d="M11.3362 24.8439L8.45522 21.4236L2.51221 21.5586L11.5561 10.2993L20.3844 13.5846L11.3362 24.8439Z" fill="#F8F3EE"/>
                        <path d="M27.8068 21.5997L22.0277 21.3795L18.9527 24.8469L10.0166 13.5465L18.8751 10.2993L27.8068 21.5997Z" fill="#FEE7A0"/>
                        <path opacity="0.2" d="M27.8068 21.5997L22.0277 21.3795L18.9527 24.8469L10.0166 13.5465L18.8751 10.2993L27.8068 21.5997Z" fill="#F8F3EE"/>
                        <path d="M13.7126 0.810547L15.4291 1.43589L17.2017 0.886875L18.6335 1.78234L20.5484 1.55334L21.6093 2.66312L23.5501 2.76294L24.1754 4.01658L26.017 4.44229L26.1593 5.76346L27.7896 6.48864L27.4488 7.79219L28.7599 8.76986L27.9534 9.97359L28.8678 11.1421L27.6472 12.1726L28.1044 13.4615L26.5432 14.2512L26.5173 15.5753L24.7189 16.0774L24.2099 17.3575L22.2821 17.5366L21.3247 18.6904L19.3883 18.5406L18.0384 19.4919L16.2227 19.0192L14.5666 19.715L12.9795 18.9487L11.1206 19.3421L9.86132 18.3322L7.92056 18.3968L7.07094 17.2048L5.16469 16.9405L4.77654 15.6429L3.02987 15.0616L3.12906 13.7404L1.64546 12.8831L2.22337 11.6177L1.10205 10.5344L2.12418 9.40989L1.43414 8.17092L2.83579 7.25491L2.61584 5.93668L4.31076 5.2849L4.57816 3.97254L6.45853 3.62903L7.20033 2.40476L9.14108 2.39007L10.3098 1.32726L12.1988 1.64141L13.7126 0.810547Z" fill="#FEE7A0"/>
                        <path opacity="0.4" d="M18.9211 17.7531C25.0398 16.2789 28.2445 11.7071 26.0789 7.54181C23.9134 3.37649 17.1976 1.1949 11.0789 2.6691C4.9602 4.1433 1.75553 8.71504 3.92108 12.8804C6.08663 17.0457 12.8024 19.2273 18.9211 17.7531Z" fill="#F8F3EE"/>
                        <path d="M15.3254 9.60348L15.1788 11.0392L16.8737 10.9305L16.7789 12.0726L15.0537 12.1842L14.8726 13.9722L13.2294 14.0778L13.4106 12.2869L11.983 12.3779L11.7976 14.1689L10.1544 14.2746L10.3399 12.4836L8.71826 12.5864L8.81314 11.4443L10.4563 11.3386L10.6029 9.90296L8.98565 10.0086L9.08485 8.86363L10.7237 8.75793L10.9307 6.70278L12.5782 6.60003L12.3669 8.65518L13.7944 8.56416L14.0057 6.50901L15.6489 6.40332L15.4376 8.45847L17.1627 8.34984L17.0635 9.49192L15.3254 9.60348ZM13.6736 9.70918L12.2504 9.8002L12.1124 11.2329L13.5356 11.1419L13.6736 9.70918Z" fill="#452D89"/>
                        <path d="M20.4319 13.6171L19.6427 7.88913L18.2367 7.98014L18.1289 7.19625C18.5324 7.13618 18.9065 7.00681 19.2157 6.82045C19.5306 6.641 19.7676 6.40653 19.9015 6.14225L21.053 6.06885L22.0794 13.5144L20.4319 13.6171Z" fill="#452D89"/>
                        <path d="M23.2999 37.0044H6.67407V37.9967H23.2999V37.0044Z" fill="#FEE7A0"/>
                        <path d="M23.2955 37.005H6.67407L13.1432 35.123H16.8264L23.2955 37.005Z" fill="#FEE7A0"/>
                        <path opacity="0.4" d="M23.2955 37.005H6.67407L13.1432 35.123H16.8264L23.2955 37.005Z" fill="#F8F3EE"/>
                        <path opacity="0.2" d="M23.2999 37.0044H6.67407V37.9967H23.2999V37.0044Z" fill="#F8F3EE"/>
                      </svg>
                      <span>You are the best teamplayer!</span>
                    </p>
                    <img src={podium} alt="podium-img" />
                  </div>
                </HomeBlock>
              </div>
              <div className="combine-containers">
                <HomeBlock bgColor={"#7D6CAC"} title={"Your homework"}>
                  <div className='homework-statistics'>
                    <PieChartFilled />
                    <div className='chart-sections'>
                      <p>30 lessons</p>
                      <p><span className='completed'></span>Completed</p>
                      <p><span className='overdue'></span>Overdue</p>
                      <p><span className='planned'></span>Planned</p>
                    </div>
                  </div>
                </HomeBlock>
                <HomeBlock bgColor={"#452D89"} title={"Upcoming events"}>
                  <div className="upcoming">
                    <p>Robot fest  20.11.24</p>
                    <p>12:00 PM</p>
                    <img src={robot} alt="robot" />
                  </div>
                </HomeBlock>
              </div>
              <div className="combined-blocks" style={{background: "#7D6CAC"}}>
                <img className='spider-img' src={spider} alt="spider-img" />
                <HomeBlock bgColor={"#7D6CAC"} title={"Course instructors"} options={false}>
                  <Instructors />
                </HomeBlock>
                <HomeBlock bgColor={"#7D6CAC"} title={"My rating: 85/100"} options={false}>
                  <Rating />
                </HomeBlock>
              </div>
            </div>
            <div className='right-side-block'>
                <Calendar />
                <Activity />
                <RecentProjects />
            </div>
        </div>
    </div>
  )
}
