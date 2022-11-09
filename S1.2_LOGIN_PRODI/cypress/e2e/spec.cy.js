describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://obefib.arriansoft.com')
    cy.get(':nth-child(4) > a > .info-box > .info-box-content > .info-box-number').click()
    cy.get(':nth-child(2) > .form-control').get("select").select("SASCIN").invoke("val").should("eq", "SASCIN")
    cy.get(':nth-child(3) > .form-control').type("0023087402")
    cy.get(':nth-child(4) > .form-control').type("sascinjiayou1")
    cy.get('.btn').click()
  })
})