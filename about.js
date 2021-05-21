window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("ul").style.fontSize = "25px";
    document.getElementById("ul").style.top="10px"
    document.getElementById("ul").style.width="98vw"
    document.getElementById("ul").style.marginLeft="1vw"
    document.getElementById("ul").style.marginRight="1vw"
    document.getElementById("ul").style.borderRadius="10px"
  } else {
    document.getElementById("ul").style.fontSize = "30px";
    document.getElementById("ul").style.top="0"
    document.getElementById("ul").style.width="100vw"
    document.getElementById("ul").style.marginLeft="0vw"
    document.getElementById("ul").style.marginRight="0vw"
    document.getElementById("ul").style.borderRadius="0px"
  }
}

function removeLoader () {
  document.getElementById("loader").style.display="none"
  document.getElementById("wrapper").style.display="block"
}