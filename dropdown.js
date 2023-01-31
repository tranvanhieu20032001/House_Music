

const dr_left_bar = $(".dropdown-left-bar");

dr_left_bar.onclick = function () {
  $(".left-bar_list-dropdown").classList.toggle("active");
  $(".fa-bars").classList.toggle("fa-xmark-large");
  $(".dropdown-list-singers").classList.remove("active");
  $(".fa-user-music").classList.remove("fa-xmark-large");
};

const dr_singer = $(".dropdown-singer");

dr_singer.onclick = function () {
  $(".dropdown-list-singers").classList.toggle("active");
  $(".fa-user-music").classList.toggle("fa-xmark-large");
  $(".left-bar_list-dropdown").classList.remove("active");
  $(".fa-bars").classList.remove("fa-xmark-large");
};