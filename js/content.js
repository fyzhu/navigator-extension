// 向页面注入JS
function injectCustomJs(jsPath) {
  jsPath = jsPath || "js/inject.js";
  var temp = document.createElement("script");
  temp.setAttribute("type", "text/javascript");
  // 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
  temp.src = chrome.runtime.getURL(jsPath);
  temp.onload = function () {
    // 放在页面不好看，执行完后移除掉
    this.parentNode.removeChild(this);
  };
  document.head.appendChild(temp);
}

document.onreadystatechange = () => {
  if (document.readyState === "interactive") {
    console.log("interactive");
  }
  if (document.readyState === "complete") {
    console.log("complete");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");
  injectCustomJs();
});

window.onload = () => {
  console.log("window.onload");
};
window.addEventListener("replaceState", function (e) {
  // console.log("THEY DID IT AGAIN! replaceState");
  processNavigator();
});
window.addEventListener("pushState", function (e) {
  // console.log("THEY DID IT AGAIN! pushState");
  processNavigator();
});
let ol;
function processNavigator() {
  setTimeout(() => {
    if (location.host == "es6.ruanyifeng.com") {
      const url = location.href;
      const h1 = document.querySelector("h1");
      const h2 = document.querySelector("#content").querySelectorAll("h2");
      Array.from(h2).forEach((item, index) => {
        // item.setAttribute('id', 'heading-' + index)
      });
      const ol = document.createElement("ol");
      const str = Array.from(h2)
        .map(
          (item, index) =>
            `<li><a href="${url}#${item.getAttribute("id")}">${
              item.textContent
            }</a></li>`
        )
        .join("");
      ol.innerHTML = str;
      const style = document.createElement("style");
      style.innerHTML = `
        ol li {
          margin: 10px 0;
        }
      `;
      document.body.appendChild(ol);
      document.body.appendChild(style);
      ol.style.background = "#fff";
      ol.style.position = "fixed";
      ol.style.right = "15px";
      ol.style.top = "60px";
      ol.style.padding = "20px";
      ol.style.paddingLeft = "40px";
      ol.style.fontSize = "15px";
      ol.style.boxShadow = "1px 1px 8px rgb(0 0 0 / 15%)";
    } else if (
      location.host == "juejin.cn" &&
      location.pathname.includes("book")
    ) {
      const h2 = document.querySelectorAll("h2, h3");
      Array.from(h2).forEach((item, index) => {
        // item.setAttribute('id', 'heading-' + index)
      });

      if (!document.querySelector("#navigator")) {
        ol = document.createElement("ol");
        ol.id = "navigator";
      }
      let index = 0
      const str = Array.from(h2)
        .map(
          (item) => {
            item.tagName == "H2" ? index++ : index
            return `<li>
            <a href="#${item.getAttribute("data-id")}">
            ${
              item.tagName == "H2"
                ? index + ". " + item.textContent
                : '- ' + item.textContent
            }
            </a>
          </li>`
          }
            
        )
        .join("");
      ol.innerHTML = str;
      const style = document.createElement("style");
      style.innerHTML = `
        ol li {
          margin: 10px 0;
        }
      `;
      if (!document.querySelector("#navigator")) {
        document.body.appendChild(ol);
        document.body.appendChild(style);
        ol.style.background = "#fff";
        ol.style.position = "fixed";
        ol.style.right = "15px";
        ol.style.top = "60px";
        ol.style.padding = "20px";
        ol.style.fontSize = "15px";
        ol.style.boxShadow = "1px 1px 8px rgb(0 0 0 / 15%)";
      }
    // } else if (location.host == "time.geekbang.org") {
    //   const h1 = document.querySelector("h1");
    //   const h2 = document.querySelectorAll("h2");
    //   Array.from(h2).forEach((item, index) => {
    //     // item.setAttribute('id', 'heading-' + index)
    //   });

    //   if (!document.querySelector("#navigator")) {
    //     ol = document.createElement("ol");
    //     ol.id = "navigator";
    //   }
    //   const str = Array.from(h2)
    //     .map(
    //       (item, index) =>
    //         `<li><a href="#${item.getAttribute("data-id")}">${
    //           index + 1 + ". " + item.textContent
    //         }</a></li>`
    //     )
    //     .join("");
    //   ol.innerHTML = str;
    //   const style = document.createElement("style");
    //   style.innerHTML = `
    //     ol li {
    //       margin: 10px 0;
    //     }
    //   `;
    //   if (!document.querySelector("#navigator")) {
    //     document.body.appendChild(ol);
    //     document.body.appendChild(style);
    //     ol.style.background = "#fff";
    //     ol.style.position = "fixed";
    //     ol.style.right = "15px";
    //     ol.style.top = "60px";
    //     ol.style.padding = "20px";
    //     ol.style.fontSize = "15px";
    //     ol.style.boxShadow = "1px 1px 8px rgb(0 0 0 / 15%)";
    //   }
    }
  }, 2000);
}
