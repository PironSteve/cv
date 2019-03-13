import React from "react";
import me from "../../src/img/me.jpg";
import html from "../../src/img/HTML5.png";
import Css from "../img/CSS3.png";
import Reactjs from "../img/ReactJS.png";
import Boot from "../img/Bootstrap.png";
import Sass from "../img/SASS.png";
import Java from "../img/Javascript.png";
import Git from "../img/Git.png";
import Mongo from "../img/MongoDB.png";
import Node from "../img/NodeJS.png";
import Mysql from "../img/Mysql.png";
import Php from "../img/PHP.png";
import Vue from "../img/VueJS.png";
import Travelagency from "../img/travelagency.png";
import Snake from "../img/snake.png";
import Topactrices from "../img/topactrices.png";
import Pomodoro from "../img/pomodoro.png";
import Cv from "../img/cv.png";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Resume extends React.Component {
  componentDidMount() {
    $(document).ready(function() {
      $("body").scrollspy({
        target: ".navbar",
        offset: 0
      });
    });
  }
  render() {
    return (
      <div>
        <body data-spy="scroll" data-target=".navbar" data-offset="60">
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#myNavbar"
                >
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav">
                  <Link
                    className="nav navbar-nav"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={60}
                    duration={500}
                  >
                    <li className="nav-link">
                      <a href="#about">Moi</a>
                    </li>
                  </Link>
                  <Link
                    className="nav navbar-nav"
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={60}
                    duration={500}
                  >
                    <li className="nav-link">
                      <a href="#skills">Compétences</a>
                    </li>
                  </Link>
                  <Link
                    className="nav navbar-nav"
                    activeClass="active"
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={60}
                    duration={500}
                  >
                    <li className="nav-link">
                      <a href="#experience">Expérience</a>
                    </li>
                  </Link>
                  <Link
                    className="nav navbar-nav"
                    activeClass="active"
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={60}
                    duration={500}
                  >
                    <li className="nav-link">
                      <a href="#education">Education</a>
                    </li>
                  </Link>
                  <Link
                    className="nav navbar-nav"
                    activeClass="active"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={60}
                    duration={500}
                  >
                    <li className="nav-link">
                      <a href="#portfolio">Portfolio</a>
                    </li>
                  </Link>
                  <Link
                    className="nav navbar-nav"
                    activeClass="active"
                    to="recommandations"
                    spy={true}
                    smooth={true}
                    offset={60}
                    duration={500}
                  >
                    <li className="nav-link">
                      <a href="#recommandations">Recommandations</a>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </nav>
          <div className="contact-info">
            <div className="option">
              <i class="fas fa-map-marker-alt" />
              <div className="info">Liège, Belgium</div>
            </div>
            <div className="option">
              <i class="far fa-envelope" />
              <div className="info">steve.piron@gmail.com</div>
            </div>
            <div className="option">
              <i class="fas fa-mobile-alt" />
              <div className="info">+32494124963</div>
            </div>
          </div>
          <section id="about" className="container-fluid">
            <div className="col-xs-8 col-md-4 profile-picture">
              <img
                src={`${process.env.BASE_PATH || ""}/${me}`}
                alt="Piron Steve"
                className="img-circle"
              />
            </div>
            <div className="heading">
              <h1>Hello, moi c'est Steve</h1>
              <h3>Junior Web Developer</h3>
              <div>
                <a href="https://github.com/PironSteve" target="_blank">
                  <i className="fab fa-github fa-2x" />
                </a>
                <a
                  href="https://www.linkedin.com/in/steve-piron/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in fa-2x" />
                </a>
                <a
                  href="https://www.npmjs.com/settings/bedou/packages"
                  target="_blank"
                >
                  <i className="fab fa-npm fa-2x" />
                </a>
                <a href="https://twitter.com/Beda_SP" target="_blank">
                  <i class="fab fa-twitter fa-2x" />
                </a>
              </div>
              <a
                href="https://drive.google.com/file/d/1-d6RTO7xe4nKVjI5O7GNysW6ADqfAITU/view?usp=sharing"
                target="_blank"
                className="button1"
              >
                Télécharger CV
              </a>
            </div>
          </section>

          <section id="skills">
            <div className="red-divider" />
            <div className="heading">
              <h2>Compétences</h2>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="comp-container">
                    <img
                      className="comp"
                      src={`${process.env.BASE_PATH || ""}/${html}`}
                      alt=""
                    />
                    <img
                      className="comp"
                      src={`${process.env.BASE_PATH || ""}/${Css}`}
                      alt=""
                    />
                    <img className="comp" src={Reactjs} alt="" />
                    <img className="comp" src={Boot} alt="" />
                    <img className="comp" src={Sass} alt="" />
                    <img className="comp" src={Java} alt="" />
                    <img className="comp" src={Git} alt="" />
                    <img className="comp" src={Mongo} alt="" />
                    <img className="comp" src={Node} alt="" />
                    <img className="comp" src={Mysql} alt="" />
                    <img className="comp" src={Php} alt="" />
                    <img className="comp" src={Vue} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="experience">
            <div className="container">
              <div className="white-divider" />
              <div className="heading">
                <h2>Expérience Professionnelle</h2>
              </div>
              <ul className="timeline">
                <li>
                  <div className="timeline-badge">
                    <span className="glyphicon glyphicon-briefcase" />
                  </div>
                  <div className="timeline-panel-container">
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3>BECODE</h3>
                        <h4>Junior Web Developer</h4>
                        <p className="text-mute">
                          <small className="glyphicon glyphicon-time" />{" "}
                          2018-2019
                        </p>
                      </div>
                      <div className="timeline-body">
                        <p>Création de site internet et applications</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-badge">
                    <span className="glyphicon glyphicon-briefcase" />
                  </div>
                  <div className="timeline-panel-container-inverted">
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3>LUKOIL</h3>
                        <h4>Vendeur</h4>
                        <p className="text-mute">
                          <small className="glyphicon glyphicon-time" />{" "}
                          2014-2015
                        </p>
                      </div>
                      <div className="timeline-body">
                        <p>Vente et réassort de marchandises</p>
                        <p>Gestion des commandes et des représentants</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-badge">
                    <span className="glyphicon glyphicon-briefcase" />
                  </div>
                  <div className="timeline-panel-container">
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h3>CARREFOUR</h3>
                        <h4>Vendeur</h4>
                        <p className="text-mute">
                          <small className="glyphicon glyphicon-time" />{" "}
                          2013-2014
                        </p>
                      </div>
                      <div className="timeline-body">
                        <p>Vente et réassort de marchandises</p>
                        <p>Accueil client</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section id="education">
            <div className="container">
              <div className="red-divider" />
              <div className="heading">
                <h2>Education</h2>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <div className="education-block">
                    <h5>2002 - 2010</h5>
                    <span className="glyphicon glyphicon-education" />
                    <h3>ARAHF - Malmedy</h3>
                    <h4>Certificat d'enseignement secondaire supérieur</h4>
                    <div className="red-divider" />
                    <p>Sciences Sociales</p>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="education-block">
                    <h5>2011 - 2013</h5>
                    <span className="glyphicon glyphicon-education" />
                    <h3>IFAPME - Verviers</h3>
                    <h4>
                      Formation "Conseiller PC-Réseau et Chef d'entreprise"
                    </h4>
                    <div className="red-divider" />
                    <p>Installer et configurer les systèmes d’exploitation</p>
                    <p>Assistance et un suivi technique</p>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="education-block">
                    <h5>2016 - 2018</h5>
                    <span className="glyphicon glyphicon-education" />
                    <h3>HELMO - Liège</h3>
                    <h4>Deux années en Informatique de Gestion</h4>
                    <div className="red-divider" />
                    <p>Programmation Java</p>
                    <br />
                    <p>Architecture des Ordinateurs</p>
                    <br />
                    <p>Développement Web</p>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="education-block">
                    <h5>2018 - 2019</h5>
                    <span className="glyphicon glyphicon-education" />
                    <h3>BeCode</h3>
                    <h4>Formation "Web Developer"</h4>
                    <div className="red-divider" />
                    <p>HTML/CSS - Javascript - JQuery</p>
                    <p>React - Vue - PHP - Sass - Bulma</p>
                    <p>Node - MongoDB - MySQL - Bootstrap</p>
                    <p>Responsive Design</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="portfolio">
            <div className="container">
              <div className="white-divider" />
              <div className="heading">
                <h2>Portfolio</h2>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <a
                    className="thumbnail"
                    href="https://pironsteve.000webhostapp.com/travelagency/"
                    target="_blank"
                  >
                    <img src={Travelagency} alt="travel agency" />
                  </a>
                </div>
                <div className="col-sm-4">
                  <a
                    className="thumbnail"
                    href="https://pironsteve.000webhostapp.com/snake/"
                    target="_blank"
                  >
                    <img src={Snake} alt="snake game" />
                  </a>
                </div>
                <div className="col-sm-4">
                  <a
                    className="thumbnail"
                    href="https://pironsteve.000webhostapp.com/topactrices/"
                    target="_blank"
                  >
                    <img src={Topactrices} alt="top actrices" />
                  </a>
                </div>
                <div className="col-sm-4">
                  <a
                    className="thumbnail"
                    href="https://pironsteve.github.io/pomodoro-reactjs"
                    target="_blank"
                  >
                    <img src={Pomodoro} alt="pomodoro" />
                  </a>
                </div>
                <div className="col-sm-4">
                  <a
                    className="thumbnail"
                    href="https://pironsteve.github.io/cv"
                    target="_blank"
                  >
                    <img src={Cv} alt="cv" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="recommandations">
            <div className="container">
              <div className="red-divider" />
              <div className="heading">
                <h2>Recommandations</h2>
              </div>
              <div
                id="myCarousel"
                className="carousel slide text-center"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#myCarousel"
                    data-slide-to="0"
                    className="active"
                  />
                  <li data-target="#myCarousel" data-slide-to="1" />
                  <li data-target="#myCarousel" data-slide-to="2" />
                </ol>
                <div className="carousel-inner" role="listbox">
                  <div className="item active">
                    <h3>"Motivé et sérieux, le top!"</h3>
                    <h4>Michel Jansen, MJ Menuiserie</h4>
                  </div>
                  <div className="item">
                    <h3>"A venir..."</h3>
                    <h4>A venir</h4>
                  </div>
                  <div className="item">
                    <h3>"A venir..."</h3>
                    <h4>A venir</h4>
                  </div>
                </div>
                <a
                  className="left carousel-control"
                  href="#myCarousel"
                  data-slide="prev"
                  role="button"
                >
                  <span className="glyphicon glyphicon-chevron-left" />
                </a>
                <a
                  className="right carousel-control"
                  href="#myCarousel"
                  data-slide="next"
                  role="button"
                >
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
          </section>

          <footer className="text-center">
            <div className="footer">
              <Link
                className="gotop"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <span className="glyphicon glyphicon-chevron-up" />
              </Link>
            </div>
            <div>
              <a href="https://github.com/PironSteve" target="_blank">
                <i className="fab fa-github fa-2x" />
              </a>
              <a
                href="https://www.linkedin.com/in/steve-piron/"
                target="_blank"
              >
                <i className="fab fa-linkedin-in fa-2x" />
              </a>
              <a
                href="https://www.npmjs.com/settings/bedou/packages"
                target="_blank"
              >
                <i className="fab fa-npm fa-2x" />
              </a>
              <a href="https://twitter.com/Beda_SP" target="_blank">
                <i class="fab fa-twitter fa-2x" />
              </a>
            </div>
            <h5>© 2019 PIRON STEVE</h5>
          </footer>
        </body>
      </div>
    );
  }
}
