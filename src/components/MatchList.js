import React, { useState } from 'react';

const MatchList = () => {
    const [matches, setMatches] = useState([]);
    const [matchScore, setMatchScore] = useState({});
    const today = new Date();
    const currentDate = JSON.stringify(today).slice(1, 11);
    const reqHead = {
        headers: {
          accept: "*/*",
          "accept-language": "en-US,en;q=0.9",
          account: "ICC",
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          "sec-ch-ua":
            '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
        },
        referrer: "https://www.icc-cricket.com/",
        referrerPolicy: "strict-origin-when-cross-origin",
        body: null,
        method: "GET",
        mode: "cors",
        credentials: "omit",
      }
        fetch(`https://cricketapi-icc.pulselive.com/fixtures?startDate=${currentDate}&endDate=${currentDate}`, reqHead)
            .then(response => response.json())
            .then(data => {
                setMatches(data);
                console.log(data);
            });
    
     let singleMatch = matches.content[0];
     console.log(singleMatch);

    // console.log(tournamentLabel, matchLabel, matchID, venue, date, time);
    return (
        <div>

        </div>
    );
};

export default MatchList;