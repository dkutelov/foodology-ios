import React from 'react';
import { format } from 'date-fns';

import CalenderTime from '../calendar-time/calendar-time.component';
import styles from './calendar-day.module.css';

const getInnerColClass = (timeSlots) => {
    let colInner = styles.calendar__col_inner_head;
    if (timeSlots > 0) {
        colInner += ` ${styles.calender__col_inner_busy}`;
    }
    return colInner;
};

const CalenderDay = ({ dayTable: { date, timeSlots } }) => {
    const currentDate = Date.parse(date);

    return (
        <div className={styles.calendar__col}>
            <div className={styles.calender__col_inner}>
                <div className={getInnerColClass(timeSlots)}>
                    <p className={styles.calendar__weekday}>
                        {format(currentDate, 'EEE')}
                    </p>
                    <p className={styles.calendar__date}>
                        {format(currentDate, 'd')}
                    </p>
                </div>
            </div>
            <div className={styles.calendar__col_inner_body}>
                {timeSlots.map((timeSlot) => (
                    <CalenderTime
                        timeSlot={timeSlot}
                        key={`${currentDate}-${timeSlot.slot}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default CalenderDay;
