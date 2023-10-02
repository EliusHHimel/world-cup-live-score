import React, { useEffect, useState } from 'react';

const MatchList = () => {
  const [matches, setMatches] = useState([]);
  // const [matchScore, setMatchScore] = useState({});
  const today = new Date();
  const currentDate = JSON.stringify(today).slice(1, 11);

  useEffect(() => {
    fetch(`https://cricketapi-icc.pulselive.com/fixtures?startDate=${currentDate}&endDate=${currentDate}`)
      .then(response => response.json())
      .then(data => {
        setMatches(data.content);
        // console.log(data.content[1]);  
      });
  }, [currentDate]);

  // let singleMatch = matches.content[0];
  console.log(matches[0]);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  // console.log(tournamentLabel, matchLabel, matchID, venue, date, time);
  return (
    <div style={
      {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignContent: 'center',
      }
    }>
      {
        matches.map(match => {
          const { tournamentLabel, matchLabel, scheduleEntry, matchDate } = match;
          return (
            <div key={scheduleEntry.matchId.id} style={

              {
                background: "linear-gradient(90deg, #04064dd8 0%, #FE1448 100%)",
                color: '#fff',
                padding: '1rem',
                borderRadius: '1rem',
                width: '300px',
              }
            }>
              <h2>{tournamentLabel}</h2>
              <h3>{matchLabel}</h3>
              <p>{matchDate.toLocaleDateString(undefined, options)}</p>
              <p>{scheduleEntry.venue.fullName}</p>
              <p>{scheduleEntry.matchId.id}</p>
              <p>{scheduleEntry.team1.team.fullName}</p>
            </div>
          );
        })
      }
    </div>
  );
};

export default MatchList;