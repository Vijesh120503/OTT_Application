
import React, { useState } from "react";
import './live.css';
import './album.css';

const Tv = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const predefinedChannels = [
    {name:'Tamil',image:'https://4.bp.blogspot.com/-_PRIRnFKmu4/XEgT_QAAD2I/AAAAAAAAGV0/92upPE59ItUxoHqXZOIXDnN8rhLpl2z1gCLcBGAs/s1600/8%25E0%25AE%25A4%25E0%25AE%25AE%25E0%25AE%25BF%25E0%25AE%25B4%25E0%25AF%258D%2Btamil%2Bfont%2Bttf.png',shows:
    [
        {
            "name": "Adhithya Tv",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Nhg12EtEEy3aFfRgcM2S0CwMaW1wGiI_8Y7B-RRqMW56HWbx0ebgQsM&s=10",
            "link": "tinyurl.com/bddrads4"
        },{
            "name": "Colors Tamil HD - Rs 7.00",
            "image": "https://tinyurl.com/yc2kz4ck",
            "link": "tinyurl.com/e3arvc5k"
        },{
            "name": "Isai Aruvi - Rs 4.00",
            "image": "https://tsneh.vercel.app/wjqhyyohoqcc",
            "link": "tinyurl.com/2jfufuap"
        },
        {
            "name": "J Movies",
            "image": "https://jiotvimages.cdn.jio.com/dare_images/images/J_Movies.png",
            "link": "tinyurl.com/yhkfympa"
        },
        {
            "name": "Jaya Max - Rs 2.25",
            "image": "https://i.pinimg.com/originals/8a/87/d6/8a87d6ec29890bf98e9f994ec8fb9e70.jpg",
            "link": "tinyurl.com/2ha9fdad"
        },
        {
            "name": "Jaya TV HD - Rs 6.00",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZLbE5_4NKtis11wQ9PIMzGFlRWmZe6B0lMQ&s",
            "link": "tinyurl.com/59rx43tm"
        },
        {
            "name": "KTV HD - Rs 19.00",
            "image": "https://seeklogo.com/images/K/ktv-logo-703754480A-seeklogo.com.png",
            "link": "tinyurl.com/4vyxf2rj"
        },
        {
            "name": "Kalingnar",
            "image": "https://tsneh.vercel.app/fzqicp5wkped",
            "link": "tinyurl.com/r6vnmpu5"
        },
        {
            "name": "Murasu TV - Rs 12.00",
            "image": "https://tsneh.vercel.app/94gttrvxkuwf",
            "link": "tinyurl.com/2s632rtf"
        },
{
            "name": "Polimer",
            "image": "https://yuppstatic.akamaized.net/yupptv/channel_logos_new/polimer_tv.png",
            "link": "tinyurl.com/dwuxta6d"
        },
        {
            "name": "Polimer News - C1",
            "image": "https://sarkaribazaar.com/wp-content/uploads/2020/07/polimer-news-logo.png",
            "link": "tinyurl.com/33cjbp6s"
        },

        {
            "name": "Raj TV - Rs 4.00",
            "image": "https://indiantelevision.com/sites/default/files/styles/smartcrop_800x800/public/images/mam-images/2014/09/24/ik.jpg?itok=f7Nk4kCj",
            "link": "tinyurl.com/yejd5v9b"
        },{
            "name": "Sethigal",
            "image": "https://media.assettype.com/kalaignarseithigal/2019-04/273604e9-3c45-44a4-9866-9584c01fddbd/NEWS_01.png?w=1200&auto=format%2Ccompress&ogImage=true",
            "link": "tinyurl.com/3tcrckxb"
        },
        {
            "name": "Sirippoli TV - Rs 8.00",
            "image": "https://tsneh.vercel.app/bril2azbth2y",
            "link": "tinyurl.com/38mjru7n"
        },
        {
            "name": "Sun Music HD - Rs 19.00",
            "image": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Sun_Music_%28No_Background%29.png",
            "link": "tinyurl.com/y2tyj2c6"
        },
        {
            "name": "Sun News",
            "image": "https://seeklogo.com/images/S/sun-news-logo-107E32491A-seeklogo.com.png",
            "link": "tinyurl.com/3m9fjzy5"
        },
        {
            "name": "Sun TV HD - Rs 19.00",
            "image": "https://tinyurl.com/55rjk5ka",
            "link": "tinyurl.com/yc53y4fa"
        },
        {
            "name": "Thanthi TV - Free",
            "image": "https://i.pinimg.com/originals/e7/67/5a/e7675a5209137e5cc027693fd037e67a.png",
            "link": "tinyurl.com/yc86rxxr"
        },
        {
            "name": "Vijay HD - Rs 22.00",
            "image": "https://tinyurl.com/2heavac5",
            "link": "tinyurl.com/3mcd5tyy"
        },
        {
            "name": "Vijay Super HD - Rs 19.00",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQjonzzKzBGJJKpe1_FrbiyAwiMGAEGftloixlGuyIqiS6rRIkFTDArP4&s=10",
            "link": "tinyurl.com/4z3dr8nc"
        },
        {
            "name": "Vijay Takkar - Rs 2.00",
            "image": "https://news.indiantvinfo.com/media/2022/09/Logo-of-Vijay-Takkar-Channel-300x300.png",
            "link": "tinyurl.com/3hsj83ef"
        },
        {
            "name": "Zee Tamil HD - Rs 19.00",
            "image": "https://www.ethnicchannels.com/images/channeldetail/zee-tamil/ZEE-TAMIL.png",
            "link": "tinyurl.com/29s7tpkn"
        },
        {
            "name": "Zee Thirai HD - Rs 16.00",
            "image": "https://vignette.wikia.nocookie.net/logopedia/images/c/c3/Zee_Thirai.png/revision/latest?cb=20200324034033",
            "link": "tinyurl.com/zness34s"
        },

    ]

    },
    {name:'Hindi',image:'https://cdn.cybrhome.com/media/topic/live/icon/topic_icon_bollywood_8233ab.png',shows:[

        {
            "name": "&Prive HD - Rs 6.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/mueszwvp"
        },{
            "name": "&pictures HD - Rs 19.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/3wpapztm"
        },
        {
            "name": "&tv HD - Rs 19.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/ym4w6utd"
        },
        {
            "name": "Aaj Tak HD - Rs 2.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/4kkpp597"
        },{
            "name": "Colors Cineplex HD - Rs 19.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/4m8fd734"
        },
        {
            "name": "Colors HD - Rs 19.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/3pmfuw2v"
        },{
            "name": "SET HD - Rs 19.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/2jjtft5j"
        }, {
            "name": "SONY MAX HD - Rs 19.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/36nj5xzh"
        },
        {
            "name": "STAR GOLD HD - Rs 19.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/3xmvbmft"
        },
        {
            "name": "STAR Plus HD - Rs 22.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/434c3az8"
        },

        {
            "name": "Sony Sab HD",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/t7m48xy4"
        },
        {
            "name": "Star Bharat HD - Rs 19.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/bdhp6zfp"
        },
        {
            "name": "Star Gold 2 HD",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/mrx3wem8"
        },
        {
            "name": "Star Gold Select HD - Rs 8.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/45rbza7j"
        },
        {
            "name": "Star Pravah HD - Rs 19.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/2xdbbvxt"
        },
        {
            "name": "Zee Cinema HD - Rs 19.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/yw2uwxte"
        },
        {
            "name": "Zee TV HD - Rs 19.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/4hc5f48f"
        },
    ]},
    {name:'Emglish',image:'https://cdn.textstudio.com/output/sample/normal/5/2/2/5/english-logo-860-5225.png',shows:[
        
        
        {
            "name": "&flix HD - Rs 19.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/y8658bey"
        },{
            "name": "BBC News - Rs 1.50",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/4djvmtsu"
        },{
            "name": "INDIA TODAY - Rs 1.50",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/2np3n8jn"
        },
        {
            "name": "MN+ HD - Rs 10.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/2jc6xsn4"
        },
        {
            "name": "MNX HD - Rs 10.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/4e7tyw8m"
        },

        {
            "name": "Movies Now HD - Rs 14.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/yc6urxpp"
        },
        {
            "name": "NDTV India - Rs 1.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/3rfr5pwy"
        },
        {
            "name": "SONY PIX HD - Rs 19.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/ahmsncs4"
        },{
            "name": "STAR Movies HD - Rs 19.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/3n84vpcx"
        },
        {
            "name": "STAR Movies Select HD - Rs 19.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/yeywjrm3"
        },
    ]},
    {name:'Malayalam',image:'https://img.freepik.com/premium-vector/malayalam-written-malayalam-language-malayalam-logo_302321-2179.jpg?w=740',shows:[
        {
            "name": "Asianet HD - Rs 22.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/54fc9nsu"
        },
        {
            "name": "Asianet Movies HD - Rs 19.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/vvafxmdx"
        },
        {
            "name": "Asianet Plus",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/2zwvrr9a"
        }, {
            "name": "Flowers Tv",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/3u29hzbw"
        },{
            "name": "Kochu TV - Rs 5.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/353cnzdf"
        },
        {
            "name": "Mazhavil Manorama HD - Free",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/c9tdvdhv"
        },
        {
            "name": "News18 Kerala - Rs 0.10",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/4nke94x7"
        },
        {
            "name": "Surya Comedy",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/mvz7fbbb"
        },
        {
            "name": "Surya HD - Rs 19.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/2mvb5ads"
        },
        {
            "name": "Surya Movies - Rs 11.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/yc8dpdwn"
        },
        {
            "name": "Surya Music",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/59xn8d4e"
        },
        {
            "name": "Zee Keralam HD - Rs 10.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/39y8tvhr"
        },
    ]},
    {name:'Telugu',image:'https://tse4.mm.bing.net/th?id=OIP.CDakxqydoaZpXS-fAzXoqwAAAA&pid=Api&P=0&h=220',shows:[
        {
            "name": "ETV Cinema - Rs 15.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/5f34n3ep"
        },
        {
            "name": "ETV HD",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/5d8c4wfr"
        },
        {
            "name": "ETV Plus - Rs 12.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/yzvrtsme"
        },
        {
            "name": "ETV Telangana",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/2ypx9dzc"
        },{
            "name": "Gemini Comedy - Rs 5.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/3akyexhw"
        },
        {
            "name": "Gemini Movies HD - Rs 19.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/49bkcf33"
        },
        {
            "name": "Gemini Music",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/3aweehur"
        },
        {
            "name": "Gemini TV HD - Rs 19.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/3ue585fz"
        },{
            "name": "Raj Musix Telugu - Free",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/5b5vx72s"
        },
        {
            "name": "Raj News Telugu",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/5f9p4zzu"
        },
        {
            "name": "STAR Maa HD - Rs 22.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/32r8s64t"
        },
        {
            "name": "Zee Telugu HD - Rs 19.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/2d59j8bu"
        },
    ]},
    {name:'Kannada',image:'https://www.techniajz.com/admin/ckeditor/ckfinder/userfiles/images/blog_images/Sandalwood-750x470.jpg?quality=90',shows:[
        {
            "name": "Colors Kannada Cinema - Rs 5.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/yu43dnzj"
        },
        {
            "name": "Colors Kannada HD - Rs 19.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/ykscpdwp"
        },
        {
            "name": "Colors Super",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/2yk6kajp"
        },{
            "name": "Star Maa Gold - Rs 9.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/2p8y2zjv"
        },
        {
            "name": "Star Maa Movies HD - Rs 19.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/3mte87ze"
        },
        {
            "name": "Star Maa Music",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/4md58btj"
        },
        {
            "name": "Star Suvarna HD - Rs 22.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/2dtn269n"
        },

        {
            "name": "Udaya Comedy",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/y2bhr6z3"
        },
        {
            "name": "Udaya HD - Rs 19.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/49e7j2nc"
        },
        {
            "name": "Udaya Movies",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/3k5srzc2"
        },
        {
            "name": "Udaya Music - Rs 5.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/yeyv5veu"
        },
        {
            "name": "Zee Cinemalu HD",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/bp9juxxw"
        },
        {
            "name": "Zee Kannada HD - Rs 19.00",
            "image": "https://tsneh.vercel.app/fjkec8ucpiig",
            "link": "tinyurl.com/mwx3ns7m"
        },
    ]},
    {name:'Sports',image:'https://tse1.mm.bing.net/th?id=OIP.goZKyJjJlMRdXSpUEWbzYAHaEK&pid=Api&P=0&h=220',shows:[
        {
            "name": "SONY SPORTS TEN 1 HD - Rs 19.00",
            "image": "http://jiotv.catchup.cdn.jio.com/dare_images/images/Ten_HD.png",
            "link": "tinyurl.com/yck7bcy3"
        },
        {
            "name": "SONY SPORTS TEN 2 HD - Rs 19.00",
            "image": "http://jiotv.catchup.cdn.jio.com/dare_images/images/Ten2_HD.png",
            "link": "tinyurl.com/yeyscefd"
        },
        {
            "name": "SONY SPORTS TEN 3 HD - Rs 19.00",
            "image": "https://origin-staticv2.sonyliv.com/masthead_logo/Sony_TEN3HD_23oct_masthead_logo.png",
            "link": "tinyurl.com/yc2s2yun"
        },
        {
            "name": "SONY SPORTS TEN 5 HD - Rs 19.00",
            "image": "https://www.sonypicturesnetworks.com/images/logos/SONY_SportsTen5_HD_Logo_CLR.png",
            "link": "tinyurl.com/3xnjn5db"
        },
        {
            "name": "Sports 18 - 1 HD - Rs 19.00",
            "image": "https://www.sports18.com/wp-content/themes/sports18/assets/images/sports18hd1FS.png",
            "link": "tinyurl.com/ykbhkykd"
        },
        {
            "name": "Sports 18 2 - Rs 1.00",
            "image": "https://jiotvimages.cdn.jio.com/dare_images/images/Sports18_2.png",
            "link": "tinyurl.com/vecz593d"
        },
        {
            "name": "Star Sports 1 HD - Rs 19.00",
            "image": "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/7074/597074-h",
            "link": "tinyurl.com/4pu5ym3y"
        },
        {
            "name": "Star Sports 1 Hindi HD - Rs 19.00",
            "image": "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/6998/596998-h",
            "link": "tinyurl.com/2326dm33"
        },
        {
            "name": "Star Sports 1 Tamil HD - Rs 19.00",
            "image": "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/7017/597017-h",
            "link": "tinyurl.com/3y38mcjd"
        },
        {
            "name": "Star Sports 1 Telugu HD - Rs 19.00",
            "image": "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/7025/597025-h",
            "link": "tinyurl.com/kjrurzva"
        },
        {
            "name": "Star Sports 2 HD - Rs 19.00",
            "image": "https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/7076/597076-h",
            "link": "tinyurl.com/2p9zcnp4"
        },
        {
            "name": "Star Sports 3 - Rs 2.00",
            "image": "https://i.pinimg.com/originals/f6/30/40/f630405883d600e197b8e8a714bf7422.png",
            "link": "tinyurl.com/yc3jsvdr"
        },
        {
            "name": "Star Sports First - Rs 0.50",
            "image": "https://www.tataplay.com/s3-api/v1/assets/channels/star-sports-first.gif",
            "link": "tinyurl.com/389fk5zb"
        },
        {
            "name": "Star Sports Select 1 HD - Rs 19.00",
            "image": "https://yt3.ggpht.com/a/AATXAJzwmOU27tt-r2hlDl9EX4fGEXC8k0bQppNcquvA=s900-c-k-c0xffffffff-no-rj-mo",
            "link": "tinyurl.com/3jm2jy3p8"
        },
        {
            "name": "Star Sports Select 2 HD - Rs 15.00",
            "image": "https://tma-live.s3.ap-south-1.amazonaws.com/medias/5989affc420c3c1917b60341/1600329108394/Star-Sports-Select-2_logo.png",
            "link": "tinyurl.com/yudwdmh4"
        },
    ]},
    {name:'Infotainment',image:'https://i.pinimg.com/736x/47/cd/cb/47cdcb6565610531dd4a06fcd1e77d8a--letter-i.jpg',shows:[
        {
            "name": "Animal Planet HD  - Rs 5.00",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzVe842a4KEP0VkTznyYtn0kw5274b2C6lJ3Bx1sVLsw&s",
            "link": "tinyurl.com/yc3x3z7r"
        },
 {
            "name": "Discovery HD - Rs 8.00",
            "image": "https://wikiwandv2-19431.kxcdn.com/_next/image?url=https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Discovery_tamil_logo.png/640px-Discovery_tamil_logo.png&w=640&q=50",
            "link": "tinyurl.com/2pwettkv"
        },{
            "name": "History TV18 HD - Rs 7.00",
            "image": "https://tse3.mm.bing.net/th?id=OIP.ah9UnFCN7FK_kVVDgiB-KgHaEK&pid=Api&P=0&h=220",
            "link": "tinyurl.com/3nmkj4t8"
        },
         {
            "name": "NATIONAL GEOGRAPHIC HD - Rs 14.00",
            "image": "https://tse2.mm.bing.net/th?id=OIP.5mlvIzvM9Bktlh56wswfJwHaD9&pid=Api&P=0&h=220",
            "link": "tinyurl.com/4v65bbaz"
        },

        {
            "name": "Nat Geo Wild HD - Rs 8.00",
            "image": "https://i.pinimg.com/originals/47/3c/0f/473c0fc27fa98aa257399c0d0075fec1.jpg",
            "link": "tinyurl.com/mcu7wzsz"
        },
        {
            "name": "SONY BBC EARTH HD - Rs 19.00_OLD",
            "image": "https://origin-staticv2.sonyliv.com/videoasset_images/sony_bbchd_23oct_masthead_logo.png",
            "link": "tinyurl.com/3um6333m"
        },{
            "name": "TLC HD - Rs 3.00",
            "image": "https://logonoid.com/images/tlc-logo.png",
            "link": "tinyurl.com/4tx9b9pp"
        },
    ]},
  ];

  const handleAlbumClick = (album) => {
    setSelectedAlbum(album);
  };

  const handleBackClick = () => {
    setSelectedAlbum(null);
  };

  const handleVideoClick = (video) => {
    if (video.link) {
      window.location.href = `vlc://${video.link}`;
    } else {
      console.error("No link available for this video");
    }
  };
  
  return (
    <div className="content">
      {selectedAlbum ? (
        <div className="album-details">
                         <p style={{ color: "grey", padding: "5px" }}>Click on a channel and wait 10-15 seconds it will redirect directly into vlc player</p>
          <button onClick={handleBackClick} className="back-button">
            Back to Channels
          </button>
          <h2 className="hi">{selectedAlbum.name}</h2>
          <div className="play">
            {selectedAlbum.shows.map((video, index) => (
              <div key={index} className="son" onClick={() => handleVideoClick(video)}>
                <img src={video.image} alt={video.name} />
                 {selectedAlbum.name !== "Sports" && selectedAlbum.name !== "Tamil"  && selectedAlbum.name !== "Infotainment" ? (
                  <p>{video.name}</p>
                ) : null}
              }
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
             <p style={{ color: "red", padding: "5px" }}>Download VLC player before using this section</p>

        <div className="play">
          {predefinedChannels.map((album, index) => (
            <div key={index} className="son" onClick={() => handleAlbumClick(album)} style={{ marginBottom: "5px" }} >
              <img src={album.image} alt={album.name} />
                <p>{album.name}</p>

            </div>
          ))}
        </div>
        </div>
      )}
    </div>
  );
};
export default Tv;

