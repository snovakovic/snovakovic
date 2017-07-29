import Wiggle from 'wiggle.js';


const wiggle = Wiggle.init([{
  maxWidth: 767,
  name: 'mobile'
}, {
  maxWidth: 1023,
  minWidth: 768,
  name: 'tablet'
}, {
  minWidth: 1024,
  name: 'desktop'
}]);


export default wiggle;
