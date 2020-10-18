import React from 'react';
import styles from './calendar-time.module.css';

const CalenderTime = ({ timeSlot: { slot, available } }) => {
    const calenderTimeClasee = available
        ? `${styles.calendar__time} ${styles.calendar__time_bookable} ${styles.call_to_action__wrap}`
        : `${styles.calendar__time} ${styles.call_to_action__wrap}`;

    return (
        <span className={calenderTimeClasee}>
            {slot}
            <span className={styles.call_to_action}>
                <i>-> </i>
                Book available time
            </span>
        </span>
    );
};

export default CalenderTime;
