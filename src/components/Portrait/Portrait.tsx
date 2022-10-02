import { FunctionComponent } from 'preact';
import './Portrait.scss';

const Portrait: FunctionComponent = () => {
  const descr = `Hi, my name is Arthur. I've been doing web development for more than 7
        years. I mostly write in typescript, python and golang. In my spare time
        I do open source contributing and run a small blog - https://du-blog.ru.
        During my practice I've dealt with big enterprise projects as well as
        small startups, which I had to finish as prototype as soon as possible.
        My soft skills are: communication skills, curiosity and pragmatic
        approach, desire to learn and study. I love working in a team, but I can
        also work independently. To achieve my goals I use planning methods,
        Objective Key Result, as well as ORG mode (a format similar to markdown
        which allows you to structure your thoughts and objectives) and org-roam
        (implementation of zettelkasten method, also known as second brain). In
        my work I try to use only the best practices and tools, which allow me
        to achieve my goals quickly (emacs, magit, vim keybindings etc). I also
        solve algorithmic problems on codewars, leetcode and other platforms. In
        long-playing projects I always try to write easy to read and
        understandable code, which is easy to maintain. Often it follows
        S.O.L.I.D principles as well as some elements of extreme programming (it
        depends on the project, I prefer to use TDD and pair programming in
        complex projects). I try to find a balance between the time spent on the
        task and the result which can potentially save me a lot of development
        effort. I prefer to write reusable and versatile code which is open to
        extensions and closed to changes. Also this is portfolio of web
        developer, i can create any website for you and another applicaiton. web
        developer, backend, frontend, devops. My stack: golang, typescript,
        mongo, python, javscript, echarts, echart, postgresql, mysql, rabbitmq,
        nats, bash, lisp, emacs lisp, css, sass, scss, figma, youtrack, jira,
        canban, git, github, github actions, ci, cd, drone, c, c++,`;
  return (
    <div className='wrapper'>
      <div className='portrait'>{descr.repeat(5)}</div>
      <div className='blackout'></div>
    </div>
  );
};

export default Portrait;
