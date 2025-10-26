import { Code2, Settings, Cloud, Palette } from "lucide-react";

function Skills() {
  return (
    <div
      className="bg-black min-h-screen text-gray-200 font-poppins py-16 px-6 md:px-12"
    >
      <h2 className="sm:text-3xl md:text-5xl lg:text-7xl mb-40 font-bold text-center text-white mb-22">
        Skills & Tools
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Front-End Development */}
        <div className="bg-purple-700 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <Code2 className="text-white w-20 h-20" />
            <h3 className=" font-semibold md:text-3xl sm:text-xl text-white">
              Front-End Development
            </h3>
          </div>
          <ul className="space-y-2 list-disc list-inside text-lg text-gray-300">
            <li>HTML5, CSS3, JavaScript (ES6+)</li>
            <li>TypeScript, React.js, Next.js</li>
            <li>Tailwind CSS, Responsive Design</li>
            <li>API Integration (REST, Axios)</li>
          </ul>
        </div>

        {/* Tools & Workflow */}
        <div className="bg-purple-700 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <Settings className="text-white w-20 h-20" />
            <h3 className="md:text-3xl sm:text-2xl  font-semibold text-white">
              Tools & Workflow
            </h3>
          </div>
          <ul className="space-y-2 list-disc list-inside text-lg text-gray-300">
            <li>Git & GitHub</li>
            <li>VS Code, Node.js, npm</li>
            <li>Figma, Chrome DevTools</li>
            <li>ESLint, Prettier</li>
          </ul>
        </div>

        {/* Cloud & Design */}
        <div className="bg-purple-700 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <Cloud className="text-white w-20 h-20" />
            <h3 className="md:text-3xl sm:xl  font-semibold text-white">
              Cloud & Design
            </h3>
          </div>
          <ul className="space-y-2 list-disc list-insidetext-lg text-gray-300">
            <li>AWS Cloud Basics (S3, EC2)</li>
            <li>Vercel & Netlify Deployment</li>
            <li>Canva, Figma, Branding</li>
          </ul>
        </div>
      </div>

      <p className=" md:text-xl sm:text-lg text-base text-center text-gray-400 mt-12 text-sm">
        ⚡ Continuously expanding my knowledge in modern web technologies.
      </p>
    </div>
  );
}

export default Skills;