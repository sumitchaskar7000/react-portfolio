import myImage from './assets/images/smith.jpeg';
import project1 from './assets/images/cotton.jpg';
import img2 from './assets/images/gemini.jpg';
import portfolio from './assets/images/portfolio.jpg';
import imageG from './assets/images/image.jpg';
import student from './assets/images/student.jpg';
const logotext = "SUMIT";
const meta = {
    title: "Sumit Chaskar",
    description: "I’m Sumit Chaskar. I am software Developer who has developed websites",
};

const introdata = {
    title: "I’m Sumit Chaskar",
    animated: {
        first: "I'm passionate about technology",
        second: "I solve complex problems with code",
        third: "I design innovative user experiences",
    },

    description: "I am passionate about coding because it empowers me to transform ideas into tangible solutions, while tackling complex challenges through creativity and innovation.",
    your_img_url: myImage,  // Use the imported image here
};

const dataabout = {
    title: "About my self",
    aboutme: "I am Sumit Chaskar, a hardworking and eager software engineer with an interest in full-stack development and cloud technology. I have experience using web tools like React, JavaScript, HTML, and CSS to create easy-to-use and responsive websites. I also understand backend technologies and DevOps practices, including Docker, Kubernetes, AWS, and MS Azure. As a recent graduate, I’m excited to use my skills in real-world projects and keep learning. I enjoy solving problems and working with others to build creative solutions.",
};
const worktimeline = [
];

const skills = [{
    name: "HTML,CSS",
    value: 85,
},
{
    name: "C++",
    value: 80,
},
{
    name: "Java",
    value: 80,
},
{
    name: "JavaScript",
    value: 80,
},
{
    name: "React",
    value: 85,
},
{
    name: "SQL",
    value: 85,
},
];

const services = [{
    title: "Web Development",
    description: "I specialize in web development, focusing on creating responsive and user-friendly websites using modern technologies like React, JavaScript, HTML, and CSS. With a strong foundation in both front-end and back-end development, I aim to build efficient, visually appealing, and functional web applications.",
},
{
    title: "Database Management",
    description: "I have experience in database management using both MongoDB and SQL. With MongoDB, I am proficient in handling NoSQL databases, working with collections, documents, and performing CRUD operations, which is useful for projects requiring flexibility and scalability. In SQL, I have a solid understanding of relational databases, including creating and managing tables, writing complex queries, and ensuring data integrity. My knowledge in these databases enables me to efficiently manage and store data for web applications and other systems.",
},
{
    title: "Figma Designs",
    description: "I have experience using **Figma** for UI/UX design, creating intuitive and visually appealing user interfaces. Figma allows me to design responsive layouts, wireframes, and prototypes that enhance user experiences across web and mobile platforms. I am skilled in using its collaborative features, making it easy to work with teams, share designs, and gather feedback in real-time. My designs focus on clean aesthetics, user-centered layouts, and functionality, ensuring a seamless transition from design to development.",
},
];

const dataportfolio = [{
    img: project1,
    link: "https://github.com/sumitchaskar7000/Cotton-Disease-Prediction-Using-Machine-learning",
},
{
    img: img2,
    link: "https://github.com/sumitchaskar7000/Gemini-Clone",
},
{
    img: portfolio,
    link: "https://github.com/sumitchaskar7000",
},
{
    img: imageG,
    link: "https://image-generator-ecru-three.vercel.app/",
},
{
    img: student,
    link: "https://github.com/sumitchaskar7000",
},






];



const contactConfig = {
    YOUR_EMAIL: "sumitchaskar2000@gmail.com",
    YOUR_Phone_No: "91-7709301982",

    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_sj35tsh",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/sumitchaskar7000",
    linkedin: "https://linkedin.com/in/sumit-chaskar",
    twitter: "https://twitter.com",
    leetcode: ""
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,

};