import { birthDate } from "../config";

export const aboutMe = {
  title: "Let me introduce myself",
  details: [
    {
      id: 1,
      text: ` I'm Ainaya Nurfaddilah, ${
        (() => {
          const tempBirthDate = new Date(birthDate);
          const tempToday = new Date();
          let age = tempToday.getFullYear() - tempBirthDate.getFullYear();
          const month = tempToday.getMonth() - tempBirthDate.getMonth();
          if (
            month < 0 ||
            (month === 0 && tempToday.getDate() < tempBirthDate.getDate())
          ) {
            age--;
          }
          return age;
        })()
      } years old, currently living in Batam, Indonesia. `,
      icon: "👩🏻‍💻",
    },
    {
      id: 2,
      text: " I am a fourth semester Informatics Engineering student at Batam State Polytechnic. ",
      icon: "🎓",
    },
    {
      id: 3,
      text: " I have a strong interest and passion in UI/UX design. I aspire to become a UI/UX Designer who creates meaningful and user-centered digital experiences. ",
      icon: "✨",
    },
    {
      id: 4,
      text: " I enjoy designing intuitive and visually appealing interfaces, supported by frontend development skills using Laravel and Tailwind CSS. ",
      icon: "🎨",
    },
    {
      id: 5,
      text: " I'm passionate about learning, enjoy working collaboratively in teams, and have strong time management skills. ",
      icon: "🤝",
    },
    {
      id: 6,
      text: " I'm always eager to grow and bring impactful digital experiences to life. ",
      icon: "🚀",
    },
  ],
};
