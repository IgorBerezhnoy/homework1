import React, {useState} from 'react';
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton';
import {restoreState} from '../hw06/localStorage/localStorage';
import s from './Clock.module.css';

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined);
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())));
    const [show, setShow] = useState<boolean>(false);

    const start = () => {
        setShow(true);

        const IntervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);
        debugger
        setTimerId(Number(IntervalId));
        // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
        // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)

    };

    const stop = () => {
        setShow(false);
        clearInterval(timerId);
        // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)

    };

    const onMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => { // пишут студенты // показать дату если наведена мышка

        if (event.currentTarget.onmouseover===null){
            setShow(true)
        }
    };
    const onMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => { // пишут студенты // спрятать дату если мышка не наведена
        if (event.currentTarget.onmouseout===null){
            setShow(false)
        }
    };

    const getDoubleStrings = (number: number) => number < 10 ?
        '0' + number
        : number;

    const stringTime = `${getDoubleStrings(date.getHours())}:${getDoubleStrings(date.getMinutes())}:${getDoubleStrings(date.getSeconds())}` ||
        <br/>; // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
    // const stringDate = `${getDoubleStrings(date.getDay())}:${getDoubleStrings(date.getMonth())}:${getDoubleStrings(date.getFullYear())}` ||
    //     <br/>; // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем
    const stringDate =` ${getDoubleStrings(date.getDate())}:${getDoubleStrings(date.getMonth() + 1)}:${getDoubleStrings(date.getFullYear())}` || <br/>;
    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)

    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const DAY_FULL_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const stringDay = `${DAY_FULL_NAMES[date.getDay()]}` || <br/>; // пишут студенты
    const stringMonth = `${monthNames[date.getMonth()]}` || <br/>; // пишут студенты

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={show} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={!show} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    );
}

export default Clock;
