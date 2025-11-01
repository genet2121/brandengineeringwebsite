import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import Utils from '../../Models/Utils';


interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}
interface eventDataProps {
    start_date: string;
    end_date: string;
}


const EventDate =({ start_date, end_date }: eventDataProps) => {
    // const calculateTimeLeft = (): TimeLeft => {
    //     const endTime = new Date(`${start_date}`).getTime();
    //     const now = new Date().getTime();
    //     const difference = endTime - now;

    //     let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    //     if (difference > 0) {
    //         timeLeft = {
    //             days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    //             hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    //             minutes: Math.floor((difference / 1000 / 60) % 60),
    //             seconds: Math.floor((difference / 1000) % 60),
    //         };
    //     }

    //     return timeLeft;
    // };

    // const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setTimeLeft(calculateTimeLeft());
    //     }, 1000);

    //     return () => clearInterval(timer);
    // }, []);
    const formatDateTime = (dateString: string) => {
        const date = new Date(dateString);
        const options: Intl.DateTimeFormatOptions = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        };
        const time = date.toLocaleTimeString('en-US', options);
        const day = date.getDate();
        const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
        const weekday = date.toLocaleString('en-US', { weekday: 'long' });
        
        return { time, day, month, weekday };
    };

    const start = formatDateTime(start_date);
    const end = formatDateTime(end_date);

    const calculateTimeLeft = (): TimeLeft => {
        const endTime = new Date(end_date).getTime();
        const now = new Date().getTime();
        const difference = endTime - now;

        let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [end_date]);

    return (
        <div className="card shadow rounded-2 p-3 zpanel my-auto w-100 zpanel" >
            <Grid container justifyContent="space-between" className="mb-3" style={{ borderBottom: '2px #CBCBCB solid' }}>
                <Grid item>
                    <Typography variant="body1" className="text-center mt-5">
                        Start  <br />
                        <strong>{Utils.convertISOToDate(start_date)}</strong>
                    </Typography>
                </Grid>
                {/* <Grid item>
                    <Typography className="text-center mb-0"> NOV</Typography>
                    <Typography variant="h4" className="text-center mb-0">
                        18
                    </Typography>
                    <Typography className="text-center ">
                        Monday
                    </Typography>
                </Grid> */}
                <Grid item>
                    <Typography className="text-center mb-0">{start.month}</Typography>
                    <Typography variant="h4" className="text-center mb-0">
                        {start.day}
                    </Typography>
                    <Typography className="text-center ">
                        {start.weekday}
                    </Typography>
                </Grid>
                <Typography variant="body1" className="text-center mt-5">
                        End  <br />
                        <strong>{Utils.convertISOToDate(end_date)}</strong>
                    </Typography> 
            </Grid>

            <Grid container justifyContent="center" spacing={2}>

                <Grid item>
                    <div className="d-flex flex-column align-items-center">
                        <div className="p-2 bg-light rounded " style={{ minWidth: '50px', backgroundColor: '#f1f3f4', borderRadius: '10px' }}>
                            <Typography variant="h5" className="mb-0">
                                {String(timeLeft.days).padStart(2, '0')}
                            </Typography>
                        </div>
                        <Typography variant="body2" className="text-muted">
                            Days
                        </Typography>
                    </div>
                </Grid>


                <Grid item>
                    <Typography variant="h4" className="mt-3">:</Typography>
                </Grid>


                <Grid item>
                    <div className="d-flex flex-column align-items-center">
                        <div className="p-2 bg-light rounded" style={{ minWidth: '50px', backgroundColor: '#f1f3f4', borderRadius: '10px' }}>
                            <Typography variant="h5" className="mb-0">
                                {String(timeLeft.hours).padStart(2, '0')}
                            </Typography>
                        </div>
                        <Typography variant="body2" className="text-muted">
                            Hours
                        </Typography>
                    </div>
                </Grid>


                <Grid item>
                    <Typography variant="h4" className="mt-3">:</Typography>
                </Grid>


                <Grid item>
                    <div className="d-flex flex-column align-items-center">
                        <div className="p-2 bg-light rounded" style={{ minWidth: '50px', backgroundColor: '#f1f3f4', borderRadius: '10px' }}>
                            <Typography variant="h5" className="mb-0">
                                {String(timeLeft.minutes).padStart(2, '0')}
                            </Typography>
                        </div>
                        <Typography variant="body2" className="text-muted">
                            Minutes
                        </Typography>
                    </div>
                </Grid>


                <Grid item>
                    <Typography variant="h4" className="mt-3">:</Typography>
                </Grid>

                <Grid item>
                    <div className="d-flex flex-column align-items-center">
                        <div className="p-2 bg-light rounded" style={{ minWidth: '50px', backgroundColor: '#f1f3f4', borderRadius: '10px' }}>
                            <Typography variant="h5" className="mb-0">
                                {String(timeLeft.seconds).padStart(2, '0')}
                            </Typography>
                        </div>
                        <Typography variant="body2" className="text-muted">
                            Seconds
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default EventDate;
