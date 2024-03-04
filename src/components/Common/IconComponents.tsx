import { X, Github, Linkedin, Mail } from 'lucide-react';

interface IconComponents {
  [key: string]: React.ElementType;
}

export const iconComponents: IconComponents = {
  Mail: Mail,
  Github: Github,
  Linkedin: Linkedin,
  X: X,
};
