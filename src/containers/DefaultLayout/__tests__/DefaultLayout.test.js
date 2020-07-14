import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter, Route } from "react-router-dom";
import DefaultLayout from "../DefaultLayout";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <Route path="/" name="首页" component={DefaultLayout} />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
