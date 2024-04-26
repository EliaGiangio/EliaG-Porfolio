const projects = [
    {
        id: 1,
        title: "Gym Express",
        url: 'https://gymexpress2-0.onrender.com/',
        github: "https://github.com/EliaGiangio/GymExpress2",
        images: ['https://res.cloudinary.com/dggfjc8rb/image/upload/v1713105728/Portfolio%20imgs%20and%20gifs/Screenshot_2024-04-14_at_16.39.24_aap4wo.png', 'https://res.cloudinary.com/dggfjc8rb/image/upload/v1713105038/Portfolio%20imgs%20and%20gifs/Screenshot_2024-04-14_at_16.19.52_ikcqeb.png '],
        stack: ['Node', 'Express', 'MongoDB', 'Passport'],
        description: "Gym Express is an app that takes the concept of AirBnb and brings it to the world of home gyms.",
        goal: "Through this app, I aimed to showcase my newfound expertise in Express and Node, along with database implementation and deployment. While the project is ongoing, I'm currently adding features like a booking system, image upload, and more!",
        features: [
            "I managed the entire process of creating, reading, updating, and deleting data using Express, striving to keep my code modular and concise.",
            "One significant achievement I made while working on this app was gaining more clarity and experience with JavaScript's async/await functions.",
            "For data storage, I chose to use Joi along with MongoDB to ensure data consistency and validate every input before storing it in the database.",
            "I handled authentication and authorization using Passport's local strategy, although I also experimented with sign-up and login via Facebook/Gmail.",
            "I incorporated an API to convert addresses into coordinates and then display them on a map.",
            "I explored the use of cookies and sessions to manage the user's login status."
        ],
        screenshots: []
    },
    {
        id: 2,
        title: 'EChat2',
        url: 'https://eliagiangio.github.io/EChat2/',
        github: "https://github.com/EliaGiangio/EChat2",
        images: ['https://res.cloudinary.com/dggfjc8rb/image/upload/v1713518832/Portfolio%20imgs%20and%20gifs/Screenshot_2024-04-19_at_11.26.53_tymwsv.png', 'https://res.cloudinary.com/dggfjc8rb/image/upload/v1713518832/Portfolio%20imgs%20and%20gifs/Screenshot_2024-04-19_at_11.25.01_td0n0v.png'],
        stack: ['React', 'Firebase'],
        description: 'Blending the functionality of a traditional chat platform with elements of social media.',
        goal: 'I undertook a React project to demonstrate my expertise while enhancing an older vanilla JS app, EChat1.0, by refactoring it with a functional approach, emphasizing code modularity and component-based architecture.',
        features: [
            "Utilizing Google Firebase to store user data, chat messages, and posts.",
            "The application leverages React Router to introduce additional dynamism, and altough it has many limitations it achieves the basic task (chatting!)",
            "The app was developed with a focus on expanding my expertise in React, rather than adhering strictly to professional development standards. As a result, many of the methods employed here diverge from those typically used in a professional context."
        ],
        screenshots: []
    },
    {
        id: 3,
        title: "Elia's Kitchen",
        url: 'https://github.com/EliaGiangio/ts-recipe-book',
        github: "https://eliagiangio.github.io/ts-recipe-book/",
        images: ['https://res.cloudinary.com/dggfjc8rb/image/upload/v1713107264/Portfolio%20imgs%20and%20gifs/Screenshot_2024-04-14_at_17.06.48_yoosfl.png', 'https://res.cloudinary.com/dggfjc8rb/image/upload/v1713107270/Portfolio%20imgs%20and%20gifs/Screenshot_2024-04-14_at_17.07.07_ndkakt.png'],
        stack: ['Typescript', 'React'],
        description: "A single-page application that dynamically displays a curated list of my preferred recipes, adjusting them based on the ingredients I currently have on hand.",
        goal: "Putting into practice what I've learned about Typescript AND React, I'm building an app that implements their main features. This hands-on experience allows me to solidify my understanding of React's component-based approach and state management, preparing me for more complex projects in the future.",
        features: [
            "Implemented features to store and retrieve data locally, improving the application's capacity to preserve user selections and preferences.",
            "Utilized useState and useEffect hooks to manage user interactions and responses efficiently, enhancing the application's responsiveness.",
            "Established effective communication channels between different components, enabling smooth data exchange and simplifying user workflows."
        ],
        screenshots: []
    }
];

export default projects;