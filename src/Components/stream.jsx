import React, { useState, useEffect } from "react";
import "./live.css";

const FT = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const [response1, response2, response3,response4,response5] = await Promise.all([
        //fetch('https://sony-eight.vercel.app/'),
          fetch("https://raw.githubusercontent.com/drmlive/sliv-live-events/main/sonyliv.json"),
          fetch("https://jiocinema-livid.vercel.app/"),
          fetch("https://fancode-two.vercel.app/"),
          fetch("https://gxr.vercel.app/"),
          fetch("https://cric-aus.vercel.app/")
        ]);

        if (!response1.ok ||!response2.ok ||!response3.ok) {throw new Error("Failed to fetch matches");}

        const data1 = await response1.json();
        const data2 = await response2.json();
        const data3 = await response3.json();
        const data4 = await response4.json();
        const data5 = await response5.json();


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
          stream_link: match.isLive ? match.dai_url : "",
          status: match.isLive ? "LIVE" : "UPCOMING",
          category: match.event_category || "",
          broadcast_channel: match.broadcast_channel || "",
        }));

const matchesFromSecondJson = Array.from(
    new Map(
        data2.map((match) => [
            match.id || 'unknown', // Use `match.id` or 'unknown' as the unique key
            {
                match_id: match.id || 'unknown',
                match_name: match.title || 'Unnamed Match',
                banner: match.logo || '',  // Use `logo` as the banner for display
                stream_link: match.link === 'URL not found' 
                    ? 'https://ottb.live.cf.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/wf8usag51e/out/v1/bd3b0c314fff4bb1ab4693358f3cd2d3/cenc.mpd&keyid=ae26845bd33038a9c0774a0981007294&key=63ac662dde310cfb4cc6f9b43b34196d&cookie=&userAgent=' 
                    : modifyUrl(match.link), // Use `modifyUrl` for valid `match.link`
                hls: match.logo || '',  // Assuming `match.hls` should be used for HLS data
               status: "LIVE",
            }
        ])
    ).values() // Extract only the values (unique matches)
);


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
          hls: match.src,
        }));

         const matchesFromFourthJson = data4.matches.map((match) => {
           const clearkeyParts = match.clearkey_hex ? match.clearkey_hex.split(":") : [];
           const cleanedStreamLink = match.mpd_url ? match.mpd_url.replace(/\\\//g, '/') : null;
           return {
               match_id: match.game_id,
               match_name: match.title,
               banner: match.image_url,
               stream_link: match.current_state === "live" ? cleanedStreamLink : null, // Livestream URL for live matches
            lic_url: match.lic_url, // Licensing URL for DRM content
               lic_token: match.lic_token, // DRM token for secure streaming
             team_1: match.home_team,
             team_2: match.away_team,
             broadcaster: match.broadcaster,
              status: match.current_state === "live" ? "LIVE" : "UPCOMING",
               date: match.start_time.indian_time,
              end_time: match.end_time.indian_time,
               clearkey_hex_key1: clearkeyParts[0] || null, // First part before the colon
               clearkey_hex_key2: clearkeyParts[1] || null, // Second part after the colon
               clearkey_base64: match.clearkey_base64, // If using ClearKey for DRM            
           };
       });

       const matchesFromFifthJson = data5.fixtures.flatMap((fixture) => {
         return fixture.streams
           .filter((stream) => {
             // Ensure streamName exists before calling toLowerCase()
            const containsCricket = stream.streamName?.toLowerCase().includes("cricket");
             const isUpcomingOrLive = stream.status === "UPCOMING" || stream.status === "LIVE" || stream.status === "Match Completed";
             return containsCricket && isUpcomingOrLive;
           })
           .map((stream) => {
             return {
              match_id: fixture.fixtureId,
             match_name: stream.status === "UPCOMING" ? "UPCOMING" : fixture.matchName,
              banner: fixture.competitionImageUrl,
              stream_link: stream.status === "UPCOMING" ? null : stream.stream_url,
              status: stream.status, // Keep original status, including "Match Completed"
              date: stream.startTime,
              hls: fixture.competitionImageUrl, // Ensure correct HLS URL usage
      };
           });
       });
      
      
      

        // Combine matches with specified priority order
        const liveMatches = [
            //...matchesFromHotstar,
          ...matchesFromFirstJson.filter((m) => m.status === "LIVE"),
          ...matchesFromSecondJson.filter((m) => m.status === "LIVE"),
          ...matchesFromThirdJson.filter((m) => m.status === "LIVE"),
          ...matchesFromFourthJson.filter((m) => m.status === "LIVE"),
          ...matchesFromFifthJson.filter((m) => m.status === "LIVE"),
        ];

        const upcomingMatches = [
            //...matchesFromHotstar,
          ...matchesFromThirdJson.filter((m) => m.status === "UPCOMING"),
          ...matchesFromFirstJson.filter((m) => m.status === "UPCOMING"),
          ...matchesFromFourthJson.filter((m) => m.status === "UPCOMING"),
          ...matchesFromSecondJson.filter((m) => m.status === "UPCOMING"),
          ...matchesFromFifthJson.filter((m) => m.status === "UPCOMING"),
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

export default FT;

// Helper function to modify URLs
function modifyUrl(url) {
  if (!url) return null;
  const strippedUrl = url.split("?")[0];
  const withoutP = strippedUrl.replace("sportsp", "sports");
  return withoutP.replace(".jiocinema", "-cf.jiocinema");
}
