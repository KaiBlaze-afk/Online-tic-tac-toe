let roll = "X";
let currentPlayer = "user";
let on = document.querySelector(".box:nth-child(1)");
let tw = document.querySelector(".box:nth-child(2)");
let th = document.querySelector(".box:nth-child(3)");
let fo = document.querySelector(".box:nth-child(4)");
let fi = document.querySelector(".box:nth-child(5)");
let si = document.querySelector(".box:nth-child(6)");
let se = document.querySelector(".box:nth-child(7)");
let ei = document.querySelector(".box:nth-child(8)");
let ni = document.querySelector(".box:nth-child(9)");

let PlayerNum = 0;
const socket = io();
dice = () => {
  roll == "X" ? (roll = "O") : (roll = "X");
  document.getElementById("info").innerHTML = roll + "'s Turn";
};

setup=()=>{
  roll = "X"
  document.getElementById("info").innerHTML = roll + "'s Turn";
}

socket.on("clear", (signal) => {
  if (signal == "clear") {
    on.innerHTML = "";
    tw.innerHTML = "";
    th.innerHTML = "";
    fo.innerHTML = "";
    fi.innerHTML = "";
    si.innerHTML = "";
    se.innerHTML = "";
    ei.innerHTML = "";
    ni.innerHTML = "";
    setup()
  }
});

socket.on("response", (xyz) => {
  if (xyz == "one") {
    one();
  } else if (xyz == "two") {
    two();
  } else if (xyz == "three") {
    three();
  } else if (xyz == "four") {
    four();
  } else if (xyz == "five") {
    five();
  } else if (xyz == "six") {
    six();
  } else if (xyz == "seven") {
    seven();
  } else if (xyz == "eight") {
    eight();
  } else if (xyz == "nine") {
    nine();
  }
});

one = () => {
  if (on.innerHTML == "") {
    on.innerHTML = roll;
    socket.emit("chance", "one");
    dice();
    check();
  } else {
  }
};
two = () => {
  if (tw.innerHTML == "") {
    tw.innerHTML = roll;
    socket.emit("chance", "two");
    dice();
    check();
  } else {
  }
};
three = () => {
  if (th.innerHTML == "") {
    th.innerHTML = roll;
    socket.emit("chance", "three");
    dice();
    check();
  } else {
  }
};
four = () => {
  if (fo.innerHTML == "") {
    fo.innerHTML = roll;
    socket.emit("chance", "four");
    dice();
    check();
  } else {
  }
};
five = () => {
  if (fi.innerHTML == "") {
    fi.innerHTML = roll;
    socket.emit("chance", "five");
    dice();
    check();
  } else {
  }
};
six = () => {
  if (si.innerHTML == "") {
    si.innerHTML = roll;
    socket.emit("chance", "six");
    dice();
    check();
  } else {
  }
};
seven = () => {
  if (se.innerHTML == "") {
    se.innerHTML = roll;
    socket.emit("chance", "seven");
    dice();
    check();
  } else {
  }
};
eight = () => {
  if (ei.innerHTML == "") {
    ei.innerHTML = roll;
    socket.emit("chance", "eight");
    dice();
    check();
  } else {
  }
};
nine = () => {
  if (ni.innerHTML == "") {
    ni.innerHTML = roll;
    socket.emit("chance", "nine");
    dice();
    check();
  } else {
  }
};
check = () => {
  if (
    (on.innerHTML == "X" && fi.innerHTML == "X" && ni.innerHTML == "X") ||
    (on.innerHTML == "X" && fo.innerHTML == "X" && se.innerHTML == "X") ||
    (on.innerHTML == "X" && tw.innerHTML == "X" && th.innerHTML == "X") ||
    (tw.innerHTML == "X" && fi.innerHTML == "X" && ei.innerHTML == "X") ||
    (th.innerHTML == "X" && fi.innerHTML == "X" && se.innerHTML == "X") ||
    (th.innerHTML == "X" && si.innerHTML == "X" && ni.innerHTML == "X") ||
    (fo.innerHTML == "X" && fi.innerHTML == "X" && si.innerHTML == "X") ||
    (ni.innerHTML == "X" && ei.innerHTML == "X" && se.innerHTML == "X")
  ) {
    alert("X Won");
  }
  if (
    (on.innerHTML == "O" && fi.innerHTML == "O" && ni.innerHTML == "O") ||
    (on.innerHTML == "O" && fo.innerHTML == "O" && se.innerHTML == "O") ||
    (on.innerHTML == "O" && tw.innerHTML == "O" && th.innerHTML == "O") ||
    (tw.innerHTML == "O" && fi.innerHTML == "O" && ei.innerHTML == "O") ||
    (th.innerHTML == "O" && fi.innerHTML == "O" && se.innerHTML == "O") ||
    (th.innerHTML == "O" && si.innerHTML == "O" && ni.innerHTML == "O") ||
    (fo.innerHTML == "O" && fi.innerHTML == "O" && si.innerHTML == "O") ||
    (ni.innerHTML == "O" && ei.innerHTML == "O" && se.innerHTML == "O")
  ) {
    alert("O Won");
  }
  if (
    on.innerHTML != "" &&
    tw.innerHTML != "" &&
    th.innerHTML != "" &&
    fo.innerHTML != "" &&
    fi.innerHTML != "" &&
    si.innerHTML != "" &&
    se.innerHTML != "" &&
    ei.innerHTML != "" &&
    ni.innerHTML != ""
  ) {
    alert("Match Draw");
  }
};

socket.emit("clear", "clear");
