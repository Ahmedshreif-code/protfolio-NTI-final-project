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
      title: "Perfume Project",
      description: "A clean, elegant perfume product landing page with modern layout and visual design.",
      technologies: "HTML, CSS",
      img: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=500&auto=format&fit=crop&q=60",
      demo: "https://ahmedshreif-code.github.io/poroject1-HTML-CSS/",
      github: "https://github.com/Ahmedshreif-code/poroject1-HTML-CSS.git"
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
