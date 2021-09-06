// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
	//"#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1"
  gradientColors: " #343d52, #485063, #5d6475, #717786, #858b97 ,#343d52",
  firstName: "Ahmed",
  middleName: "",
  lastName: "Hamdi",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/AhmedHamdi101",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/profile.php?id=100000497022504",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/ahmed._.hamdi/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/ahmed-moh-hamdi/",
    },
    //{
    //  image: "fa-twitter",
    //  url: "https://www.twitter.com/hashirshoaeb/",
    //},
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/ahmedhamdi2.png"),
  imageSize: 250,
  message:
    "My name is Ahmed Hamdi. I’m a graduate of 2021 from Faculty of Engineering, Alexandria University with a degree in Computer Engineering. I'm most passionate about exploring new fields and learn new technologies, and my goal is to pursue this passion within the field of deep learning specialy computer vision. In my free time I like working on implementing papers related to the fields I am intersted in and solve problems on leet code.",
  resume: "https://drive.google.com/file/d/1EwHTAKZPMPTmHr_Hgj_S4Wfwm89JBJ5W/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "AhmedHamdi101", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["Fast-Video-Object-Segmentation-by-Reference-Guided-Mask-Propagation","Object_Localization_with_TensorFlow","Inception-V3-Keras","Disparity-Depth-Estimator"]
};
// Graduation project
const leadership = {
  show: true,
  heading: "Graduation Project",
  message:
    "Our project consisted of two main phases, The Computer Vision Phase in which we used 2D object detection model YOLO V3 to detect all objects in front of the car and a self supervised mono-depth estimation to calculate the relative distances of the detected objects, The Reinforcement Phase, in which we take the data from the first phase in the form of a state for the RL agent, a Deep Q-learning Model, and calculate the best action for the given state.",
  images: [
    { 
      img: require("../editable-stuff/yolo.png"), 
      label: "YOLO V3", 
      paragraph: "The Yolo v3 model used in detection and classification." ,
	  },
    { 
      img: require("../editable-stuff/monodepth.png"), 
      label: "Monodepth", 
      paragraph: "The Monodepth used to estimate the depth of object using only one RGB photo." 
    },
    { 
      img: require("../editable-stuff/gradteam.png"), 
      label: "My Team", 
      paragraph: "" 
		
	},
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// temp SECTION
const temp = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/ahmedhamdi2.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/ahmedhamdi2.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 80 },
    { name: "TensorFlow/Keras", value: 65 },
    { name: "C", value: 65 },
    { name: "Data Structures/Algorithms", value: 70 },
	{ name: "Java", value: 50 },
    //{ name: "JavaScript", value: 90 },
    //{ name: "React", value: 65 },
    //{ name: "HTML/CSS", value: 55 },
    //{ name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 85 },
    { name: "Collaboration", value: 90 },
    { name: "Adaptability", value: 85 },
	
    { name: "Problem Solving", value: 70 },
    { name: "Organization", value: 75 },
	{name: "Eagrness To Learn", value: 120},
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Learning opportunities! If you know of any intresting project/reasearch realted to the deep learning field, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "ahmed.moh.hamdi@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
