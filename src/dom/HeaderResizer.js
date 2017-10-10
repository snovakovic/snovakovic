const settings = {
  maxScroll: 150
};

const elem = {
  header: null,
  profilePicture: null,
  name: null,
  desc: null,
  socialWrapper: null,
  socialIcons: null
};

const getSize = function(min, max) {
  const coefficient = settings.maxScroll / (max - min);
  const size = Math.max(min, max - (window.pageYOffset / coefficient));
  return `${size}px`;
};

const setSize = function(force) {
  if (!force && window.pageYOffset > settings.maxScroll) {
    return;
  }

  // Header
  const headerPadding = getSize(7, 15);
  elem.header.style.borderWidth = getSize(3, 7);
  elem.header.style.paddingTop = headerPadding;
  elem.header.style.paddingBottom = headerPadding;

  // Profile picture
  const picSize = getSize(50, 150);
  elem.profilePicture.style.width = picSize;
  elem.profilePicture.style.height = picSize;
  elem.profilePicture.style.marginRight = getSize(20, 30);

  // Name
  elem.name.style.marginTop = getSize(3, 30);
  elem.name.style.fontSize = getSize(20, 34);

  // Description
  elem.desc.style.fontSize = getSize(15, 24);

  // Social icons
  elem.socialWrapper.style.marginTop = getSize(5, 40);
  elem.socialWrapper.style.marginTop = getSize(5, 40);

  const socialIconsSize = getSize(35, 45);
  const socialIconsFontSize = getSize(17, 24);
  elem.socialIcons.forEach((ico) => {
    ico.style.width = socialIconsSize;
    ico.style.height = socialIconsSize;
    ico.style.lineHeight = socialIconsSize;
    ico.style.fontSize = socialIconsFontSize;
  });
};


export default {
  init() {
    elem.header = document.querySelector('header');
    elem.profilePicture = elem.header.querySelector('.profile-img');
    elem.name = elem.header.querySelector('.name');
    elem.desc = elem.header.querySelector('.desc');
    elem.socialWrapper = elem.header.querySelector('.social-wrapper');
    elem.socialIcons = Array.from(elem.socialWrapper.querySelectorAll('a'));

    this.watch();
    this.setSize();
  },
  watch: () => window.addEventListener('scroll', setSize),
  unwatch: () => window.removeEventListener('scroll', setSize),
  setSize: () => setSize(true)
};
