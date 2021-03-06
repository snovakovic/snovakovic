import Type from 'common/ProjectType';
import Tech from 'common/Technology';


const projects = [];

projects.push({
  title: 'University of Notre Dame',
  summary: 'Learner Dashboard for Notre Dame Online Master’s Degree Program',
  images: {
    folder: 'notre-dame',
    total: 6,
    extension: 'png'
  },
  period: {
    start: new Date(2016, 10),
    end: undefined
  },
  type: [Type.FEATURED, Type.TEAM, Type.LARGE, Type.FULLSTACK],
  technologies: [Tech.JAVASCRIPT, Tech.ES6, Tech.NODE, Tech.HAPI, Tech.VUE,
    Tech.MONGO, Tech.REDIS, Tech.WEBSOCKETS, Tech.ZEROMQ, Tech.HTML, Tech.CSS],
  client: {
    name: 'University of Notre Dame',
    link: 'https://www.nd.edu/'
  },
  description: `Learner dashboard allows easy collaboration between students and professors
    through chat, sharing of resources, events and live notifications. All content on the dashboard
    is live updated with WebSockets and immediately available to students.
    Center piece of learner dashboard is timeline that combines all student relevant data in
    chronological order. The dashboard is internationalized and WCAG 2.0 accessible.`,
  duties: `As a senior developer my role was to make decisions on technologies
    to be used on the project, to guide junior team member and to ensure code
    quality that is enforced through required code reviews.`
});

projects.push({
  title: 'js-flock',
  summary: 'JS Utility Methods for NODE and Browser',
  images: {
    folder: 'js-flock',
    total: 1,
    extension: 'png'
  },
  period: {
    start: new Date(2017, 0),
    end: undefined
  },
  type: [Type.FEATURED, Type.SINGLE, Type.SMALL, Type.OPENSOURCE],
  technologies: [Tech.JAVASCRIPT, Tech.ES6, Tech.NODE],
  description: `Collection of useful modules/utilities that can be used in NODE and browser.
    The library is published on NPM where you can find more information on it.`,
  duties: 'Creator of the library.',
  link: 'https://www.npmjs.com/package/js-flock'
});

projects.push({
  title: 'Wiggle',
  summary: 'Media Queries Change Listener',
  images: {
    folder: 'wiggle',
    total: 1,
    extension: 'png'
  },
  period: {
    start: new Date(2017, 0),
    end: new Date(2017, 2)
  },
  type: [Type.SINGLE, Type.SMALL, Type.OPENSOURCE],
  technologies: [Tech.JAVASCRIPT],
  description: `Small wrapper around matchMedia to easily react on changes
    in page layout. The library is published on NPM where you can find more information on it.`,
  duties: 'Creator of the library.',
  link: 'https://www.npmjs.com/package/wiggle.js'
});

projects.push({
  title: 'Hotel Reviews',
  images: {
    folder: 'hotel-reviews',
    total: 3,
    extension: 'png'
  },
  period: {
    start: new Date(2016, 10),
    end: new Date(2016, 7)
  },
  type: [Type.TEAM, Type.MEDIUM, Type.FULLSTACK],
  technologies: [Tech.JAVASCRIPT, Tech.ES6, Tech.NODE,
    Tech.HAPI, Tech.VUE, Tech.MONGO],
  client: {
    name: 'Manas',
    link: 'http://www.manas.hr/'
  },
  description: 'Creating a platform for managing accommodation reviews in one place.'
});

projects.push({
  title: 'Ad Kontrol',
  summary: 'Logging Occurrences of Advertisements on Radio and Television',
  images: {
    folder: 'ad-kontrol',
    total: 5,
    extension: 'png'
  },
  period: {
    start: new Date(2016, 6),
    end: new Date(2017, 3)
  },
  type: [Type.TEAM, Type.LARGE, Type.FULLSTACK, Type.FREELANCE],
  technologies: [Tech.JAVASCRIPT, Tech.ANGULAR1, Tech.MYSQL, Tech.ADONET,
    Tech.HTML, Tech.CSS],
  client: {
    name: 'Ad Kontrol',
    link: 'http://adkontrol.com/'
  },
  description: `AdKontrol automates the process of logging all
    on-air occurrences of pre-recorded advertisements on radio and television
    to produce high-value reporting products for advertisers, agencies,
    media houses, and regulators.`,
  duties: `Developing new features for AdKontol with main focus on
    new reporting system.`,
  link: 'http://adkontrol.com/'
});

projects.push({
  title: 'Document Management System',
  images: {
    folder: 'docma',
    total: 0
  },
  period: {
    start: new Date(2015, 8),
    end: new Date(2016, 7)
  },
  type: [Type.FEATURED, Type.TEAM, Type.LARGE, Type.FRONTEND],
  technologies: [Tech.JAVASCRIPT, Tech.ES6, Tech.ANGULAR1, Tech.HTML,
    Tech.CSS],
  client: {
    name: 'Quiet Stream Financial',
    link: 'https://www.quietstreamfinancial.com/'
  },
  description: `Worked in one of many teams inside of QSF with main focus on developing
    Document Management System. The system is very similar to online version of Dropbox combined
    with particular QSF business logic and integrated with internal QSF applications.`,
  duties: `Working directly with client own development team writing high
    quality code with required code reviews and unit testing.`
});

projects.push({
  title: 'The CHS Group',
  summary: 'Custom WordPress Site',
  images: {
    folder: 'chs-group',
    total: 4,
    extension: 'png'
  },
  period: {
    start: new Date(2015, 4),
    end: new Date(2015, 6)
  },
  type: [Type.SINGLE, Type.SMALL, Type.FRONTEND, Type.FREELANCE],
  technologies: [Tech.JAVASCRIPT, Tech.JQUERY, Tech.PHP, Tech.WORDPRESS,
    Tech.HTML, Tech.CSS],
  client: {
    name: 'Yellowdot Group',
    link: 'http://yellowdotgroup.com/'
  },
  description: 'Development of custom designed WordPress site.',
  link: 'http://thechsgroup.us/'
});

projects.push({
  title: 'YellowDot',
  summary: 'Updates on WordPress Site',
  images: {
    folder: 'yellowdot',
    total: 2,
    extension: 'png'
  },
  period: {
    start: new Date(2015, 3),
    end: new Date(2015, 3)
  },
  type: [Type.SINGLE, Type.SMALL, Type.FRONTEND, Type.FREELANCE],
  technologies: [Tech.JAVASCRIPT, Tech.JQUERY, Tech.PHP, Tech.WORDPRESS,
    Tech.HTML, Tech.CSS],
  client: {
    name: 'Yellowdot Group',
    link: 'http://yellowdotgroup.com/'
  },
  description: 'Updates of existing WordPress theme for Yellowdot Group.',
  link: 'http://yellowdotgroup.com/'
});

projects.push({
  title: 'Stella and Ruby',
  summary: 'Custom WordPress Site',
  images: {
    folder: 'stella-and-ruby',
    total: 2,
    extension: 'png'
  },
  period: {
    start: new Date(2015, 2),
    end: new Date(2015, 2)
  },
  type: [Type.SINGLE, Type.SMALL, Type.FRONTEND, Type.FREELANCE],
  technologies: [Tech.JAVASCRIPT, Tech.JQUERY, Tech.PHP, Tech.WORDPRESS,
    Tech.HTML, Tech.CSS],
  client: {
    name: 'Yellowdot Group',
    link: 'http://yellowdotgroup.com/'
  },
  description: 'Development of custom designed WordPress site.',
  link: 'http://stellaandruby.com/'
});

projects.push({
  title: 'OpenLooq',
  summary: 'Platform for Selling and Buying Data',
  images: {
    folder: 'openlooq',
    total: 6,
    extension: 'png'
  },
  period: {
    start: new Date(2015, 8),
    end: new Date(2017, 2)
  },
  type: [Type.FEATURED, Type.SINGLE, Type.LARGE, Type.FULLSTACK, Type.FREELANCE],
  technologies: [Tech.CSHARP, Tech.JAVASCRIPT, Tech.JQUERY, Tech.MSSQL, Tech.ADONET,
    Tech.HTML, Tech.CSS],
  client: {
    name: 'Boston Web Developer',
    link: 'http://www.bostonwebdeveloper.com/'
  },
  description: `Platform allows administrator to define any data template
    (People, Places, Companies...) and to define custom validations for each of template.
    Sellers can upload data by manually typing information in platform or by uploading CSV
    file with data. Each data upload is auto validated based on define validation in the template.
    Buyers can search for data and buy it using build it payment system (Authorize.NET).`,
  duties: `Only developer working on the platform from the ground up. Development of platform
    has been stopped after six months of development due to financial reasons.`
});

projects.push({
  title: 'The Partnership Resources',
  images: {
    folder: 'partnership-resources',
    total: 2
  },
  period: {
    start: new Date(2015, 8),
    end: new Date(2015, 11)
  },
  type: [Type.SINGLE, Type.SMALL, Type.FULLSTACK, Type.FREELANCE],
  technologies: [Tech.CSHARP, Tech.JAVASCRIPT, Tech.JQUERY, Tech.MSSQL, Tech.ADONET,
    Tech.HTML, Tech.CSS],
  client: {
    name: 'Boston Web Developer',
    link: 'http://www.bostonwebdeveloper.com/'
  },
  description: `Development of custom designed page for The Partnership
    Resource. The page is build on top of a custom-made C#(.NET) CMS.`,
  link: 'http://thepartnershipresource.com/'
});

projects.push({
  title: 'JDC Demolition',
  images: {
    folder: 'jdc-demolition',
    total: 2,
    extension: 'png'
  },
  period: {
    start: new Date(2015, 8),
    end: new Date(2015, 9)
  },
  type: [Type.SINGLE, Type.SMALL, Type.FULLSTACK, Type.FREELANCE],
  technologies: [Tech.CSHARP, Tech.JAVASCRIPT, Tech.JQUERY, Tech.MSSQL, Tech.ADONET,
    Tech.HTML, Tech.CSS],
  client: {
    name: 'Boston Web Developer',
    link: 'http://www.bostonwebdeveloper.com/'
  },
  description: `Development of custom designed page for The JDC Demolition
    Company. Page is build on top of custom made C#(.NET) CMS.`,
  link: 'http://jdcdemoinc.com/'
});

projects.push({
  title: 'BWD CMS',
  images: {
    folder: 'bwd-cms',
    total: 3,
    extension: 'png'
  },
  period: {
    start: new Date(2016, 0),
    end: new Date(2015, 9)
  },
  type: [Type.SINGLE, Type.SMALL, Type.FULLSTACK, Type.FREELANCE],
  technologies: [Tech.CSHARP, Tech.JAVASCRIPT, Tech.JQUERY, Tech.MSSQL, Tech.ADONET,
    Tech.HTML, Tech.CSS],
  client: {
    name: 'Boston Web Developer',
    link: 'http://www.bostonwebdeveloper.com/'
  },
  description: 'Updates and improvements to custom made C# .NET CMS System.'
});

projects.push({
  title: 'Playground',
  summary: 'Fun Time with Hobby Projects',
  images: {
    folder: 'playground',
    total: 5,
    extension: 'png'
  },
  period: {
    start: new Date(2014, 10),
    end: new Date(2015, 3)
  },
  type: [Type.SINGLE, Type.OPENSOURCE, Type.SMALL],
  technologies: [Tech.JAVASCRIPT, Tech.HTML, Tech.CSS],
  description: 'Development of HTML/JS games as a hobby.'
});

projects.push({
  title: 'Ellevation Education',
  summary: 'Platform for ELL Learners and Educators',
  images: {
    folder: 'ellevation',
    total: 4
  },
  period: {
    start: new Date(2014, 7),
    end: new Date(2015, 8)
  },
  type: [Type.FEATURED, Type.TEAM, Type.LARGE, Type.FULLSTACK],
  technologies: [Tech.JAVASCRIPT, Tech.CSHARP, Tech.MSSQL,
    Tech.ELASTICSEARCH, Tech.ENTITYFRAMEWORK, Tech.HTML, Tech.CSS],
  client: {
    name: 'Ellevation Education',
    link: 'http://ellevationeducation.com/'
  },
  description: `Implementing new features for Ellevation the only web-based
    software platform specifically designed for ELL educators and the
    English Learners they serve. Ellevation offers educators a detailed look at
    English Learners. Using Ellevation, educators can review a student's
    proficiency level, accommodations and more, and monitor current,
    reclassified, and exited students.`,
  duties: 'Working directly with client own development team and management.',
  link: 'https://www.npmjs.com/package/wiggle.js'
});

projects.push({
  title: 'Zagreb Municipal Transit System',
  summary: 'Business App for Selling Transportation Services',
  images: {
    folder: 'zet',
    total: 0
  },
  period: {
    start: new Date(2014, 0),
    end: new Date(2014, 7)
  },
  type: [Type.FEATURED, Type.TEAM, Type.LARGE, Type.SERVERSIDE],
  technologies: [Tech.CSHARP, Tech.MSSQL,
    Tech.ENTITYFRAMEWORK, Tech.WPF],
  client: {
    name: 'Zagreb Municipal Transit System',
    link: 'http://www.zet.hr/'
  },
  description: `Development of new business application for Zagreb Municipal Transit System or ZET.
    WPF Application is used by the employees of the ZET to sold e-tickets and other public
    transportation related services. Development of the SOAP based service used by new application
    and by existing applications in kiosks around Zagreb.`,
  duties: 'Developing of new features, deploying to production and fixing issues in production.'
});

projects.push({
  title: 'Netgiro',
  summary: 'PhoneGap mobile application',
  images: {
    folder: 'netgiro',
    total: 5
  },
  period: {
    start: new Date(2013, 9),
    end: new Date(2013, 11)
  },
  type: [Type.SINGLE, Type.MEDIUM, Type.FRONTEND],
  technologies: [Tech.JAVASCRIPT, Tech.ANGULAR1, Tech.PHONEGAP,
    Tech.HTML, Tech.CSS],
  description: `Development of the JavaScript mobile application for displaying account
    informations of NetGiro payment system clients.`,
  client: {
    name: 'Program 5',
    link: 'http://program5.hr/'
  },
  link: 'https://www.netgiro.is/'
});

projects.push({
  title: 'Harvard Innovation Lab',
  images: {
    folder: 'hardvard-innovation-lab',
    total: 6
  },
  period: {
    start: new Date(2013, 1),
    end: new Date(2013, 3)
  },
  type: [Type.TEAM, Type.MEDIUM, Type.FULLSTACK],
  technologies: [Tech.PHP, Tech.JAVASCRIPT, Tech.JQUERY, Tech.HTML, Tech.CSS],
  description: `Development of web application that acts as mediator between Harvard students and
    advisors. Students can search for and make connection with advisors through the platform.`,
  client: {
    name: 'Harvard Innovation Lab',
    link: 'http://i-lab.harvard.edu/'
  },
  link: 'http://i-lab.harvard.edu/expert-resourcing/advisor-tool/become_advisor'
});

projects.push({
  title: 'PHT',
  summary: 'LogPad App for Clinical Research',
  images: {
    folder: 'pht',
    total: 6
  },
  period: {
    start: new Date(2012, 8),
    end: new Date(2013, 8)
  },
  type: [Type.FEATURED, Type.TEAM, Type.LARGE, Type.FULLSTACK],
  technologies: [Tech.JAVASCRIPT, Tech.BACKBONE, Tech.PHONEGAP,
    Tech.HTML, Tech.CSS],
  client: {
    name: 'ERT (past PHT)',
    link: 'https://www.ert.com/'
  },
  description: `Development of the LogPad App that enables patients to enter
    data on their own Apple or Android smartphones.
    The LogPad App collects patient-reported and clinician-completed
    questionnaires, and transfers all eSource data to the
    PHT StudyWorks online portal where it can be viewed in real-time
    by sites and study teams.`,
  duties: `Developing new core features for LogPad App.
    Writing extensive unit test and documentation.`
});

projects.push({
  title: 'SalesForce Widget',
  images: {
    folder: 'salesforce',
    total: 2,
    extension: 'png'
  },
  period: {
    start: new Date(2012, 2),
    end: new Date(2012, 3)
  },
  type: [Type.SINGLE, Type.SMALL],
  technologies: [Tech.JAVASCRIPT, Tech.JQUERY],
  description: `Developing of SalesForce widget to access client own system options
    from inside of Sales Force.`,
  client: {
    name: 'Frontier Strategy Group',
    link: 'http://frontierstrategygroup.com/'
  }
});

projects.push({
  title: 'Frontier Strategy Group',
  images: {
    folder: 'fsg',
    total: 8,
    extension: 'png'
  },
  period: {
    start: new Date(2011, 10),
    end: new Date(2012, 8)
  },
  type: [Type.FEATURED, Type.TEAM, Type.LARGE, Type.FULLSTACK],
  technologies: [Tech.JAVASCRIPT, Tech.JQUERY, Tech.CSHARP,
    Tech.MSSQL, Tech.ADONET, Tech.HTML, Tech.CSS],
  client: {
    name: 'Frontier Strategy Group',
    link: 'http://frontierstrategygroup.com/'
  },
  description: `Development of web portal for accurate timely and business critical data.
    FSG was my first big project after graduating from college and a month of training
    in the company with smaller projects.`
});

projects.push({
  title: 'Real Estate CMS',
  images: {
    folder: 'real-estate',
    total: 2,
    extension: 'png'
  },
  period: {
    start: new Date(2011, 9),
    end: new Date(2011, 10)
  },
  type: [Type.SINGLE, Type.SMALL, Type.SERVERSIDE],
  technologies: [Tech.CSHARP, Tech.MSSQL, Tech.ADONET],
  client: {
    name: 'MANAS',
    link: 'http://www.manas.hr/'
  },
  description: `Design and implementation of REST web service and database
    for real-estate CMS system.`
});

projects.push({
  title: 'Virtual Web Navigation',
  images: {
    folder: 'vw-navigation',
    total: 5
  },
  period: {
    start: new Date(2011, 1),
    end: new Date(2011, 7)
  },
  type: [Type.SINGLE, Type.MEDIUM, Type.FULLSTACK],
  technologies: [Tech.CSHARP, Tech.ADONET, Tech.JAVASCRIPT,
    Tech.HTML, Tech.CSS],
  description: `Virtual navigation application is a part of my Master's Degree
    thesis. Application is consist of two parts: Publicly accessible web pages
    for viewing virtual navigations and administration web pages for managing and creating
    new virtual navigations.`
});

projects.push({
  title: 'Geolocation WEB 2.0 API',
  images: {
    folder: 'geolocation',
    total: 0
  },
  period: {
    start: new Date(2009, 4),
    end: new Date(2009, 8)
  },
  type: [Type.SINGLE, Type.MEDIUM],
  technologies: [Tech.PHP, Tech.HTML, Tech.CSS],
  description: 'Application is build as part of my Bachelor\'s Degree thesis.'
});


export default projects;
