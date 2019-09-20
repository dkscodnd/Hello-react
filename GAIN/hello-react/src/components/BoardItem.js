import React from 'react';

class BoardItem extends React.Component {
    render() {
        return (
            <tr>
                <td width="270">{this.props.row.brdno}</td>
                <td width="170">{this.props.row.brdwriter}</td>
                <td width="70">{this.props.row.brdtitle}</td>
                <td width="90">{this.props.row.brddsin}</td>
                <td width="100"><a href={this.props.row.brdlink}>링크</a></td>
            </tr>
        );
    }
}

export default BoardItem;