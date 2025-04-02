/// <reference types="cypress" />
import React from "react";
import FormComponent from "../../src/components/Form";
import { mount } from "cypress/react";

describe("Form Component", () => {
  beforeEach(() => {
    mount(React.createElement(FormComponent));
  });

  it("should render the form elements", () => {
    cy.get("h1").contains("Form");
    cy.get('input[placeholder="Name"]').should("exist");
    cy.get('input[placeholder="Email"]').should("exist");
    cy.get('input[placeholder="Phone"]').should("exist");
    cy.get('textarea[placeholder="Message"]').should("exist");
    cy.get("button").contains("Submit").should("exist");
  });

  it("should allow typing in input fields", () => {
    cy.get('input[placeholder="Name"]').type("John Doe").should("have.value", "John Doe");
    cy.get('input[placeholder="Email"]').type("john@example.com").should("have.value", "john@example.com");
    cy.get('input[placeholder="Phone"]').type("1234567890").should("have.value", "1234567890");
    cy.get('textarea[placeholder="Message"]').type("Hello, Cypress!").should("have.value", "Hello, Cypress!");
  });

  it("should not submit if required fields are empty", () => {
    cy.get("button").contains("Submit").click();
    cy.get("input:invalid").should("have.length", 2); // Assuming 'Name' & 'Email' are required
  });

  it("should show an error for invalid email format", () => {
    cy.get('input[placeholder="Email"]').type("invalid-email");
    cy.get("button").contains("Submit").click();

    cy.get('input[placeholder="Email"]').then(($input) => {
      const inputElement = $input[0] as HTMLInputElement; // ✅ Typecast to HTMLInputElement
      expect(inputElement.validationMessage).to.exist;
    });
  });

  it("should submit the form successfully", () => {
    cy.get('input[placeholder="Name"]').type("John Doe");
    cy.get('input[placeholder="Email"]').type("john@example.com");
    cy.get('input[placeholder="Phone"]').type("1234567890");
    cy.get('textarea[placeholder="Message"]').type("Hello, Cypress!");

    cy.window().then((win) => {
      cy.spy(win.console, "log").as("consoleLog");
    });

    cy.get("button").contains("Submit").click();
    cy.get("@consoleLog").should("be.calledWith", "Form submitted");
  });
});
