import React, { Component } from 'react';

import './about.css';


class About extends Component {
  render() {
    return (
      <div className="about">
        <section className="section-introduction">
          <div className="container">
            <div className="">
              <div className="">
                <div className="jumbotron introduction-jumbo">
                  <h1 className="display-4">Greetings, im Calvin...</h1>
                  <hr className="my-4" />
                  <p className="lead">a full-stack developer with exposure to JavaScript frameworks such as Reactjs/Vuejs and backend technologies like Nodejs and ASP.NET.
                  Programming aside, i want to share with you my journey that has shaped who i am today.</p>
                  <h5>Story time lets go!</h5>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-origins">
          <div className="container">
            <div>
              <div>
                <div className="jumbotron">
                  <h1 className="display-4">Origins</h1>
                  <hr className="my-4" />
                  <p className="lead">
                  Born in east Africa, i developed the passion for technology as early as the age of 5,
                  when a relative kindly gifted me my first cellphone.
                  </p>
                  <div className="presentation">
                    <div className="phone-title">
                      <h5>The Nokia 7110</h5>
                    </div>
                    <img className="image-title" src="./nokia-7110.jpg" alt="" />
                  </div>
                  <p className="lead">
                  Man, that cellphone was a beast! I couldnt contain my excitment for technology. It all seemed like magic,
                  magic that i wanted to learn and master. So i packed my bags, and traveled as far north-west as i could. To the land
                  seemingly obsessed with technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-immigration">
          <div className="container">
            <div className="">
              <div className="">
                <div className="jumbotron immigration-jumbo">
                  <h1 className="display-4">USA! USA! USA!</h1>
                  <hr className="my-4" />
                  <p className="lead">
                    Finally arriving on the land of opportunity and technology, i quickly enroll myself in the local education system.
                    Working hard through high school, i graduate with a certificate of robotics & automation technology.
                  </p>
                  <div className="presentation">
                    <div className="phone-title">
                      <h5>Hooray!</h5>
                    </div>
                    <img className="image-title" src="./graduation.jpg"  alt=""/>
                  </div>
                  <p className="lead">
                    I can finally proceed to college, where i hoped to face real challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-college">
          <div className="container">
            <div className="">
              <div className="">
                <div className="jumbotron">
                  <h1 className="display-4">College Life</h1>
                  <hr className="my-4" />
                  <p className="lead">
                    Contemplating on whether i want to continue pursuing robotics or automation, i finally decide to try something different.
                    Thus, i enroll for an associates degree Biomedical Engineering, with the hopes of transferring to a 4 year insitution to further my studies.
                  </p>
                  <div className="presentation">
                    <div className="phone-title">
                      <h5>Quinsigamond Community College</h5>
                    </div>
                    <img className="image-title" src="./quinsig.jpg" alt=""/>
                  </div>
                  <p className="lead">
                    A year and a half in, i begin to lose interest in Biomedical Engineering. I was doing great so far, but i started to realize my true
                    passion was in programming.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-swap">
          <div className="container">
            <div className="">
              <div className="">
                <div className="jumbotron swap-jumbo">
                  <h1 className="display-4">Swap it, drop it, or grind it out</h1>
                  <hr className="my-4" />
                  <p className="lead">
                    I was left with three choices. I can either swap my major this far in, drop out, or grind it out for a bachelors degree.
                  </p>
                  <div className="presentation">
                    <div className="phone-title">
                      <h5>Quinsigamond Community College</h5>
                    </div>
                    <img className="image-title" src="./quinsig.jpg" alt=""/>
                  </div>
                  <p className="lead">
                    I was not a fan of switching my major from Biomedical Engineering to Computer Science. It was not something i can afford to do financially, as i had already
                    acquired student loan and was not willing to take on more. But most importantly, i lost love for the career.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-online-class">
          <div className="container">
            <div className="">
              <div className="">
                <div className="jumbotron">
                  <h1 className="display-4">Do it all online</h1>
                  <hr className="my-4" />
                  <p className="lead">
                    My plan was to take a break from college and study as much as i can online about web development. My passion and experience
                    in programming had already provided a foundational base. Which meant that learning web development online would be easy and incredibly affordable.
                  </p>
                  <div className="presentation">
                    <div className="phone-title">
                      <h5>Udemy + Stack Overflow + Google = Success</h5>
                    </div>
                    <img className="image-title" src="./online-courses.jpg" alt=""/>
                  </div>
                  <p className="lead">
                    Finishing my final year in college while simultaneously learning web development, i drop out in pursuit of learning web development online and working full time
                    as a caddy at my local country club.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-love">
          <div className="container">
            <div className="">
              <div className="">
                <div className="jumbotron love-jumbo">
                  <h1 className="display-4">Do what you love</h1>
                  <hr className="my-4" />
                  <p className="lead">
                    My whole take on this journey is doing what you love. Sometimes we sacrifice love for money, fame, or in my case, for something different.
                    If we do so, we may lose appreciation for what we had. I do not plan on ever going back to college to finish my degree in Biomedical Engineering,
                    because it is not what i love doing.
                  </p>
                  <div className="presentation">
                    <div className="phone-title">
                      <h5>Do what you love and love what you do</h5>
                    </div>
                    <img className="image-title" src="./stacks.jpeg" alt=""/>
                  </div>
                  <p className="lead">
                    I love spending hours designing and programming computer projects. It is what i loved and enjoyed doing in high school, and what i still love and enjoy
                    doing today. Learning online has trained me to be self-regulating and disciplined. It has also exposed me to the vast nature of educational material that can be studied
                    online for cheap and sometimes for free.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
