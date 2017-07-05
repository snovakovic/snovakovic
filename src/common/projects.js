import type from './projectType';
import tech from './technology';


const projects = [];

projects.push({
  id: 'notre-dame',
  noImages: 0,
  title: 'University of Notre Dame',
  summary: 'Learner dashboard for Notre Dame students',
  period: {
    start: new Date(2016, 10),
    end: undefined
  },
  type: [type.FEATURED, type.TEAM, type.LARGE, type.FULLSTACK],
  technologies: [tech.JAVASCRIPT, tech.ES6, tech.NODE, tech.HAPI, tech.VUE,
    tech.MONGO, tech.REDIS, tech.WEBSOCKETS, tech.ZEROMQ, tech.HTML, tech.CSS],
  client: {
    name: 'University of Notre Dame',
    link: 'https://www.nd.edu/'
  },
  description: `Developing learner dashboard for first Notre Dame online
    master’s degree program, in data science. Main features of dashboard are
    chat, live updates, live notifications and timeline that combines all user
    relevant data as articles, events, courses.
    Dashboard is internationalized and wcag 2.0 accessible. More about
    program can be found in following
    <a href="https://www.insidehighered.com/digital-learning/article/2017/06/07/notre-dame-offers-its-first-graduate-online-program?utm_campaign=press&utm_source=facebook&utm_medium=social">article</a>`, // eslint-disable-line max-len
  duties: `As senior developer my role was to make decisions on technologies
    to be used on project, to mentor junior team members and to ensure code
    quality that is enforced through required code reviews and off course to
    develop cool new features.`
});

projects.push({
  id: 'js-flock',
  noImages: 0,
  title: 'js-flock',
  summary: 'JS utility methods for NODE and Browser',
  period: {
    start: new Date(2017, 0),
    end: undefined
  },
  type: [type.FEATURED, type.SINGLE, type.SMALL, type.OPENSOURCE],
  technologies: [tech.JAVASCRIPT, tech.ES6, tech.NODE],
  description: `Gather and polish helper methods created during other projects.
    Code are published on npm under name js-flock.`,
  duties: 'Creator',
  link: 'https://www.npmjs.com/package/js-flock'
});

projects.push({
  id: 'wiggle',
  noImages: 0,
  title: 'Wiggle',
  period: {
    start: new Date(2017, 0),
    end: new Date(2017, 2)
  },
  type: [type.SINGLE, type.SMALL, type.OPENSOURCE],
  technologies: [tech.JAVASCRIPT],
  description: `Small wrapper around matchMedia to easily react on changes
    in page layout.`,
  duties: 'Creator',
  link: 'https://www.npmjs.com/package/wiggle.js'
});

projects.push({
  id: 'hotel-reviews',
  noImages: 0,
  title: 'Hotel Reviews',
  period: {
    start: new Date(2016, 10),
    end: new Date(2016, 7)
  },
  type: [type.TEAM, type.MEDIUM, type.FULLSTACK],
  technologies: [tech.JAVASCRIPT, tech.ES6, tech.NODE,
    tech.HAPI, tech.VUE, tech.MONGO],
  client: {
    name: 'Manas',
    link: 'http://www.manas.hr/'
  },
  description: `Creating platform for managing hotel/accommodation
    reviews in one place`
});

projects.push({
  id: 'ad-kontrol',
  noImages: 0,
  title: 'Ad Kontrol',
  summary: 'Logging occurrences of advertisements on radio and television',
  period: {
    start: new Date(2016, 6),
    end: new Date(2017, 3)
  },
  type: [type.TEAM, type.LARGE, type.FULLSTACK, type.FREELANCE],
  technologies: [tech.JAVASCRIPT, tech.ANGULAR1, tech.MYSQL, tech.ADONET,
    tech.HTML, tech.CSS],
  client: {
    name: 'Ad Kontrol',
    link: 'http://adkontrol.com/'
  },
  description: `AdKontrol automates the process of logging all
    on-air occurrences of pre-recorded advertisements on radio and television
    to produce high-value reporting products for advertisers, agencies,
    media houses, and regulators.`,
  duties: `Developing new features for adKontol with main focus on
    new reporting system`,
  link: 'http://adkontrol.com/'
});

projects.push({
  id: 'docma',
  noImages: 0,
  title: 'Document Management System',
  period: {
    start: new Date(2015, 8),
    end: new Date(2016, 7)
  },
  type: [type.FEATURED, type.TEAM, type.LARGE, type.FRONTEND],
  technologies: [tech.JAVASCRIPT, tech.ES6, tech.ANGULAR1, tech.HTML,
    tech.CSS],
  client: {
    name: 'Quiet Stream Financial',
    link: 'https://www.quietstreamfinancial.com/'
  },
  description: `Worked in one of many teams inside of QSF. Our team main focus
    was on developing Document Management System.
    Document Management System is very similar to online version of Dropbox
    combined with specific business logic and integrated with other
    parts of applications`,
  duties: `Working directly with client own development team writing high
    quality code with required code reviews and unit testing`
});

projects.push({
  id: 'chs-group',
  noImages: 0,
  title: 'The CHS Group',
  summary: 'Custom WordPress site',
  period: {
    start: new Date(2015, 4),
    end: new Date(2015, 6)
  },
  type: [type.SINGLE, type.SMALL, type.FRONTEND, type.FREELANCE],
  technologies: [tech.JAVASCRIPT, tech.JQUERY, tech.PHP, tech.WORDPRESS,
    tech.HTML, tech.CSS],
  client: {
    name: 'Yellowdot Group',
    link: 'http://yellowdotgroup.com/'
  },
  description: `Development of WordPress site with custom design
    for NYC Renovation Company.`,
  link: 'http://thechsgroup.us/'
});

projects.push({
  id: 'wellowdot',
  noImages: 0,
  title: 'YellowDot',
  summary: 'Updates on WordPress site',
  period: {
    start: new Date(2015, 3),
    end: new Date(2015, 3)
  },
  type: [type.SINGLE, type.SMALL, type.FRONTEND, type.FREELANCE],
  technologies: [tech.JAVASCRIPT, tech.JQUERY, tech.PHP, tech.WORDPRESS,
    tech.HTML, tech.CSS],
  client: {
    name: 'Yellowdot Group',
    link: 'http://yellowdotgroup.com/'
  },
  description: 'Updates of existing Wordpress theme for Yellowdot Group.',
  link: 'http://yellowdotgroup.com/'
});

projects.push({
  id: 'stella-and-ruby',
  noImages: 0,
  title: 'Stella and Ruby',
  summary: 'Custom WordPress site',
  period: {
    start: new Date(2015, 2),
    end: new Date(2015, 2)
  },
  type: [type.SINGLE, type.SMALL, type.FRONTEND, type.FREELANCE],
  technologies: [tech.JAVASCRIPT, tech.JQUERY, tech.PHP, tech.WORDPRESS,
    tech.HTML, tech.CSS],
  client: {
    name: 'Yellowdot Group',
    link: 'http://yellowdotgroup.com/'
  },
  description: `Development of WordPress site with custom design
    for Stella & Ruby jewelry.`,
  link: 'http://stellaandruby.com/'
});

projects.push({
  id: 'openlooq',
  noImages: 0,
  title: 'OpenLooq',
  period: {
    start: new Date(2015, 8),
    end: new Date(2017, 2)
  },
  type: [type.SINGLE, type.LARGE, type.FULLSTACK, type.FREELANCE],
  technologies: [tech.JAVASCRIPT, tech.JQUERY, tech.MSSQL, tech.ADONET,
    tech.HTML, tech.CSS],
  client: {
    name: 'Boston Web Developer',
    link: 'http://www.bostonwebdeveloper.com/'
  },
  description: `Developing platform for buying/selling information.
    Platform allows administrator to define any data template
    (People, Places, Companies, etc) with following validation that’s used by
    platform seller to upload relevant data. Platform allows buyer to search
    and buy data using build payment system (Authorize.NET).
    you can access it on on development server
    <a href="'http://openlooq.bostonwebdeveloper.com/">development server</a>`,
  duties: `Only developer working on platform from ground up.
    Development of platform have been stopped after 6months of development
    due to financial reasons`
});

projects.push({
  id: 'partnership-resources',
  noImages: 0,
  title: 'The Partnership Resources',
  period: {
    start: new Date(2015, 8),
    end: new Date(2015, 11)
  },
  type: [type.SINGLE, type.SMALL, type.FULLSTACK, type.FREELANCE],
  technologies: [tech.JAVASCRIPT, tech.JQUERY, tech.MSSQL, tech.ADONET,
    tech.HTML, tech.CSS],
  client: {
    name: 'Boston Web Developer',
    link: 'http://www.bostonwebdeveloper.com/'
  },
  description: `Development of custom designed page for The Partnership
    Resource. Page is build on top of custom made C#(.NET) CMS.`,
  link: 'http://thepartnershipresource.com/'
});

projects.push({
  id: 'jdc-demolition',
  noImages: 0,
  title: 'JDC Demolition',
  period: {
    start: new Date(2015, 8),
    end: new Date(2015, 9)
  },
  type: [type.SINGLE, type.SMALL, type.FULLSTACK, type.FREELANCE],
  technologies: [tech.JAVASCRIPT, tech.JQUERY, tech.MSSQL, tech.ADONET,
    tech.HTML, tech.CSS],
  client: {
    name: 'Boston Web Developer',
    link: 'http://www.bostonwebdeveloper.com/'
  },
  description: `Development of custom designed page for The JDC Demolition
    Company. Page is build on top of custom made C#(.NET) CMS.`,
  link: 'http://jdcdemoinc.com/'
});

projects.push({
  id: 'bwd-cms',
  noImages: 0,
  title: 'BWD CMS',
  period: {
    start: new Date(2016, 0),
    end: new Date(2015, 9)
  },
  type: [type.SINGLE, type.SMALL, type.FULLSTACK, type.FREELANCE],
  technologies: [tech.JAVASCRIPT, tech.JQUERY, tech.MSSQL, tech.ADONET,
    tech.HTML, tech.CSS],
  client: {
    name: 'Boston Web Developer',
    link: 'http://www.bostonwebdeveloper.com/'
  },
  description: 'Updates and improvements to custom made C# .NET CMS System'
});

projects.push({
  id: 'playground',
  noImages: 0,
  title: 'Playground',
  summary: 'Time for fun with hobby projects',
  period: {
    start: new Date(2014, 10),
    end: new Date(2015, 3)
  },
  type: [type.SINGLE, type.OPENSOURCE, type.SMALL],
  technologies: [tech.JAVASCRIPT, tech.HTML, tech.CSS],
  description: 'Hobby project. Development of HTML/JS games',
  duties: 'Creator'
});

projects.push({
  id: 'ellevation',
  noImages: 0,
  title: 'Ellevation Education',
  period: {
    start: new Date(2014, 7),
    end: new Date(2015, 8)
  },
  type: [type.TEAM, type.LARGE, type.FULLSTACK],
  technologies: [tech.JAVASCRIPT, tech.CSHARP, tech.MSSQL,
    tech.ELASTICSEARCH, tech.ENTITYFRAMEWORK, tech.HTML, tech.CSS],
  client: {
    name: 'Ellevation Education',
    link: 'http://ellevationeducation.com/'
  },
  description: `Implementing new features for Ellevation the only web-based
    software platform specifically designed for ELL educators and the
    English Learners they serve. Ellevation offers educators a detailed look at
    English Learners. Using Ellevation, educators can review a student's
    proficiency level, accommodations and more, and monitor current,
    reclassified, and exited students`,
  duties: 'Working directly with client own development team and management.',
  link: 'https://www.npmjs.com/package/wiggle.js'
});

projects.push({
  id: 'zet',
  noImages: 0,
  title: 'Zagreb Municipal Transit System',
  summary: 'New business application for selling e-tickets',
  period: {
    start: new Date(2014, 0),
    end: new Date(2014, 7)
  },
  type: [type.FEATURED, type.TEAM, type.LARGE, type.SERVERSIDE],
  technologies: [tech.CSHARP, tech.MSSQL,
    tech.ENTITYFRAMEWORK, tech.WPF],
  client: {
    name: 'Zagreb Municipal Transit System',
    link: 'http://www.zet.hr/'
  },
  description: `Development of new business application for
    Zagreb Municipal Transit System or ZET.
    WPF Application is used by the employees of the ZET to sold E-tickets and
    other public transportation related services.
    Development of the SOAP based service used by new application
    and by existing applications in kiosks around Zagreb`,
  duties: `Developing of new features, deploying to production
    and fixing production issues`
});

projects.push({
  id: 'netgiro',
  noImages: 5,
  title: 'Netgiro',
  period: {
    start: new Date(2013, 9),
    end: new Date(2013, 11)
  },
  type: [type.SINGLE, type.MEDIUM, type.FRONTEND],
  technologies: [tech.JAVASCRIPT, tech.ANGULAR1, tech.PHONEGAP,
    tech.HTML, tech.CSS],
  description: `Development of the JavaScript angular mobile application
    that allows NetGiro payment system clients to explore their account
    on mobile device`,
  client: {
    name: 'Program 5',
    link: 'http://program5.hr/'
  },
  link: 'https://www.netgiro.is/'
});

projects.push({
  id: 'hardvard-inovation-lab',
  noImages: 6,
  title: 'Harvard Inovation Lab',
  period: {
    start: new Date(2013, 1),
    end: new Date(2013, 3)
  },
  type: [type.TEAM, type.MEDIUM, type.FULLSTACK],
  technologies: [tech.PHP, tech.JAVASCRIPT, tech.JQUERY, tech.HTML, tech.CSS],
  description: `Development of web application and integration with existing
    iLab site. Application is conceived as a link between Harvard students and
    advisors. Advisors have options to login to system and to manage their
    profiles. Students have ability to search and to make connection
    with advisors. `,
  client: {
    name: 'Harvard Inovation Lab',
    link: 'http://i-lab.harvard.edu/'
  },
  link: 'http://i-lab.harvard.edu/expert-resourcing/advisor-tool/become_advisor'
});

projects.push({
  id: 'pht',
  noImages: 6,
  title: 'PHT',
  summary: 'LogPad app for clinical research to ',
  period: {
    start: new Date(2012, 8),
    end: new Date(2013, 8)
  },
  type: [type.FEATURED, type.TEAM, type.LARGE, type.FULLSTACK],
  technologies: [tech.JAVASCRIPT, tech.BACKBONE, tech.PHONEGAP,
    tech.HTML, tech.CSS],
  client: {
    name: 'ERT (past PHT)',
    link: 'https://www.ert.com/'
  },
  description: `Development of the LogPad App that enables patients to enter
    data on their own Apple or Android smartphones.
    The LogPad App collects patient-reported and clinician-completed
    questionnaires, and transfers all eSource data to the
    PHT StudyWorks online portal where it can be viewed in real-time
    by sites and study teams`,
  duties: `Developing new core features for LogPad App.
    Writing extensive unit test and documentation`
});

projects.push({
  id: 'salesforce',
  noImages: 4,
  title: 'SalesForce Widget',
  period: {
    start: new Date(2012, 2),
    end: new Date(2012, 3)
  },
  type: [type.SINGLE, type.SMALL],
  technologies: [tech.JAVASCRIPT, tech.JQUERY],
  description: 'Hobby project. Development of HTML/JS games',
  client: {
    name: 'Frontier Strategy Group',
    link: 'http://frontierstrategygroup.com/'
  }
});

projects.push({
  id: 'fsg',
  noImages: 8,
  title: 'Frontier Strategy Group',
  period: {
    start: new Date(2011, 10),
    end: new Date(2012, 8)
  },
  type: [type.FEATURED, type.TEAM, type.LARGE, type.FULLSTACK],
  technologies: [tech.JAVASCRIPT, tech.JQUERY, tech.CSHARP,
    tech.MSSQL, tech.ADONET, tech.HTML, tech.CSS],
  client: {
    name: 'Frontier Strategy Group',
    link: 'http://frontierstrategygroup.com/'
  },
  description: `Development of web portal for accurate timely and business
    critical data. FSG was my first actual big project after graduating from
    collage and a month of training in company on smaller projects`
});

projects.push({
  id: 'real-estate',
  noImages: 4,
  title: 'Real Estate CMS',
  period: {
    start: new Date(2011, 9),
    end: new Date(2011, 10)
  },
  type: [type.SINGLE, type.SMALL, type.SERVERSIDE],
  technologies: [tech.CSHARP, tech.MSSQL, tech.ADONET],
  client: {
    name: 'MANAS',
    link: 'http://www.manas.hr/'
  },
  description: `Design and implementation of REST web service and database
    for real-estate CMS system`
});

projects.push({
  id: 'vw-navigation',
  noImages: 5,
  title: 'Virtual Web Navigation',
  period: {
    start: new Date(2011, 1),
    end: new Date(2011, 7)
  },
  type: [type.SINGLE, type.MEDIUM, type.FULLSTACK],
  technologies: [tech.CSHARP, tech.ADONET, tech.JAVASCRIPT,
    tech.HTML, tech.CSS],
  description: `Virtual navigation application is a part of my Master degree
    thesis. Application is consist of two parts: Publicly accessible web pages
    for viewing virtual navigations and administration web pages for creating
    modifing or deleting web navigations.
    Application is built using 3-tier architecture principles.`
});

projects.push({
  id: 'geolocation',
  noImages: 0,
  title: 'Geolocation WEB 2.0 API',
  period: {
    start: new Date(2009, 4),
    end: new Date(2009, 8)
  },
  type: [type.SINGLE, type.MEDIUM],
  technologies: [tech.PHP, tech.HTML, tech.CSS],
  description: 'Application build as part of my Bachelor degree thesis.'
});


export default projects;
