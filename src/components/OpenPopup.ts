export const OpenPopUp = (url: string, browser: any, popup: any): any => {
  if (!browser) return;
  if (popup && !popup.closed) {
    popup.focus();

    return;
  }
  const w = 700,
    h = 700;
  const dualScreenLeft =
    window.screenLeft !== undefined ? window.screenLeft : window.screenX;
  const dualScreenTop =
    window.screenTop !== undefined ? window.screenTop : window.screenY;

  const width = window.innerWidth
    ? window.innerWidth
    : document.documentElement.clientWidth
    ? document.documentElement.clientWidth
    : window.screen.width;
  const height = window.innerHeight
    ? window.innerHeight
    : document.documentElement.clientHeight
    ? document.documentElement.clientHeight
    : window.screen.height;

  const systemZoom = width / window.screen.availWidth;
  const left = (width - w) / 2 / systemZoom + dualScreenLeft;
  const top = (height - h) / 2 / systemZoom + dualScreenTop;
  popup = browser.open(
    url,
    "Login",
    `dependent=${1},  
            alwaysRaised=${1}, 
            width=${w / systemZoom}, 
            height=${h / systemZoom},
            top=${top}, 
            left=${left}
            `
  );

  return popup;
};
