

const myButton = document.getElementById('myButton');
const skyfriHimmelButton = document.getElementById('skyfriHimmelButton');
const lemonButton = document.getElementById('lemonButton');

myButton.addEventListener('click', () => {
  teamHeadline.style.color = '#FF577F';
});

skyfriHimmelButton.addEventListener('click', () => {
  mainHeader.style.backgroundColor = '#3C94FF';
  mainFooter.style.backgroundColor = '#3C94FF';
});

lemonButton.addEventListener('click', () => {
  mainBody.style.backgroundColor = '#FFF040';
  banner2.style.backgroundColor = '#FFF040';
});
