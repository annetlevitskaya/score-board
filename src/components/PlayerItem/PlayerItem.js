import React from 'react';
import './PlayerItem.modules.css';

class PlayerItem extends React.Component {

    render() {
        return (
            <section className="player__row">
                <div className="player__row_left">
                    <div className="player__row_avatar_box">
                        <img src="" className="player__row_avatar"/>
                    </div>
                    <p className="player__row_name">Player name</p>
                </div>
                <div className="player__row_score">
                    21
                </div>
            </section>
        )
    }
}

export default PlayerItem;