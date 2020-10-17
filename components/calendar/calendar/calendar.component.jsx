import React from 'react';

import CalendarDay from '../calendar-day/calendar-day.component';

import styles from './calendar.module.css';

const Calender = ({ timeTable }) => {
    return (
        <div className={styles.calendar}>
            {timeTable.map((day) => (
                <CalendarDay dayTable={day} key={day.date} />
            ))}
        </div>
    );
};

export default Calender;
