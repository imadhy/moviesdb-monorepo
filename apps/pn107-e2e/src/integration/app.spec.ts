import { getGreeting } from '../support/app.po';

describe('pn107', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to pn107!');
  });
});
