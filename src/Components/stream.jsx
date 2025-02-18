import React, { useState, useEffect } from "react";
import "./live.css";

const LiveSports = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const [response1, response2, response3,response4] = await Promise.all([
        //fetch('https://sony-eight.vercel.app/'),
          fetch("https://raw.githubusercontent.com/drmlive/sliv-live-events/main/sonyliv.json"),
          fetch("https://fancode-two.vercel.app/"),
          fetch("https://gxr.vercel.app/"),
          
        ]);

        if (!response1.ok ||!response2.ok ||!response3.ok) {throw new Error("Failed to fetch matches");}

        const data1 = await response1.json();
        const data2 = await response2.json();
        const data3 = await response3.json();
      

        const matchesFromFirstJson = data1.matches.map((match) => ({
          match_id: match.contentId,
          match_name: match.isLive ? match.match_name : match.event_name,
          banner: match.src || "",
          stream_link: match.isLive ? match.dai_url : "",
          status: match.isLive ? "LIVE" : "UPCOMING",
          category: match.event_category || "",
          broadcast_channel: match.broadcast_channel || "",
        }));

        const matchesFromThirdJson = data2.matches.map((match) => ({
          match_id: match.match_id,
          match_name: match.status === "UPCOMING" ? "UPCOMING" : match.title,
          banner: match.src,
          stream_link:
            match.status === "UPCOMING" ? null : match.adfree_url,
          status:
            match.status === "UPCOMING" || match.status === "PAUSED"
              ? "UPCOMING"
              : "LIVE",
          date: match.startTime,
          hls: match.src,
        }));

         const matchesFromFourthJson = data3.matches.map((match) => {
           const clearkeyParts = match.clearkey_hex ? match.clearkey_hex.split(":") : [];
           const cleanedStreamLink = match.mpd_url ? match.mpd_url.replace(/\\\//g, '/') : null;
           return {
               match_id: match.game_id,
               match_name: match.title,
               banner: match.image_url,
               stream_link: match.current_state === "live" ? cleanedStreamLink : null, 
            lic_url: match.lic_url,
               lic_token: match.lic_token, 
             team_1: match.home_team,
             team_2: match.away_team,
             broadcaster: match.broadcaster,
              status: match.current_state === "live" ? "LIVE" : "UPCOMING",
               date: match.start_time.indian_time,
              end_time: match.end_time.indian_time,
               clearkey_hex_key1: clearkeyParts[0] || null, 
               clearkey_hex_key2: clearkeyParts[1] || null, 
               clearkey_base64: match.clearkey_base64,             
           };
       });

       
      

        const liveMatches = [
           
          ...matchesFromFirstJson.filter((m) => m.status === "LIVE"),
          ...matchesFromThirdJson.filter((m) => m.status === "LIVE"),
          ...matchesFromFourthJson.filter((m) => m.status === "LIVE"),
      
        ];

        const upcomingMatches = [

          ...matchesFromThirdJson.filter((m) => m.status === "UPCOMING"),
          ...matchesFromFirstJson.filter((m) => m.status === "UPCOMING"),
          ...matchesFromFourthJson.filter((m) => m.status === "UPCOMING"),
        ];

        const allMatches = [...liveMatches, ...upcomingMatches];

        setMatches(allMatches);
      } catch (err) {
        setError("Error fetching matches. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  if (loading) {
    return <div style={{ color: "white" }}>Loading matches...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <h1 className="sideheading">Live Matches</h1>
      <div id="match-container" className="play">
        {matches.map((match) => (
          <div
            key={match.match_id}
            className={`stream ${match.status === "UPCOMING" ? "UPCOMING" : ""}`}
            onClick={
              match.status === 'UPCOMING'
                  ? undefined
                  : () => {
                      if (match.stream_link && match.clearkey_hex_key1 && match.clearkey_hex_key2) {
                       const playerUrl = `https://shadowplayer.netlify.app/?manifest=${match.stream_link}&keyid=${match.clearkey_hex_key1}&key=${match.clearkey_hex_key2}&cookie=&userAgent=`;
                      window.open(playerUrl, '_blank');
                      } 
                      if (match.stream_link && match.hls) {
                          const playerUrl = `https://shadowplayer.netlify.app/?manifest=${match.stream_link}`;
                          window.open(playerUrl, "_blank");
                      } else {
                          window.open(match.stream_link, "_blank");
                      }
                  }
          }
          >
            <img src={match.banner} alt={match.match_name} />
            <h2>
              {match.status === "UPCOMING" ? (
                <>
                  {match.status} <br /> {match.date}
                </>
              ) : (
                match.match_name
              )}
            </h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default LiveSports;
