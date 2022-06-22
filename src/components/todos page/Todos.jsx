import React from 'react'
import "./todos.css";

const Todos = () => {
  return (
    <div className="todos">
      <section className="todos-top">
        <h1 className="schedule-day">Today's schedule</h1>
        <span className="schedule-date">Thursday 11</span>
      </section>

      <div className="todos-displaycontainer">
        <section className="todos-middle">
          <div className="todos-reminder">
            <p className='tr-texts'>Wake up Buddy</p><i className="tr-time">7:00 AM</i>
          </div>
          <div className="todos-reminder">
            <p className='tr-texts'>Morning Yoga</p><i className="tr-time">8:00 AM</i>
          </div>
        </section>

        <section className="todos-bottom">
          <div className="tr-upcoming-reminders">
            <div className="tr-upcoming-reminderscontainer">
              <h4 className="todos-title">Daily Workouts</h4>
              <ul>
                <li>Squat 10x3</li>
                <li>Pull ups 10x3</li>
                <li>Push ups 10x3</li>
              </ul>
            </div>
            <div className="tr-upcoming-reminders-time">9:00 AM</div>
          </div>

          <div className="tr-upcoming-reminders">
            <div className="tr-upcoming-reminderscontainer">
              <h4 className="todos-title">Skype Sushi</h4>
              <p className="tt">Lunch with Ally this evening!</p>
            </div>
            <div className="tr-upcoming-reminders-time">1:30 PM</div>
          </div>

          <div className="tr-upcoming-reminders">
            <div className="tr-upcoming-reminderscontainer">
              <h4 className="todos-title">Hook Up</h4>
              <p className="ttt">Seeing Tashia and her sexy twin</p>
            </div>
            <div className="tr-upcoming-reminders-time">9:00 PM</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Todos;

// fevil was here