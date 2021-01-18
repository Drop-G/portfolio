import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image;

        return (
          <div key={projects.title}>
              <img alt={projects.title} src={projectImage} />
              <p class= "description text-center">{projects.description}</p>
              <ul className="text-center">
                <a href={projects.live} className="button btn project-btn "><i className="fas fa-walking"></i> {projects.title} Application</a>
                <a href={projects.url} className="button btn github-btn "><i className="fab fa-github-alt"></i> {projects.title} Repository</a>
              </ul>
          </div>
        )
      })
    }

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>My Projects</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
