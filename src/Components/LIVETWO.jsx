
import './live.css';

const channels = [
  //{ name: 'Vijay Takkar', image: 'https://news.indiantvinfo.com/media/2022/09/Logo-of-Vijay-Takkar-Channel-300x300.png', link: 'https://stream.vstartv.org:3511/hybrid/play.m3u8' },
// { name: 'SS Tamil', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQop8ucdt1JVIfgEzRt4K8A6AoRZ-DfftdXvSBfE2Pm8IBKBfA9Jwo61Es4&s=10',link:'albaniaserver.com/play/live.php?mac=00:1A:79:5C:C1:11&stream=441095&extension=ts&play_token=zr3DwTDkQA'},
  //{ name: 'Vijay Super', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQjonzzKzBGJJKpe1_FrbiyAwiMGAEGftloixlGuyIqiS6rRIkFTDArP4&s=10', link: 'https://tinyurl.com/yc3mav2k' },
{ name: 'Star Vijay', image: 'https://tinyurl.com/2heavac5', link: 'http://45.148.145.57/IN_VIJAYTVHD/tracks-v1a1/mono.m3u8?token=cd159980c105201c2cfbd5910e8facca'},
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
//  { name: 'SUN News', image: 'https://seeklogo.com/images/S/sun-news-logo-107E32491A-seeklogo.com.png', link: 'https://mannanplay-yt-live.mayilgamingmd.workers.dev/stream/UCYlh4lH762HvHt6mmiecyWQ/master.m3u8' },
//  { name: 'K Seithigal', image: 'https://media.assettype.com/kalaignarseithigal/2019-04/273604e9-3c45-44a4-9866-9584c01fddbd/NEWS_01.png?w=1200&auto=format%2Ccompress&ogImage=true', link: 'https://mannanplay-yt-live.mayilgamingmd.workers.dev/stream/UCcVF2Fth-qEA4T1Lhn3CgKg/master.m3u8' },
  { name: 'Pithiyathalaimurai', image: 'https://gumlet.assettype.com/puthiyathalaimurai/2023-03/8b38e0a5-3ce7-4d9a-9768-0be50a980f42/16_9.png?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true', link: 'https://shadowplayer.netlify.app/?manifest=https://segment.yuppcdn.net/240122/puthiya/playlist.m3u8' },
//  { name: 'News 7', image: 'https://aiadmk.com/wp-content/uploads/2024/02/Newsj_Logo.png', link: 'https://mannanplay-yt-live.mayilgamingmd.workers.dev/stream/UCtbo6_eDG7zEtaOtcSltJkA/master.m3u8' },
  { name: 'Polimer News', image: 'https://lh3.googleusercontent.com/joei-DC1Rb7-Ltp_fcdH_FGqL2LIcLf_APsaeFULWFjJ-UTF4L7UZ2LHT6FywBP2v9o=w300', link: 'https://shadowplayer.netlify.app/?manifest=https://segment.yuppcdn.net/110322/polimernews/playlist.m3u8' },
  { name: 'News 18', image: 'https://seeklogo.com/images/N/news-18-tamilnadu-logo-24724F38DD-seeklogo.com.png', link: 'https://shadowplayer.netlify.app/?manifest=https://nw18live.cdn.jio.com/bpk-tv/News18_Tamil_Nadu_NW18_MOB/output01/master.m3u8' },
  { name: 'Thanthi', image: 'https://i.pinimg.com/originals/e7/67/5a/e7675a5209137e5cc027693fd037e67a.png', link: 'https://shadowplayer.netlify.app/?manifest=https://segment.yuppcdn.net/110322/thanthi/playlist.m3u8' },
//  { name: 'Rasi Hollywood', image: 'https://tse4.mm.bing.net/th?id=OIP.T3ZCC2aWZPwdJE7euzwyqAHaF4&pid=Api&P=0&h=220', link: 'https://tinyurl.com/5n8xzuvh' },
//  { name: 'Rasi Classic', image: 'https://tse4.mm.bing.net/th?id=OIP.T3ZCC2aWZPwdJE7euzwyqAHaF4&pid=Api&P=0&h=220', link: 'https://tinyurl.com/ry8pt892' },
//  { name: 'Rasi Tamil', image: 'https://tse4.mm.bing.net/th?id=OIP.T3ZCC2aWZPwdJE7euzwyqAHaF4&pid=Api&P=0&h=220', link: 'https://tinyurl.com/yuh77m4p' },
  //{ name: 'Rasi Cinema', image: 'https://tse4.mm.bing.net/th?id=OIP.T3ZCC2aWZPwdJE7euzwyqAHaF4&pid=Api&P=0&h=220', link: 'https://tinyurl.com/59hj6atw' },
  //{ name: 'History', image: 'https://searchvectorlogo.com/wp-content/uploads/2020/04/history-tv18-logo-vector.png', link: 'https://tinyurl.com/4uvwdtm8' },

    { name: 'Jaya TV', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZLbE5_4NKtis11wQ9PIMzGFlRWmZe6B0lMQ&s', link: 'https://shadowplayer.netlify.app/?manifest=https%3A%5C%2F%5C%2Fsundirectgo-live.pc.cdn.bitgravity.com%5C%2Fsrc4%5C%2Fdth.mpd&keyid=6e882b7447cb441bbbbbdbb7294d5d7a&key=12dde8696f6c624700a2405eede5215a&cookie=&userAgent=' },
    //{ name: 'Raj TV', image: 'https://indiantelevision.com/sites/default/files/styles/smartcrop_800x800/public/images/mam-images/2014/09/24/ik.jpg?itok=f7Nk4kCj', link: 'https://allinonereborn.com/tatatv.php?id=1148' },
   // { name: 'Raj Digital Plus', image: 'https://tvschedule.today/_next/image?url=https%3A%2F%2Fjiotvimages.cdn.jio.com%2Fdare_images%2Fimages%2F200%2F-%2FRaj_Digital_Plus.png&w=128&q=75', link: 'https://allinonereborn.com/tatatv.php?id=1009' },
   // { name: 'Jaya Movies', image: 'https://jiotvimages.cdn.jio.com/dare_images/images/J_Movies.png', link: 'https://allinonereborn.com/tatatv.php?id=11793' },
  {name:'Jaya Max',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT87vxhDJ6UO42lGD8VOBTeqXlPLLGXpYtLPA&usqp=CAU',link:'https://shadowplayer.netlify.app/?manifest=https%3A%5C%2F%5C%2Fsundirectgo-live.pc.cdn.bitgravity.com%5C%2Fsrc20%5C%2Fdth.mpd&keyid=62653da934684b8ebda4909a0b39e0a2&key=580776e370985111b30527e52f033107&cookie=&userAgent='},
  
    // { name: 'DD SPORTS', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-941-j5mhk5fc-v1/imageContent-941-j5mhk5fc-m1.png', link: 'https://allinonereborn.com/tatatv.php?id=12171' },
  //  { name: 'Star Sports 1 HD', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-8301-j7hc0820-v1/imageContent-8301-j7hc0820-m1.png', link: 'https://allinonereborn.com/tatatv.php?id=12148' },
   // { name: 'Star Sports 2 HD', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-1021-j5nj3c68-v1/imageContent-1021-j5nj3c68-m1.png', link: 'https://allinonereborn.com/tatatv.php?id=12150' },
 //   { name: 'Star Sports Select 1 HD', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-7891-j75vq7k0-v1/imageContent-7891-j75vq7k0-m1.PNG', link: 'https://allinonereborn.com/tatatv.php?id=12151' },
   //   { name: 'Star Sports Select 2 HD', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11791-j9kyqpy8-v1/imageContent-11791-j9kyqpy8-m1.png', link: 'https://allinonereborn.com/tatatv.php?id=12152' },
 //     { name: 'SONY SPORTS TEN 1 HD', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-261-j5fz9bvk-v4/imageContent-261-j5fz9bvk-m4.png', link: 'https://allinonereborn.com/tatatv.php?id=12145' },
  //    { name: 'SONY SPORTS TEN 2 HD', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11784-j9kylfd4-v2/imageContent-11784-j9kylfd4-m3.png', link: 'https://allinonereborn.com/tatatv.php?id=12146' },
  //    { name: 'SONY SPORTS TEN 3 HD', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11787-j9kynnm0-v3/imageContent-11787-j9kynnm0-m3.png', link: 'https://allinonereborn.com/tatatv.php?id=12147' },
  //    { name: 'SONY SPORTS TEN 5 HD', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-108-j5fl5wwg-v3/imageContent-108-j5fl5wwg-m3.png', link: 'https://allinonereborn.com/tatatv.php?id=12144' },
    // { name: 'Sports 18 1 HD', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-74232-la6z41u8-v3/imageContent-74232-la6z41u8-m5.png', link: 'https://shadowplayer.netlify.app/?manifest=https%3A%5C%2F%5C%2Fsundirectgo-live.pc.cdn.bitgravity.com%5C%2Fsvchd1%5C%2Fdth.mpd&keyid=b61300f05a5c4d9485a560774717d4ef&key=2b785f6fdf24f80b1ed416dd2acaa9e2&cookie=&userAgent=' },
 { name: 'Sports 18 1 HD', image: 'https://www.sports18.com/wp-content/themes/sports18/assets/images/sports18hd1FS.png', link: 'https://www.8088y.site/Jio-Cinema/play.html?c=SPORTS%2018%20HD' },
  {name:'Sports 18 3',image:'https://jiotvimages.cdn.jio.com/dare_images/images/Sports18_3.png',link:'https://shadowplayer.netlify.app/?manifest=https%3A%5C%2F%5C%2Fsundirectgo-live.pc.cdn.bitgravity.com%5C%2Fsrc63%5C%2Fdth.mpd&keyid=182eccaf96ca4760bb4b9bbcaa887716&key=5c4c9d737b41abe50ebe96d1822b8e0f&cookie=&userAgent='},
    {name:'Sports 18 khel',image:'https://tse2.mm.bing.net/th?id=OIP.UJ9iRHc2m0oZRD4NyiHFvQHaE8&pid=Api&P=0&h=220',link:'https://www.8088y.site/Jio-Cinema/play.html?c=SPORTS%2018%20Khel'},
  {name:'JC Sports',image:'https://v3img.voot.com/resizeMedium,w_1090,h_613/v3Storage/assets/sports_zone_cricket_horizontal-1695032322122.jpg',link:'https://www.8088y.site/Jio-Cinema/play.html?c=CricStream'},
  //{ name: 'Eurosport HD', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-52842-k980h8vc-v1/imageContent-52842-k980h8vc-m2.png', link: 'https://allinonereborn.com/tatatv.php?id=12143' },

      { name: 'Movies Now HD', image: 'https://tse1.mm.bing.net/th?id=OIP.G0fo40J1zXXNoVk1wRq0MAHaEL&pid=Api&P=0&h=220', link: 'https://shadowplayer.netlify.app/?manifest=https%3A%5C%2F%5C%2Fsundirectgo-live.pc.cdn.bitgravity.com%5C%2Fhd42%5C%2Fdth.mpd&keyid=73df4edf424049fab150fee1c58150f6&key=50d0ec0a0a9b090dd84c84384cf7e0ee&cookie=&userAgent=' },
      { name: 'MN+ HD', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn_62GlNmogvufWNY4ix2Fgcx6o-8b_O-9dt5ALaMk4OpjpwYIAfZNd4c&s=10', link: 'https://shadowplayer.netlify.app/?manifest=https%3A%5C%2F%5C%2Fsundirectgo-live.pc.cdn.bitgravity.com%5C%2Fsvchd2%5C%2Fdth.mpd&keyid=0445641cff6b4e81a1decc10b9057c08&key=68f5fa7d8263b8e2dd54542640a64012&cookie=&userAgent=' },
      //{ name: 'MNX HD', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12216-j9qm5hjs-v2/imageContent-12216-j9qm5hjs-m2.png', link: 'https://allinonereborn.com/tatatv.php?id=12148' },
  {name:'Sony Pix HD',image:'https://www.sonypicturesnetworks.com/images/logos/PIX%20HD_WHITE.png',link:'https://shadowplayer.netlify.app/?manifest=https%3A%5C%2F%5C%2Fsundirectgo-live.pc.cdn.bitgravity.com%5C%2Fhd24%5C%2Fdth.mpd&keyid=8c1904fb02bc4cb1902d400a77bf7de3&key=7f835054abe115d21666b317bc4219dc&cookie=&userAgent='},
      { name: 'Romedy Now', image: 'https://tse1.mm.bing.net/th?id=OIP.LEP1WrAF6cBCorIoHmiL3wHaEs&pid=Api&P=0&h=220', link: 'https://shadowplayer.netlify.app/?manifest=https%3A%5C%2F%5C%2Fsundirectgo-live.pc.cdn.bitgravity.com%5C%2Fsrc82%5C%2Fdth.mpd&keyid=741eecd48b784f8c80ee4598eac17c4e&key=75585d6e2afb3b1fcc2e2805394fa95c&cookie=&userAgent=' },
//  {name:'Star movies',image:'https://pluspng.com/img-png/star-movies-png-file-star-movies-logo-svg-1280.png',link:"https://allinonereborn.com/tatatv.php?id=17089"},
//  {name:"Star movies select",image:'https://vignette.wikia.nocookie.net/logopedia/images/c/c5/SMSHD.png/revision/latest?cb=20190810162735',link:'https://allinonereborn.com/tatatv.php?id=17092'},
    //  { name: 'National Geographic HD', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-12234-j9qoqc54-v1/imageContent-12234-j9qoqc54-m1.png', link: 'https://allinonereborn.com/tatatv.php?id=44357' },
    //  { name: 'Nat Geo Wild HD', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11631-j9k0ndjc-v1/imageContent-11631-j9k0ndjc-m1.png', link: 'https://allinonereborn.com/tatatv.php?id=743' },
  //    { name: 'Discovery HD', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-11396-j9jq7jg0-v1/imageContent-11396-j9jq7jg0-m1.png', link: 'https://allinonereborn.com/tatatv.php?id=625' },
     { name: 'Animal Planet HD World', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzVe842a4KEP0VkTznyYtn0kw5274b2C6lJ3Bx1sVLsw&s', link: 'https://shadowplayer.netlify.app/?manifest=https%3A%5C%2F%5C%2Fsundirectgo-live.pc.cdn.bitgravity.com%5C%2Fhd30%5C%2Fdth.mpd&keyid=d199f133a4cf4192a6bf42be8b3393a3&key=33401bfb0b9b64c908e90e46258d0fab&cookie=&userAgent=' },
      { name: 'History TV18 HD', image: 'https://tse3.mm.bing.net/th?id=OIP.ah9UnFCN7FK_kVVDgiB-KgHaEK&pid=Api&P=0&h=220', link: 'https://shadowplayer.netlify.app/?manifest=https%3A%5C%2F%5C%2Fsundirectgo-live.pc.cdn.bitgravity.com%5C%2Fhd29%5C%2Fdth.mpd&keyid=d59e1a037b474c2e98fe23c98f51cc85&key=428111543871410bfd96c6d1dda2a4b0&cookie=&userAgent=' },
     // { name: 'Sony BBC Earth', image: 'https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-551-j5ky7ufk-v5/imageContent-551-j5ky7ufk-m7.png', link: 'https://allinonereborn.com/tatatv.php?id=11801' },
      // { name: '', image: '', link: '' },

//  {name:'Music',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB_A3T73MFVf3S_8HpZXx_eHZjYQi2HmrlQI_NuWIg1z_hyIt1sheZCm6S&s=10',link:'https://allinonereborn.com/tatatv.php?id=60115'},
  {name:'Pogo',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN9rCPiwz_RHME3dAXPCCcQgKAucZPG1bxAg&s',link:'https://shadowplayer.netlify.app/?manifest=https%3A%5C%2F%5C%2Fsundirectgo-live.pc.cdn.bitgravity.com%5C%2Fsrc110%5C%2Fdth.mpd&keyid=defe2dbf78244e18a2853e0002f7561b&key=e61a61ebf69672d2a6fc3067ffe3c14f&cookie=&userAgent='},
  {name:'Nick',image:'https://etimg.etb2bimg.com/photo/73431306.cms',link:'https://shadowplayer.netlify.app/?manifest=https%3A%5C%2F%5C%2Fsundirectgo-live.pc.cdn.bitgravity.com%5C%2Fsrc108%5C%2Fdth.mpd&keyid=d098c07a084649979179c476d8922562&key=8e59a25ed109baca8ed99154072fdf7f&cookie=&userAgent='},
  {name:'Nick JR',image:'https://i.pinimg.com/474x/6c/3f/ae/6c3faee6328233f5f01e77dd0ecf4fd7.jpg',link:'https://shadowplayer.netlify.app/?manifest=https%3A%5C%2F%5C%2Fsundirectgo-live.pc.cdn.bitgravity.com%5C%2Fsrc105%5C%2Fdth.mpd&keyid=fed87a36e651470f8e9170671bb54145&key=f4532b867a58879309ab7d3f46fa74ec&cookie=&userAgent='},
  {name:'Cartoon',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGICA5fXMmABcy8rVElagULmgl7Q8C7nlGeliWBYOcYQ&s',link:'https://shadowplayer.netlify.app/?manifest=https%3A%5C%2F%5C%2Fsundirectgo-live.pc.cdn.bitgravity.com%5C%2Fhd27%5C%2Fdth.mpd&keyid=c5142b2e8cb245da86419abcdfac7cd5&key=74a9a51f8c0ef597119c3ce493d574ec&cookie=&userAgent='},
  {name:'Chutti TV',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-BzR8kYjcxqcNAq_1eZZclJqnP00BMekVZiu8rHHe1CNUZm6W4PgT7f4B&s=10',link:'https://shadowplayer.netlify.app/?manifest=https%3A%5C%2F%5C%2Fsundirectgo-live.pc.cdn.bitgravity.com%5C%2Fsrc101%5C%2Fdth.mpd&keyid=54b055b99e5f40f587b322ac83645ffa&key=f24f69849e906e380fc6cebd730345fc&cookie=&userAgent='},
  {name:'Sony Yay',image:'https://www.sonypicturesnetworks.com/images/logos/SONY%20YAY.png',link:'https://shadowplayer.netlify.app/?manifest=https%3A%5C%2F%5C%2Fsundirectgo-live.pc.cdn.bitgravity.com%5C%2Fsrc107%5C%2Fdth.mpd&keyid=c3f6d4bfad5849afa7f9ffd5a6757039&key=1a2767c24f6647813ccd32e71263d500&cookie=&userAgent='},
    
  
  ];
  const Livetwo = () => {
    return (
      <>
        <h1 className='sideheading'>Live TV</h1>
{/*        <p className='vlc'>INSTALL VLC MEDIA PLAYER BEFORE USING THIS
        <a href="https://play.google.com/store/apps/details?id=org.videolan.vlc" target="_blank" rel="noopener noreferrer" className='vlc2'>Click here 
        </a> 
        </p> */}
        <div className='play'>
          {channels.map((channel, index) => (
         <div key={index} className="son">
<a
  href={channel.link}
  target="_blank"
  rel="noopener noreferrer"
>
    <img src={channel.image} alt={channel.name} />
  </a>
  <p>{channel.name}</p>
</div>






          ))}
        </div>
      </>
    );
  };
  
  export default Livetwo;
