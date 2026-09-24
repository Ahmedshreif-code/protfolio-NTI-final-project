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
      title: "THE UX REVIEW",
      description: "Responsive Landing Page – A modern and fully responsive landing page built using HTML5 and CSS3. The project features a clean layout, responsive design for all screen sizes, well-structured sections, and modern UI styling, demonstrating strong fundamentals in frontend web development.",
      technologies: "HTML5, CSS3",
      img: "https://images.unsplash.com/photo-1630852722069-7062272a0f8a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      demo: "https://ahmedshreif-code.github.io/Route-Tasks/Ahmed-shreif-Abdelaty-sun-wed-11-2-Assigment4-01004369345/",
      github: "https://github.com/Ahmedshreif-code/Route-Tasks/tree/main/Ahmed-shreif-Abdelaty-sun-wed-11-2-Assigment4-01004369345"
    },
    {
      title: "Mudabbir Dashboard",
      description: "Responsive Dashboard – A modern and fully responsive dashboard built with HTML5 and CSS3. The project includes a clean product showcase, promotional sections, responsive navigation, and a well-structured layout, demonstrating responsive design principles and attention to user experience.",
      technologies: "HTML5, CSS3",
      img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      demo: "https://ahmedshreif-code.github.io/Route-Tasks/Ahmed-shreif-Abdelaty-sun-wed-11-2-Assigment5-01004369345/",
      github: "https://github.com/Ahmedshreif-code/Route-Tasks/tree/main/Ahmed-shreif-Abdelaty-sun-wed-11-2-Assigment5-01004369345"
    },
    {
      title: "EliteHomes – Real Estate Website",
      description: "A modern and responsive real estate website featuring property search and filtering, featured properties, property categories, popular locations, real estate services, client testimonials, FAQs, and a contact section. The project focuses on creating a professional, responsive, and user-friendly real estate experience.",
      technologies: "HTML5, CSS3, Bootstrap 5",
      img: "https://plus.unsplash.com/premium_photo-1776174237682-2b37be27fe0b?q=80&w=1191&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      demo: "https://ahmedshreif-code.github.io/Route-Tasks/Ahmed-shreif-Abdelaty-sun-wed-11-2-Exam1-01004369345/",
      github: "https://github.com/Ahmedshreif-code/Route-Tasks/tree/main/Ahmed-shreif-Abdelaty-sun-wed-11-2-Exam1-01004369345"
    },
    {
      title: "Maldives Tourism Website",
      description: "Travel website highlighting Maldivian destinations with beautiful visuals and tourist info.",
      technologies: "HTML5, CSS3, Bootstrap 5",
      img: "https://images.unsplash.com/photo-1503125210483-8b1d12bccdbe?w=500&auto=format&fit=crop&q=60",
      demo: "https://ahmedshreif-code.github.io/project-3-bootstrab/",
      github: "https://github.com/Ahmedshreif-code/project-3-bootstrab.git"
    },
    {
      title: "What's For Dinner – Recipe Website",
      description: "A responsive and interactive recipe discovery website built with HTML5, CSS3, Bootstrap, and JavaScript. The application dynamically fetches and displays recipe data and includes a Random Recipe feature that allows users to discover meals randomly. The project demonstrates API integration, DOM manipulation, JavaScript functions, event handling, and responsive web design.",
      technologies: "HTML5, CSS3, Bootstrap 5,JavaScript (ES6+)",
      img: "https://images.unsplash.com/photo-1532054241088-402b4150db33?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      demo: "https://ahmedshreif-code.github.io/Route-Tasks/Ahmed-shreif-Abdelaty-sun-wed-11-2-Assigment8-01004369345/",
      github: "https://github.com/Ahmedshreif-code/Route-Tasks/tree/main/Ahmed-shreif-Abdelaty-sun-wed-11-2-Assigment8-01004369345"
    },
    {
      title: "ContactHub – Smart Contact Manager",
      description: "A responsive contact management application built with HTML5, CSS3, Bootstrap, and JavaScript. The application enables users to add, edit, search, and organize contacts, with dedicated sections for favorites and emergency contacts. It uses dynamic DOM manipulation and browser Local Storage to manage and persist contact data.",
      technologies: "HTML5, CSS3, Bootstrap 5,JavaScript (ES6+),Local Storage",
      img: "https://images.unsplash.com/photo-1600783246032-1056431c253c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      demo: "https://ahmedshreif-code.github.io/Route-Tasks/Ahmed-shreif-Abdelaty-sun-wed-11-2-Assigment9-01004369345/",
      github: "https://github.com/Ahmedshreif-code/Route-Tasks/tree/main/Ahmed-shreif-Abdelaty-sun-wed-11-2-Assigment9-01004369345"
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
      title: "Guess-the-number-Game",
      description: "The Guess the Number Game is a simple yet fun number-guessing game built with Angular. The computer randomly generates a secret number between 1 and 100, and the player has to guess it within a limited number of attempts.",
      technologies: "Angular, CSS, Bootstrap",
      img: "https://images.unsplash.com/photo-1724120932030-d8210a77deed?q=80&w=1315&auto=format&fit=crop",
      demo: "https://guess-the-number-game-ten-theta.vercel.app/",
      github: "https://github.com/Ahmedshreif-code/Guess-the-number-Game.git"
    }

  ];
}
