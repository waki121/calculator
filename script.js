function onLoad() {
    target = document.getElementById("calc_display");
    target.innerHTML = Cookies.get("old_calc_display") ?? "0";
  }
  let ddtt = [];
  function delete_hist() {
    ddtt = [];
  }
  window.addEventListener("DOMContentLoaded", () => {
    if (matchMedia("(prefers-color-scheme: dark)").matches) {
      document.getElementsByTagName("body")[0].setAttribute("id", "black01");
      document
        .getElementsByTagName("tbody")[0]
        .setAttribute("style", "background-color: #002c5e");
      document
        .getElementsByTagName("svg")[0]
        .setAttribute("style", "color: rgb(221, 221, 221)");
    } else {
      document.getElementsByTagName("body")[0].setAttribute("id", "notblack");
      document
        .getElementsByTagName("tbody")[0]
        .setAttribute("style", "background-color: #78b7ff");
      document
        .getElementsByTagName("svg")[0]
        .setAttribute("style", "color: rgb(89, 89, 89)");
    }
  });
  const btn = document.getElementsByTagName("svg")[0];
  const nav = document.querySelector("nav");
  document.addEventListener("keypress", keypress_ivent);
  function keypress_ivent(e) {
    if (
      e.key === "1" ||
      e.key === "2" ||
      e.key === "3" ||
      e.key === "4" ||
      e.key === "5" ||
      e.key === "6" ||
      e.key === "7" ||
      e.key === "8" ||
      e.key === "9" ||
      e.key === "0" ||
      e.key === "." ||
      e.key === "*" ||
      e.key === "+" ||
      e.key === "-" ||
      e.key === "/"
    ) {
      if (document.getElementById("calc_display").innerHTML === "0")
        return (document.getElementById("calc_display").innerHTML = e.key
          .replaceAll("*", "×")
          .replaceAll("/", "÷"));
      document.getElementById("calc_display").innerHTML =
        document.getElementById("calc_display").innerHTML +
        e.key.replaceAll("*", "×").replaceAll("/", "÷");
    } else if (e.key === "Enter") {
      let siki = document
        .getElementById("calc_display")
        .innerHTML.replaceAll("+", ",p")
        .replaceAll("-", ",h")
        .replaceAll("×", ",k")
        .replaceAll("÷", ",w")
        .split(",");
      siki[0] = `const dec = new Decimal(${Number(siki[0])}); `;
      siki.forEach((data, index) => {
        if (index === 0) return;
        if (siki.length === index + 1) {
          if (data.indexOf("p") !== -1) {
            siki[index] = `dec.plus(${Number(
              data.replaceAll("p", "")
            )}).toNumber()`;
          }
          if (data.indexOf("h") !== -1) {
            siki[index] = `dec.minus(${Number(
              data.replaceAll("h", "")
            )}).toNumber()`;
          }
          if (data.indexOf("k") !== -1) {
            siki[index] = `dec.times(${Number(
              data.replaceAll("k", "")
            )}).toNumber()`;
          }
          if (data.indexOf("w") !== -1) {
            siki[index] = `dec.div(${Number(
              data.replaceAll("w", "")
            )}).toNumber()`;
          }
        } else {
          if (data.indexOf("p") !== -1) {
            siki[index] = `dec.plus(${Number(data.replaceAll("p", ""))});`;
          }
          if (data.indexOf("h") !== -1) {
            siki[index] = `dec.minus(${Number(data.replaceAll("h", ""))});`;
          }
          if (data.indexOf("k") !== -1) {
            siki[index] = `dec.times(${Number(data.replaceAll("k", ""))});`;
          }
          if (data.indexOf("w") !== -1) {
            siki[index] = `dec.div(${Number(data.replaceAll("w", ""))});`;
          }
        }
      });
      siki = siki.join(" ");
      try {
        document.getElementById("calc_display").innerHTML = String(eval(siki));
      } catch (e) {
        console.log("エラーが発生しました。\n" + e);
      }
    }
    return false;
  }
  btn.addEventListener("click", () => {
    nav.classList.toggle("open-menu");
  });
  
  function click_calc_bt(bt_name) {
    if (bt_name === "del") {
      document.getElementById("calc_display").innerHTML = "0";
    }
    if (bt_name === "hitotukesu") {
      if (document.getElementById("calc_display").innerHTML.length === 1) {
        document.getElementById("calc_display").innerHTML = "0";
      } else {
        document.getElementById("calc_display").innerHTML = document
          .getElementById("calc_display")
          .innerHTML.slice(0, -1);
      }
    }
    if (bt_name === "ikoru") {
      let siki = document
        .getElementById("calc_display")
        .innerHTML.replaceAll("+", ",p")
        .replaceAll("-", ",h")
        .replaceAll("×", ",k")
        .replaceAll("÷", ",w")
        .split(",");
      siki[0] = `const dec = new Decimal(${Number(siki[0])}); `;
      siki.forEach((data, index) => {
        if (index === 0) return;
        if (siki.length === index + 1) {
          if (data.indexOf("p") !== -1) {
            siki[index] = `dec.plus(${Number(
              data.replaceAll("p", "")
            )}).toNumber()`;
          }
          if (data.indexOf("h") !== -1) {
            siki[index] = `dec.minus(${Number(
              data.replaceAll("h", "")
            )}).toNumber()`;
          }
          if (data.indexOf("k") !== -1) {
            siki[index] = `dec.times(${Number(
              data.replaceAll("k", "")
            )}).toNumber()`;
          }
          if (data.indexOf("w") !== -1) {
            siki[index] = `dec.div(${Number(
              data.replaceAll("w", "")
            )}).toNumber()`;
          }
        } else {
          if (data.indexOf("p") !== -1) {
            siki[index] = `dec.plus(${Number(data.replaceAll("p", ""))});`;
          }
          if (data.indexOf("h") !== -1) {
            siki[index] = `dec.minus(${Number(data.replaceAll("h", ""))});`;
          }
          if (data.indexOf("k") !== -1) {
            siki[index] = `dec.times(${Number(data.replaceAll("k", ""))});`;
          }
          if (data.indexOf("w") !== -1) {
            siki[index] = `dec.div(${Number(data.replaceAll("w", ""))});`;
          }
        }
      });
      siki = siki.join(" ");
      try {
        document.getElementById("calc_display").innerHTML = String(eval(siki));
      } catch (e) {
        console.log("エラーが発生しました。\n" + e);
      }
    }
    if (bt_name === "percent") {
      if (isNaN(Number(document.getElementById("calc_display").innerHTML))) {
        return;
      } else {
        document.getElementById("calc_display").innerHTML = String(
          new Decimal(Number(document.getElementById("calc_display").innerHTML))
            .div(100)
            .toNumber()
        );
      }
    }
    if (document.getElementById("calc_display").innerHTML === "0") {
      if (
        bt_name === "tasu" ||
        bt_name === "hiku" ||
        bt_name === "kk" ||
        bt_name === "waru" ||
        bt_name === "del" ||
        bt_name === "rireki" ||
        bt_name === "percent" ||
        bt_name === "dot" ||
        bt_name === "ikoru" ||
        bt_name === "hitotukesu"
      )
        return;
      document.getElementById("calc_display").innerHTML = bt_name;
    } else {
      if (
        bt_name === "del" ||
        bt_name === "rireki" ||
        bt_name === "percent" ||
        bt_name === "ikoru" ||
        bt_name === "hitotukesu"
      )
        return;
      if (bt_name === "kk") {
        document.getElementById("calc_display").innerHTML =
          document.getElementById("calc_display").innerHTML + "×";
      } else if (bt_name === "tasu") {
        document.getElementById("calc_display").innerHTML =
          document.getElementById("calc_display").innerHTML + "+";
      } else if (bt_name === "hiku") {
        document.getElementById("calc_display").innerHTML =
          document.getElementById("calc_display").innerHTML + "-";
      } else if (bt_name === "waru") {
        document.getElementById("calc_display").innerHTML =
          document.getElementById("calc_display").innerHTML + "÷";
      } else if (bt_name === "dot") {
        document.getElementById("calc_display").innerHTML =
          document.getElementById("calc_display").innerHTML + ".";
      } else {
        document.getElementById("calc_display").innerHTML =
          document.getElementById("calc_display").innerHTML + bt_name;
      }
    }
  }
  document.getElementById("rireki").addEventListener("click", () => {
    let pp = document.getElementById("hewajdfaeoidjcspaiodf");
    ddtt.forEach(function (dtdata, index) {
      let p = document.createElement("p");
      p.innerHTML = `${index + 1}: ${dtdata}`;
      pp.appendChild(p);
    });
  });
  document.getElementById("close_modal").addEventListener("click", () => {
    let pp = document.getElementById("hewajdfaeoidjcspaiodf");
    while (pp.firstChild) {
      pp.removeChild(pp.firstChild);
    }
  });
  document.getElementById("0").addEventListener("click", () => {
    click_calc_bt("0");
  });
  document.getElementById("1").addEventListener("click", () => {
    click_calc_bt("1");
  });
  document.getElementById("2").addEventListener("click", () => {
    click_calc_bt("2");
  });
  document.getElementById("3").addEventListener("click", () => {
    click_calc_bt("3");
  });
  document.getElementById("4").addEventListener("click", () => {
    click_calc_bt("4");
  });
  document.getElementById("5").addEventListener("click", () => {
    click_calc_bt("5");
  });
  document.getElementById("6").addEventListener("click", () => {
    click_calc_bt("6");
  });
  document.getElementById("7").addEventListener("click", () => {
    click_calc_bt("7");
  });
  document.getElementById("8").addEventListener("click", () => {
    click_calc_bt("8");
  });
  document.getElementById("9").addEventListener("click", () => {
    click_calc_bt("9");
  });
  document.getElementById("del").addEventListener("click", () => {
    click_calc_bt("del");
  });
  document.getElementById("percent").addEventListener("click", () => {
    click_calc_bt("percent");
  });
  document.getElementById("hitotukesu").addEventListener("click", () => {
    click_calc_bt("hitotukesu");
  });
  document.getElementById("waru").addEventListener("click", () => {
    click_calc_bt("waru");
  });
  document.getElementById("kk").addEventListener("click", () => {
    click_calc_bt("kk");
  });
  document.getElementById("hiku").addEventListener("click", () => {
    click_calc_bt("hiku");
  });
  document.getElementById("tasu").addEventListener("click", () => {
    click_calc_bt("tasu");
  });
  document.getElementById("ikoru").addEventListener("click", () => {
    click_calc_bt("ikoru");
  });
  document.getElementById("dot").addEventListener("click", () => {
    click_calc_bt("dot");
  });
  setInterval(() => {
    if (
      ddtt[ddtt.length - 1] === document.getElementById("calc_display").innerHTML
    ) {
      return;
    } else {
      ddtt.push(document.getElementById("calc_display").innerHTML);
  
      Cookies.set(
        "old_calc_display",
        document.getElementById("calc_display").innerHTML
      );
    }
  }, 1);
  