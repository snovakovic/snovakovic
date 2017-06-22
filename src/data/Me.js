import Books from './Books';
import Education from './Education';
import Musics from './Musics';
import Skills from './Skills';
import Social from './Social';
import Testimonial from './Testimonial';

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

me.books = Books;
me.education = Education;
me.musics = Musics;
me.skills = Skills;
me.social = Social;
me.testimonial = Testimonial;

export default me;
