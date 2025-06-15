import {
  Code,
  Layout,
  Smartphone,
  Server,
  Database,
  GitBranch,
  Globe,
} from "lucide-react";

export default function Skills({ className }) {
  return (
    <section id="skills" className={`py-16 ${className}`}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center">
            <Code className="w-8 h-8 mb-2" />
            <span>HTML</span>
          </div>
          <div className="flex flex-col items-center">
            <Layout className="w-8 h-8 mb-2" />
            <span>Tailwind CSS</span>
          </div>
          <div className="flex flex-col items-center">
            <Code className="w-8 h-8 mb-2" />
            <span>JavaScript</span>
          </div>
          <div className="flex flex-col items-center">
            <Code className="w-8 h-8 mb-2" />
            <span>React</span>
          </div>
          <div className="flex flex-col items-center">
            <Code className="w-8 h-8 mb-2" />
            <span>Next.js</span>
          </div>
          <div className="flex flex-col items-center">
            <Server className="w-8 h-8 mb-2" />
            <span>Node.js</span>
          </div>
          <div className="flex flex-col items-center">
            <Server className="w-8 h-8 mb-2" />
            <span>Express</span>
          </div>
          <div className="flex flex-col items-center">
            <Database className="w-8 h-8 mb-2" />
            <span>MongoDB</span>
          </div>
          <div className="flex flex-col items-center">
            <GitBranch className="w-8 h-8 mb-2" />
            <span>Git</span>
          </div>
          <div className="flex flex-col items-center">
            <Globe className="w-8 h-8 mb-2" />
            <span>REST APIs</span>
          </div>
          <div className="flex flex-col items-center">
            <Smartphone className="w-8 h-8 mb-2" />
            <span>Responsive Design</span>
          </div>
        </div>
      </div>
    </section>
  );
}