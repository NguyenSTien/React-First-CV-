import clientone from '../assets/images/client-1.png';
import clienttwo from '../assets/images/client-2.png';
import clientthere from '../assets/images/client-3.png';
import logo1 from '../assets/images/logo1.png';
import logo2 from '../assets/images/logo2.png';
import logo4 from '../assets/images/logo4.png';
import logo5 from '../assets/images/logo5.png';
import logo6 from '../assets/images/logo6.png';
import logo7 from '../assets/images/logo7.png';
import logo8 from '../assets/images/logo8.png';
import logo9 from '../assets/images/logo9.png';
import blog1 from '../assets/images/blog-1.png';
import blog2 from '../assets/images/blog-2.png';
import blog3 from '../assets/images/blog-3.png';
export const educationData = [
  {
    keyword: 'P',
    title: 'Preparatory Education',
    subTitle: 'Fedrick School',
    date: 'Jan 1997 - Mar 2000',
    content:
      'I completed my preparatory education from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.',
    icon: <i className='fa-solid fa-ellipsis'></i>,
  },
  {
    keyword: 'H',
    title: 'High School',
    subTitle: 'RedStreet College',
    date: 'Jan 2000 - Mar 2005',
    content:
      'I completed my high school degree from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.',
  },
  {
    keyword: 'C',
    title: 'Computer Science',
    subTitle: 'Down Street College',
    date: 'Jan 2006 - Mar 2008',
    content:
      'I completed my computer science degree from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.',
    icon: '',
  },
  {
    keyword: <i class='fa-solid fa-graduation-cap'></i>,
    title: 'Software Engineering',
    subTitle: 'Oxford University',
    date: 'Jan 2009 - Mar 2010',
    content:
      'I completed this degree from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.',
  },
  {
    keyword: 'U',
    title: 'UI/UX Workshop',
    subTitle: 'IT Next Academy',
    date: 'Jan 2010 - Mar 2011',
    content:
      'I completed this course from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.',
    icon: <i className='fa-solid fa-ellipsis'></i>,
  },
  {
    keyword: <i class='fa-solid fa-earth-americas'></i>,
    title: 'Web Development',
    subTitle: 'Lipro University',
    date: 'Jan 2011 - Mar 2012',
    content:
      'I completed this course from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.',
    icon: <i className='fa-solid fa-ellipsis'></i>,
  },
];
export const professionalData = [
  {
    keyword: 'HTML5',
    content: '90',
  },
  {
    keyword: 'CSS3',
    content: '90',
  },
  {
    keyword: 'jQuery',
    content: '70',
  },
  {
    keyword: 'PHP',
    content: '68',
  },
];
export const personalData = [
  {
    keyword: 'Communication',
    content: '80',
  },
  {
    keyword: 'Teamwork',
    content: '60',
  },
  {
    keyword: 'Creativity',
    content: '70',
  },
  {
    keyword: 'Dedication',
    content: '70',
  },
];
export const softwarelData = [
  {
    keyword: 'Adobe Illustrator',
    content: '80',
  },
  {
    keyword: 'Adobe Indesign',
    content: '70',
  },
  {
    keyword: 'PHP Storm',
    content: '60',
  },
  {
    keyword: 'Dev Console',
    content: '80',
  },
];
export const abc = [
  {
    title: 'Professional',
    content: [
      { skill: 'HTML5', percent: 90 },
      { skill: 'CSS3', percent: 90 },
      { skill: 'jQuery', percent: 70 },
      { skill: 'PHP', percent: 68 },
    ],
  },
  {
    title: 'Personal',
    content: [
      { skill: 'Communication', percent: 80 },
      { skill: 'Teamwork', percent: 60 },
      { skill: 'Creativity', percent: 70 },
      { skill: 'Dedication', percent: 70 },
    ],
  },
  {
    title: 'Software',
    content: [
      { skill: 'Adobe Illustrator', percent: 80 },
      { skill: 'Adobe InDesign', percent: 70 },
      { skill: 'PHP Storm', percent: 60 },
      { skill: 'DEV Console', percent: 80 },
    ],
  },
];

export const experienceData = [
  {
    keyword: 'D',
    title: 'Design',
    subTitle: 'RulerSoft',
    date: 'Jan 2010 - Mar 2012',
    content:
      'I started my designing carrier here, spent tow years learning and working in various designing aspects..',
    icon: <i className='fa-solid fa-ellipsis'></i>,
  },
  {
    keyword: 'F',
    title: 'Frontend Developer',
    subTitle: 'Micro IT',
    date: 'Jan 2012 - Mar 2014',
    content:
      'I started my frontend carrier here, spent tow years learning and working in various frontend aspects. I worked on about 40+ projects local and online.',
  },
  {
    keyword: 'U',
    title: 'UI/UX Expert',
    subTitle: 'Libra IT Solutions',
    date: 'Jan 2014 - Mar 2015',
    content:
      'I started my expertise carrier here, spent tow years learning and working in various UX/UI aspects. I worked on about 70+ projects local and online.',
  },
  {
    keyword: 'S',
    title: 'Senior Developer',
    subTitle: 'WebStyle Technologies',
    date: 'Jan 2016 - Continue..',
    content:
      'I recently joined here, currently working on various development aspects. I already worked on about..',
    icon: <i className='fa-solid fa-ellipsis'></i>,
  },
];
export const interestData = [
  {
    icon: <i class='fa-solid fa-music'></i>,
    content: 'Music',
  },
  {
    icon: <i class='fa-solid fa-gamepad'></i>,
    content: 'Gaming',
  },
  {
    icon: <i class='fa-solid fa-camera'></i>,
    content: 'Photography',
  },
  {
    icon: <i class='fa-solid fa-futbol'></i>,
    content: 'Football',
  },
  {
    icon: <i class='fa-solid fa-plane-up'></i>,
    content: 'Traveling',
  },
  {
    icon: <i class='fa-solid fa-film'></i>,
    content: 'Movies',
  },
];
export const tesData = [
  {
    img: <img src={clientone} alt='asdsa'></img>,
    content:
      'I work with John on several web development projects and I find hom to be extremely creative and a technical Front End Developer. Jone expertise involves building complex Responsive Design layouts using HTML 5, CSS3, and JavaScript.',
    contenttwo:
      'I work with John on several web development projects and I find hom to be extremely creative and a technical Front End Developer. Jone expertise involves building complex Responsive Design layouts using HTML 5, CSS3, and JavaScript.',
    footer: 'Mike, CEO, IT World',
  },
  {
    img: <img src={clienttwo} alt='asdsa'></img>,
    content:
      'I work with John on several web development projects and I find him to be extremely creative and a technical Front End Developer.',
    footer: 'Mike, CEO, IT World',
  },
  {
    img: <img src={clientthere} alt='asdsa'></img>,
    content:
      'I work with John on several web development projects and I find him to be extremely creative and a technical Front End Developer.',
    footer: 'Mike, CEO, IT World',
  },
];
export const animationData = [
  {
    img: <img src={logo1} alt='asdsd'></img>,
  },
  {
    img: <img src={logo2} alt='asdsd'></img>,
  },
  {
    img: <img src={logo4} alt='asdsd'></img>,
  },
  {
    img: <img src={logo5} alt='asdsd'></img>,
  },
  {
    img: <img src={logo6} alt='asdsd'></img>,
  },
  {
    img: <img src={logo7} alt='asdsd'></img>,
  },
  {
    img: <img src={logo8} alt='asdsd'></img>,
  },
  {
    img: <img src={logo9} alt='asdsd'></img>,
  },
];
export const pricingData = [
  {
    title: '50',
    subTitle: 'STARTER',
    Banwidth: '2 GB Bandwidth',
    Disk: '5 GB Disk Space',
    Database: '5 Databases',
    Domain: 'Free Domain',
    Subdomain: '5 Subdomain',
    Purchase: 'Purchase',
  },
  {
    title: '200',
    subTitle: 'ULTIMATE',
    Banwidth: '∞ Bandwidth',
    Disk: '∞ Disk Space',
    Database: '∞ Databases',
    Domain: 'Free Domain',
    Subdomain: '∞ Subdomain',
    Purchase: 'Purchase',
  },
  {
    title: '100',
    subTitle: 'BUSINESS',
    Banwidth: '5 GB Bandwidth',
    Disk: '25 GB Disk Space',
    Database: '10 Databases',
    Domain: 'Free Domain',
    Subdomain: '15 Subdomain',
    Purchase: 'Purchase',
  },
];
export const blogData = [
  {
    img: <img src={blog2} alt='asda'></img>,
    ppImg: <i class='fa-regular fa-user'>Jhon Doe</i>,
    timeImg: <i class='fa-regular fa-clock-nine'> August 7, 2020</i>,
    Commentimg: <i class='fa-regular fa-comments'>168</i>,
    titleOne: 'Fontend',
    titleTwo: 'Design',
    titleThere: 'Material',
    subTitle: 'MATERIAL DESIGN',
    content:
      'Web design encompasses many different skills and disciplines in the production of websites.Web design include web graphic design, interface design etc.',
  },
  {
    img: <img src={blog1} alt='asda'></img>,
    ppImg: <i class='fa-regular fa-user'>Jhon Doe</i>,
    timeImg: <i class='fa-regular fa-clock-nine'> August 7, 2020</i>,
    Commentimg: <i class='fa-regular fa-comments'>168</i>,
    titleOne: 'Backend',
    titleTwo: 'Dev',
    titleThere: 'Shortcuts',
    subTitle: 'DEVELOPMENT SHORTCUT',
    content:
      'Web development is a broad term for the work involved in developing a web site for the Internet or an intranet. Now lets get a bit deeper in this topic',
  },
  {
    img: <img src={blog3} alt='asda'></img>,
    ppImg: <i class='fa-regular fa-user'>Jhon Doe</i>,
    timeImg: <i class='fa-regular fa-clock-nine'> August 7, 2020</i>,
    Commentimg: <i class='fa-regular fa-comments'>168</i>,
    titleOne: 'Fontend',
    titleTwo: 'Specs',
    titleThere: ' UI',
    subTitle: 'A GOOD UI',
    content:
      'The user interface (UI), in the industrial design field of human–machine interaction, is the space where interactions between humans and machines occur.',
  },
];
