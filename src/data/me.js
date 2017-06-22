const me = {
  firstName: 'Stefan',
  lastName: 'Novakovic',
  get fullName() { return `${this.firstName} ${this.lastName}`; },
  userName: 'snovakovic',
  description: 'Senior Software Developer',
  subDescription: 'JavaScript enthusiast',
  profileImage: '/assets/images/profile.jpg'
};

me.social = [{
  name: 'linkedin',
  link: '#',
  icon: 'fa fa-linkedin'
}, {
  name: 'github',
  link: '#',
  icon: 'fa fa-github'
}, {
  name: 'linkedin',
  link: '#',
  icon: 'fa fa-stack-overflow'
}];


export default me;
