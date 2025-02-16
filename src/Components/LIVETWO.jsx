import React, { useState, useEffect } from "react";
import './live.css';
import './album.css';



const Movies = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [allChannels, setAllChannels] = useState([]);
    const [loading, setLoading] = useState(true);
  
  // Predefined channels (Example)
  const predefinedChannels = [
    {
      name:'Entertainment',image:'https://raw.githubusercontent.com/vijesh0512/image/refs/heads/main/DALL%C2%B7E%202025-02-01%2013.03.25%20-%20A%20black%20pitbull%20dog%20with%20a%20white%20chest%20and%20one%20side%20of%20its%20face%20white%2C%20looking%20entertained%20and%20happy.%20The%20dog%20is%20wearing%20a%20stylish%20gold%20chain%20while%20en.webp',shows:[ 
          
    //{ name: 'Vijay Takkar', image: 'https://news.indiantvinfo.com/media/2022/09/Logo-of-Vijay-Takkar-Channel-300x300.png', link: 'https://stream.vstartv.org:3511/hybrid/play.m3u8' },
  // { name: 'SS Tamil', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQop8ucdt1JVIfgEzRt4K8A6AoRZ-DfftdXvSBfE2Pm8IBKBfA9Jwo61Es4&s=10',link:'albaniaserver.com/play/live.php?mac=00:1A:79:5C:C1:11&stream=441095&extension=ts&play_token=zr3DwTDkQA'},
    //{ name: 'Vijay Super', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQjonzzKzBGJJKpe1_FrbiyAwiMGAEGftloixlGuyIqiS6rRIkFTDArP4&s=10', link: 'https://tinyurl.com/yc3mav2k' },
  
    
        { name: 'Star Vijay', image: 'https://tinyurl.com/2heavac5', link: 'https://shadowplayer.netlify.app/?manifest=https%3A%2F%2Flive-proxy.vercel.app%2Fcors%3Furl%3Dhttp%253A%2F%2F45.148.145.57%2FIN_VIJAYTVHD%2Ftracks-v1a1%2Fmono.m3u8%25253Ftoken%25253Dcd159980c105201c2cfbd5910e8facca&keyid=&key=&cookie=&userAgent='},
        { name: 'Sun TV', image: 'https://tinyurl.com/55rjk5ka', link: 'https://tsneh.vercel.app/vwtb7qm7faty'},
        { name: 'K TV', image: 'https://seeklogo.com/images/K/ktv-logo-703754480A-seeklogo.com.png', link: 'https://tsneh.vercel.app/dlae4g3ooovq'},
        {name:'Adithya',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Nhg12EtEEy3aFfRgcM2S0CwMaW1wGiI_8Y7B-RRqMW56HWbx0ebgQsM&s=10',link:'https://shadowplayer.netlify.app/?manifest=https%3A%5C%2F%5C%2Fsundirectgo-live.pc.cdn.bitgravity.com%5C%2Fhd7%5C%2Fdth.mpd&keyid=13400829c2294d009e9c12f516fd63d3&key=e84d17d4090e15bc6c5b4b80f589a343&cookie=&userAgent='},
        { name: 'Zee Tamil', image: 'https://www.ethnicchannels.com/images/channeldetail/zee-tamil/ZEE-TAMIL.png', link: 'https://tsneh.vercel.app/lsbrqig1glwr' },
        //{name:'Zee Thirai',image:'https://vignette.wikia.nocookie.net/logopedia/images/c/c3/Zee_Thirai.png/revision/latest?cb=20200324034033',link:'https://allinonereborn.com/tatatv.php?id=11756'},
        { name: 'Sun Music', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Sun_Music_%28No_Background%29.png', link: 'https://shadowplayer.netlify.app/?manifest=https%3A%5C%2F%5C%2Fsundirectgo-live.pc.cdn.bitgravity.com%5C%2Fhd3%5C%2Fdth.mpd&keyid=5ae8cba797264a99b6f092d2db321e5b&key=300c4839f8a952674171d7873325bfd2&cookie=&userAgent=' },
         { name: 'Colors Tamil', image: 'https://tinyurl.com/yc2kz4ck', link: 'https://shadowplayer.netlify.app/?manifest=https%3A%5C%2F%5C%2Fsundirectgo-live.pc.cdn.bitgravity.com%5C%2Fsrc7%5C%2Fdth.mpd&keyid=30a03b499adb451eb8129f4ea136c768&key=cd28c56928ef99a384963cd39264c4bf&cookie=&userAgent=' },
        { name: 'Thanthi One', image: 'https://pbs.twimg.com/profile_images/1782026072185339904/r41WPxGJ_400x400.jpg', link: 'https://shadowplayer.netlify.app/?manifest=https%3A%5C%2F%5C%2Fsundirectgo-live.pc.cdn.bitgravity.com%5C%2Fsvc211%5C%2Fdth.mpd&keyid=37310e63a23543e28fa7eaf86837a869&key=40bf038e8a78b785194699ce2911d755&cookie=&userAgent=' },
        { name: 'Kalaignar TV', image: 'https://tsneh.vercel.app/fzqicp5wkped', link: 'https://shadowplayer.netlify.app/?manifest=https://segment.yuppcdn.net/240122/kalaignartv/playlist.m3u8' },
        { name: 'Siripoli', image: 'https://tsneh.vercel.app/bril2azbth2y', link: 'https://shadowplayer.netlify.app/?manifest=https://segment.yuppcdn.net/240122/siripoli/playlist.m3u8' },
        { name: 'Isaiaruvi', image: 'https://tsneh.vercel.app/wjqhyyohoqcc', link: 'https://shadowplayer.netlify.app/?manifest=https://segment.yuppcdn.net/140622/isaiaruvi/playlist.m3u8' },
        { name: 'Murasu', image: 'https://tsneh.vercel.app/94gttrvxkuwf', link: 'https://shadowplayer.netlify.app/?manifest=https://segment.yuppcdn.net/050522/murasu/playlist.m3u8' },
        { name: 'Chithiram', image: 'https://d229kpbsb5jevy.cloudfront.net/tv/150/150/bnw/chithiram-tv-white.png', link: 'https://shadowplayer.netlify.app/?manifest=https%3A%5C%2F%5C%2Fsundirectgo-live.pc.cdn.bitgravity.com%5C%2Fsrc22%5C%2Fdth.mpd&keyid=bc3df2672745420d8b87430769d9c6e8&key=85c5049d70a82e64c4c4594bdf3f74d9&cookie=&userAgent=' },
        { name: 'Jaya TV', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZLbE5_4NKtis11wQ9PIMzGFlRWmZe6B0lMQ&s', link: 'https://shadowplayer.netlify.app/?manifest=https%3A%5C%2F%5C%2Fsundirectgo-live.pc.cdn.bitgravity.com%5C%2Fsrc4%5C%2Fdth.mpd&keyid=6e882b7447cb441bbbbbdbb7294d5d7a&key=12dde8696f6c624700a2405eede5215a&cookie=&userAgent=' },
        { name: 'Raj TV', image: 'https://indiantelevision.com/sites/default/files/styles/smartcrop_800x800/public/images/mam-images/2014/09/24/ik.jpg?itok=f7Nk4kCj', link: 'https://shadowplayer.netlify.app/?manifest=https%3A%2F%2Fdeadpooll.fun%2Flive.php%3Fid%3D707%26key%3DJITENDRAUNATTI%26e%3D.m3u8&keyid=&key=&cookie=&userAgent=' },
       { name: 'Raj Digital Plus', image: 'https://tvschedule.today/_next/image?url=https%3A%2F%2Fjiotvimages.cdn.jio.com%2Fdare_images%2Fimages%2F200%2F-%2FRaj_Digital_Plus.png&w=128&q=75', link: 'https://shadowplayer.netlify.app/?manifest=https%3A%2F%2Fdeadpooll.fun%2Flive.php%3Fid%3D683%26key%3DJITENDRAUNATTI%26e%3D.m3u8&keyid=&key=&cookie=&userAgent=' },
       { name: 'Jaya Movies', image: 'https://jiotvimages.cdn.jio.com/dare_images/images/J_Movies.png', link: 'https://shadowplayer.netlify.app/?manifest=https%3A%2F%2Fdeadpooll.fun%2Flive.php%3Fid%3D417%26key%3DJITENDRAUNATTI%26e%3D.m3u8&keyid=&key=&cookie=&userAgent=' },
      {name:'Jaya Max',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT87vxhDJ6UO42lGD8VOBTeqXlPLLGXpYtLPA&usqp=CAU',link:'https://shadowplayer.netlify.app/?manifest=https%3A%5C%2F%5C%2Fsundirectgo-live.pc.cdn.bitgravity.com%5C%2Fsrc20%5C%2Fdth.mpd&keyid=62653da934684b8ebda4909a0b39e0a2&key=580776e370985111b30527e52f033107&cookie=&userAgent='},
      {name:'Astro Vellithirai',image:'https://divign0fdw3sv.cloudfront.net/Images/ChannelLogo/contenthub/399_144.png',link:'https://www.8088y.site/Astro/play.php?id=Astro+Vellithirai'},
      {name:'IBC Tamil',image:'https://upload.wikimedia.org/wikipedia/commons/e/e4/Logo_IBC_GLOSSY.png',link:'https://shadowplayer.netlify.app/?manifest=https%3A%2F%2Ftx1.ibctamil.tv%2FCDN_IBC_Tamil%2Findex.m3u8&keyid=&key=&cookie=&userAgent='},
      {name:'IBC Bakthi',image:'https://d229kpbsb5jevy.cloudfront.net/tv/150/150/bnw/IBC-Bhakthi-new1-white.png',link:'https://shadowplayer.netlify.app/?manifest=https%3A%2F%2Ftx1.ibctamil.tv%2FCDN_IBC_Bhakthi%2Findex.m3u8&keyid=&key=&cookie=&userAgent='},
      {name:'Vendhar',image:'https://play-lh.googleusercontent.com/Z84DTKspaT6iIeiuZrthiuY1Lyz3KOEexp9H8hanq_jzlgnhW16pWhjgZdEiAVm-8w',link:'https://shadowplayer.netlify.app/?manifest=https%3A%2F%2Fcdn-3.pishow.tv%2Flive%2F1271%2Fmaster.m3u8&keyid=&key=&cookie=&userAgent='},
      {name:'Jaya Max',image:'https://i.pinimg.com/originals/8a/87/d6/8a87d6ec29890bf98e9f994ec8fb9e70.jpg',link:'https://shadowplayer.netlify.app/?manifest=https%3A%2F%2Fdeadpooll.fun%2Flive.php%3Fid%3D420%26key%3DJITENDRAUNATTI%26e%3D.m3u8&keyid=&key=&cookie=&userAgent='},
      ],
    },
  
    {
      name:'News',image:'https://raw.githubusercontent.com/vijesh0512/image/refs/heads/main/DALL%C2%B7E%202025-02-01%2013.03.30%20-%20A%20black%20pitbull%20dog%20with%20a%20white%20chest%20and%20one%20side%20of%20its%20face%20white%2C%20wearing%20stylish%20glasses%20and%20reading%20a%20newspaper.%20The%20dog%20looks%20focused%20and%20inte.webp',shows:[
    { name: 'SUN News', image: 'https://seeklogo.com/images/S/sun-news-logo-107E32491A-seeklogo.com.png', link: 'https://shadowplayer.netlify.app/?manifest=https%3A%2F%2Fdeadpooll.fun%2Flive.php%3Fid%3D676%26key%3DJITENDRAUNATTI%26e%3D.m3u8&keyid=&key=&cookie=&userAgent=' },
    { name: 'K Seithigal', image: 'https://media.assettype.com/kalaignarseithigal/2019-04/273604e9-3c45-44a4-9866-9584c01fddbd/NEWS_01.png?w=1200&auto=format%2Ccompress&ogImage=true', link: 'https://shadowplayer.netlify.app/?manifest=https%3A%2F%2Fdeadpooll.fun%2Flive.php%3Fid%3D1210%26key%3DJITENDRAUNATTI%26e%3D.m3u8&keyid=&key=&cookie=&userAgent=' },
      { name: 'Pithiyathalaimurai', image: 'https://gumlet.assettype.com/puthiyathalaimurai/2023-03/8b38e0a5-3ce7-4d9a-9768-0be50a980f42/16_9.png?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true', link: 'https://shadowplayer.netlify.app/?manifest=https://segment.yuppcdn.net/240122/puthiya/playlist.m3u8' },
     { name: 'News 7', image: 'https://aiadmk.com/wp-content/uploads/2024/02/Newsj_Logo.png', link: 'https://shadowplayer.netlify.app/?manifest=https%3A%2F%2Fdeadpooll.fun%2Flive.php%3Fid%3D673%26key%3DJITENDRAUNATTI%26e%3D.m3u8&keyid=&key=&cookie=&userAgent=' },
      { name: 'Polimer News', image: 'https://lh3.googleusercontent.com/joei-DC1Rb7-Ltp_fcdH_FGqL2LIcLf_APsaeFULWFjJ-UTF4L7UZ2LHT6FywBP2v9o=w300', link: 'https://shadowplayer.netlify.app/?manifest=https://segment.yuppcdn.net/110322/polimernews/playlist.m3u8' },
      { name: 'News 18', image: 'https://seeklogo.com/images/N/news-18-tamilnadu-logo-24724F38DD-seeklogo.com.png', link: 'https://shadowplayer.netlify.app/?manifest=https://nw18live.cdn.jio.com/bpk-tv/News18_Tamil_Nadu_NW18_MOB/output01/master.m3u8' },
      { name: 'Thanthi', image: 'https://i.pinimg.com/originals/e7/67/5a/e7675a5209137e5cc027693fd037e67a.png', link: 'https://shadowplayer.netlify.app/?manifest=https://segment.yuppcdn.net/110322/thanthi/playlist.m3u8' },
   
      ],},
  
    {
      name:'Infotainment',image:'https://raw.githubusercontent.com/vijesh0512/image/refs/heads/main/DALL%C2%B7E%202025-02-01%2013.02.17%20-%20A%20black%20pitbull%20dog%20with%20a%20white%20chest%20and%20one%20side%20of%20its%20face%20white%2C%20engaged%20in%20an%20infotainment%20setting.%20The%20dog%20is%20sitting%20attentively%20in%20front%20of%20.webp',shows:[
        //  { name: 'National Geographic HD', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12234-j9qoqc54-v1/imageContent-12234-j9qoqc54-m1.png', link: 'https://allinonereborn.com/tatatv.php?id=44357' },
        //  { name: 'Nat Geo Wild HD', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11631-j9k0ndjc-v1/imageContent-11631-j9k0ndjc-m1.png', link: 'https://allinonereborn.com/tatatv.php?id=743' },
      { name: 'Discovery HD', image: 'https://wikiwandv2-19431.kxcdn.com/_next/image?url=https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Discovery_tamil_logo.png/640px-Discovery_tamil_logo.png&w=640&q=50', link: 'https://shadowplayer.netlify.app/?manifest=https%3A%2F%2Fdeadpooll.fun%2Flive.php%3Fid%3D569%26key%3DJITENDRAUNATTI%26e%3D.m3u8&keyid=&key=&cookie=&userAgent=' },
      { name: 'Animal Planet HD World', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzVe842a4KEP0VkTznyYtn0kw5274b2C6lJ3Bx1sVLsw&s', link: 'https://shadowplayer.netlify.app/?manifest=https%3A%5C%2F%5C%2Fsundirectgo-live.pc.cdn.bitgravity.com%5C%2Fhd30%5C%2Fdth.mpd&keyid=d199f133a4cf4192a6bf42be8b3393a3&key=33401bfb0b9b64c908e90e46258d0fab&cookie=&userAgent=' },
      { name: 'History TV18 HD', image: 'https://tse3.mm.bing.net/th?id=OIP.ah9UnFCN7FK_kVVDgiB-KgHaEK&pid=Api&P=0&h=220', link: 'https://shadowplayer.netlify.app/?manifest=https%3A%5C%2F%5C%2Fsundirectgo-live.pc.cdn.bitgravity.com%5C%2Fhd29%5C%2Fdth.mpd&keyid=d59e1a037b474c2e98fe23c98f51cc85&key=428111543871410bfd96c6d1dda2a4b0&cookie=&userAgent=' },
     { name: 'Sony BBC Earth', image: 'https://origin-staticv2.sonyliv.com/videoasset_images/sony_bbchd_23oct_masthead_logo.png', link: 'https://dai.google.com/ssai/event/V73ovbgASP-xGvQQOukwTQ/master.m3u8' },
  
      ],
    },
  
    {name:'Sports',image:'https://raw.githubusercontent.com/vijesh0512/image/refs/heads/main/DALL%C2%B7E%202025-02-01%2013.02.24%20-%20A%20black%20pitbull%20dog%20with%20a%20white%20chest%20and%20one%20side%20of%20its%20face%20white%2C%20actively%20playing%20sports.%20The%20dog%20is%20running%20on%20a%20grassy%20field%2C%20energetically%20ch.webp',shows:[
       //{ name: 'Star Sports 1 HD', image: 'https://vignette1.wikia.nocookie.net/logopedia/images/e/e8/STAR_Sports_1_logo.png/revision/latest?cb=20150719162710', link: 'https://shadowplayer.netlify.app/?manifest=https%3A%2F%2Flive-proxy.vercel.app%2Fcors%3Furl%3Dhttps%3A%2F%2Fcrichd.onlinetvbd.com%2Fm3u8.php%2Fstar1in.m3u8&keyid=&key=&cookie=&userAgent=' },
      //{name:'Star Sports Hindi',image:'https://assets.airtel.in/static-assets/cms/dth/images/channellogo/Star-Sports-1-Hindi.png',link:'https://shadowplayer.netlify.app/?manifest=https%3A%2F%2Fcors.8088yyy.workers.dev%2F%3Fu%3Dhttps%3A%2F%2Fcrichd.onlinetvbd.com%2Fm3u8.php%2Fstarhindi.m3u8&keyid=&key=&cookie=&userAgent='}, 
      // { name: 'Star Sports 2 HD', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-1021-j5nj3c68-v1/imageContent-1021-j5nj3c68-m1.png', link: 'https://allinonereborn.com/tatatv.php?id=12150' },
     //   { name: 'Star Sports Select 1 HD', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-7891-j75vq7k0-v1/imageContent-7891-j75vq7k0-m1.PNG', link: 'https://allinonereborn.com/tatatv.php?id=12151' },
       //   { name: 'Star Sports Select 2 HD', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11791-j9kyqpy8-v1/imageContent-11791-j9kyqpy8-m1.png', link: 'https://allinonereborn.com/tatatv.php?id=12152' },
     // {name:'Sony Sports Ten 1 HD',image:'https://origin-staticv2.sonyliv.com/masthead_logo/Sony_TEN1HD_23oct_masthead_logo.png',link:'https://pubads.g.doubleclick.net/ssai/event/yeYP86THQ4yl7US8Zx5eug/master.m3u8'},
      //{name:'Sony Sports Ten 2 HD',image:'https://origin-staticv2.sonyliv.com/masthead_logo/Sony_TEN2HD_23oct_masthead_logo.png',link:'https://pubads.g.doubleclick.net/ssai/event/Syu8F41-R1y_JmQ7x0oNxQ/master.m3u8'},
      //{name:'Sony Sports Ten 3 HD',image:'https://origin-staticv2.sonyliv.com/masthead_logo/Sony_TEN3HD_23oct_masthead_logo.png',link:'https://pubads.g.doubleclick.net/ssai/event/nmQFuHURTYGQBNdUG-2Qdw/master.m3u8'},
      //{name:'Sony Sports Ten 4 HD',image:'https://origin-staticv2.sonyliv.com/masthead_logo/Sony_TEN4HD_23oct_masthead_logo.png',link:'https://pubads.g.doubleclick.net/ssai/event/x4LxWUcVSIiDaq1VCM7DSA/master.m3u8'},
      //{name:'Sony Sports Ten 5 HD',image:'https://origin-staticv2.sonyliv.com/masthead_logo/Sony_TEN5HD_23oct_masthead_logo.png',link:'https://pubads.g.doubleclick.net/ssai/event/DD7fA-HgSUaLyZp9AjRYxQ/master.m3u8'},
  {name: "SONY TEN 1 HD", image: "http://jiotv.catchup.cdn.jio.com/dare_images/images/Ten_HD.png", link: "https://live.drmlive-02.workers.dev/sliv/ten1hd.m3u8"},
  {name: "SONY TEN 2 HD", image: "http://jiotv.catchup.cdn.jio.com/dare_images/images/Ten2_HD.png", link: "https://live.drmlive-02.workers.dev/sliv/ten2hd.m3u8"},
  {name: "SONY TEN 3 HD", image: "https://origin-staticv2.sonyliv.com/masthead_logo/Sony_TEN3HD_23oct_masthead_logo.png", link: "https://live.drmlive-02.workers.dev/sliv/ten3hd.m3u8"},
  {name: "SONY TEN 4 HD", image: "https://www.sonypicturesnetworks.com/images/logos/SONY_SportsTen4_HD_Logo_CLR.png", link: "https://live.drmlive-02.workers.dev/sliv/ten4hd.m3u8"},
  {name: "SONY TEN 5 HD", image: "https://www.sonypicturesnetworks.com/images/logos/SONY_SportsTen5_HD_Logo_CLR.png", link: "https://live.drmlive-02.workers.dev/sliv/ten5hd.m3u8"},
  //{name: "SONY BBC EARTH", image: "http://jiotv.catchup.cdn.jio.com/dare_images/images/Sony_BBC_Earth_HD.png", link: "https://live.drmlive-02.workers.dev/sliv/bbc.m3u8"},
      // { name: 'Sports 18 1 HD', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-74232-la6z41u8-v3/imageContent-74232-la6z41u8-m5.png', link: 'https://shadowplayer.netlify.app/?manifest=https%3A%5C%2F%5C%2Fsundirectgo-live.pc.cdn.bitgravity.com%5C%2Fsvchd1%5C%2Fdth.mpd&keyid=b61300f05a5c4d9485a560774717d4ef&key=2b785f6fdf24f80b1ed416dd2acaa9e2&cookie=&userAgent=' },
      { name: 'Sports 18 1 HD', image: 'https://www.sports18.com/wp-content/themes/sports18/assets/images/sports18hd1FS.png', link: 'https://shadowplayer.netlify.app/?manifest=https%3A%2F%2Fjiotvbpklive.cdn.jio.com%2Fbpk-tv%2FIDCDemo_IPL23_Sports18_MOB%2FFallback%2FIDCDemo_IPL23_Sports18_MOB.m3u8&keyid=&key=&cookie=&userAgent=' },
       { name:'Sports 18 2 HD',image:'https://jiotvimages.cdn.jio.com/dare_images/images/Sports18_2.png',link:'https://shadowplayer.netlify.app/?manifest=https%3A%2F%2Fdeadpooll.fun%2Flive.php%3Fid%3D2852%26key%3DJITENDRAUNATTI%26e%3D.m3u8&keyid=&key=&cookie=&userAgent='},
       {name:'Sports 18 3',image:'https://jiotvimages.cdn.jio.com/dare_images/images/Sports18_3.png',link:'https://shadowplayer.netlify.app/?manifest=https%3A%2F%2Fsundirectgo-live.pc.cdn.bitgravity.com%2Fsrc63%2Fdth.mpd&keyid=e4fd0cfb63364b6a80f85d939330bd8a&key=3885572ee0abbde6a4a9270a1aa1dbfe&cookie=&userAgent='},
         {name:'Sports 18 khel',image:'https://www.sports18.com/wp-content/themes/sports18/assets/images/sports18khelFS.png',link:'https://www.8088y.site/Jio-Cinema/play.php?id=SPORTS%2018%20Khel'},
       {name:'JC Sports',image:'https://v3img.voot.com/resizeMedium,w_1090,h_613/v3Storage/assets/sports_zone_cricket_horizontal-1695032322122.jpg',link:'https://www.8088y.site/Jio-Cinema/play.php?id=CricStream'},
       //{name:'DD Sports',image:'https://3.bp.blogspot.com/-4HgMqC7Q7r4/UaCEt9RuTzI/AAAAAAAAAaU/8ovoQBIa-7Q/s1600/DD+Sports.png',link:'https://shadowplayer.netlify.app/?manifest=https%3A%2F%2Fdeadpooll.fun%2Flive.php%3Fid%3D204%26key%3DJITENDRAUNATTI%26e%3D.m3u8&keyid=&key=&cookie=&userAgent='},
       { name: 'Eurosport', image: 'https://metaimg.sundirectgo.in/144727/250x250_EurosportHD_144727_97e16e13-18b5-4fcf-8663-fad02604c631.png', link: 'https://shadowplayer.netlify.app/?manifest=https%3A%2F%2Fsundirectgo-live.pc.cdn.bitgravity.com%2Fsvchd5%2Fdth.mpd&keyid=74dfd06c958e4d29b6f3b4b8e49d8bcd&key=bbe2691572cadceae4ab9deb7b88ef65&cookie=&userAgent=' },
      //{name:'Sky Sports Cricket',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsJfrsgftMR01aAAfBLA5nTPdR3cYhfb31rg&usqp=CAU',link:'https://shadowplayer.netlify.app/?manifest=https%3A%2F%2Fcx55.xyz%2FUK_SKY_SPORTS_CRICKET%2Ftracks-v1a1%2Fmono.ts.m3u8%3Ftoken%3D0c212cd056dc5c0ecd171b719721014f&keyid=&key=&cookie=&userAgent='},
    
    ],},
  
    {
      name:'Kids',image:'https://github.com/vijesh0512/image/blob/main/e9cf8cc9-062e-4f62-8186-777aa9db4e6a_2.jpeg?raw=true',shows:[
        {name:'Pogo',image:'https://www.nicepng.com/png/full/27-272849_pogo-logo.png',link:'https://shadowplayer.netlify.app/?manifest=https%3A%5C%2F%5C%2Fsundirectgo-live.pc.cdn.bitgravity.com%5C%2Fsrc110%5C%2Fdth.mpd&keyid=defe2dbf78244e18a2853e0002f7561b&key=e61a61ebf69672d2a6fc3067ffe3c14f&cookie=&userAgent='},
      {name:'Nick',image:'https://etimg.etb2bimg.com/photo/73431306.cms',link:'https://shadowplayer.netlify.app/?manifest=https%3A%5C%2F%5C%2Fsundirectgo-live.pc.cdn.bitgravity.com%5C%2Fsrc108%5C%2Fdth.mpd&keyid=d098c07a084649979179c476d8922562&key=8e59a25ed109baca8ed99154072fdf7f&cookie=&userAgent='},
      {name:'Nick JR',image:'https://i.pinimg.com/474x/6c/3f/ae/6c3faee6328233f5f01e77dd0ecf4fd7.jpg',link:'https://shadowplayer.netlify.app/?manifest=https%3A%5C%2F%5C%2Fsundirectgo-live.pc.cdn.bitgravity.com%5C%2Fsrc105%5C%2Fdth.mpd&keyid=fed87a36e651470f8e9170671bb54145&key=f4532b867a58879309ab7d3f46fa74ec&cookie=&userAgent='},
      {name:'Cartoon',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGICA5fXMmABcy8rVElagULmgl7Q8C7nlGeliWBYOcYQ&s',link:'https://shadowplayer.netlify.app/?manifest=https%3A%5C%2F%5C%2Fsundirectgo-live.pc.cdn.bitgravity.com%5C%2Fhd27%5C%2Fdth.mpd&keyid=c5142b2e8cb245da86419abcdfac7cd5&key=74a9a51f8c0ef597119c3ce493d574ec&cookie=&userAgent='},
      {name:'Chutti TV',image:'https://jiotv.catchup.cdn.jio.com/dare_images/images/Chutti_TV.png',link:'https://shadowplayer.netlify.app/?manifest=https%3A%5C%2F%5C%2Fsundirectgo-live.pc.cdn.bitgravity.com%5C%2Fsrc101%5C%2Fdth.mpd&keyid=54b055b99e5f40f587b322ac83645ffa&key=f24f69849e906e380fc6cebd730345fc&cookie=&userAgent='},
      {name:'Sony Yay',image:'https://www.sonypicturesnetworks.com/images/logos/SONY%20YAY.png',link:'https://shadowplayer.netlify.app/?manifest=https%3A%5C%2F%5C%2Fsundirectgo-live.pc.cdn.bitgravity.com%5C%2Fsrc107%5C%2Fdth.mpd&keyid=c3f6d4bfad5849afa7f9ffd5a6757039&key=1a2767c24f6647813ccd32e71263d500&cookie=&userAgent='},
      {name:'Sonic',image:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1f2230f3-d395-4701-9831-457e72d51cdf/des27vp-5dc64ee7-c061-4fa3-9a0d-5bf3369de7a1.png/v1/fill/w_953,h_373/new_nickelodeon_sonic_logo_by_appleberries22_des27vp-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzczIiwicGF0aCI6IlwvZlwvMWYyMjMwZjMtZDM5NS00NzAxLTk4MzEtNDU3ZTcyZDUxY2RmXC9kZXMyN3ZwLTVkYzY0ZWU3LWMwNjEtNGZhMy05YTBkLTViZjMzNjlkZTdhMS5wbmciLCJ3aWR0aCI6Ijw9OTUzIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.gNPcmlNa4Dhr5--g_yiAWn6BL9LhT2LMCluBkYzG_Qc',link:"https://shadowplayer.netlify.app/?manifest=https%3A%2F%2Fdeadpooll.fun%2Flive.php%3Fid%3D290%26key%3DJITENDRAUNATTI%26e%3D.m3u8&keyid=&key=&cookie=&userAgent="},  
      {name:'D kids',image:'https://logodownload.org/wp-content/uploads/2018/04/discovery-kids-logo.png',link:'https://shadowplayer.netlify.app/?manifest=https%3A%2F%2Fdeadpooll.fun%2Flive.php%3Fid%3D550%26key%3DJITENDRAUNATTI%26e%3D.m3u8&keyid=&key=&cookie=&userAgent='},
    ],
    },
  
    {name:'English',image:'https://raw.githubusercontent.com/vijesh0512/image/refs/heads/main/DALL%C2%B7E%202025-02-01%2013.02.28%20-%20A%20black%20pitbull%20dog%20with%20a%20white%20chest%20and%20one%20side%20of%20its%20face%20white%2C%20sitting%20and%20watching%20an%20English%20TV%20channel.%20The%20dog%20is%20indoors%2C%20sitting%20on%20a%20co.webp',shows:[
      { name: 'Movies Now HD', image: 'https://tse1.mm.bing.net/th?id=OIP.G0fo40J1zXXNoVk1wRq0MAHaEL&pid=Api&P=0&h=220', link: 'https://shadowplayer.netlify.app/?manifest=https%3A%2F%2Ftimes-ott-live.akamaized.net%2Fmoviesnow_wv_drm%2Findex.mpd&keyid=40f019b86241d23ef075633fd7f1e927&key=058dec845bd340178a388edd104a015e&cookie=&userAgent=' },
          { name: 'MN+ HD', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn_62GlNmogvufWNY4ix2Fgcx6o-8b_O-9dt5ALaMk4OpjpwYIAfZNd4c&s=10', link: 'https://shadowplayer.netlify.app/?manifest=https%3A%2F%2Ftimes-ott-live.akamaized.net%2Fmnplus_wv_drm%2Findex.mpd&keyid=40f019b86241d23ef075633fd7f1e927&key=058dec845bd340178a388edd104a015e&cookie=&userAgent=' },
        { name: 'MNX HD', image: 'https://vignette.wikia.nocookie.net/logopedia/images/b/b3/MNX_logo.png/revision/latest/scale-to-width-down/250?cb=20200114193517', link: 'https://shadowplayer.netlify.app/?manifest=https%3A%2F%2Ftimes-ott-live.akamaized.net%2Fmnxhd_wv_drm%2Findex.mpd&keyid=40f019b86241d23ef075633fd7f1e927&key=058dec845bd340178a388edd104a015e&cookie=&userAgent=' },
      {name:'Sony Pix HD',image:'https://www.sonypicturesnetworks.com/images/logos/PIX%20HD_WHITE.png',link:'https://shadowplayer.netlify.app/?manifest=https%3A%5C%2F%5C%2Fsundirectgo-live.pc.cdn.bitgravity.com%5C%2Fhd24%5C%2Fdth.mpd&keyid=8c1904fb02bc4cb1902d400a77bf7de3&key=7f835054abe115d21666b317bc4219dc&cookie=&userAgent='},
          { name: 'Romedy Now', image: 'https://tse1.mm.bing.net/th?id=OIP.LEP1WrAF6cBCorIoHmiL3wHaEs&pid=Api&P=0&h=220', link: 'https://shadowplayer.netlify.app/?manifest=https%3A%2F%2Ftimes-ott-live.akamaized.net%2Fromedynow_wv_drm%2Findex.mpd&keyid=40f019b86241d23ef075633fd7f1e927&key=058dec845bd340178a388edd104a015e&cookie=&userAgent='        },
      {name:'&Flix',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Wh9_dBU4ZHNT1Oum29-s05FImvpPZSnVKCXUxANSFwEAb4mBJGvvn4s&s=10',link:'https://www.8088y.site/Zee5/play.php?id=0-9-channel_2105335046'},
      //  {name:'Star movies',image:'https://pluspng.com/img-png/star-movies-png-file-star-movies-logo-svg-1280.png',link:"https://allinonereborn.com/tatatv.php?id=17089"},
    //  {name:"Star movies select",image:'https://vignette.wikia.nocookie.net/logopedia/images/c/c5/SMSHD.png/revision/latest?cb=20190810162735',link:'https://allinonereborn.com/tatatv.php?id=17092'},
        
    ],},

    {name:'Sony',image:'https://github.com/vijesh0512/image/blob/main/v.png?raw=true',shows:[
  {name: "SONY HD", image: "http://jiotv.catchup.cdn.jio.com/dare_images/images/Sony_HD.png", link: "https://live.drmlive-02.workers.dev/sliv/sony.m3u8"},
  {name: "SONY SAB HD", image: "http://jiotv.catchup.cdn.jio.com/dare_images/images/Sony_SAB_HD.png", link: "https://live.drmlive-02.workers.dev/sliv/sab.m3u8"},
  {name: "SONY KAL", image: "https://i.postimg.cc/ZqnmcXdx/Sony-KAL.png", link: "https://spt-sonykal-1-us.lg.wurl.tv/playlist.m3u8"},
  {name: "SONY PAL", image: "http://jiotv.catchup.cdn.jio.com/dare_images/images/Sony_Pal.png", link: "https://live.drmlive-02.workers.dev/sliv/pal.m3u8"},
  {name: "SONY WAH", image: "http://jiotv.catchup.cdn.jio.com/dare_images/images/Sony_Wah.png", link: "https://live.drmlive-02.workers.dev/sliv/wah.m3u8"},
  {name: "SONY MAX", image: "http://jiotv.catchup.cdn.jio.com/dare_images/images/SET_MAX.png", link: "https://live.drmlive-02.workers.dev/sliv/max.m3u8"},
  {name: "SONY MAX HD", image: "http://jiotv.catchup.cdn.jio.com/dare_images/images/Sony_Max_HD.png", link: "https://live.drmlive-02.workers.dev/sliv/maxhd.m3u8"},
  {name: "SONY MAX2", image: "http://jiotv.catchup.cdn.jio.com/dare_images/images/Sony_MAX2.png", link: "https://live.drmlive-02.workers.dev/sliv/max2.m3u8"},
  {name: "SONY TEN 1", image: "http://jiotv.catchup.cdn.jio.com/dare_images/images/Ten_1.png", link: "https://live.drmlive-02.workers.dev/sliv/ten1.m3u8"},
  {name: "SONY TEN 2", image: "https://jiotv.catchup.cdn.jio.com/dare_images/images/Ten_2.png", link: "https://live.drmlive-02.workers.dev/sliv/ten2.m3u8"},
  {name: "SONY TEN 3", image: "http://jiotv.catchup.cdn.jio.com/dare_images/images/Ten_3.png", link: "https://live.drmlive-02.workers.dev/sliv/ten3.m3u8"},
  {name: "SONY TEN 4", image: "https://www.sonypicturesnetworks.com/images/logos/SONY_SportsTen4_SD_Logo_CLR.png", link: "https://live.drmlive-02.workers.dev/sliv/ten4.m3u8"},
  {name: "SONY TEN 5", image: "https://www.sonypicturesnetworks.com/images/logos/SONY_SportsTen5_SD_Logo_CLR.png", link: "https://live.drmlive-02.workers.dev/sliv/ten5.m3u8"},
  {name: "SONY TEN 1 HD", image: "http://jiotv.catchup.cdn.jio.com/dare_images/images/Ten_HD.png", link: "https://live.drmlive-02.workers.dev/sliv/ten1hd.m3u8"},
  {name: "SONY TEN 2 HD", image: "http://jiotv.catchup.cdn.jio.com/dare_images/images/Ten2_HD.png", link: "https://live.drmlive-02.workers.dev/sliv/ten2hd.m3u8"},
  {name: "SONY TEN 3 HD", image: "http://jiotv.catchup.cdn.jio.com/dare_images/images/Ten3_HD.png", link: "https://live.drmlive-02.workers.dev/sliv/ten3hd.m3u8"},
  {name: "SONY TEN 4 HD", image: "https://www.sonypicturesnetworks.com/images/logos/SONY_SportsTen4_HD_Logo_CLR.png", link: "https://live.drmlive-02.workers.dev/sliv/ten4hd.m3u8"},
  {name: "SONY TEN 5 HD", image: "https://www.sonypicturesnetworks.com/images/logos/SONY_SportsTen5_HD_Logo_CLR.png", link: "https://live.drmlive-02.workers.dev/sliv/ten5hd.m3u8"},
  {name: "SONY BBC EARTH", image: "http://jiotv.catchup.cdn.jio.com/dare_images/images/Sony_BBC_Earth_HD.png", link: "https://live.drmlive-02.workers.dev/sliv/bbc.m3u8"},
  {name: "SONY YAY", image: "http://jiotv.catchup.cdn.jio.com/dare_images/images/Sony_Yay_Hindi.png", link: "https://live.drmlive-02.workers.dev/sliv/yay.m3u8"},
  {name: "SONY PIX HD", image: "http://jiotv.catchup.cdn.jio.com/dare_images/images/Sony_Pix_HD.png", link: "https://live.drmlive-02.workers.dev/sliv/pix.m3u8"},
  {name: "SONY MARATHI", image: "http://jiotv.catchup.cdn.jio.com/dare_images/images/Sony_Marathi_SD.png", link: "https://live.drmlive-02.workers.dev/sliv/marathi.m3u8"},
  {name: "SONY AATH", image: "http://jiotv.catchup.cdn.jio.com/dare_images/images/Sony_aath.png", link: "https://live.drmlive-02.workers.dev/sliv/aath.m3u8"}
],  
    },
  ];

  
useEffect(() => {
  async function fetchChannels() {
    try {
      // Fetch from the first API (Jio Shadow)
      const response1 = await fetch("https://jio-shadow-cin.vercel.app/");
      if (!response1.ok) {
        throw new Error(`HTTP error! Status: ${response1.status}`);
      }
      const data1 = await response1.json();

      let modifiedChannel1 = [];
      if (data1.channels && Array.isArray(data1.channels)) {
        modifiedChannel1 = Array.from(
          new Map(
            data1.channels
              .filter((channel) => !channel.name.startsWith("Sony"))
              .map((channel) => [
                channel.name ?? "Unknown Channel",
                {
                  name: channel.name,
                  image: channel.logo ?? "https://images-eu.ssl-images-amazon.com/images/I/41qzICrlFOL.png",
                  link: `https://shadowplayer.netlify.app?manifest=${encodeURIComponent(channel.m3u8_url)}`,
                },
              ])
          ).values()
        );
      }

      // Fetch from the second API (Shadow Direct Go)
    const response2 = await fetch("https://shadow-direct-go-sun-1205.vercel.app/");
      if (!response2.ok) {
        throw new Error(`HTTP error! Status: ${response2.status}`);
      }
      const data2 = await response2.json();

      let modifiedChannel2 = [];
      if (data2 && typeof data2 === "object") {
        const channelsArray = Object.values(data2).reverse();
        modifiedChannel2 = channelsArray.map((channel) => {
          let keyid = "", key = "";
          if (channel.hex_keys) {
            const keys = channel.hex_keys.split(":");
            if (keys.length === 2) {
              [keyid, key] = keys;
            } else {
              console.error("Invalid hex_keys format for channel:", channel.name, channel.hex_keys);
            }
          }
          return {
            name: channel.name ?? "Unknown Channel",
            image: channel.logo ?? "https://images-eu.ssl-images-amazon.com/images/I/41qzICrlFOL.png",
            link: `https://shadowplayer.netlify.app/?manifest=${encodeURIComponent(channel.dashWidewinePlayUrl)}&keyid=${keyid}&key=${key}&cookie=&userAgent=`,
          };
        });
      }

      // Merging both sets of channels
      setAllChannels([
        ...predefinedChannels,
        {
          name: "Jio",
          image:
            "https://raw.githubusercontent.com/vijesh0512/image/refs/heads/main/DALL%C2%B7E%202025-02-03%2013.44.42%20-%20A%20black%20pitbull%20with%20a%20half-white%20face%20and%20a%20white%20chest%2C%20sitting%20confidently%20while%20holding%20a%20badge%20with%20the%20text%20'JioCinema'%20on%20it.%20The%20background%20is.webp",
          shows: modifiedChannel1,
        },
         {
           name: "Sun Direct Go",
           image: "https://github.com/vijesh0512/image/blob/main/sun.jpg?raw=true",
          shows: modifiedChannel2,
         },
      ]);
    } catch (error) {
      console.error("Error fetching channels:", error);
      setAllChannels(predefinedChannels);
    }
    finally {
        setLoading(false);
    }
  }

  fetchChannels();
}, []);

    if (loading) {
    return <div style={{ color: "white" }}>Loading Channels...</div>;
    }

  

  const handleAlbumClick = (album) => {
    setSelectedAlbum(album);
  };

  const handleBackClick = () => {
    setSelectedAlbum(null);
  };

  const handleVideoClick = (video) => {
    console.log("Video clicked:", video);
    if (video.link) {
      window.open(video.link, "_blank");
    } else {
      console.error("No link available for this video");
    }
  };

  return (
    <div className="content">
      {selectedAlbum ? (
        <div className="album-details">
          <button onClick={handleBackClick} className="back-button">
            Back to Channels
          </button>
          <h2 className="hi">{selectedAlbum.name}</h2>
          <div className="play">
            {selectedAlbum.shows.map((video, index) => (
              <div key={index} className="son" onClick={() => handleVideoClick(video)}>
                <img src={video.image} alt={video.name} />
                {selectedAlbum.name === "Local Channels" || selectedAlbum.name === "Jio"  ? (
  <p>{video.name}</p>
) : null}

              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="play">
          {allChannels.map((album, index) => (
            <div key={index} className="son" onClick={() => handleAlbumClick(album)}>
              <img src={album.image} alt={album.name} />
                <p>{album.name}</p>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Movies;
