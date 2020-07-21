import { gsap } from 'gsap';
import { TimelineMax as Timeline, Power1 } from 'gsap';
gsap.registerPlugin(Timeline, Power1);

/** 
* TODO: optional default transitions
*/
const getDefaultTimeline = (node, delay) => {
    const timeline = new Timeline({ paused: true });
    // const content = node.querySelectorAll('div');

    // timeline
    //     .from(node, 0.3, { display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn })
    //     .from(content, 0.15, { autoAlpha: 0, y: 25, ease: Power1.easeInOut })

    return timeline;
}

const getProjectTimeline = (node, delay) => {
    const timeline = new Timeline({ paused: true });
    const content = node.querySelectorAll('div');

    timeline
        .from(node, 0.375, { display: 'none', autoAlpha: 0, y: 60, ease: Power1.easeIn }, delay)
    return timeline;
}

const getSkillsTimeline = (node, delay) => {
    const timeline = new Timeline({ paused: true });
    const content = node.querySelectorAll('div > article');
    const texts = node.querySelector('sTile');
    // const contentInner = node.querySelector('.skill-list-content');

    timeline
        .from(node, 0, { display: 'none', autoAlpha: 0, delay })
        // .from(content, 0.15, { autoAlpha: 0, y: 25, ease: Power1.easeInOut })
        // .from(content, 0.15, { autoAlpha: 0, delay: 0.15, ease: Power1.easeIn });
        .staggerFrom(content, 0.175, { autoAlpha: 0, x: -25, ease: Power1.easeOut }, 0.075);

    return timeline;
}
/** 
* TODO: home content and transitions
*/
const getHomeTimeline = (node, delay) => {
    const timeline = new Timeline({ paused: true });
    const logo = node.querySelectorAll('.logo-div > img');
    const logoU = node.querySelector('.logo-u-div > img');

    timeline
        // .from(node, 0, { display: 'none', autoAlpha: 0, delay })
        .from(logoU, 0.175, { display: 'none', y: 80, autoAlpha: 0, ease: Power1.easeIn })
        .from(logo, 0.275, { display: 'none', y: 100, autoAlpha: 0, ease: Power1.easeIn }, delay)
    // .staggerFrom(texts, 0.375, { autoAlpha: 0, x: -25, ease: Power1.easeOut }, 0.125);

    return timeline;
}

export const play = (pathname, node, appears) => {
    console.log("play")
    const delay = appears ? 0 : 0.5;
    let timeline

    if (pathname === '/')
        timeline = getHomeTimeline(node, delay);
    else if (pathname === '/projects')
        timeline = getProjectTimeline(node, delay);
    else if (pathname === '/skills')
        timeline = getSkillsTimeline(node, delay);
    else
        timeline = getDefaultTimeline(node, delay);

    window
        .loadPromise
        .then(() => requestAnimationFrame(() => timeline.play()))
}

export const exit = (node) => {
    console.log("exit")
    let timeline = new Timeline({ paused: true });
    timeline.to(node, 0.5, { autoAlpha: 0, y: 25, ease: Power1.easeOut }, .3);
    timeline.play()
}