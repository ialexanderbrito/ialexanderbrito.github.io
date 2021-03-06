import React, { useState, useEffect } from 'react';

import { portfolio } from './portfolio';

import './styles.css';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);
    const filtered = portfolio.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));
    setProjects(filtered);
  }, [filter]);

  return (
    <>
      <div id="filters" className="filters">
        <a href="#" active={filter === 'all'} onClick={() => setFilter('all')}>
          Tudo
        </a>
        <a
          href="#"
          active={filter === 'frontend'}
          onClick={() => setFilter('frontend')}
        >
          Front-end
        </a>
        <a
          href="#"
          active={filter === 'mobile'}
          onClick={() => setFilter('mobile')}
        >
          Mobile
        </a>
        <a
          href="#"
          active={filter === 'ux-ui'}
          onClick={() => setFilter('ux-ui')}
        >
          UX/UI
        </a>
      </div>
      <div className="work__container bd-grid">
        {projects.map((item) =>
          item.filtered === true ? (
            <>
              <div className="work__img">
                <img src={item.image} alt="Projeto" />
                <p />

                <h3 className="work__text">{item.name}</h3>
                <div className="work__description_links">
                  <a
                    href={`https://github.com/ialexanderbrito/${item.uri}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h4 className="work__description">
                      <i className="bx bxl-github space" />
                      Visitar o projeto
                    </h4>
                  </a>
                  {item.deploy ? (
                    <>
                      <h4 className="work__description"> | </h4>
                      <a
                        href={`${item.deploy}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h4 className="work__description">
                          Deploy
                          <i className="bx bx-link-external space" />
                        </h4>
                      </a>
                    </>
                  ) : null}
                </div>
                <h4 className="work__description">
                  <div className="tag__container">
                    <div classsName="projects__tag">
                      {item.item1 ? (
                        <div className="projects__tag">{item.item1}</div>
                      ) : (
                        <div className="projects__tagnull" />
                      )}
                    </div>

                    <div classsName="projects__tag">
                      {item.item2 ? (
                        <div className="projects__tag">{item.item2}</div>
                      ) : (
                        <div className="projects__tagnull" />
                      )}
                    </div>

                    <div classsName="projects__tag">
                      {item.item3 ? (
                        <div className="projects__tag">{item.item3}</div>
                      ) : (
                        <div className="projects__tagnull" />
                      )}
                    </div>

                    <div classsName="projects__tag">
                      {item.item4 ? (
                        <div className="projects__tag">{item.item4}</div>
                      ) : (
                        <div className="projects__tagnull" />
                      )}
                    </div>

                    <div classsName="projects__tag">
                      {item.item5 ? (
                        <div className="projects__tag">{item.item5}</div>
                      ) : (
                        <div className="projects__tagnull" />
                      )}
                    </div>
                  </div>
                </h4>
              </div>
            </>
          ) : (
            ''
          )
        )}
      </div>
    </>
  );
}
