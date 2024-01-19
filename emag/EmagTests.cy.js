describe("Emag", () => {

     
    it("Emag Logo should be visible",()=>{
        cy.visit("https://www.emag.ro/");
        cy.get('.navbar-brand > img').should("be.visible");
    })

    it("Verify URL and make a screenshot",()=>{
        cy.visit("https://www.emag.ro/licenta-microsoft-windows-11-pro-usb-si-office-2021-pro-plus-medialess-w11-of21less-metasoft/pd/DZSNQBYBM/");
        cy.url().should('include','/DZSNQBYBM/');
        cy.screenshot();
    })

    it("Add and remove product from cart", () => {
        cy.visit("https://www.emag.ro/");
        cy.get("#searchboxTrigger").type("monopoly").type("{enter}");
        cy.get("[data-name='Joc Monopoly - Gandeste Verde'] > .card-v2 > .card-v2-wrapper > .card-v2-content > .card-v2-atc > form > .btn").click();
        cy.get("#my_cart").click();
        cy.get(".page-title").should("be.visible");
        cy.get(".hidden-xs > .line-footer-action-buttons > .btn").click();
        cy.get(".mrg-btm-none").should("exist");
    })
    it("Add product to cart and checkout", () => {
        cy.visit("https://www.emag.ro/");
        cy.get("#searchboxTrigger").type("catan").type("{enter}");
        cy.get('[data-name="Joc de societate Kosmos Catan, Jocul de baza"] > .card-v2 > .card-v2-wrapper > .card-v2-content > .card-v2-atc > form > .btn').click();
        cy.get("#my_cart").click();
        cy.get('.js-order-summary-actions-wrapper > .btn > .em').should("exist");
    })

    })