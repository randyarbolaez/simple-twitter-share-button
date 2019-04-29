let title = document.querySelector('title');
let header = document.getElementById('header');
let shareButton = document.getElementById('share-button');

////////////////////////////////////

let celebritiesTwitterHandlesArray = [
  'kanyewest',
  'ladygaga',
  'katyperry',
  'kimkardashian',
  'taylorswift13',
  'justinbieber',
  'selenagomez',
  'rihanna',
  'mileycyrus',
  'barackobama',
];

var celebrity =
  celebritiesTwitterHandlesArray[
    Math.floor(Math.random() * celebritiesTwitterHandlesArray.length)
  ];

////////////////////////////////////

header.innerHTML = `${celebrity.toUpperCase()} Follow Button`;

shareButton.innerHTML = `
  <a
  href="https://twitter.com/${celebrity}?ref_src=twsrc%5Etfw"
  class="twitter-follow-button"
  data-show-count="false"
  >
  Follow @${celebrity}
  </a>`;

title.innerHTML = celebrity.toUpperCase();
