import React, { useState, useEffect } from 'react'; 
import './live.css';

const FT = () => {
    const [matches, setMatches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMatches = async () => {
            try {
                const [response1, response2, response3,response4,response5] = await Promise.all([
                     fetch('https://shadow-1205-hotstar.vercel.app/'), 
                    fetch('https://sony-eight.vercel.app/'),
                    fetch('https://jiocinema-livid.vercel.app/'),
                    fetch('https://fancode-two.vercel.app/'),
                   fetch('https://gxr.vercel.app/'),
                    
                ]);

                if (!response1.ok || !response2.ok || !response3.ok || !response4.ok) {
                    throw new Error("Failed to fetch matches");
                }

                const data1 = await response1.json();
                const data2 = await response2.json();
                const data3 = await response3.json();
                const data4 = await response4.json(); // New API data
                const data5 = await response5.json(); // New API data

                  const matchesFromHotstar = data1.matches
            .filter(match => match.m3u8_url) // Filter only live matches
             .map((match) => ({
                 match_id: match.match_id || 'unknown',
                 match_name: match.title || 'Unnamed Match',
                banner: match.image_urls?.['4k'] || "",
               stream_link: match.m3u8_url || null,
                 status: match.status === 'upcoming' ? "UPCOMING" : "LIVE",
              
            }));

                // Normalize the match data for each JSON
                const matchesFromFirstJson = data2.matches.map((match) => ({
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
}));

const matchesFromThirdJson = Array.from(
    new Map(
        data3.map((match) => [
            match.id, // Use `match.id` as the unique key
            {
                match_id: match.id,
                match_name: match.status === 'upcoming' ? 'Upcoming' : match.title,
                banner: match.logo,
                stream_link:match.link === 'URL not found' ? 'https%3A%2F%2Fottb.live.cf.ww.aiv-cdn.net%2Flhr-nitro%2Flive%2Fclients%2Fdash%2Fenc%2Fwf8usag51e%2Fout%2Fv1%2Fbd3b0c314fff4bb1ab4693358f3cd2d3%2Fcenc.mpd&keyid=ae26845bd33038a9c0774a0981007294&key=63ac662dde310cfb4cc6f9b43b34196d&cookie=&userAgent=' : modifyUrl(match.link),
                team_1: "",
                team_2: "",
                team_1_flag: "",
                team_2_flag: "",
                status: match.status === 'upcoming' ? "UPCOMING" : "LIVE",
                hls: match.logo,
            }
        ])
    ).values() // Extract only the values (unique matches)
);
;
                
                // Helper function to modify the URL
                function modifyUrl(url) {
                    if (!url) return null; // Handle null or undefined URLs
                
                    // Strip parameters if present
                    const strippedUrl = url.split('?')[0];
                
                    // Check if the URL is already in the desired format
                    if (strippedUrl.includes('-cf.jiocinema.com')) {
                        return strippedUrl; // Leave it as is
                    }
                
                    // Remove 'p' from 'sportsp'
                    const withoutP = strippedUrl.replace('sportsp', 'sports');
                
                    // Add '-cf' before '.jiocinema'
                    const finalUrl = withoutP.replace('.jiocinema', '-cf.jiocinema');
                
                    return finalUrl;
                }

            const matchesFromSecondJson = data4.matches.map((match) => ({
                    match_id: match.match_id,
                    match_name: match.status === 'UPCOMING' ? 'UPCOMING' : match.title,
                    banner: match.src,
                    stream_link: match.status === 'UPCOMING' ? null : match.adfree_url,
                    team_1: match.team_1,
                    team_2: match.team_2,
                    team_1_flag: match.team_1_flag,
                    team_2_flag: match.team_2_flag,
                    status: match.status === 'UPCOMING' || match.status === 'PAUSED' ? "UPCOMING" : "LIVE",
                    date: match.startTime,
                    hls:match.startTime,
                }));

                // Normalize data from the new API (fourth JSON)
                  const matchesFromFourthJson = data5.matches.map((match) => {
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

                // Combine and sort matches
                const allMatches = [
                    ...matchesFromHotstar,
                    ...matchesFromFirstJson,
                    ...matchesFromThirdJson,
                    ...matchesFromSecondJson,
                   ...matchesFromFourthJson, // Include new API data
                ].sort((a, b) => {
                    if (a.status === "LIVE" && b.status !== "LIVE") return -1;
                    if (a.status !== "LIVE" && b.status === "LIVE") return 1;
                    return 0;
                });

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
       return <div style={{ color: 'white' }}>Loading matches...</div>;

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
                        className={`stream ${match.status === 'UPCOMING' ? 'UPCOMING' : ''}`}
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
                            {match.status === 'UPCOMING' ? (
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
