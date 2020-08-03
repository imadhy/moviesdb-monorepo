import { getAddTodoButton, getTodos } from '../support/app.po';
import { MovieSearch, Movie } from '@monorepo-project/data';

describe('pn106', () => {
  beforeEach(() => cy.visit('/'));

  it('should search for specific movie using api', () => {
    const searchedMovie = 'Pirates des Caraïbes : Le Secret du coffre maudit';
    cy.get('[placeholder="Search a movie or series"]').type(searchedMovie);

    cy.get('.movie-details').should('not.exist');
    cy.get('.movie-carrousel').should('not.exist');

    cy.server();
    cy.route({
      method: 'GET',
      url: `**/search/movie?api_key=43c04d3df7dd76f72027cea01f9aed45&language=fr-FR&query=${searchedMovie}`
    }).as('listeOfMovies');

    cy.get('.search_icon').click();

    cy.wait('@listeOfMovies').then(
      ({ response: { body } }: { response: any }) => {
        const movies = body.results as MovieSearch[];

        cy.get('.movie-carrousel').should('exist');

        cy.route({
          method: 'GET',
          url: `**/movie/${movies[0].id}?api_key=43c04d3df7dd76f72027cea01f9aed45&language=fr-FR`
        }).as('movie');

        cy.get('.movie-carrousel')
          .children()
          .should('have.length', 1)
          .get('img')
          .first()
          .click();

        cy.wait('@movie');

        cy.get('.movie-details').should('exist');
        cy.get('.detail-title')
          .get('h2')
          .contains(searchedMovie);
      }
    );
  });

  it('should search for specific movie using mocks', () => {
    const searchedMovie = 'Pirates des Caraïbes : Mock';
    cy.get('[placeholder="Search a movie or series"]').type(searchedMovie);

    cy.get('.movie-details').should('not.exist');
    cy.get('.movie-carrousel').should('not.exist');

    cy.server();
    cy.route(
      'GET',
      `**/search/movie?api_key=43c04d3df7dd76f72027cea01f9aed45&language=fr-FR&query=${searchedMovie}`,
      'fixture:movies.json'
    ).as('mockedMovies');

    cy.get('.search_icon').click();

    cy.wait('@mockedMovies').then(
      ({ response: { body } }: { response: any }) => {
        const movies = body.results as MovieSearch[];

        cy.get('.movie-carrousel').should('exist');

        cy.route(
          'GET',
          `**/movie/${movies[0].id}?api_key=43c04d3df7dd76f72027cea01f9aed45&language=fr-FR`,
          'fixture:movie.json'
        ).as('movie');

        cy.get('.movie-carrousel')
          .children()
          .should('have.length', 1)
          .get('img')
          .first()
          .click();

        cy.wait('@movie');

        cy.get('.movie-details').should('exist');
        cy.get('.detail-title')
          .get('h2')
          .contains(searchedMovie);
      }
    );
  });
});
