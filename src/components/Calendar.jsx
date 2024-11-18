import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import candles from '../assets/images/cursed-candles--.svg'

export default function Calendar() {
  const [events, setEvents] = useState([]);
  const handleDateClick = (info) => {
    const eventTitle = prompt('Enter information for this date:');
    if (eventTitle) {
      setEvents([
        ...events,
        {
          title: eventTitle,
          date: info.dateStr,
        }
      ]);
    }
  };


  return (
    <div className='calendar' style={{width: '100%', background: '#FEE7A0', padding: '1em', borderRadius: 20, position: 'relative', paddingBottom: '2.5em'}}>
        <FullCalendar
          plugins={[ interactionPlugin, dayGridPlugin ]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'title,prev,next',
            center: '',
            right: ''
          }}
          stickyFooterScrollbar={false}
          hiddenDays={false}
          titleFormat={{month: 'long'}}
          selectable={true}
          height={300}
          dayCellClassNames={(date) => date.isToday ? 'today-cell' : ''}
          dayHeaderContent={(args) => {
            const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sub', 'Sun'];
            return dayNames[args.date.getUTCDay()];
          }}
          
          dayCellContent={({ date }) => {
            const formattedDate = date.toISOString().split('T')[0]; 
            const hasEvents = events.some(event => event.date === formattedDate);
            
            return (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: 0 }}>
                <span style={{margin: '5px 10px'}}>{date.getDate()}</span>
                <div>
                  {hasEvents && <div style={{
                      width: 5,
                      minHeight: 5,
                      backgroundColor: '#00b8ff',
                      borderRadius: '50%',
                      marginTop: 4,
                    }}
                    ></div>
                  }
                </div>
              </div>
            );
          }}
        />
        <Link to={'/schedule'} className='schedule-btn'>Go to Schedule</Link>
        <img className='candles-decor' src={candles} alt="candles-decor" />
    </div>
  )
}