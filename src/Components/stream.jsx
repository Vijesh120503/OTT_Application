import React, { useState, useEffect } from "react";
import "./live.css";

const FT = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const [response1, response2, response3, response4] = await Promise.all([
        // fetch('https://shadow-1205-hotstar.vercel.app/'), 
        //fetch('https://sony-eight.vercel.app/'),
          fetch("https://raw.githubusercontent.com/drmlive/sliv-live-events/main/sonyliv.json"),
          fetch("https://jiocinema-livid.vercel.app/"),
          fetch("https://fancode-two.vercel.app/"),
          fetch("https://gxr.vercel.app/"),
        ]);

        if (!response1.ok ||!response2.ok ||!response3.ok ||!response4.ok) {throw new Error("Failed to fetch matches");}

        const data1 = await response1.json();
        const data2 = await response2.json();
        const data3 = await response3.json();
        const data4 = await response4.json();

         {/* const matchesFromHotstar = data1.matches
            .filter(match => match.m3u8_url) // Filter only live matches
             .map((match) => ({
                 match_id: match.match_id || 'unknown',
                 match_name: match.title || 'Unnamed Match',
                banner: match.image_urls?.['4k'] || "",
               stream_link: match.m3u8_url || null,
                 status: match.status === 'upcoming' ? "UPCOMING" : "LIVE",
              
            })); */}

                // Normalize the match data for each JSON
            {/*const matchesFromFirstJson = data1.matches.map((match) => ({
            match_id: match.contentId,
            match_name: match.hmac_url !== null ? match.episodeTitle : `UPCOMING - ${match.title}`,
            banner: match.landscapeThumb,
            stream_link: match.portraitThumb.includes("tam_tel")
                ? "https://dai.google.com/ssai/event/x4LxWUcVSIiDaq1VCM7DSA/master.m3u8"
                : match.title.startsWith("WWE") ||  match.title.startsWith("HOCKEY") 
                ? "https://dai.google.com/ssai/event/x4LxWUcVSIiDaq1VCM7DSA/master.m3u8"
                : match.pub_url,
            team_1: match.homeTeam || "",
            team_2: match.awayTeam || "",
            team_1_flag: "",
            team_2_flag: "",
            status: match.hmac_url !== null ? "LIVE" : "UPCOMING",
            category: match.event_category || "",
            broadcast_channel: match.broadcastChannel || "",
            date: match.hmac_url !== null
                ? "Live Now"
                : match.title.split("-").pop().trim(),
        }));*/}

        // Normalize the data from each JSON response
        const matchesFromFirstJson = data1.matches.map((match) => ({
          match_id: match.contentId,
          match_name: match.isLive ? match.match_name : match.event_name,
          banner: match.src || "",
          stream_link: match.isLive ? match.pub_url : "",
          status: match.isLive ? "LIVE" : "UPCOMING",
          category: match.event_category || "",
          broadcast_channel: match.broadcast_channel || "",
          
        }));

        const matchesFromSecondJson = data2.map((match) => ({
          match_id: match.id,
          match_name:
            match.status === "upcoming" ? "Upcoming" : match.title,
          banner: match.logo,
          stream_link:
            match.link === "URL not found" ? null : modifyUrl(match.link),
          status: match.status === "upcoming" ? "UPCOMING" : "LIVE",
          hls:match.link;
        }));

        const matchesFromThirdJson = data3.matches.map((match) => ({
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
          hls:match.src;
        }));

        const matchesFromFourthJson = data4.matches.map((match) => ({
          match_id: match.game_id,
          match_name: match.title,
          banner: match.image_url,
          stream_link:
            match.current_state === "live" ? match.mpd_url : null,
          status: match.current_state === "live" ? "LIVE" : "UPCOMING",
          date: match.start_time.indian_time,
        }));

        // Combine matches with specified priority order
        const liveMatches = [
            //...matchesFromHotstar,
          ...matchesFromFirstJson.filter((m) => m.status === "LIVE"),
          ...matchesFromSecondJson.filter((m) => m.status === "LIVE"),
          ...matchesFromThirdJson.filter((m) => m.status === "LIVE"),
          ...matchesFromFourthJson.filter((m) => m.status === "LIVE"),
        ];

        const upcomingMatches = [
            //...matchesFromHotstar,
          ...matchesFromThirdJson.filter((m) => m.status === "UPCOMING"),
          ...matchesFromFirstJson.filter((m) => m.status === "UPCOMING"),
          ...matchesFromFourthJson.filter((m) => m.status === "UPCOMING"),
          ...matchesFromSecondJson.filter((m) => m.status === "UPCOMING"),
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
            className={`stream ${
              match.status === "UPCOMING" ? "UPCOMING" : ""
            }`}
            onClick={() => {
              if (match.stream_link) {
                window.open(match.stream_link, "_blank");
              }
            }}
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

export default FT;

// Helper function to modify URLs
function modifyUrl(url) {
  if (!url) return null;
  const strippedUrl = url.split("?")[0];
  const withoutP = strippedUrl.replace("sportsp", "sports");
  return withoutP.replace(".jiocinema", "-cf.jiocinema");
}
