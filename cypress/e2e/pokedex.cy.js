describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })
  describe('Charizard Page', function () {
    it('can be navigated from index', function () {
      // for some reason visiting pokemon page doesn't work
      // cy.visit('http://localhost:5000/pokemon/charizard')
      cy.visit('http://localhost:5000')
      cy.contains('charizard').click()
      cy.contains('charizard')
    })
    it('contains the correct abilites', function () {
      cy.visit('http://localhost:5000')
      cy.contains('charizard').click()
      cy.contains('pikachu')
      cy.get('.pokemon-abilities')
        .should('contain', 'blaze')
        .and('contain', 'solar power')
    })
  })
})
