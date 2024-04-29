import React from "react";
import Stepper from "./Stepper";

describe("<Stepper>", () => {
  it("mounts", () => {
    /*
    Stepper라는 컴포넌트를 가상 DOM에 마운트하고, 이후에 테스트할 여러동작을 시뮬레이션하거나 상태를 체크하는데 사용된다.
  */
    cy.mount(<Stepper />);
  });

  it("stepper should default to 0", () => {
    cy.mount(<Stepper />);
    /*
      지정된 DOM을 취득하고, 초기값으로 0을 가지는 것을 검증
    */
    cy.get("#container").within(() => {
      cy.get("[data-cy=counter]").should("have.text", "0");
    });
  });

  it('supports a "count" prop to set the value', () => {
    cy.mount(<Stepper count={100} />);
    cy.get("[data-cy=counter]").should("have.text", "100");
  });

  it("when the increment button is pressed, the counter is incremented", () => {
    cy.mount(<Stepper />);
    cy.get("[data-cy=increment]").click();
    cy.get("[data-cy=counter]").should("have.text", "1");
  });

  it("when the decrement button is pressed, the counter is decremented", () => {
    cy.mount(<Stepper />);
    cy.get("[data-cy=decrement]").click();
    cy.get("[data-cy=counter]").should("have.text", "-1");
  });

  it("clicking + fires a change event with the incremented value", () => {
    const onChangeSpy = cy.spy().as("onChangeSpy");
    cy.mount(<Stepper onChange={onChangeSpy} />);
    cy.get("[data-cy=increment]").click();
    cy.get("@onChangeSpy").should("have.been.calledWith", 1);
  });
});
