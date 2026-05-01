import React from 'react';

const Logo = ({ src, alt }) => (
  <img src={src} alt={alt} width="28" height="28" style={{ objectFit: 'contain' }} />
);

export const technologies = [
  { name: 'Python', icon: <Logo src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" />, category: 'AI/ML' },
  { name: 'TensorFlow', icon: <Logo src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" />, category: 'AI/ML' },
  { name: 'MediaPipe', icon: <Logo src="https://cdn.simpleicons.org/mediapipe/00D4AA" alt="MediaPipe" />, category: 'AI/ML' },
  { name: 'OpenCV', icon: <Logo src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" alt="OpenCV" />, category: 'AI/ML' },
  { name: 'PyTorch', icon: <Logo src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" alt="PyTorch" />, category: 'AI/ML' },
  { name: 'React', icon: <Logo src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" />, category: 'Frontend' },
  { name: 'Next.js', icon: <Logo src="https://cdn.simpleicons.org/nextdotjs/white" alt="Next.js" />, category: 'Frontend' },
  { name: 'Three.js', icon: <Logo src="https://cdn.simpleicons.org/threedotjs/white" alt="Three.js" />, category: 'Frontend' },
  { name: 'CSS3', icon: <Logo src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" />, category: 'Frontend' },
  { name: 'Node.js', icon: <Logo src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" />, category: 'Backend' },
  { name: 'Express', icon: <Logo src="https://cdn.simpleicons.org/express/white" alt="Express" />, category: 'Backend' },
  { name: 'MongoDB', icon: <Logo src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB" />, category: 'Backend' },
  { name: 'Flask', icon: <Logo src="https://cdn.simpleicons.org/flask/white" alt="Flask" />, category: 'Backend' },
  { name: 'Firebase', icon: <Logo src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" alt="Firebase" />, category: 'Cloud' },
  { name: 'AWS', icon: <Logo src="https://cdn.simpleicons.org/amazonwebservices/white" alt="AWS" />, category: 'Cloud' },
  { name: 'Docker', icon: <Logo src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" />, category: 'Tools' },
  { name: 'Git', icon: <Logo src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" />, category: 'Tools' },
  { name: 'Figma', icon: <Logo src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="Figma" />, category: 'Tools' },
];
