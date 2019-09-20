import React from 'react';
import './SongTemplate.css';

const SubmitSong = ({form, children}) => {
    return (
        <main className="Song-template">
            <div class="title">
                기상송 노래 신청
            </div>
            <section className="form">
                {form}
            </section>
            <section className="children">
                { children }
            </section>
        </main>
    );
};

export default SubmitSong;