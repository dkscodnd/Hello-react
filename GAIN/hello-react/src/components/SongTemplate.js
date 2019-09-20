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
            <div className="list-head">
                <div>노래 신청 목록</div>
            </div>
            <div className="list-body">
            <table>
                <thead>
                <th>노래</th>
                <th>신청</th>
                </thead>
            </table>
            </div>
        </main>
    );
};

export default SubmitSong;