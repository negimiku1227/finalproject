function selectpage(num) {
    var page = document.getElementById("homepg");
    if (num == 1) page.innerHTML = '<iframe width="1196" height="600" src="page1.html" frameborder="0" ></iframe>'
    if (num == 2) page.innerHTML = '<iframe width="1196" height="600" src="page2.html" frameborder="0" ></iframe>'
    if (num == 3) page.innerHTML = '<iframe width="1196" height="600" src="member.html" frameborder="0" ></iframe>'
  }