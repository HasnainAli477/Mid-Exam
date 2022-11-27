$(function mainfun() {
  $(".logo").click(eventhandler);
});

function eventhandler() {
  let response = confirm("You want to go to main website?");
  if (response == true) {
    window.open("https://a-sports.tv/", "main website");
  }
}
