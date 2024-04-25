

let deferredPrompt;

// 规定必须注册 serviceWorker 才能使用 Add to Home Screen，
// 我们可以设置一个空的 serviceWorker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then(function () {
    console.log("Service Worker Registered");
  });
}

// 仅浏览器支持且未安装该应用，以下事件才会触发
window.addEventListener("beforeinstallprompt", (e) => {
  const addBtn = document.getElementById("pwa-install");
  const closeBtn = document.getElementById("pwa_close");
  const pwaTip = document.getElementById("pwaTip");

  const pwa_closed = window.localStorage.getItem('pwa_closed')

  // Chrome 67 及之前版本，会自动展现安装的 prompt
  // 为了版本统一及用户体验，我们禁止自动展现 prompt
  e.preventDefault();
  // 存放事件用于后续触发
  deferredPrompt = e;
  if (addBtn) {
    if (!pwa_closed || isBeforeToday(pwa_closed)) {
      // 显示按钮
      pwaTip?.classList.add("show-pwa-install");
      png.eventStatis("pwa_show");

      function pwaClose(e) {
        e.stopPropagation();
        png.eventStatis("pwa_close");
        pwaTip?.classList.remove("show-pwa-install");
        window.localStorage.setItem('pwa_closed', new Date().getTime());
      }

      closeBtn?.addEventListener("click", pwaClose);

      function pwaInstall(e) {
        png.eventStatis("pwa_install");
        // hide our user interface that shows our A2HS button
        pwaTip?.classList.remove("show-pwa-install");
        // 展现安装的 prompt
        deferredPrompt.prompt();
        // 等待用户对 prompt 进行操作
        // 如果用户从地址栏或其他浏览器组件安装了PWA，则以下代码将不起作用
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === "accepted") {
            console.log("点击添加");
          } else {
            console.log("取消添加");
          }
          deferredPrompt = null;
        });

        addBtn.removeEventListener('click', pwaInstall);
        closeBtn.removeEventListener('click', pwaClose);
      }

      // 点击安装
      addBtn.addEventListener("click", pwaInstall);
    }
  }
});
/**
 * 无论以何种方式安装 PWA 该事件都会触发
 * 因此这里可以用来做埋点
 * */
window.addEventListener("appinstalled", (evt) => {
  //
  png.eventStatis("pwa_installed");
});


function isBeforeToday(date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date < today;
}
