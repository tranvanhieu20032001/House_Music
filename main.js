const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const list_song = $(".main-bar-list-song");
const list_singers = $(".list-singers");
const img_thumb = $(".image-thumb");
const img_wheel = $(".avatar-wheel");
const btn_toggle_play = $(".btn-toggle-play");
const btn_pause = $(".icon-pause");
const btn_play = $(".icon-play");
const audio = $("#audio");
const img_thumb_mini = $(".infor-image-song--thumb");
const infor_song = $(".infor-songname");
const infor_singer = $(".infor-singer");

const list_song_it = $$(".list-song-items");
const listsong_of_singer = $(".listsong-of-singer");

const duration_time = $(".duration-time");
const current_time = $(".current-time");
const process = $(".process");
const process_bar = $(".process-bar");

const btn_prev = $(".btn-prev");
const btn_next = $(".btn-next");
const btn_repeat = $(".btn-repeat");
const btn_random = $(".btn-random");

const volume = $(".volume");
const ct_volume = $(".ct-volume");
const volume_bar = $(".volume-bar");
var singerindex = 0;
var currentSinger = 0;
function formatTime(sec_num) {
  let hours = Math.floor(sec_num / 3600);
  let minutes = Math.floor((sec_num - hours * 3600) / 60);
  let seconds = Math.floor(sec_num - hours * 3600 - minutes * 60);

  hours = hours < 10 ? (hours > 0 ? "0" + hours : 0) : hours;

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return (hours !== 0 ? hours + ":" : "") + minutes + ":" + seconds;
}
function getDuration(music) {
  return new Promise(function (resolve) {
    music.addEventListener("loadedmetadata", function () {
      const time = formatTime(music.duration);
      resolve(time);
    });
  });
}
function render_ListSongSingers(index) {
  const singers = $$(".list-singer_item");
  document.querySelector(".list-singer_item.active").classList.remove("active");
  document
    .querySelector(".list-singer_action.active")
    .classList.remove("active");
  singers[index].classList.add("active");
  $$(".list-singer_action")[index].classList.add("active");
  document
    .querySelector(".list-singer_item1.active")
    .classList.remove("active");
  document
    .querySelector(".list-singer_action1.active")
    .classList.remove("active");

  $$(".list-singer_item1")[index].classList.add("active");
  $$(".list-singer_action1")[index].classList.add("active");
  // console.log($$(".list-singer_item1")[index]);
  // console.log(Music_app.Singers[index].songs.length);
  listsong_of_singer.innerHTML = "";
  singerindex = index;
  for (var i = 0; i < Music_app.Singers[index].songs.length; i++) {
    listsong_of_singer.innerHTML += `
    <div class="song-of-singer" data-index="${i}">
        <div class="img-song">
        <img class="recentPlayed_item-img" src="images/${Music_app.Singers[index].imgSongs[i]}" alt="">
        <div class="bg-img-song-active">
              <div class="img-song-active">
                <img src="images/gif/wave-unscreen.gif" alt="">
              </div>
            </div>
        </div>
        <div class="namesong-of-singer">${Music_app.Singers[index].songs[i]}</div>
      </div>
    `;
  }
}
const Music_app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  isPlayinglistSinger: false,

  topSongs: [
    {
      nameSong: "???????ng m???t chi???u",
      singer: "Hu???nh T??",
      path: "music/topsongs/dmc.mp3",
      img: "images/topsongs/dmc.jpg",
    },
    {
      nameSong: "Ch??ng ta kh??ng thu???c v??? nhau",
      singer: "S??n T??ng",
      path: "music/sontung/ctktvn.mp3",
      img: "images/sontung/ctktvn.jpg",
    },
    {
      nameSong: "M??y lang thang",
      singer: "TayNguyenSound",
      path: "music/taynguyensound/mlt.mp3",
      img: "images/taynguyensound/mlt.jpg",
    },
    {
      nameSong: "????ng ng?????i ????ng th???i ??i???m",
      singer: "Thanh H??ng",
      path: "music/thanhhung/dndtd.mp3",
      img: "images/thanhhung/dndtd.jpg",
    },
    {
      nameSong: "Gi?? cu???n em ??i",
      singer: "Qu???c Thi??n",
      path: "music/topsongs/gced.mp3",
      img: "images/topsongs/gced.jpg",
    },
    {
      nameSong: "Ch???ng th??? n??i ra",
      singer: "H????ng Ly",
      path: "music/huongly/ctnr.mp3",
      img: "images/huongly/ctnr.jpg",
    },
    {
      nameSong: "M???t thu??? thanh b??nh",
      singer: "Taynguyensound",
      path: "music/taynguyensound/mttb.mp3",
      img: "images/taynguyensound/mttb.jpg",
    },
    {
      nameSong: "Day d???t n???i ????u",
      singer: "Mr Siro",
      path: "music/mrsiro/ddnd.mp3",
      img: "images/mrsiro/ddnd.jpg",
    },
    {
      nameSong: "Anh ch???ng sao m??",
      singer: "Khanh Vi???t",
      path: "music/khangviet/acsm.mp3",
      img: "images/khangviet/acsm.jpg",
    },
    {
      nameSong: "K??m duy??n",
      singer: "Rum - Nit- Masew",
      path: "music/topsongs/kemduyen.mp3",
      img: "images/topsongs/kemduyen.jpg",
    },
  ],
  Singers: [
    {
      singer: "Amee",
      img: "images/amee/amee.jpg",
      songs: [
        "Ex's hate me",
        "Shay n???ng",
        "??en ???? kh??ng ???????ng",
        "Hai m????i hai",
        "Tr???i gi???u tr???i mang ??i",
      ],
      imgSongs: [
        "amee/1.jpg",
        "amee/2.jpg",
        "amee/3.jpg",
        "amee/4.jpg",
        "amee/5.jpg",
      ],
      songsUrl: [
        "amee/1.mp3",
        "amee/2.mp3",
        "amee/3.mp3",
        "amee/4.mp3",
        "amee/5.mp3",
      ],
    },
    {
      singer: "H????ng Ly",
      img: "images/huongly/ctnr.jpg",
      songs: [
        "V?? h??? y??u c??ng m??nh",
        "Th??? th??i",
        "V??ch ng???c ng??",
        "L?? ai t??? b??? l?? ai v?? t??nh",
      ],
      imgSongs: [
        "huongly/1.jpg",
        "huongly/2.jpg",
        "huongly/3.jpg",
        "huongly/4.jpg",
      ],
      songsUrl: [
        "huongly/1.mp3",
        "huongly/2.mp3",
        "huongly/3.mp3",
        "huongly/4.mp3",

      ],
    },
    {
      singer: "Justatee",
      img: "images/justatee/justatee.jpg",
      songs: ["2 AM", "Crying over you", "Ng?????i n??o ????", "She neva knows"],
      imgSongs: [
        "justatee/1.jpg",
        "justatee/2.jpg",
        "justatee/3.jpg",
        "justatee/4.jpg",
      ],
      songsUrl: [
        "justatee/1.mp3",
        "justatee/2.mp3",
        "justatee/3.mp3",
        "justatee/4.mp3",
      ],
    },
    {
      singer: "Khang Vi???t",
      img: "images/khangviet/acsm.jpg",
      songs: ["Ch???ng g?? ?????p ????? tr??n ?????i m??i", "Em n??n d???ng l???i"],
      imgSongs: ["khangviet/1.jpg", "khangviet/2.jpg"],
      songsUrl: [
        "khangviet/1.mp3",
        "khangviet/2.mp3",
      ],
    },
    // {
    //   singer: "Kh??nh Ph????ng",
    //   img: "images/khanhphuong/kp.jpg",
    //   songs: [
    //     "Nguy???n ?????c",
    //     "M??a th???y tinh",
    //     "Chi???c kh??n gi?? ???m",
    //     "C?? l??? anh ???? sai",
    //     "T???a v??o vai anh",
    //   ],
    //   imgSongs: [
    //     "khanhphuong/1.jpg",
    //     "khanhphuong/2.jpg",
    //     "khanhphuong/3.jpg",
    //     "khanhphuong/4.jpg",
    //     "khanhphuong/5.jpg",
    //   ],
    //   songsUrl: [
    //     "khanhphuong/1.mp3",
    //     "khanhphuong/2.mp3",
    //     "khanhphuong/3.mp3",
    //     "khanhphuong/4.mp3",
    //     "khanhphuong/5.mp3",
    //   ],
    // },
    {
      singer: "Mr Siro",
      img: "images/mrsiro/ddnd.jpg",
      songs: [
        "D?????i nh???ng c??n m??a",
        "G????ng m???t l??? l???m",
        "Day d???t n???i ??au",
        "T??nh y??u ch???p v??",
        "M???t b???c y??u v???n b?????c ????u",
      ],
      imgSongs: [
        "mrsiro/1.jpg",
        "mrsiro/2.jpg",
        "mrsiro/3.jpg",
        "mrsiro/4.jpg",
        "mrsiro/5.jpg",
      ],
      songsUrl: [
        "mrsiro/1.mp3",
        "mrsiro/2.mp3",
        "mrsiro/3.mp3",
        "mrsiro/4.mp3",
        "mrsiro/5.mp3",
      ],
    },
    {
      singer: "Nguy???n ????nh V??",
      img: "images/nguyendinhvu/ndv.jpg",
      songs: [
        "Ch??ng ta d???ng l???i ??? ????y th??i",
        "D???i l???a",
        "K??m n??n",
        "Em c???a qu?? kh???",
        "C??? th??? mong ch???",
        "K??? v???ng sai l???m",
      ],
      imgSongs: [
        "nguyendinhvu/1.jpg",
        "nguyendinhvu/2.jpg",
        "nguyendinhvu/3.jpg",
        "nguyendinhvu/4.jpg",
        "nguyendinhvu/5.jpg",
        "nguyendinhvu/6.jpg",
      ],
      songsUrl: [
        "nguyendinhvu/1.mp3",
        "nguyendinhvu/2.mp3",
        "nguyendinhvu/3.mp3",
        "nguyendinhvu/4.mp3",
        "nguyendinhvu/5.mp3",
        "nguyendinhvu/6.mp3",
      ],
    },
    {
      singer: "S??n T??ng",
      img: "images/sontung/ctktvn.jpg",
      songs: [
        "C??n m??a ngang qua",
        "N???ng ???m xa d???n",
        "??m th???m b??n em",
        "Ch??ng ta kh??ng thu???c v??? nhau",
        "Em c???a ng??y h??m qua",
        "L???c tr??i",
      ],
      imgSongs: [
        "sontung/1.jpg",
        "sontung/2.jpg",
        "sontung/3.jpg",
        "sontung/4.jpg",
        "sontung/5.jpg",
        "sontung/6.jpg",
      ],
      songsUrl: [
        "sontung/1.mp3",
        "sontung/2.mp3",
        "sontung/3.mp3",
        "sontung/4.mp3",
        "sontung/5.mp3",
        "sontung/6.mp3",
      ],
    },
    {
      singer: "Taynguyensound",
      img: "images/taynguyensound/mlt.jpg",
      songs: ["Phi??u b???ng", "Gh?? qua", "Gi?? c??ng nhau l?? ???????c", "Nh?? anh m??"],
      imgSongs: [
        "taynguyensound/1.jpg",
        "taynguyensound/2.jpg",
        "taynguyensound/3.jpg",
        "taynguyensound/4.jpg",
      ],
      songsUrl: [
        "taynguyensound/1.mp3",
        "taynguyensound/2.mp3",
        "taynguyensound/3.mp3",
        "taynguyensound/4.mp3",
      ],
    },
    {
      singer: "Thanh H??ng",
      img: "images/thanhhung/dndtd.jpg",
      songs: [
        "????ng ng?????i ????ng th???i ??i???m",
        "Sai ng?????i sai th???i ??i???m",
        "Anh th??? ?????y",
        "Y??u nhi???u ghen nhi???u",
        "Ph???i gi??? em th??i",
        "Thay t??i y??u c?? ???y",
      ],
      imgSongs: [
        "thanhhung/1.jpg",
        "thanhhung/2.jpg",
        "thanhhung/3.jpg",
        "thanhhung/4.jpg",
        "thanhhung/5.jpg",
        "thanhhung/6.jpg",
      ],
      songsUrl: [
        "thanhhung/1.mp3",
        "thanhhung/2.mp3",
        "thanhhung/3.mp3",
        "thanhhung/4.mp3",
        "thanhhung/5.mp3",
        "thanhhung/6.mp3",
      ],
    },
  ],
  render: function () {
    const render_html = this.topSongs.map((song, index) => {
      return `
        <div class="list-song-items ${
          index === this.currentIndex ? "active" : ""
        }" data-index="${index}">
        <div class="list-song-item">
            <div class="list-song-item-gif ${
              index === this.currentIndex ? "active" : ""
            }"><img class="iconwavegif" src="images/gif/wave.gif" alt="">
            </div>
            <div class="list-song-item-love"><i class="fa-sharp fa-solid fa-heart"></i>
            </div>
            <div class="list-song-item-names">
                <div class="list-song-item-namesong">${song.nameSong}</div>
                <div class="list-song-item-namesinger">${song.singer}</div>
            </div>
        </div>
    </div>`;
    });
    list_song.innerHTML = render_html.join("");
  },
  renderRecentSinger : function(){
    const render_Singers = this.Singers.map((song, index) => {
      return `
      <div data-index="${index}" class="list-singer_item ${
        index === 0 ? "active" : ""
      } 
      " onclick=render_ListSongSingers(${index})>
          <div class="list-singer_avatar"><img class="list-singer_avatar" src="${
            song.img
          }"
          alt=""></div>
            <div class="list-singer_name">
              <span class="list-singer_Sname">${song.singer}</span>
              <span class="list-singer_Csong">${
                song.songs.length
              } b??i h??t</span>
            </div>
            <div class="list-singer_action ${
              index === 0 ? "active" : ""
            }"><img class="iconlist" src="images/gif/list.gif" alt=""></div>
      </div>
      `;
    });
    list_singers.innerHTML = render_Singers.join("");
  },
  renderListSongOfSinger : function(){
    const render_drSinger = this.Singers.map((song, index) => {
      return `
      <div class="list-singer_item1 ${
        index === 0 ? "active" : ""
      }" onclick=render_ListSongSingers(${index})>
          <div class="list-singer_avatar"><img class="list-singer_avatar" src="${
            song.img
          }"
          alt=""></div>
            <div class="list-singer_name">
              <span class="list-singer_Sname">${song.singer}</span>
              <span class="list-singer_Csong">5 b??i h??t</span>
            </div>
            <div class="list-singer_action1 ${
              index === 0 ? "active" : ""
            }"><img class="iconlist" src="images/gif/list.gif" alt=""></div>
      </div>
      `;
    });
    $(".dropdown-list-singers").innerHTML = render_drSinger.join("");
    const render_UiListOfSinger = () => {
      listsong_of_singer.innerHTML = "";
      for (var i = 0; i < Music_app.Singers[0].songs.length; i++) {
        listsong_of_singer.innerHTML += `<div class="song-of-singer" data-index="${i}">
        <div class="img-song">
        <img class="recentPlayed_item-img" src="images/${Music_app.Singers[0].imgSongs[i]}" alt="">
        <div class="bg-img-song-active">
              <div class="img-song-active">
                <img src="images/gif/wave-unscreen.gif" alt="">
              </div>
            </div>
        </div>
        <div class="namesong-of-singer">${Music_app.Singers[0].songs[i]}</div>
      </div>
    `;
      }
    };
    render_UiListOfSinger();
  },

  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.topSongs[this.currentIndex];
      },
    });
  },

  loadCurrentSong: function () {
    img_wheel.src = this.currentSong.img;
    audio.src = this.currentSong.path;
    // console.log(this.currentSong.path);
    img_thumb_mini.src = this.currentSong.img;
    infor_song.textContent = this.currentSong.nameSong;
    infor_singer.textContent = this.currentSong.singer;
    getDuration(audio).then((time) => {
      duration_time.textContent = time;
    });
  },
  load_ListSinger: function () {
    img_wheel.src =
      "images/" + Music_app.Singers[singerindex].imgSongs[currentSinger];
    audio.src =
      "music/" + Music_app.Singers[singerindex].songsUrl[currentSinger];
    img_thumb_mini.src =
      "images/" + Music_app.Singers[singerindex].imgSongs[currentSinger];
    infor_song.textContent =
      Music_app.Singers[singerindex].songs[currentSinger];
    infor_singer.textContent = Music_app.Singers[singerindex].singer;
    getDuration(audio).then((time) => {
      duration_time.textContent = time;
    });
  },
  nextSong: function () {
    console.log(Music_app.isPlayinglistSinger);
    if (!Music_app.isPlayinglistSinger) {
      Music_app.isPlayinglistSinger = false;
      this.currentIndex++;
      if (this.currentIndex >= this.topSongs.length) {
        this.currentIndex = 0;
      }
      this.loadCurrentSong();
    } else {
      Music_app.isPlayinglistSinger = true;
      currentSinger++;
      if (currentSinger >= this.Singers[singerindex].songs.length) {
        currentSinger = 0;
      }
      for (var i = 0; i < Music_app.Singers[singerindex].songs.length; i++){
        if( document.querySelectorAll(".song-of-singer")[i].classList.contains("active")){
          document.querySelectorAll(".song-of-singer")[i].classList.remove("active")
        }
      }
      document.querySelectorAll(".song-of-singer")[currentSinger].classList.add("active")
      this.load_ListSinger();
    }
  },
  prevSong: function () {
    if (!Music_app.isPlayinglistSinger) {
      Music_app.isPlayinglistSinger = false;
      this.currentIndex--;
      if (this.currentIndex < 0) {
        this.currentIndex = this.topSongs.length - 1;
      }
      this.loadCurrentSong();
    } else {
      Music_app.isPlayinglistSinger = true;
      currentSinger--;
      if (currentSinger < 0) {
        currentSinger = this.Singers[singerindex].songs.length-1;
      }
      for (var i = 0; i < Music_app.Singers[singerindex].songs.length; i++){
        if( document.querySelectorAll(".song-of-singer")[i].classList.contains("active")){
          document.querySelectorAll(".song-of-singer")[i].classList.remove("active")
        }
      }
      document.querySelectorAll(".song-of-singer")[currentSinger].classList.add("active")
      this.load_ListSinger();
    }
  },
  randomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.topSongs.length);
    } while (newIndex === this.currentIndex);
    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },
  loadConfig: function () {
    this.isRandom = this.config.isRandom;
    this.isRepeat = this.config.isRepeat;
  },
  scrollToCurrentSong: function () {
    setTimeout(() => {
      $(".list-song-items.active").scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 200);
  },


  scrollToCurrentSingerSong: function () {
    setTimeout(() => {
      $(".song-of-singer.active").scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 200);
  },

  handleEvent: function () {
    // handleEvent play Music
    btn_toggle_play.onclick = function () {
      // btn_play.classList.toggle("playing");
      // btn_pause.classList.toggle("playing");
      if (Music_app.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };
    //Khi song play
    audio.onplay = function () {
      Music_app.isPlaying = true;
      btn_play.classList.remove("playing");
      btn_pause.classList.add("playing");
      img_wheel.classList.add("rotatePlay");
      img_wheel.classList.remove("rotatePause");
    };
    //khi song bi pause
    audio.onpause = function () {
      Music_app.isPlaying = false;
      btn_play.classList.add("playing");
      btn_pause.classList.remove("playing");
      img_wheel.classList.add("rotatePause");
      img_wheel.classList.remove("rotatePlay");
      setTimeout(function () {
        img_wheel.classList.remove("rotatePause");
      }, 500);
    };
    audio.onended = function () {
      if (Music_app.isRepeat) {
        audio.play();
      } else {
        btn_next.click();
      }
    };

    (audio.ontimeupdate = function (e) {
      // console.log(audio.currentTime);
      const time = formatTime(audio.currentTime);
      const width_process = process.offsetWidth;
      current_time.textContent = time;
      if (audio.duration) {
        const process_percent = Math.floor(
          (audio.currentTime / audio.duration) * 1000
        );
        process_bar.style.width =
          (width_process / 1000) * process_percent + "px";
      }
    }),
      (process.onclick = function (e) {
        process_bar.style.width = e.offsetX + "px";
        const percent_width = e.offsetX / process.offsetWidth;
        audio.currentTime = audio.duration * percent_width;
        // console.log(audio.duration * percent_width);
        // console.log(audio.duration);
        // const process_percent1 = ((audio.currentTime/audio.duration)*100);
        // console.log(audio.currentTime);
      });

    btn_prev.onclick = function () {
      if (Music_app.isRandom) {
        Music_app.randomSong();
      } else {
        Music_app.prevSong();
      }
      if (!Music_app.isPlayinglistSinger) {
        Music_app.loadCurrentSong();
        audio.play();
        Music_app.render();
        Music_app.scrollToCurrentSong();
      } else {
        Music_app.scrollToCurrentSingerSong()
        Music_app.load_ListSinger();
        audio.play();
      }
    };

    btn_next.onclick = function () {
      if (Music_app.isRandom) {
        Music_app.randomSong();
      } else {
        Music_app.nextSong();
      }
      if (!Music_app.isPlayinglistSinger) {
        Music_app.loadCurrentSong();
        audio.play();
        Music_app.render();
        Music_app.scrollToCurrentSong();
      } else {
        Music_app.scrollToCurrentSingerSong()
        Music_app.load_ListSinger();
        audio.play();
      }
    };
    btn_repeat.onclick = function () {
      Music_app.isRepeat = !Music_app.isRepeat;
      btn_repeat.classList.toggle("active", Music_app.isRepeat);
      btn_random.classList.remove("active");
      if (Music_app.isRandom) {
        btn_random.classList.remove("active");
        Music_app.isRandom = false;
      }
    };

    btn_random.onclick = function (e) {
      Music_app.isRandom = !Music_app.isRandom;
      btn_random.classList.toggle("active", Music_app.isRandom);
      if (Music_app.isRepeat) {
        btn_repeat.classList.remove("active");
        Music_app.isRepeat = false;
      }
    };
    var currentVolume = 0.5;
    audio.volume = currentVolume;
    ct_volume.onclick = function (e) {
      volume_bar.style.width = e.offsetX + "px";
      if (e.offsetX / 80 === 0) {
        volume.innerHTML = '<i class="fas fa-volume-mute"></i>';
      } else {
        volume.innerHTML = '<i class="fa-solid fa-volume"></i>';
      }
      currentVolume = e.offsetX / 80;
      audio.volume = currentVolume;
    };
    isMute = false;
    volume.onclick = function () {
      if (isMute) {
        volume.innerHTML = '<i class="fa-solid fa-volume"></i>';
        isMute = false;
        audio.volume = currentVolume;
      } else {
        volume.innerHTML = '<i class="fas fa-volume-mute"></i>';
        isMute = true;
        audio.volume = 0;
      }
    };

    list_song.onclick = function (e) {
      Music_app.isPlayinglistSinger = false;
      console.log(Music_app.isPlayinglistSinger);
      const temp = e.target.closest(".list-song-items:not(.active)");
      if (temp) {
        Music_app.currentIndex = Number(temp.dataset.index);
        Music_app.loadCurrentSong();
        Music_app.render();
        Music_app.renderListSongOfSinger()
        audio.play();
      }
    };

    listsong_of_singer.onclick = function (e) {
      Music_app.isPlayinglistSinger = true;
      const temp = e.target.closest(".song-of-singer");

      if (temp) {
        currentSinger = Number(temp.dataset.index);
        Music_app.load_ListSinger();
        for (var i = 0; i < Music_app.Singers[singerindex].songs.length; i++){
          if( $$(".song-of-singer")[i].classList.contains("active")){
            $$(".song-of-singer")[i].classList.remove("active")
          }
        }
        if($$(".list-song-items")[Music_app.currentIndex].classList.contains("active")){
          $$(".list-song-items")[Music_app.currentIndex].classList.remove("active")
          $$(".list-song-item-gif")[Music_app.currentIndex].classList.remove("active")
        }
        temp.classList.add("active")
        

        // img_wheel.src =
        //   "images/" + Music_app.Singers[singerindex].imgSongs[currentSinger];
        // audio.src = "music/" + Music_app.Singers[singerindex].songsUrl[currentSinger];
        // img_thumb_mini.src =
        //   "images/" + Music_app.Singers[singerindex].imgSongs[currentSinger];
        // infor_song.textContent = Music_app.Singers[singerindex].songs[currentSinger];
        // infor_singer.textContent = Music_app.Singers[singerindex].singer;
        // getDuration(audio).then((time) => {
        //   duration_time.textContent = time;
        // });
        // const index = Number(temp.dataset.index);
        // img_wheel.src =
        //   "images/" + Music_app.Singers[singerindex].imgSongs[index];
        // audio.src = "music/" + Music_app.Singers[singerindex].songsUrl[index];
        // img_thumb_mini.src =
        //   "images/" + Music_app.Singers[singerindex].imgSongs[index];
        // infor_song.textContent = Music_app.Singers[singerindex].songs[index];
        // infor_singer.textContent = Music_app.Singers[singerindex].singer;
        // getDuration(audio).then((time) => {
        //   duration_time.textContent = time;
        // });
        audio.play();
        // Music_app.currentIndex = Number(temp.dataset.index);
        // Music_app.loadCurrentSong();
        // Music_app.render();
        // audio.play();
      }
    };
  },

  start: function () {
    this.render();
    this.renderRecentSinger();
    this.renderListSongOfSinger();
    this.defineProperties();
    this.loadCurrentSong();
    this.handleEvent();
  },
};
Music_app.start();
