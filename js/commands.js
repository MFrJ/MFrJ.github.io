var github = "https://github.com/MFrJ"
var email = "marcelofernaj@gmail.com"
var linkedin = "https://www.linkedin.com/in/marcelofernaj/"


help = [
    "<br>",
    '<span onclick="fillCommand(`about`);" class="command">about</span>          About me',
    '<span onclick="fillCommand(`github`);" class="command">github</span>         See my stuff (being worked on 😬)',
    '<span onclick="fillCommand(`linkedin`);" class="command">linkedin</span>       Connect with me',
    '<span onclick="fillCommand(`history`);" class="command">history</span>        View command history',
    '<span onclick="fillCommand(`help`);" class="command">help</span>           <span style="color: #ff0000de;">Did you mean:</span> <i > <a style="color: #0072ffd1;" target="_blank" href="https://www.google.com/search?q=recursion"> recursion</a></i>',
    '<span onclick="fillCommand(`email`);" class="command">email</span>          Contact me, I rarely bite',
    '<span onclick="fillCommand(`clear`);" class="command">clear</span>          Clear terminal',
    "<br>",
  ];
  


about = [
    "Software engineer, currently at Amazon.",
    "6+ of development experience, specializing in back end.",
    "<br>",
    "Feel free to shoot me an <span onclick='fillCommand(`email`);' class='command'>email</span>!"
]
