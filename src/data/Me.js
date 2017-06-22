import Social from './Social';
import Skills from './Skills';

const me = {
  firstName: 'Stefan',
  lastName: 'Novakovic',
  get fullName() { return `${this.firstName} ${this.lastName}`; },
  userName: 'snovakovic',
  description: 'Senior Software Developer',
  subDescription: 'JavaScript enthusiast',
  profileImage: '/assets/images/profile.jpg'
};

me.social = Social;
me.skills = Skills;

export default me;
