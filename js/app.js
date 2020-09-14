

const myButton = document.getElementById('myButton');
const skyfriHimmelButton = document.getElementById('skyfriHimmelButton');

myButton.addEventListener('click', () => {
  teamHeadline.style.color = '#FF577F';
});

skyfriHimmelButton.addEventListener('click', () => {
  mainHeader.style.backgroundColor = '#3C94FF';
  mainFooter.style.backgroundColor = '#3C94FF';
});
