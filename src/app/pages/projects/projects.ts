import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects = [
    {
      title: "Bab Al-Hara Restaurant",
      description: "Website for a Syrian restaurant with sections for menu, contact, and online orders.",
      technologies: "HTML, CSS",
      img: "https://images.unsplash.com/photo-1481833761820-0509d3217039?w=500&auto=format&fit=crop&q=60",
      demo: "https://ahmedshreif-code.github.io/bab-el-hara-web-/index.html##contact",
      github: "https://github.com/Ahmedshreif-code/bab-el-hara-web-.git"
    },
    {
      title: "Maldives Tourism Website",
      description: "Travel website highlighting Maldivian destinations with beautiful visuals and tourist info.",
      technologies: "HTML, CSS, Bootstrap",
      img: "https://images.unsplash.com/photo-1503125210483-8b1d12bccdbe?w=500&auto=format&fit=crop&q=60",
      demo: "https://ahmedshreif-code.github.io/project-3-bootstrab/",
      github: "https://github.com/Ahmedshreif-code/project-3-bootstrab.git"
    },
    {
      title: "THE UX REVIEW",
      description: "Responsive Landing Page – A modern and fully responsive landing page built using HTML5 and CSS3. The project features a clean layout, responsive design for all screen sizes, well-structured sections, and modern UI styling, demonstrating strong fundamentals in frontend web development.",
      technologies: "HTML, CSS",
      img: "https://images.unsplash.com/photo-1630852722069-7062272a0f8a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      demo: "https://ahmedshreif-code.github.io/Route-Tasks/Ahmed-shreif-Abdelaty-sun-wed-11-2-Assigment4-01004369345/",
      github: "https://github.com/Ahmedshreif-code/Route-Tasks/tree/main/Ahmed-shreif-Abdelaty-sun-wed-11-2-Assigment4-01004369345"
    },
    {
      title: "Mudabbir Dashboard",
      description: "Responsive Dashboard – A modern and fully responsive dashboard built with HTML5 and CSS3. The project includes a clean product showcase, promotional sections, responsive navigation, and a well-structured layout, demonstrating responsive design principles and attention to user experience.",
      technologies: "HTML, CSS",
      img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      demo: "https://ahmedshreif-code.github.io/Route-Tasks/Ahmed-shreif-Abdelaty-sun-wed-11-2-Assigment5-01004369345/",
      github: "https://github.com/Ahmedshreif-code/Route-Tasks/tree/main/Ahmed-shreif-Abdelaty-sun-wed-11-2-Assigment5-01004369345"
    },
    {
    title: "X-O Game",
    description: "X-O Game is a simple yet interactive Tic-Tac-Toe web application built using Angular.",
    technologies: "Angular, CSS",
    img: "https://images.unsplash.com/photo-1699039506677-61d9b15dfa60?q=80&w=627&auto=format&fit=crop",
    demo: "https://x-o-game-swart.vercel.app/",
    github: "https://github.com/Ahmedshreif-code/X-O-Game.git"
  },
  {
    title: "Dynamic-list Project",
    description: "Dynamic List Filter is a responsive web application built with Angular, designed to allow users to dynamically search and filter items from a list in real time.",
    technologies: "Angular, CSS, Bootstrap",
    img: "https://plus.unsplash.com/premium_photo-1681487857509-abb58345e594?q=80&w=1170&auto=format&fit=crop",
    demo: "https://dynamic-list-one.vercel.app",
    github: "https://github.com/Ahmedshreif-code/Dynamic-list.git"
  },
  {
    title: "Simple To-Do-list Project",
    description: "Simple To-Do List is a lightweight task management application built with Angular, designed to help users organize their daily tasks efficiently.",
    technologies: "Angular, CSS, Bootstrap",
    img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1172&auto=format&fit=crop",
    demo: "https://simple-to-do-list-pied.vercel.app",
    github: "https://github.com/Ahmedshreif-code/simple-To-do-list.git"
  },
  {
    title: "Guess-the-number-Game",
    description: "The Guess the Number Game is a simple yet fun number-guessing game built with Angular. The computer randomly generates a secret number between 1 and 100, and the player has to guess it within a limited number of attempts.",
    technologies: "Angular, CSS, Bootstrap",
    img: "https://images.unsplash.com/photo-1724120932030-d8210a77deed?q=80&w=1315&auto=format&fit=crop",
    demo: "https://guess-the-number-game-ten-theta.vercel.app/",
    github: "https://github.com/Ahmedshreif-code/Guess-the-number-Game.git"
  }
  ];
}
