describe("saucedemo", () => {

    it("Login with incorrect credentials", () => {
         cy.visit("https://www.saucedemo.com/");
         cy.get("#user-name").type("problem_user");
         cy.get("#password").type("public_sauce");
         const login = cy.get("#login-button");
         login.click();
         cy.get(".error-message-container error").should("exist");

     })

     it("Open and close burger menu", () => {
          cy.visit("https://www.saucedemo.com/");
          cy.get("#user-name").type("standard_user");
          cy.get("#password").type("secret_sauce");
          cy.get(".submit-button btn_action").click();
          cy.get("#react-burger-menu-btn").click();
          cy.get(".bm-menu-wrap").should("exist");
          cy.get("#react-burger-cross-btn").click();
          cy.get("#page_wrapper").should("exist");
     })

     it("Login with correct credentials and logout", () => {
          cy.visit("https://www.saucedemo.com/");
          cy.get("#user-name").type("standard_user");
          cy.get("#password").type("secret_sauce");
          cy.get("#login-button").click();
          cy.get(".shopping_cart_link").should("be.visible");
          cy.get("#react-burger-menu-btn").click();
          cy.get("#logout_sidebar_link").click();
          cy.get("#login-button").should("be.visible")
     })

     it("Add and remove product from cart", () => {
          cy.visit("https://www.saucedemo.com/");
          cy.get("#user-name").type("standard_user");
          cy.get("#password").type("secret_sauce");
          cy.get("#login-button").click();
          cy.get("#shopping_cart_container").should("exist");
          cy.get("#add-to-cart-sauce-labs-bike-light").click();
          cy.get("#shopping_cart_container").click();
          cy.get("#remove-sauce-labs-bike-light").click();
          cy.get("#removed_cart_item").should("exist");
     })

     it("Access product page and buy product", () => {
          cy.visit("https://www.saucedemo.com/");
          cy.get("#user-name").type("standard_user");
          cy.get("#password").type("secret_sauce");
          cy.get("#login-button").click();
          cy.get("#item_5_title_link").click();
          cy.get("add-to-cart-sauce-labs-fleece-jacket").click();
          cy.get("#shopping_cart_container").click();
          cy.get("#checkout").click();
          cy.get("#first-name").type("standard").type("{enter}");
          cy.get("#last-name").type("user").type("{enter}");
          cy.get("#postal-code").type("800649").type("{enter}");
          cy.get("#continue").click();
          cy.get("#finish").should("have.class","btn btn_action btn_medium cart_button");
     })

     it('"Back to product" button works',()=>{
          cy.visit("https://www.saucedemo.com/");
          cy.get("#user-name").type("standard_user");
          cy.get("#password").type("secret_sauce");
          cy.get("#login-button").click();
          cy.get("#item_5_title_link").click();
          cy.get("#back-to-products").click();
          cy.get(".title").should("be.visible");
      })

})