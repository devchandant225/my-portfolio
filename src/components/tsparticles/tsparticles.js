import React, { Component } from "react";
import Particles from "react-tsparticles";
import { themesupplier } from "../../contexts/themecontexts";

class Tsparticles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myTheme: "",
    };

    this.particlesInit = this.particlesInit.bind(this);
    this.particlesLoaded = this.particlesLoaded.bind(this);
  }

  particlesInit(main) {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  }

  particlesLoaded(container) {
    console.log(container);
  }

  // componentDidMount() {
  //   const theme =
  //     localStorage.getItem("isDark") &&
  //     JSON.parse(localStorage.getItem("isDark"));

  //   this.setState({ myTheme: theme });
  // }
  static contextType = themesupplier;

  render() {
    console.log(this.context.isDark);
    return (
      <Particles
        id="tsparticles"
        init={this.particlesInit}
        loaded={this.particlesLoaded}
        options={{
          background: {
            color: {
              value: this.context.isDark ? "#000" : "#ffff",
            },
          },
          fpsLimit: 90,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "attract",
              },
              resize: true,
            },

            modes: {
              bubble: {
                distance: 400,
                duration: 5,
                opacity: 0.8,
                size: 50,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.8,
                // duration: 0.8,
                // factor: 100,
                // speed: 1,
                // maxSpeed: 50,
                // easing: "ease-out-quad",
              },
              //   bounce: {
              //     distance: 200,
              //   },
              //   connect: {
              //     distance: 80,
              //     links: {
              //       opacity: 0.5,
              //     },
              //     radius: 60,
              //   },
              //   attract: {
              //     distance: 200,
              //     duration: 0.4,
              //     easing: "ease-out-quart",
              //     factor: 1,
              //     maxSpeed: 50,
              //     speed: 1,
              //   },
            },
          },
          particles: {
            color: {
              value: this.context.isDark ? "#ffff" : "#000",
            },
            links: {
              color: this.context.isDark ? "#ffff" : "#000",
              distance: 150,
              enable: false,
              opacity: 0.5,
              width: 1,
            },
            bounce: {
              enable: true,
              //   distance: 200,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 50,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
    );
  }
}

export default Tsparticles;
