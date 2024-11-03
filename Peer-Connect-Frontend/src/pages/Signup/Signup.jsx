import { FaGithub } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';
import frontend from '../../assets/skillsLogo/frontend.png';
import backend from '../../assets/skillsLogo/backend.png';
import fullstack from '../../assets/skillsLogo/fullstack.png';
import dsa from '../../assets/skillsLogo/dsa.png';
import flutter from '../../assets/skillsLogo/flutter.png';
import { CgProfile } from 'react-icons/cg';
import python from '../../assets/skillsLogo/python.png';
import aiml from '../../assets/skillsLogo/aiml.png';
import html from '../../assets/skillsLogo/html.png';
import css from '../../assets/skillsLogo/css.png';
import js from '../../assets/skillsLogo/js.png';
import react from '../../assets/skillsLogo/react.png';
import java from '../../assets/skillsLogo/java.png';
import angular from '../../assets/skillsLogo/angular.png';
import node from '../../assets/skillsLogo/node.png';
import ruby from '../../assets/skillsLogo/ruby.png';
import mongo from '../../assets/skillsLogo/mongo.png';
import sql from '../../assets/skillsLogo/sql.png';
import postgresql from '../../assets/skillsLogo/postgresql.png';
import springboot from '../../assets/skillsLogo/springboot.png';
import next from '../../assets/skillsLogo/next.png';
import rust from '../../assets/skillsLogo/rust.png';
import golang from '../../assets/skillsLogo/golang.png';
import git from '../../assets/skillsLogo/git.png';
import cpp from '../../assets/skillsLogo/cpp.png';

// ProjectModal Component
const ProjectModal = ({ isOpen, onClose, onAddProject }) => {
  const [projectName, setProjectName] = useState('');
  const [projectLink, setProjectLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (projectName && projectLink) {
      onAddProject({ name: projectName, link: projectLink });
      setProjectName('');
      setProjectLink('');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Add New Project</h2>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-xl hover:bg-gray-100"
          >
            ×
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="projectName"
              className="block text-sm font-medium text-gray-700"
            >
              Project Name
            </label>
            <input
              type="text"
              id="projectName"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="mt-1 w-full rounded border border-gray-300 p-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter project name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="projectLink"
              className="block text-sm font-medium text-gray-700"
            >
              Project Link
            </label>
            <input
              type="url"
              id="projectLink"
              value={projectLink}
              onChange={(e) => setProjectLink(e.target.value)}
              className="mt-1 w-full rounded border border-gray-300 p-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="https://..."
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
            >
              Add Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Add PropTypes validation
ProjectModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAddProject: PropTypes.func.isRequired,
};

// Main Signup Component
const Signup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [github, setGithub] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [skillsArray, setSkillsArray] = useState([]);

  const handleChanges = (e) => {
    if (e.target.name === 'firstname') {
      setFirstName(e.target.value);
    } else if (e.target.name === 'lastname') {
      setLastName(e.target.value);
    } else if (e.target.name === 'city') {
      setCity(e.target.value);
    } else if (e.target.name === 'github') {
      setGithub(e.target.value);
    } else if (e.target.name === 'linkedIn') {
      setLinkedIn(e.target.value);
    }
  };

  const selectSkill = (e) => {
    const skill = e.target;
    if (skill.classList.contains('bg-transparent')) {
      skill.classList.remove('bg-transparent');
      skill.classList.add('bg-green-500');
      setSkillsArray([...skillsArray, { name: skill.name }]);
      console.log(skillsArray);
    } else {
      skill.classList.remove('bg-green-500');
      skill.classList.add('bg-transparent');
      setSkillsArray(skillsArray.filter((s) => s.name !== skill.name));
      console.log(skillsArray);
    }
  };

  const handleAddProject = (project) => {
    setProjects([...projects, project]);
  };

  return (
    <div className="flex h-fit w-full flex-col items-center px-5 pb-10 pt-2">
      <h1 className="bg-gradient-to-b from-neutral-200 to-neutral-100 bg-clip-text pb-5 text-center text-7xl font-bold text-transparent">
        Sign up
      </h1>
      <div className="flex h-fit w-full">
        <div className="flex h-full w-full flex-col gap-4 rounded-lg bg-opacity-50 pl-10 pr-10 pt-10 shadow-white backdrop-blur-[7.4px]">
          <div className="mb-1 text-3xl">
            <h1>Nice to meet you! Lets get acquainted.</h1>
          </div>

          {/* Email Section */}
          <div className="pt-5 text-2xl">
            <h1>What is your email?</h1>
            <div className="mt-4 text-sm">
              <h2>Email:</h2>
            </div>
            <input
              type="text"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-[50%] rounded border border-gray-300 bg-transparent p-2 text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password Section */}
          <div className="pt-4 text-2xl">
            <h1>What is your password?</h1>
            <div className="mt-4 text-sm">
              <h2>Password:</h2>
            </div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              className="w-[50%] rounded border border-gray-300 bg-transparent p-2 text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Name Section */}
          <div className="username pt-4 text-2xl">
            <h1>What is your name?</h1>
            <div className="mt-4 text-sm">
              <h2>First Name:</h2>
            </div>
            <input
              type="text"
              id="firstname"
              name="firstname"
              onChange={(e) => handleChanges(e)}
              placeholder="Enter your first name"
              required
              className="w-[50%] rounded border border-gray-300 bg-transparent p-2 text-lg"
            />
            <div className="mt-4 text-sm">
              <h2>Last Name:</h2>
            </div>
            <input
              type="text"
              id="lastname"
              onChange={(e) => handleChanges(e)}
              name="lastname"
              placeholder="Enter your last name"
              required
              className="w-[50%] rounded border border-gray-300 bg-transparent p-2 text-lg"
            />
          </div>
          <div className="pt-7 text-2xl">
            <h1>What is your gender?</h1>
            <div className="mt-4 text-sm">
              <h2>Gender:</h2>
              <div className="flex flex-wrap gap-2">
                <button
                  id="Male"
                  name="Male"
                  onClick={selectSkill}
                  className="min-w-35 flex flex-wrap items-center justify-center gap-2 rounded border border-gray-300 bg-transparent p-2 text-lg text-gray-700 placeholder-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Male
                </button>
                <button
                  id="Female"
                  name="Female"
                  onClick={selectSkill}
                  className="min-w-35 flex flex-wrap items-center justify-center gap-2 rounded border border-gray-300 bg-transparent p-2 text-lg text-gray-700 placeholder-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Female
                </button>
              </div>
            </div>
          </div>
          {/* City Section */}
          <div className="pt-7 text-2xl">
            <h1>What is your city?</h1>
            <div className="mt-4 text-sm">
              <h2>City:</h2>
            </div>
            <input
              type="text"
              id="city"
              name="city"
              onChange={(e) => handleChanges(e)}
              placeholder="Enter your city"
              required
              className="w-[50%] rounded border border-gray-300 bg-transparent p-2 text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Github Section */}
          <div className="pt-4 text-2xl">
            <h1>What is your GitHub?</h1>
            <div className="mt-4 text-sm">
              <h2>GitHub:</h2>
            </div>
            <input
              type="text"
              id="github"
              name="github"
              onChange={(e) => handleChanges(e)}
              placeholder="Enter your GitHub"
              required
              className="w-[50%] rounded border border-gray-300 bg-transparent p-2 text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* LinkedIn Section */}
          <div className="pt-4 text-2xl">
            <h1>What is your LinkedIn?</h1>
            <div className="mt-4 text-sm">
              <h2>LinkedIn:</h2>
            </div>
            <input
              type="text"
              id="linkedIn"
              name="linkedIn"
              onChange={(e) => handleChanges(e)}
              placeholder="Enter your LinkedIn"
              required
              className="w-[50%] rounded border border-gray-300 bg-transparent p-2 text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Bio Section */}
          <div className="pt-4 text-2xl">
            <h1>Write your Bio</h1>
            <div className="mt-4 text-sm">
              <h2>Bio:</h2>
            </div>
            <textarea
              type="text"
              id="bio"
              name="bio"
              placeholder="Enter your bio"
              required
              className="h-50 w-[40%] text-wrap rounded border border-gray-300 bg-transparent p-2 text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Projects Section */}
          <div className="pt-4 text-2xl">
            <h1>Add your Projects</h1>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mb-3 mt-4 w-60 rounded border border-gray-300 bg-indigo-800 p-2 text-lg text-white placeholder-gray-500 hover:bg-gray-200 hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Add Projects
            </button>
            {projects.length > 0 ? (
              <h2 className="mt-4 text-sm">Added Projects</h2>
            ) : null}
            <ul className="flex flex-wrap gap-4">
              {projects.map((project, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:underline"
                  >
                    <div className="min-w-35 flex-wrap-reverse rounded border border-gray-300 bg-transparent p-2 text-lg font-medium text-gray-700 placeholder-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      {project.name}
                    </div>
                  </a>
                </div>
              ))}
            </ul>
            <ProjectModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onAddProject={handleAddProject}
            />
          </div>

          <div className="pt-4 text-2xl">
            <h1 className="">What are your skills?</h1>
            <div className="mt-4 text-sm">
              <h2>Skills:</h2>
            </div>
            <div className="">
              <div className="flex flex-wrap gap-6">
                <button
                  id="frontend"
                  name="frontend"
                  onClick={selectSkill}
                  className="min-w-35 flex flex-wrap items-center justify-center gap-2 rounded border border-gray-300 bg-transparent p-2 text-lg text-gray-700 placeholder-gray-500 transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  {' '}
                  <img src={frontend} alt="Frontend" className="h-5 w-5" />
                  Frontend
                </button>
                <button
                  id="backend"
                  name="backend"
                  onClick={selectSkill}
                  className="min-w-35 flex flex-wrap items-center justify-center gap-2 rounded border border-gray-300 bg-transparent p-2 text-lg text-gray-700 placeholder-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <img src={backend} alt="backend" className="h-5 w-5" />
                  Backend
                </button>
                <button
                  id="fullstack"
                  name="fullstack"
                  onClick={selectSkill}
                  className="min-w-35 flex flex-wrap items-center justify-center gap-2 rounded border border-gray-300 bg-transparent p-2 text-lg text-gray-700 placeholder-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  {' '}
                  <img src={fullstack} alt="fullstack" className="h-5 w-5" />
                  Fullstack
                </button>
                <button
                  id="dsa"
                  name="DSA"
                  onClick={selectSkill}
                  className="min-w-35 flex flex-wrap items-center justify-center gap-2 rounded border border-gray-300 bg-transparent p-2 text-lg text-gray-700 placeholder-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <img src={dsa} alt="dsa" className="h-5 w-5" />
                  DSA
                </button>
                <button
                  id="flutter"
                  name="flutter"
                  onClick={selectSkill}
                  className="min-w-35 flex flex-wrap items-center justify-center gap-2 rounded border border-gray-300 bg-transparent p-2 text-lg text-gray-700 placeholder-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  {' '}
                  <img src={flutter} alt="flutter" className="h-5 w-5" />
                  Flutter
                </button>
                <button
                  id="python"
                  name="python"
                  onClick={selectSkill}
                  className="min-w-35 flex flex-wrap items-center justify-center gap-2 rounded border border-gray-300 bg-transparent p-2 text-lg text-gray-700 placeholder-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <img src={python} alt="python" className="h-5 w-5" />
                  Python
                </button>
                <button
                  id="aiml"
                  name="aiml"
                  onClick={selectSkill}
                  className="min-w-35 flex flex-wrap items-center justify-center gap-2 rounded border border-gray-300 bg-transparent p-2 text-lg text-gray-700 placeholder-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <img src={aiml} alt="aiml" className="h-5 w-5" />
                  AI/ML
                </button>
                <button
                  id="html"
                  name="html"
                  onClick={selectSkill}
                  className="min-w-35 flex flex-wrap items-center justify-center gap-2 rounded border border-gray-300 bg-transparent p-2 text-lg text-gray-700 placeholder-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <img src={html} alt="html" className="h-5 w-5" />
                  HTML
                </button>
                <button
                  id="css"
                  name="css"
                  onClick={selectSkill}
                  className="min-w-35 flex flex-wrap items-center justify-center gap-2 rounded border border-gray-300 bg-transparent p-2 text-lg text-gray-700 placeholder-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <img src={css} alt="css" className="h-5 w-5" />
                  CSS
                </button>
                <button
                  id="javascript"
                  name="javascript"
                  onClick={selectSkill}
                  className="min-w-35 flex flex-wrap items-center justify-center gap-2 rounded border border-gray-300 bg-transparent p-2 text-lg text-gray-700 placeholder-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <img src={js} alt="js" className="h-5 w-5" />
                  Javascript
                </button>
                <button
                  id="react"
                  name="react"
                  onClick={selectSkill}
                  className="min-w-35 flex flex-wrap items-center justify-center gap-2 rounded border border-gray-300 bg-transparent p-2 text-lg text-gray-700 placeholder-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <img src={react} alt="react" className="h-5 w-5" />
                  React
                </button>
                <button
                  id="c/c++"
                  name="c/c++"
                  onClick={selectSkill}
                  className="min-w-35 flex flex-wrap items-center justify-center gap-2 rounded border border-gray-300 bg-transparent p-2 text-lg text-gray-700 placeholder-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  {' '}
                  <img src={cpp} alt="cpp" className="h-5 w-5" />
                  C/C++
                </button>
                <button
                  id="java"
                  name="java"
                  onClick={selectSkill}
                  className="min-w-35 flex flex-wrap items-center justify-center gap-2 rounded border border-gray-300 bg-transparent p-2 text-lg text-gray-700 placeholder-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <img src={java} alt="java" className="h-5 w-5" />
                  JAVA
                </button>
                <button
                  id="angular"
                  name="angular"
                  onClick={selectSkill}
                  className="min-w-35 flex flex-wrap items-center justify-center gap-2 rounded border border-gray-300 bg-transparent p-2 text-lg text-gray-700 placeholder-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  {' '}
                  <img src={angular} alt="angular" className="h-5 w-5" />
                  Angular
                </button>
                <button
                  id="node"
                  name="node"
                  onClick={selectSkill}
                  className="min-w-35 flex flex-wrap items-center justify-center gap-2 rounded border border-gray-300 bg-transparent p-2 text-lg text-gray-700 placeholder-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  {' '}
                  <img src={node} alt="node" className="h-9 w-9" />
                  Node.js
                </button>
                <button
                  id="ruby on rails"
                  name="ruby on rails"
                  onClick={selectSkill}
                  className="min-w-35 flex flex-wrap items-center justify-center gap-2 rounded border border-gray-300 bg-transparent p-2 text-lg text-gray-700 placeholder-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <img src={ruby} alt="ruby" className="h-5 w-5" />
                  Ruby on Rails
                </button>
                <button
                  id="mongodb"
                  name="mongodb"
                  onClick={selectSkill}
                  className="min-w-35 flex flex-wrap items-center justify-center gap-2 rounded border border-gray-300 bg-transparent p-2 text-lg text-gray-700 placeholder-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  {' '}
                  <img src={mongo} alt="mongo" className="h-5 w-5" />
                  MongoDB
                </button>
                <button
                  id="sql"
                  name="sql"
                  onClick={selectSkill}
                  className="min-w-35 flex flex-wrap items-center justify-center gap-2 rounded border border-gray-300 bg-transparent p-2 text-lg text-gray-700 placeholder-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <img src={sql} alt="sql" className="h-5 w-5" />
                  SQL
                </button>
                <button
                  id="postgresql"
                  name="posgresql"
                  onClick={selectSkill}
                  className="min-w-35 flex flex-wrap items-center justify-center gap-2 rounded border border-gray-300 bg-transparent p-2 text-lg text-gray-700 placeholder-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <img src={postgresql} alt="postgresql" className="h-5 w-5" />
                  Postgre
                </button>
                <button
                  id="springboot"
                  name="springboot"
                  onClick={selectSkill}
                  className="min-w-35 flex flex-wrap items-center justify-center gap-2 rounded border border-gray-300 bg-transparent p-2 text-lg text-gray-700 placeholder-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  {' '}
                  <img src={springboot} alt="springboot" className="h-5 w-5" />
                  Springboot
                </button>
                <button
                  id="nextjs"
                  name="nextjs"
                  onClick={selectSkill}
                  className="min-w-35 flex flex-wrap items-center justify-center gap-2 rounded border border-gray-300 bg-transparent p-2 text-lg text-gray-700 placeholder-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <img src={next} alt="next" className="h-5 w-5" />
                  Next.js
                </button>
                <button
                  id="rust"
                  name="rust"
                  onClick={selectSkill}
                  className="min-w-35 flex flex-wrap items-center justify-center gap-2 rounded border border-gray-300 bg-transparent p-2 text-lg text-gray-700 placeholder-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <img src={rust} alt="rust" className="h-5 w-5" />
                  Rust
                </button>
                <button
                  id="golang"
                  name="golang"
                  onClick={selectSkill}
                  className="min-w-35 flex flex-wrap items-center justify-center gap-2 rounded border border-gray-300 bg-transparent p-2 text-lg text-gray-700 placeholder-gray-500 *:items-center hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  {' '}
                  <img src={golang} alt="golang" className="h-5 w-5" />
                  Golang
                </button>
                <button
                  id="git"
                  name="git"
                  onClick={selectSkill}
                  className="min-w-35 flex flex-wrap items-center justify-center gap-2 rounded border border-gray-300 bg-transparent p-2 text-lg text-gray-700 placeholder-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <img src={git} alt="git" className="h-5 w-5" />
                  git
                </button>
              </div>
            </div>
          </div>
          <div className="mt-7 flex items-center justify-center">
            <button
              type="submit"
              className="h-fit w-fit rounded border border-white bg-indigo-800 px-4 py-4 text-white hover:bg-indigo-900"
            >
              <h1> I&apos;m Ready to Explore Peer Connect!!</h1>
            </button>
          </div>
        </div>

        <div className="relative h-screen w-[70vw] p-3 pt-3">
          <div className="w-94 shadow-6 fixed col-span-4 row-span-3 h-[75vh] overflow-hidden rounded-xl border border-white/5 bg-blue-200 shadow-white backdrop-blur-[7.4px]">
            <div className="h-30 w-30 absolute left-[10%] top-[25%] translate-y-[-50%] rounded-full border-4 border-blue-200 bg-white">
              <CgProfile className="h-full w-full" />
            </div>
            <div className="h-[25%] w-full bg-pink-600"></div>
            <div className="h-[70%] w-full">
              <div className="mt-15 flex flex-col justify-center p-2 pl-[10%]">
                <h1 className="text-3xl font-bold">
                  {firstName} {lastName}
                </h1>
                <p className="text-lg italic">{email}</p>
                {city ? (
                  <h2 className="text-xl">
                    📍<span className="">{city}</span>
                  </h2>
                ) : null}
                <div className="mt-3 flex gap-2">
                  {github ? (
                    <a>
                      <FaGithub className="h-6 w-6" />
                    </a>
                  ) : null}
                  {linkedIn ? (
                    <a>
                      <FaLinkedin className="h-6 w-6" />
                    </a>
                  ) : null}
                </div>
                <div className="mt-3 flex h-fit w-full flex-wrap gap-3">
                  {skillsArray.map((skill) => (
                    <div
                      className="h-fit w-fit rounded bg-black px-2 text-white"
                      key={skill.name}
                    >
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
