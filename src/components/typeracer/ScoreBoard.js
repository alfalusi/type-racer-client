import React from 'react';

const getScoreBoard = (players) => {
    const scoreBoard = players.filter(player => player.WPC !== -1);
    return scoreBoard.sort((a, b) => a.WPM > b.WPM ? -1 : b.WPM > a.WPM ? 1 : 0);
};

const ScoreBoard = ({players}) => {

    const scoreBoard = getScoreBoard(players);

    if (scoreBoard.length === 0) {
        return null;
    }

    return (
        <div>
            <h4>Score Board</h4>
            <table className='table table-striped my-3'>
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>User</th>
                        <th scope='col'>WPM</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        scoreBoard.map((player, index) => {
                            return <tr key={index}>
                                <th scope='row'>{index +1}</th>
                                <td>{player.nickname}</td>
                                <td>{player.WPM}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

        </div>
    )
};

export default ScoreBoard;