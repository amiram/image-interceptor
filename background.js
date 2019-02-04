chrome.webRequest.onBeforeRequest.addListener(details => {
  console.log(`Redirecting to google logo`);
  return {
    redirectUrl: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
  };
}, {
  urls: ['*://*.googleusercontent.com/*'],
  types: ['image']
}, ['blocking']);
