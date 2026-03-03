import { FaLinkedin, FaRegIdBadge, FaGithub } from "react-icons/fa6";

export const profile = {
  name: `Jeffrey Yu`,
  headline: `Student @ EPFL`,
  email: `jeffreyyu880@gmail.com`,
  location: null,
  profileImage: `/showlit/public/images/headshot.jpg`,
  links: [
    {
      name: `LinkedIn`,
      url: `https://www.linkedin.com/in/[your-linkedin]`,
      icon: FaLinkedin
    },
    {
      name: `Résumé`,
      url: `/showlit/pdf/sample-resume.pdf`,
      icon: FaRegIdBadge
    },
    {
      name: `Github`,
      url: `https://github.com/[your-github]`,
      icon: FaGithub
    }
  ],
  biography: `Hi! I'm <strong>Jeffrey Yu</strong>, a <em>Software Engineer</em> passionate about <em>Robotics and Machine Learning</em>. Currently, I work as <em>[current role]</em> at <em>[organization]</em>, where I <em>[briefly describe your work or mission]</em>. 
With a background in <em>[academic or professional background]</em>, I've developed strong interests in <em>[key interests or specialties]</em> and have contributed to projects like <i>[example project]</i> and <i>[another example]</i>, all focused on <em>[broader goal or impact]</em>.
<div class="my-2"></div>
Outside of work, I enjoy <em>swimming, tennis, guitar, and reading</em>, which inspire creativity and keep me energized. Thanks for visiting! Feel free to <a href="mailto:[jeffreyyu880@gmail.com]" target="_blank" rel="noopener noreferrer">reach out</a> to connect.`
};