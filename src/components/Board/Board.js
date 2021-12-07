import './Board.modules.css';
import arrow from '../../img/arrow.svg';
import PlayerItem from '../PlayerItem/PlayerItem.js';

function Board() {
    return (
        <section className="board">
            <span className="board__players--empty">No players available</span>
            <div className="board__header">
                <p className="board__header_label">Player’s name</p>
                <p className="board__header_score">
                    <img src={arrow} className="board__header_score_arrow" />
                    Score
                </p>
            </div>
            <PlayerItem />
        </section>
    );
}

export default Board;