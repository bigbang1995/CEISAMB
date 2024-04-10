particlesJS(
    {
        "particles": {
          "number": {
            "value": 700,
            "density": {
              "enable": true,
              "value_area": 1800
            }
          },
          "color": {
            "value": "#448C34" /*COLOR DE ESFERAS*/
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 1,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 0.2,
              "opacity_min": 0.5,
              "sync": false
            }
          },
          "size": {
            "value": 4,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 50.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 120,
            "color": "#448C34",
            "opacity": 1,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 3.5,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 200,
              "size": 40,
              "duration": 0.1,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 150,
              "duration": 0.1
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }
);