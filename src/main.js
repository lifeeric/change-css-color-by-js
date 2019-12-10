// this is the project files
require('./index.html');
require('./main.scss');
require('./images/Poster1.jpg');
require('../node_modules/materialize-css/sass/materialize.scss');
require('../node_modules/material-icons/iconfont/material-icons.scss');



// Actual code is here //

const changer = document.querySelectorAll('input');

const modify = (getMe) => {
    const suffix = getMe.dataset.sizing || '';
  let ap = document.documentElement.style.setProperty(`--${getMe.id}`, getMe.value + suffix);
  console.log(getMe.value + suffix)
}


changer.forEach( single => single.addEventListener('mouseover',() => modify(single)) );

changer.forEach( single => single.addEventListener('change', () => modify(single) ));