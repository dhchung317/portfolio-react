import { gsap } from 'gsap';
import { TimelineMax as Timeline, Power1, Back, Elastic } from 'gsap';
gsap.registerPlugin( Timeline, Power1, Back, Elastic);

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
        .from(node, 1.5, { display: 'none', autoAlpha: 0, y: 100, ease: Elastic.easeOut.config(.8) }, delay + .15)
    return timeline;
}

const getSkillsTimeline = (node, delay) => {
    const timeline = new Timeline({ paused: true });
    const content = node.querySelectorAll('div > article');
    // const texts = node.querySelector('sTile');
    // const contentInner = node.querySelector('.skill-list-content');
    timeline
        .from(node, 0, { display: 'none', autoAlpha: 0, delay })
        // .from(content, 0.15, { autoAlpha: 0, y: 25, ease: Power1.easeInOut })
        // .from(content, 0.15, { autoAlpha: 0, delay: 0.15, ease: Power1.easeIn });
        .staggerFrom(content, 1, { autoAlpha: 0, x: -25, ease: Elastic.easeOut }, 0.075);

    return timeline;
}
/** 
* TODO: home content and transitions
*/
const getHomeTimeline = (node, delay) => {
    const timeline = new Timeline({ paused: true });
    const logo = node.querySelector('.logo-div > img');
    const logoU = node.querySelector('.logo-u-div > img');
    timeline
        .from(logoU, .2, { display: 'none', autoAlpha: 0, y: 200, ease: Elastic.easeIn.config(.5) })
        .from(logo, 2.5, { display: 'none', autoAlpha: 0, y: 500, ease: Elastic.easeOut.config(1.2) }, delay + .2)
    return timeline;
}

const getTextTimeline = (node, delay) => {
    const timeline = new Timeline({ paused: true });
    const text = node.querySelector('p')
    timeline
        .from(text, 1, { display: 'none', autoAlpha: 0, ease: Power1.easeIn }, delay + 1)
    return timeline
}

const getContactTimeline = (node, delay) => {
    const timeline = new Timeline({ paused: true });
    const content = node.querySelectorAll('div');
    timeline
        .from(content, 1.5, { display: 'none', autoAlpha: 0, y:80, ease: Elastic.easeOut.config(.8) }, delay + .15)
    return timeline;
}

const getHamburgerTimeline = (node, delay) => {
    const timeline = new Timeline({ paused: true });
    const content = node
    timeline
        // .from(content, 1.5, { display: 'none', autoAlpha: 0, ease: Elastic.easeOut.config(.8) }, delay + .15)
        .to(content, 2, { rotation: 360 })

    return timeline;
}

export const play = (pathname, node, appears) => {
    const delay = appears ? 0 : 0.5;
    let timeline

    if (pathname === '/')
        timeline = getHomeTimeline(node, delay);
    else if (pathname === '/projects')
        timeline = getProjectTimeline(node, delay);
    else if (pathname === '/skills')
        timeline = getSkillsTimeline(node, delay);
    else if (pathname === 'about-me-text')
        timeline = getTextTimeline(node, delay);
    else if (pathname === '/contact')
        timeline = getContactTimeline(node, delay);
    else if (pathname === '/hamburger')
        timeline = getHamburgerTimeline(node, delay);
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