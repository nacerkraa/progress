import React, { useState } from 'react';

function Home({ progressPer, dayDiff }) {
    const defaultDate = localStorage.getItem("date") ? localStorage.getItem("date") : new Date('2023-11-13');
    const [date, setDate] = useState(new Date());
    const [startDate, setStartDate] = useState(defaultDate);
    const end = new Date();
    const start = new Date(startDate);

    function getDays() {
        const dayNubmers = dayDiff(start, end);
        return dayNubmers;
    }

    function getPer() {
        const dayNubmers = dayDiff(start, end);
        let daysPer = progressPer(dayNubmers);
        return daysPer;
    }

    function handleSubmit(event) {
        event.preventDefault();
        localStorage.setItem("date", date);
        setStartDate(date);
    }

    return (
        <div className='home'>
            <div className='container'>
                <h2 style={{ textAlign: "center" }}> My Goal</h2>
                <form onSubmit={handleSubmit} className='date-form'>
                    <input className='input-date' type="date" value={date} onChange={(e) => setDate(e.target.value)} min="2005-01-01" max={new Date()}></input>
                    <input type="submit" value="Submit" />
                </form>

                <div className="home-container">
                    <h2 className='testTitle'>Number of days: {getDays()}</h2>
                    <h2 className='testTitle'>Your progress: {getPer()}%</h2>
                    <h2 className='testTitle'>Your date: {localStorage.getItem("date")}</h2>
                    <div className='progress-bar'><div className='progress' style={{ width: getPer() + "%" }}></div></div>
                </div>
            </div>
        </div>
    )
}

export default Home;