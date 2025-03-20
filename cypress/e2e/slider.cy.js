describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });

  it('Checks if user can change slides with nav buttons', function() {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('exist');
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
    cy.wait(2000);
    cy.get('.swiper-button-prev').click();
    cy.get('.swiper-slide-active').should('exist');
    cy.get('.swiper-slide-active').should('contain', 'Rome');
  })

  it('Check all slides', function() {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-slide-active').should('exist');
    cy.get('.swiper-slide-active').should('contain', 'Rome');
    cy.get('.swiper-slide-active').should('contain', 'Italy');
    cy.wait(2000);
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('exist');
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
    cy.get('.swiper-slide-active').should('contain', 'London');
    cy.wait(2000);
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('exist');
    cy.get('.swiper-slide-active').should('contain', 'France');
    cy.get('.swiper-slide-active').should('contain', 'Paris');
});
  
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});   