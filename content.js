document.onreadystatechange = () => {
  if (document.readyState === "interactive") {
    console.log("interactive");
    setTimeout(() => {
      if(location.host == 'es6.ruanyifeng.com') {
        const url = location.href
        const h1 = document.querySelector("h1");
        const h2 = document.querySelector("#content").querySelectorAll('h2');
        Array.from(h2).forEach((item, index) => {
          // item.setAttribute('id', 'heading-' + index)
        })
        const ol = document.createElement("ol");
        const str = Array.from(h2)
          .map((item, index) => `<li><a href="${url}#${item.getAttribute('id')}">${item.textContent}</a></li>`)
          .join("");
        ol.innerHTML = str;
        const style = document.createElement('style')
        style.innerHTML = `
          ol li {
            margin: 10px 0;
          }
        `
        document.body.appendChild(ol);
        document.body.appendChild(style);
        ol.style.background = '#fff'
        ol.style.position = 'fixed'
        ol.style.right = '15px'
        ol.style.top = '60px'
        ol.style.padding = '20px'
        ol.style.paddingLeft = '40px'
        ol.style.fontSize = '15px'
        ol.style.boxShadow = '1px 1px 8px rgb(0 0 0 / 15%)'
      } else {
        const h1 = document.querySelector("h1");
        const h2 = document.querySelectorAll("h2");
        Array.from(h2).forEach((item, index) => {
          // item.setAttribute('id', 'heading-' + index)
        })
        const ol = document.createElement("ol");
        const str = Array.from(h2)
          .map((item, index) => `<li><a href="#${item.getAttribute('data-id')}">${(index + 1) + '. ' + item.textContent}</a></li>`)
          .join("");
        ol.innerHTML = str;
        const style = document.createElement('style')
        style.innerHTML = `
          ol li {
            margin: 10px 0;
          }
        `
        document.body.appendChild(ol);
        document.body.appendChild(style);
        ol.style.background = '#fff'
        ol.style.position = 'fixed'
        ol.style.right = '15px'
        ol.style.top = '60px'
        ol.style.padding = '20px'
        ol.style.fontSize = '15px'
        ol.style.boxShadow = '1px 1px 8px rgb(0 0 0 / 15%)'
      }
      
    }, 2000);
    
  }
  if (document.readyState === "complete") {
    console.log("complete");
    
  }
};

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");
});

window.onload = () => {
  console.log('window.onload');
}