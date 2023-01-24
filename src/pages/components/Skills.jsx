import { useState, useEffect } from "react";
import { devSkills } from "../../constants/skills";

import Skill from "./Skill";
const Skills = () => {
  const [javaScript, setJavaScript] = useState(0);
  const [html, setHtml] = useState(0);
  const [css, setCss] = useState(0);
  const [nodeJs, setNodeJs] = useState(0);
  const [reactJs, setReactJs] = useState(0);
  const [git, setGit] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setJavaScript((prevState) => {
        const diff = Math.floor(Math.random() * 10);
        return Math.min(prevState + diff, 77);
      });
      setHtml((prevState) => {
        const diff = Math.floor(Math.random() * 10);
        return Math.min(prevState + diff, 89);
      });
      setCss((prevState) => {
        const diff = Math.floor(Math.random() * 10);
        return Math.min(prevState + diff, 80);
      });
      setNodeJs((prevState) => {
        const diff = Math.floor(Math.random() * 10);
        return Math.min(prevState + diff, 56);
      });
      setReactJs((prevState) => {
        const diff = Math.floor(Math.random() * 10);
        return Math.min(prevState + diff, 79);
      });
      setGit((prevState) => {
        const diff = Math.floor(Math.random() * 10);
        return Math.min(prevState + diff, 56);
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const { htmlSkill, cssSkill, jsSkill, reactSkill, nodeSkill, gitSkill } =
    devSkills;

  return (
    <>
      <Skill
        name={htmlSkill.name}
        icon={htmlSkill.icon}
        color={htmlSkill.color}
        value={html}
      />
      <Skill
        name={cssSkill.name}
        icon={cssSkill.icon}
        color={cssSkill.color}
        value={css}
      />
      <Skill
        name={jsSkill.name}
        icon={jsSkill.icon}
        color={jsSkill.color}
        value={javaScript}
      />
      <Skill
        name={reactSkill.name}
        icon={reactSkill.icon}
        color={reactSkill.color}
        value={reactJs}
      />
      <Skill
        name={nodeSkill.name}
        icon={nodeSkill.icon}
        color={nodeSkill.color}
        value={nodeJs}
      />
      <Skill
        name={gitSkill.name}
        icon={gitSkill.icon}
        color={gitSkill.color}
        value={git}
      />
    </>
  );
};

export default Skills;
