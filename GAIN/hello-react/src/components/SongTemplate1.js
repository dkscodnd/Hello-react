import React from 'react';
import './SongTemplate1.css';

const SubmitSong1 = ({form, children}) => {
    return (
        <div>
            <div className="list-head">
                <div>노래 신청 목록</div>
            </div>
            <div className="list-body">
            <table className="musicTable">
                <thead>
                <th width="270">노래이름</th>
                <th width="170">아티스트</th>
                <th width="70">승인</th>
                <th width="90">신청자</th>
                <th width="100">링크</th>
                </thead>
            </table>
            </div>
        </div>
    );
};

export default SubmitSong1;