import React from 'react';
import './PlayerItem.modules.css';

const sortByASC = (first, second) => {
    return second?.score - first?.score;
};
const sortByDESC = (first, second) => {
    return first?.score - second?.score;
};


class PlayerItem extends React.Component {
    state = {
        players: [],
        sortType: 'ASC',
    };

    componentDidMount() {
        const source = new EventSource('http://localhost:5000/');
        source.onmessage = e => {
            this.addPlayer(JSON.parse(e.data));
        };
    }

    addPlayer = player => this.setState(({ players }) => ({
        players: [...players, player]
    }))

    render() {
        const { players, sortType } = this.state; 
        const sortedPlayerList = players.sort(sortType === 'ASC' ? sortByASC : sortByDESC);

        return sortedPlayerList.map(player => (
            <section className="player__row">
                <div className="player__row_left">
                    <div className="player__row_avatar_box">
                        <img src={player?.avatar} className="player__row_avatar"/>
                    </div>
                    <p className="player__row_name">{player?.name}</p>
                </div>
                <div className="player__row_score">
                    {player?.score}
                </div>
            </section>
        ))
    }
}

export default PlayerItem;