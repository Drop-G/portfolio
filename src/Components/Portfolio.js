import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image;

        return (
          <div key={projects.title}>
              <img alt={projects.title} src={projectImage} />
              <ul className="text-center">
                <a href={projects.live} className="button btn project-btn "><i className="fa fa-book"></i> {projects.title}</a>
                <a href={projects.url} className="button btn github-btn "><i className="fa fa-github"></i>Project Repo</a>
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
