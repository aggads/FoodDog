/*if ('serviceWorker' in navigator) {
  console.log('ServiceWorker is supported!');
} else {
  console.log('ServiceWorker is not supported.');
}*/

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(reg => console.info('registered sw', reg))
    .catch(err => console.error('error registering sw', err));
}