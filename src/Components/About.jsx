import React from 'react'

function About(props) {
  return (
    <div>
      <div className="info-head">
            <div className="inline info-title">
                <h2>Why Choose Us</h2>
            </div>
            <div className={`inline info-body-${props.mode}`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, quidem. Sit quos tempora rem minus
                quibusdam veniam, eius laboriosam nulla, eos praesentium deserunt, ducimus eum eveniet. Tenetur sapiente
                a in! Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime aperiam quis reprehenderit
                doloremque eos possimus ea dolores voluptates quae architecto itaque, cum autem earum, minima adipisci
                ab aut consequuntur omnis!
            </div>
        </div>
        <div className="four">
            <div className="box">
                <div className={`box-title-${props.mode}`}>
                    <h2 className="inline">
                        Rust-Proof
                    </h2>
                </div>
                <div className={`box-desc-${props.mode}`}>
                    <p className="inline">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id tempora, cumque quibusdam nihil
                        beatae unde!
                    </p>
                </div>
                <div className="box-link">
                    <a href="#">Learn More!</a>
                </div>
            </div>
            <div className="box">
                <div className={`box-title-${props.mode}`}>
                    <h2 className="inline">
                        Best-Quality
                    </h2>
                </div>
                <div className={`box-desc-${props.mode}`}>
                    <p className="inline">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id tempora, cumque quibusdam nihil
                        beatae unde!
                    </p>
                </div>
                <div className="box-link">
                    <a href="#">Learn More!</a>
                </div>
            </div>
            <div className="box">
                <div className={`box-title-${props.mode}`}>
                    <h2 className="inline">
                        24*7 Services
                    </h2>
                </div>
                <div className={`box-desc-${props.mode}`}>
                    <p className="inline">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id tempora, cumque quibusdam nihil
                        beatae unde!
                    </p>
                </div>
                <div className="box-link">
                    <a href="#">Learn More!</a>
                </div>
            </div>
            <div className="box">
                <div className={`box-title-${props.mode}`}>
                    <h2 className="inline">
                        New Designs
                    </h2>
                </div>
                <div className={`box-desc-${props.mode}`}>
                    <p className="inline">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id tempora, cumque quibusdam nihil
                        beatae unde!
                    </p>
                </div>
                <div className="box-link">
                    <a href="#">Learn More!</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
