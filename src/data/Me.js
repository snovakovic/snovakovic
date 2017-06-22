import Social from './Social';
import Skills from './Skills';

const me = {
  firstName: 'Stefan',
  lastName: 'Novakovic',
  get fullName() { return `${this.firstName} ${this.lastName}`; },
  userName: 'snovakovic',
  email: 'stefan.novakovich@gmail.com',
  description: 'Senior Software Developer',
  featured: 'JavaScript enthusiast',
  image: '/assets/images/profile.jpg',
  location: {
    name: 'Split, Croatia',
    link: 'https://goo.gl/maps/kaLwrJyfmGT2'
  }
};

me.social = Social;
me.skills = Skills;

export default me;
