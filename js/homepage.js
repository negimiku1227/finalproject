function selectpage(num) {
    var page = document.getElementById("homepg");
    if (num == 1) page.innerHTML = '<iframe width="1196" height="700" src="html/page1.html" frameborder="0" ></iframe>'
    if (num == 2) page.innerHTML = '<iframe width="1200" height="700" src="html/page2.html" frameborder="0" ></iframe>'
  }