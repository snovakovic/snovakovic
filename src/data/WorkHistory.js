import Profile from 'data/Profile';


const extensionEngine = {
  name: 'ExtensionEngine',
  link: 'https://extensionengine.com/'
};

export default [{
  position: 'Sr. Software Developer',
  period: 'Aug 2014 - Present',
  company: extensionEngine,
  summary: `As a senior developer my key roles are to make decisions on technologies
    to be used on new projects, to mentor junior team members, to ensure code
    quality that is enforced through required code reviews and off course, to
    develop cool new features. Main projects:
    <ul class="in-content">
      <li>A dashboard for Notre Dame online Master’s Degree program.</li>
      <li>A document management system for QuietStream Financial.</li>
      <li>A platform for English language learners for Ellevation Education.</li>
    </ul>`
}, {
  position: 'Software Entrepreneur',
  period: 'Jan 2015 - Nov 2016',
  company: { name: 'Freelance' },
  summary: `
    <ul>
      <li>Find and bid for freelance work.</li>
      <li>Communicate directly with the clients regarding their requirements.</li>
      <li>Develop the projects from start to finish based on agreed specifications.</li>
    </ul>
    I’m proud of receiving only positive reviews from clients on
    <a href="${Profile.upwork}">Upwork</a>.`
}, {
  position: 'Software Developer',
  period: 'Jan 2014 - Aug 2014',
  company: {
    name: 'King ICT',
    link: 'http://www.king-ict.hr/'
  },
  summary: `Relocated to Zagreb to work for one of the biggest Croatian IT companies.
    During my whole time there, I worked on developing the new business
    application for Zagreb Municipal Transit System or ZET. Application is used
    by the employees of ZET to sold e-tickets and other public transportation
    related services.`
}, {
  position: 'Jr. Software Developer',
  period: 'Sept 2011 - Jan 2014',
  company: extensionEngine,
  summary: `Fresh from collage and was thrown in fire of large international projects,
    learned a lot in the first 2 years of my professional career. The most
    prominent project form that period was to work in core team for PHT
    (currently ERT) on development of new LogPad app used by
    pharmaceutical companies for clinical researches.`
}];
