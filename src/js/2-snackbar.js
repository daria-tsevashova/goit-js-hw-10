import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  createPromise(delay, state)
    .then(ms => {
      iziToast.success({
        title: '✅',
        icon: false,
        messageColor: '#fff',
        message: `Fulfilled promise in ${ms}ms`,
        position: 'topRight',
        backgroundColor: ' #59a10d',
        timeout: 3000,
      });
    })
    .catch(ms => {
      iziToast.error({
        title: '❌',
        icon: false,
        messageColor: '#fff',
        message: `Rejected promise in ${ms}ms`,
        position: 'topRight',
        backgroundColor: ' #ef4040',
        timeout: 3000,
      });
    });
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}
