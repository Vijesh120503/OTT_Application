
import React, { useEffect, useState, useRef } from 'react';
import './live.css';
const stream = [
 //{name:'CCL',image:'https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/9101/1739461999101-h',link:'https://live.drmlive-02.workers.dev/sliv/ten3hd.m3u8'},
//{name:'BRH vs SYS',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkaNjFqHKLIoqmOhx8KSXXG69AhjEngPkNZHCBjqrXRUa67hy8CHLMW1dA&s=10',link:'https://s.bdixtv24.com/sportstv.php?c=skyscric'},
// {name:'2nd T20',image:'https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/7822/1737535877822-h',link:'https://tsneh.vercel.app/tnt1-shadow'},
 // {name:'JSK vs PR',image:'https://img10.hotstar.com/image/upload/f_auto,q_90,w_2048/sources/r1/cms/prod/532/1735025930532-a',link:'https://tapmadtv.live/play.php?c=willowusa'},
 // {name:'AUSW vs ENGW',image:'https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/75/1738148190075-h',link:'https://tsneh.vercel.app/tnt1-shadow'},
//https://darshan.glitch.me/play.html?manifest=https%3A%2F%2Famg01269-amg01269c1-willowtv-us-5479.playouts.now.amagi.tv%2Fplaylist%2Famg01269-willowtvfast-willowplus-willowtvus%2Fplaylist.m3u8&drmToggle=false&drmType=clearkey&keyId=&key=&licenseUrl=
  ];
  
const movies = [
         {name:'Neek',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY5SY-sePmPC0EbIoPKyBYSPPgL4Og3ca37DmreY7m5QeiH0SwoinuH1Q&s=10',link:'https://shadow-movies.netlify.app/?manifest=https://dls3.mrfooll.xyz/AgADbi3684453'},
        {name:'Dragon',image:'https://assetscdn1.paytm.com/images/cinema/Dragon-galery-08d794a0-cc0a-11ef-912e-2154ccd78c0a.jpg',link:'https://shadow-movies.netlify.app/?manifest=https://pub-18418916b5a34df9a73eee4ebcfb4b64.r2.dev/Dragon%20(2025)%20Tamil%20HQ%20PreDVD%20-%20x264%20-%20HQ%20Clean%20Audio%20-%20AAC%20-%20700MB.mkv'},
 {name:'Captain America',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUJsXek9A0mAYunJEITCnwbCjVzf8tugDQENOsxbOVlGa_JmGFu4kMSkU&s=10',link:'https://shadow-movies.netlify.app/?manifest=https%3A%2F%2Fs07.dubshare.one%2FCaptain_America_Brave_New_World_2025_360p_PreDVD.mp4'},
 {name:'Vidamuyarchi',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmqwIXRVFB8gSJHU5ULuBhTE7qo4tIEWHBIA&usqp=CAU',link:'https://shadow-movies.netlify.app/?manifest=https://pub-18418916b5a34df9a73eee4ebcfb4b64.r2.dev/Vidaamuyarchi%20(2025)%20Tamil%20v2%20HDRip%20-%20x264%20-%20(AAC%202.0)%20-%20700MB%20-%20HC-ESub.mkv'},
{name:'Thandel',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRppQKLkGTsxaPv9ECnI3dm27xFsxI9mxJCPuN334N1v3Dc3tO7ImiFmfx&s=10',link:'https://shadow-movies.netlify.app/?manifest=https://pub-18418916b5a34df9a73eee4ebcfb4b64.r2.dev/Vidaamuyarchi%20(2025)%20Tamil%20v2%20HDRip%20-%20x264%20-%20(AAC%202.0)%20-%20700MB%20-%20HC-ESub.mkv'},
 {name:'Mr.Housekeeping',image:'https://assetscdn1.paytm.com/images/cinema/Mr.HouseKeeping--Gallery-a0e7d350-aafd-11ef-8bec-85ca743197e0.jpg',link:'https://shadow-movies.netlify.app/?manifest=https://pub-18418916b5a34df9a73eee4ebcfb4b64.r2.dev/Mr%20House%20Keeping%20(2025)%20Tamil%20HQ%20PreDVD%20-%20x264%20-%20HQ%20Clean%20Audio%20-%20MP3%20-%20700MB.mkv'},
        {name:'Kudumbasthan',image:'https://assetscdn1.paytm.com/images/cinema/Kudumbasthan-Poster-a4577dc0-d7e3-11ef-83bf-1dede4761f84.jpg',link:'https://shadow-movies.netlify.app/?manifest=https://pub-18418916b5a34df9a73eee4ebcfb4b64.r2.dev/Kudumbasthan%20(2025)%5BTamil%20-%20V2%20HQ-Real%20PreDVDRip%20-%20x264%20-%20AAC%20-%20700MB%20-%20HQ%20Line%20Audio%5D.mkv'},
        {name:'Bottle Radha',image:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/14b98b211395965.672221259a2ca.jpg',link:'https://shadow-movies.netlify.app/?manifest=https://pub-18418916b5a34df9a73eee4ebcfb4b64.r2.dev/Bottle%20Radha%20(2025)%20Tamil%20HQ%20PreDVD%20-%20x264%20-%20HQ%20Clean%20Aud%20-%20700MB%20-%20HC-ESub.mkv'},
{name:'Kathalikka Neramillai',image:'https://tse2.mm.bing.net/th?id=OIP.3A5tCwOyrjVTh1tjVpmd0QHaDt&pid=Api&P=0&h=220',link:'https://shadow-movies.netlify.app/?manifest=https://pub-18418916b5a34df9a73eee4ebcfb4b64.r2.dev/Kadhalikka%20Neramillai%20(2025)%20Tamil%20HQ%20HDRip%20-%20x264%20-%20AAC%20-%20700MB%20-%20ESub.mkv'},
 {name:'Idendity',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu1Mf57tZUSAyjMoeruC3h2OtHKzEjFrtwAOjGtBlTAVqnDmI0pkCPzJe2&s=10',link:'https://shadow-movies.netlify.app/?manifest=https://dls3.mrfooll.xyz/AgADlB3513204'},
        {name:'Vanangaan',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWLRwf4wNzWB6EaievUesfVk75IZKVsDHXIg&usqp=CAU',link:'https://shadow-movies.netlify.app/?manifest=https://pub-18418916b5a34df9a73eee4ebcfb4b64.r2.dev/Vanangaan%20(2025)%20Tamil%20HDRip%20-%20x264%20-%20AAC%20-%20700MB.mkv'},
        {name:'Madha Gaja Raja',image:'https://images.jdmagicbox.com/comp/jd_social/news/2018jul24/image-139962-cobm4nu9gq.jpg',link:'https://shadow-movies.netlify.app/?manifest=https://pub-18418916b5a34df9a73eee4ebcfb4b64.r2.dev/Madha%20Gaja%20Raja%20(2025)%20Tamil%20HQ%20HDRip%20-%20x264%20-%20AAC%20-%20700MB.mkv'},
        {name:'Thiru Manickam',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGTCw5Ktxd-t70okCzWMUKEeUTQT_f4SXCuw&usqp=CAU',link:'https://shadow-movies.netlify.app/?manifest=https://pub-18418916b5a34df9a73eee4ebcfb4b64.r2.dev/Thiru.Manickam%20(2024)%20Tamil%20HQ%20HDRip%20-%20x264%20-%20AAC%20-%20700MB%20-%20ESub.mkv'},
        {name:"Alangu",image:'https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FvIGm5rPFd5mSnrzdrtKi7VoxpQj.jpg',link:'https://shadow-movies.netlify.app/?manifest=https://pub-18418916b5a34df9a73eee4ebcfb4b64.r2.dev/Alangu%20(2024)%20Tamil%20HQ%20HDRip%20-%20x264%20-%20AAC%20-%20700MB%20-%20ESub.mkv'},
        {name:"The Smile Man",image:'https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fp8J4IroY8tzRrtEckuetnMKLc42.jpg',link:'https://shadow-movies.netlify.app/?manifest=https://pub-18418916b5a34df9a73eee4ebcfb4b64.r2.dev/The%20Smile%20Man%20(2024)%20Tamil%20HQ%20HDRip%20-%20x264%20-%20AAC%20-%20700MB.mkv'},
        {name:'Viduthalai 2', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX7lrsHalT6c2XvmrNbOO3a3f0YFbKbpT5JEGyR1C00KhvdEShO9diMbw&s=10',link:'https://shadow-movies.netlify.app/?manifest=https://pub-18418916b5a34df9a73eee4ebcfb4b64.r2.dev/Viduthalai%20Part%202%20(2024)%20Tamil%20HQ%20HDRip%20-%20x264%20-%20AAC%20-%20700MB%20-%20ESub.mkv'}, 
       {name:'Miss You', image:'https://m.media-amazon.com/images/M/MV5BZjFlOTg1MDUtYTMwOS00MDBlLWE4ZjAtZjAzZWJjYzEyZWNjXkEyXkFqcGc@._V1_.jpg',link:'https://shadow-movies.netlify.app/?manifest=https://pub-18418916b5a34df9a73eee4ebcfb4b64.r2.dev/Miss%20You%20(2024)%20Tamil%20HQ%20HDRip%20-%20x264%20-%20AAC%20-%20700MB%20-%20ESub.mkv'}, 
      {name:'Soodhu Kavvum 2',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF5A5s85hmdSY-b3Wfd_nR4O7jUHobQy3uBGiESgEFmmljs5hjU7buCWmz&s=10',link:'https://shadow-movies.netlify.app/?manifest=https://pub-18418916b5a34df9a73eee4ebcfb4b64.r2.dev/Soodhu%20Kavvum%202%20(2024)%20Tamil%20HQ%20HDRip%20-%20x264%20-%20AAC%20-%20700MB%20-%20ESub.mkv'},

];
const others = [
  {name:'Sports',image:'https://raw.githubusercontent.com/vijesh0512/image/refs/heads/main/file-7WwFgYwgnfoP5MX5MbGAHc.webp',link:'Sports'},
  { name: 'Songs', image: 'https://raw.githubusercontent.com/vijesh0512/image/refs/heads/main/DALL%C2%B7E%202024-09-21%2012.26.50%20-%20A%20close-up%20of%20a%20black%20and%20white%20pitbull%20dog%20wearing%20a%20gold%20chain.%20The%20dog%20is%20sitting%20indoors%20and%20smiling%20with%20its%20tongue%20slightly%20out.%20The%20white%20fur%20o.webp', link: 'Albums' },
 { name: 'TV', image: 'https://raw.githubusercontent.com/vijesh0512/image/refs/heads/main/DALL%C2%B7E%202024-09-21%2012.38.22%20-%20A%20close-up%20of%20a%20black%20and%20white%20pitbull%20dog%20wearing%20a%20gold%20chain%2C%20sitting%20on%20a%20cozy%20couch%20in%20a%20modern%20living%20room.%20The%20dog%20is%20watching%20TV%2C%20with%20a%20colo.webp', link: 'TV' },
  //{ name: 'Kids', image: 'https://github.com/vijesh0512/image/blob/main/e9cf8cc9-062e-4f62-8186-777aa9db4e6a_2.jpeg?raw=true', link: 'Kids' },
  { name: 'Series', image: 'https://github.com/vijesh0512/image/blob/main/67dfdc92-1649-4b36-8656-a408f747b91e_3.jpeg?raw=true', link: 'Series' },
  { name: 'Video Songs', image: 'https://raw.githubusercontent.com/vijesh0512/image/refs/heads/main/DALL%C2%B7E%202024-09-28%2020.05.16%20-%20A%20black%20and%20white%20pitbull%20dog%20wearing%20a%20gold%20chain%20and%20headphones%2C%20sitting%20in%20a%20dimly%20lit%20movie%20theater%2C%20facing%20the%20large%20screen%20playing%20a%20video%20song.webp', link: 'Video-Songs' },
];
const channels = [];
const games=[{name:'Temple Run',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwO9FUyHTr8deEXzIOfJDUB0kK5UhmS1QaI4Zy9xzOm7bPgkdfTDJMgmHD&s=10',link:'https://maxamount.in/TempleRun2/'},{name:"Tic Tac Toe",image:"https://s3-alpha.figma.com/hub/file/479379372/7e6df39f-585d-4a9e-9bf3-4ef4c00f816b-cover.png",link:"https://vijesh-x-o.netlify.app/"},{name:"2048",image:"https://www.coolmathgames.com/sites/default/files/2048_OG-logo.jpg",link:"https://vijesh2048.netlify.app/"},{name:"Memory",image:"https://tcgtoys.com/cdn/shop/products/13410_LittleTikes_MatchingMemoryGame_LIFE_lr_2048x.jpg?v=1643941358",link:"https://vijesh-memory.netlify.app/"},{name:"Whack",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4I87IpLI8e_sKFuCk5XqyszNeDZfdUBADoA&usqp=CAU",link:"https://whack-me.netlify.app/"},{name:"Crossy road",image:"https://m.media-amazon.com/images/I/71zaNBSsjRL._SL500_.png",link:"https://vijesh-cross.netlify.app/"}];
const hero = [{name: "Ajith Hits",image: "https://2.bp.blogspot.com/-dByyWXSXSmc/W0226IABdvI/AAAAAAAAFiQ/P7lUEEUV2b0tdf2MC5_vJGJ41ZOnnmk_ACLcBGAs/s1600/ajith-kumar-thala-hd-photos-stylish-hd-3.jpg", audio: "https://stream.zeno.fm/qfkksd31w0hvv"}, {name: "Vijay Hits",image: "https://tse3.mm.bing.net/th?id=OIP.zJFA3xA5mT_0X2TYQNGbswHaJ4&pid=Api&P=0&h=220",audio: "https://stream.zeno.fm/2pn99a71w0hvv"},{name: "Kamal Hits",image: "https://tse3.mm.bing.net/th?id=OIP.H7SUhF_GaM0cCkF3wzj6bwHaEK&pid=Api&P=0&h=220", audio: "https://stream.zeno.fm/ya6emvmcbkhvv" },{ name: "Rajini Hits", image: "https://i2.cinestaan.com/image-bank/1500-1500/124001-125000/124001.jpg", audio: "https://stream.zeno.fm/vcn3hvqpad0uv"}, { name: "Suriya Hits",image: "https://filmfare.wwmindia.com/content/2020/oct/suriya21603690823.jpg", audio: "https://stream.zeno.fm/rzf5mbq3b48uv"},{name: "Dhanush Hits",image: "https://m.media-amazon.com/images/M/MV5BMTc5YjZlZjEtYzM1MC00ZmIwLWE0MzItNDcwOGYxYTJlMWNmXkEyXkFqcGdeQXVyNDI3NjU1NzQ@._V1_FMjpg_UX1000_.jpg",audio: "https://stream.zeno.fm/aqp97f3z238uv"}, {name: "Simbhu Hits",image: "https://images.tv9telugu.com/wp-content/uploads/2023/03/simbu-7.jpg", audio: "https://stream.zeno.fm/8kgd85rx338uv"},];
const md = [{name:"Anirudh Hits",image:"https://tse3.mm.bing.net/th?id=OIP.i5sECoDT9WGDoH4jha0ZsAHaJT&pid=Api&P=0&h=220",audio:"https://stream.zeno.fm/qdvuf5e4138uv"},{name:"Yuvan Hits",image:"https://tse1.mm.bing.net/th?id=OIP.F1rDiRaqAbH6Z46HEOufFgHaFj&pid=Api&P=0&h=220",audio:"https://stream.zeno.fm/f939szg6a48uv"},{name:"Vidhyasagar Hits",image:"https://tse3.mm.bing.net/th?id=OIP.mWdGy1U8fPpcn1E_uCVaZwAAAA&pid=Api&P=0&h=220",audio:"https://stream.zeno.fm/bb2vs3yaa48uv"},{name:"AR Rahman Hits",image:"https://tse4.mm.bing.net/th?id=OIP.dqdTVZubHJ18FeNAneManAHaE0&pid=Api&P=0&h=220",audio:"https://stream.zeno.fm/8vs416z3b48uv"},{name:"Ilayaraja Hits",image:"https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/03/13/Pictures/concert-maestro-ilayaraja-enthralled-music-lovers-first_49150ca4-2677-11e8-9f95-06a811d7e716.jpg",audio:"https://stream.zeno.fm/5u2c0yh0ekhvv"},{name:"Harris Hits",image:"https://tse2.mm.bing.net/th?id=OIP.Lo_UedSrMA7sZppCeHxR6AHaJF&pid=Api&P=0&h=220",audio:"http://154.38.171.207:8240/harris_jayaraj_R"},{name:"Imman Hits",image:"https://tse2.mm.bing.net/th?id=OIP.P6PIBIx1aL8KZyCwRLWjSAHaEJ&pid=Api&P=0&h=220",audio:"https://stream.zeno.fm/1zsd11zaa48uv"},{name:"Deva Hits",image:"https://media.maalaimalar.com/h-upload/2022/11/21/1794994-i.jpg",audio:"https://stream.zeno.fm/6cxuhfmcbkhvv"},{name:"Santhosh Narayanan Hits",image:"https://s01.sgp1.cdn.digitaloceanspaces.com/article/160519-cwovbgpzsk-1624038114.jpeg",audio:"https://stream.zeno.fm/wkqvzsg1238uv"}];
const singer =[{name:"SPB Hits",image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/01/25/952625-sp-balasubrahmanyam.jpg",audio:"https://stream.zeno.fm/ey44ycfscuhvv"},{name:"Yesudas Hits",image:"https://images.hindustantimes.com/rf/image_size_640x362/HT/p1/2014/10/02/Incoming/Pictures/1271098_Wallpaper2.jpg?",audio:"https://stream.zeno.fm/avt4e9yaa48uv"},{name:"Mano Hits",image:"https://tse3.mm.bing.net/th?id=OIP.ytp7aVTJuW0roc6BZYDvnwHaEc&pid=Api&P=0&h=220",audio:"https://stream.zeno.fm/we99zw61w0hvv"},{name:"Shankar Mahadevan",image:"https://rollingstoneindia.com/wp-content/uploads/2022/04/Shankar-Mahadevan-MCMM-JioSaavn-scaled.jpg",audio:"https://stream.zeno.fm/wpzkyefcbkhvv"},{name:"Hariharan",image:"https://tse4.mm.bing.net/th?id=OIP.efwEpa4tQ3PvlzO9xiJSDQHaFY&pid=Api&P=0&h=220",audio:"https://stream.zeno.fm/gu69vryaa48uv"},{name:"Sid Sriram",image:"https://tse2.mm.bing.net/th?id=OIP.f-muscf-ZcIBSxds-Y44nAHaFm&pid=Api&P=0&h=220",audio:"https://stream.zeno.fm/5vxa8zyaa48uv"},{name:"Shreya Goshal",image:"https://tse4.mm.bing.net/th?id=OIP.6ezYAUo-GxybZn_acBNpjgHaEK&pid=Api&P=0&h=220",audio:"https://stream.zeno.fm/czvuphmcbkhvv"},{name:"Janaki Hits",image:"https://static.india.com/wp-content/uploads/2020/06/s-janaki-dead-death-hoax-main.jpg",audio:"https://stream.zeno.fm/ewdn3pfcbkhvv"},{name:"Chitra Hits",image:"https://th-i.thgim.com/public/entertainment/music/ypb6hv/article35011959.ece/alternates/LANDSCAPE_1200/chitra5",audio:"https://stream.zeno.fm/h9vqwpmcbkhvv"}];
const Years =[{name:"70's Hits",image:"https://tse3.mm.bing.net/th?id=OIP.xCCW1hSHuGidqt6Ja_IOdQAAAA&pid=Api&P=0&h=220",audio:"https://stream.zeno.fm/694a2ab4138uv"},{name:"80's Hits",image:"https://tse2.mm.bing.net/th?id=OIP.7SyxHBp3BMQJm6nSUIocngHaHa&pid=Api&P=0&h=220",audio:"https://stream.zeno.fm/apzh64fgdq8uv"},{name:"90's Hits 1",image:"https://listenapi.s3.amazonaws.com/img/ConfigLockScreenImageUrl/185.jpg?ver=1538670706",audio:"https://stream.zeno.fm/wmg76d4zc48uv"},{name:"90's Hits 2",image:"https://listenapi.s3.amazonaws.com/img/ConfigLockScreenImageUrl/185.jpg?ver=1538670706",audio:"https://stream.zeno.fm/ss2u9f27a48uv"},{name:"2k Hits",image:"https://1000logos.net/wp-content/uploads/2022/01/2K-Logo-2005.png",audio:"https://stream.zeno.fm/v0bu4uc1c48uv"}];
    
const Heros = ({ onNavClick,onSongChange, onAudioChange }) => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [,setCurrentAudio] = useState(null);
  const audioRef = useRef(null);

  const handlePlay = async (song) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    const newAudio = new Audio(song.audio);
    audioRef.current = newAudio;
    setCurrentAudio(newAudio); // Update current audio state
    onAudioChange(newAudio); // Notify parent component about the audio change

    try {
      await newAudio.play();
      onSongChange(song);
    } catch (error) {
      console.error("Error playing audio:", error);
    }
  };
  const renderSongs = (songsArray, containerId) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    songsArray.forEach(song => {
      const songDiv = document.createElement('div');
      songDiv.classList.add('song');
      songDiv.innerHTML = `
        <image src="${song.image}" alt="${song.name}">
        <p>${song.name}</p>
      `;
      songDiv.onclick = () => handlePlay(song);
      container.appendChild(songDiv);
    });
  };
  const rendermov = (songsArray, containerId) => {
    const container = document.getElementById(containerId);
    if (!container) return;
  
    container.innerHTML = '';
  
    songsArray.forEach(song => {
      const songDiv = document.createElement('div');
      songDiv.classList.add('song');
      songDiv.innerHTML = `
        <a href="${song.link}" target="_blank">
          <image src="${song.image}" alt="${song.name}">
        </a>
        <p>${song.name}</p>
      `;
      songDiv.onclick = () => handlePlay(song);
      container.appendChild(songDiv);
    });
  };
  const renderdog = (songsArray, containerId) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    songsArray.forEach(song => {
      const songDiv = document.createElement('div');
      songDiv.classList.add('song');
      songDiv.innerHTML = `
        <image src="${song.image}" alt="${song.name}">
        <p>${song.name}</p>
      `;
      songDiv.onclick = () => onNavClick(song.link);
      container.appendChild(songDiv);
    });
  };
  const renderchannel = (songsArray, containerId) => {
    const container = document.getElementById(containerId);
    if (!container) return;
  
    container.innerHTML = '';
  
    songsArray.forEach(song => {
      const songDiv = document.createElement('div');
      songDiv.classList.add('song');
      songDiv.innerHTML = `
        <a href="vlc://${song.link}" target="_blank">
          <img src="${song.image}" alt="${song.name}">
        </a>
        <p>${song.name}</p>
      `;
      songDiv.onclick = () => handlePlay(song);
      container.appendChild(songDiv);
    });
  };


  const fetchAndRenderMatches = async (containerId) => {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '<p style="color: white;">Loading matches...</p>';
    try {
        const [response1, response2, response3] = await Promise.all([
            fetch('https://sony-eight.vercel.app/'),
            fetch('https://fancode-two.vercel.app/'),
             fetch('https://gxr.vercel.app/'), // New API
            
        ]);
        
        if (!response1.ok && !response2.ok && !response3.ok ) {
            throw new Error('Failed to fetch matches');
        }
        
        const data1 = await response1.json();
        const data2 = await response2.json();
        const data3 = await response3.json();
       


        const matchesFromFirstJson = data1.matches
            .filter((match) => match.hmac_url !== null && match.hmac_url !== "") 
            .map((match) => ({
                match_id: match.contentId || "unknown",
                match_name: match.episodeTitle || "Unnamed Match",
                banner: match.portraitThumb || "",
                stream_link: match.portraitThumb.includes("multilang")
        ? "https://live.drmlive-02.workers.dev/sliv/ten4hd.m3u8"
         : match.title.startsWith("WWE") ? "https://live.drmlive-02.workers.dev/sliv/ten4hd.m3u8"
        : match.pub_url,
  
            }));

        const matchesFromThirdJson = data2.matches
            .filter((match) => match.status === 'LIVE')
            .map((match) => ({
                match_id: match.match_id || 'unknown',
                match_name: match.match_name || 'Unnamed Match',
                banner: match.src || '',
                stream_link: match.adfree_url || '',
              hls:match.adfree_url,
            }));


       const matchesFromFourthJson = data3.matches
        .filter((match) => match.current_state==='live') 
        .map((match) => {
             const clearkeyParts = match.clearkey_hex ? match.clearkey_hex.split(":") : [];
            const cleanedStreamLink = match.mpd_url ? match.mpd_url.replace(/\\\//g, '/') : null;
    
             return {
              match_id: match.game_id || 'unknown',
                match_name: match.title || 'Unnamed Match',
                banner: match.image_url || '',
                stream_link: cleanedStreamLink,
                 clearkey_hex_key2: clearkeyParts[1] || null, 
                 lic_url: match.lic_url,
                 lic_token: match.lic_token, 
             };
         });

         

    
        const liveMatches = [
            ...matchesFromFirstJson,
            ...matchesFromThirdJson,
           ...matchesFromFourthJson,
        ];

        container.innerHTML = '';

        // Render live matches
        if (liveMatches.length === 0) {
            container.innerHTML = '<p style="color: white;">No live matches available right now.</p>';
            return;
        }

        liveMatches.forEach((match) => {
            const matchDiv = document.createElement('div');
            matchDiv.classList.add('song');
            matchDiv.style.cursor = 'pointer'; 
            matchDiv.onclick = () => {
                if (match.stream_link && match.clearkey_hex_key1 && match.clearkey_hex_key2) {
                    const playerUrl = `https://shadowplayer.netlify.app/?manifest=${match.stream_link}&keyid=${match.clearkey_hex_key1}&key=${match.clearkey_hex_key2}&cookie=&userAgent=`;
                    window.open(playerUrl, '_blank');
                } if (match.stream_link && match.hls) {
                          const playerUrl = `https://shadowplayer.netlify.app/?manifest=${match.stream_link}`;
                          window.open(playerUrl, "_blank");
                 }
                else {
                    window.open(match.stream_link, '_blank');
                }
            };
            matchDiv.innerHTML = `
                <img src="${match.banner}" alt="${match.match_name}">
                <p>${match.match_name}</p>
            `;
            container.appendChild(matchDiv);
        });
    } catch (error) {
        container.innerHTML = '<p style="color: white;">Error fetching matches. Please try again later.</p>';
        console.error(error);
    }
};



  useEffect(() => {
    if (!selectedAlbum) {
      // rendermov(video, 'video-player');
      renderSongs(hero, 'hero-player');
      renderSongs(md, 'md-player');
      renderSongs(singer, 'singer-player');
      renderSongs(Years, 'others-player');
      rendermov(movies, 'movie-player');
      rendermov(games, 'game-player');
      rendermov(stream, 'stream-player');
    //  rendermov(channels,'live-player');
      renderchannel(channels, 'live-player');
      renderdog(others, 'dog-player');
        fetchAndRenderMatches('sports-player');
    }
  },);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <>
      {selectedAlbum ? (
        <div>
          <h1 className='sideheading'>{selectedAlbum.name} Songs</h1>
          <div className='player'>
            {selectedAlbum.songs.map(song => (
              <div key={song.name} className='song' onClick={() => handlePlay(song)}>
                <img src={song.image} alt={song.name} />
                <p>{song.name}</p>
              </div>
            ))}
          </div>
          <button className='bt' onClick={() => setSelectedAlbum(null)}>Back</button >
        </div>
      ) : (
        <>
          
 
           <div className="bt flex">
          <h1 className='sideheading'>Live Events</h1>
             <button onClick={() => onNavClick('Sports')} className='btt'>See All</button>
          </div>
         <div id='stream-player' className='player'></div>
        <div id='sports-player' className='player'></div>

          <div className="bt">
              <h1 className='sideheading'>Movies</h1>
              <button onClick={() => onNavClick('Movies')} className='btt'>See All</button>
          </div>
          <div id='movie-player' className='player'></div>

         <div className="bt">
          <h1 className='sideheading'>Games</h1>
          </div>
        <div id='game-player' className='player'></div>
        
          <div className="bt">
         <h1 className='sideheading'>Others</h1>
              {/* <button onClick={() => onNavClick('stream')} className='btt'>See All</button> */}
          </div>
          <div id='dog-player' className='player'></div>
          
          {/*<div className="bt">
              <h1 className='sideheading'>Live Tv</h1>
            <button onClick={() => onNavClick('TV')} className='btt'>See All</button>
          </div>
          <div id='live-player' className='player'></div>*/}

          {/* <h1 className='sideheading'>Video Songs</h1>
          <div id='video-player' className='player'></div> */}
          <h1 className='sideheading'>Heros (Radio)</h1>
          <div id='hero-player' className='player'></div>
          <h1 className='sideheading'>Music Directors (Radio)</h1>
          <div id='md-player' className='player'></div>
          <h1 className='sideheading'>Singers (Radio)</h1>
          <div id='singer-player' className='player'></div>
          <h1 className='sideheading'>Others(Radio)</h1>
          <div id='others-player' className='player'></div>

        </>
      )}
    </>
  );
};

export default Heros;