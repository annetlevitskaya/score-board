import React from 'react';
import './PlayerCard.modules.css';

class PlayerCard extends React.Component {
    render() {
        return (
            <section className="player__card_container">
                <div className="player__card">
                    <div className="player__card_avatar_box">
                        <img src="" className="player__card_avatar"/>
                    </div>
                    <h1 className="player__card_name">Player name</h1>
                    <p className="player__card_score">Score: 36</p>
                    <span className="player__card_description">
                        Cristiano Ronaldo dos Santos Aveiro GOIH ComM (Portuguese pronunciation: [kɾiʃˈtjɐnu ʁɔˈnaɫdu]; born 5 February 1985) is a Portuguese professional footballer who plays as a forward for Premier League club Manchester United and captains the Portugal national team
                    </span>
                    <button className="player__card_btn">
                        Close
                    </button>
                </div>
            </section>
        )
    }
}

export default PlayerCard;