var prefix = document.getElementById("prefix");
var liner = document.getElementById("liner");
var typer = document.getElementById("typer");
var commandLine = document.getElementById("commandline");
var terminal = document.getElementById("terminal");

var i = 0;
var commands = [];

setTimeout(function () {
    //loopLines(banner, "", 80);
    commandLine.focus();
}, 100);

window.addEventListener("keyup", enterKey);


commandLine.value = "";
typer.innerHTML = commandLine.value;


function enterKey(e) {

    if (e.keyCode == 13) { //Enter
        commands.push(typer.innerHTML);
        i = commands.length;
        addLine("guest@marcel.ooo:~$ " + `<span style="color:#E6DB74">${typer.innerHTML}</span>`, "no-animation", 0);
        doCommand(typer.innerHTML.toLowerCase());
        typer.innerHTML = "";
        commandLine.value = "";
    }
    if (e.keyCode == 38 && i != 0) { //up arrow -> prev command 
        i -= 1;
        commandLine.value = commands[i];
        typer.innerHTML = commandLine.value;
    }
    if (e.keyCode == 40 && git != commands.length) { // down arrow -> next command
        i += 1;
        if (commands[i] === undefined) {
            commandLine.value = "";
        } else {
            commandLine.value = commands[i];
        }
        typer.innerHTML = commandLine.value;
    }

}

function doCommand(command) {
    switch (command) {
        

        case "help":
            loopLines(help, "color2 margin", 80);
            break;
        case "about":
            loopLines(about, "white margin", 80);
            break;
       case "github":
            addLine('Opening github...', "white", 80);
            newTab(github);
            break;
        case "linkedin":
            addLine('Opening linkedin...', "white", 80);
            newTab(linkedin);
            break;
        case "email":
            addLine('Opening email...', "white", 80);
            newTab(`mailto:${email}`);
            break;
        case "history":
            addLine("<br>", "", 0);
            loopLines(commands, "color2", 80);
            addLine("<br>", "command", 80 * commands.length + 50);
            break;
        case "clear":
            setTimeout(function () {
                terminal.innerHTML = '<a id="prefix"></a>';
                prefix = document.getElementById("prefix");
            }, 1);
            break;
        default:
            addLine("<span class=\"inherit\">Not a valid command. Try again (or enter <span onclick='fillCommand(`help`)' class=\"command\">'help'</span> for the cheat sheet).</span>", "error", 100);
            break;
    }
}


function newTab(link) {
    setTimeout(function () {
        window.open(link, "_blank");
    }, 500);
}

function addLine(text, style, time) {
    var t = "";
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
            t += "&nbsp;&nbsp;";
            i++;
        } else {
            t += text.charAt(i);
        }
    }
    setTimeout(function () {
        var next = document.createElement("p");
        next.innerHTML = t;
        next.className = style;

        prefix.parentNode.insertBefore(next, prefix);

        window.scrollTo(0, document.body.offsetHeight);
    }, time);
}

function loopLines(name, style, time) {
    name.forEach(function (item, index) {
        addLine(item, style, index * time);
    });
}

function fillCommand(command){
    
    commandLine.value = command;
    typer.innerHTML = command;
}