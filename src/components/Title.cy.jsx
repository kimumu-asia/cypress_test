import { Title, emptyText } from "./Title.jsx";

import React from "react";

it("title 없음", function () {
  // Elementには何も渡さない
  cy.mount(<Title />);
  //titleのエラー表示確認
  cy.get("#title").should("have.text", emptyText);
});

it("title 있음", function () {
  // Elementのtitleに値を渡す
  cy.mount(<Title title="임의의 제목" />);
  //titleの正常表示確認
  cy.get("#title").should("have.text", "임의의 제목");
});
