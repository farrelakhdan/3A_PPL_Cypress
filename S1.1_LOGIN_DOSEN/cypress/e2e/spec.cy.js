describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://obefib.arriansoft.com')
    cy.get(':nth-child(5) > a > .info-box > .info-box-content > .info-box-number').click()
    cy.get(':nth-child(2) > .form-control').get("select").select("SASCIN").invoke("val").should("eq", "SASCIN")
    cy.get(':nth-child(3) > .form-control').type("2022019310092001")
    cy.get(':nth-child(4) > .form-control').type("sascinjiayou9")
    cy.get('.btn').click()
  })
})