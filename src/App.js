import React,  {useRef, useEffect} from 'react';
import './App.css';
import {TweenMax} from 'gsap'
import { TimelineLite } from 'gsap/gsap-core';
import { Power3 } from 'gsap/gsap-core';


function App() {

  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);

  let tl = new TimelineLite({delay: .8});

  useEffect(() => {

    //images vars
    const girlImage = images.firstElementChild;
    const boyImage = images.lastElementChild;

    //content vars
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    //remove init flash
    TweenMax.to(app, 0, {css: {visibility: 'visible'}})


    //images animation
    tl.from(girlImage, 1.2, {y: 1280, ease: Power3.easeOut }, 'start')
       .from(girlImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)

       tl.from(boyImage, 1.2, {y: 1280, ease: Power3.easeOut }, .2)
       .from(boyImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)

       //content animation
       tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children], 1, {
         y: 44,
         ease: Power3.easeOut,
         delay: .8
       }, .15, 'start')
       .from(contentP, 1, {y:20, opacity:0, ease: Power3.easeOut}, 1.4)
       .from(contentButton, 1, {y:20, opacity:0, ease: Power3.easeOut}, 1.6)

  }, [tl])

  return (
    <div className="hero" ref={el => app =el}>
        <div className="container">
          <div className="hero_inner">
            <div className="hero_content">
              <div className="hero_content_inner"  ref={el => content =el}>
                <h1>
                 <div className="hero_content_line">
                   <div className="hero_content_line_inner">Relieving the burdeen</div>
                 </div>
                 <div className="hero_content_line">
                   <div className="hero_content_line_inner">of disease caused</div>
                 </div>
                 <div className="hero_content_line">
                   <div className="hero_content_line_inner">by behavior</div>
                 </div>
                </h1>
                <p>
                Better treats serious cardiometabolic diseases to transform
                lives and reduce healthcare utilization through the use of
                digital therapeutics.
                </p>
                <div className="btn_row">
                  <button className="explore_btn">
                    explore
                    <div className="arrow_icon">
                      <div >
                      <svg xmlns="http://www.w3.org/2000/svg" width="17.465" height="8.237" viewBox="0 0 17.465 8.237"><g transform="translate(-2.3 -7.881)"><line x2="16" transform="translate(3 12)" stroke-width="1.6" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M12,5l3.129,3.129L12,11.258" transform="translate(3.936 3.871)" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6"/></g></svg>

                      </div>
                    </div>
                  </button>
                </div>
              </div>

            </div>
            <div className="hero_images">
              <div className="hero_images_inner" ref={el => images = el}>
                <div>
                <img className="hero_images_girl" src="./images/girl.jpg"/>
                </div>
                <div>
                  <img className="hero_images_boy" src="./images/boy.jpg"/>
                </div>
              </div>

            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
