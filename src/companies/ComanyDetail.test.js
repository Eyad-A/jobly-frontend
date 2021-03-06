import React from "react";
import { render } from "@testing-library/react";
import Company from "./CompanyDetail";
import { MemoryRouter, Route } from "react-router-dom";
import { UserProvider } from "../testData";

it("renders without crashing", function() {
    render(
        <MemoryRouter>
            <UserProvider>
              <Company />
            </UserProvider>
        </MemoryRouter>,
    );
});

it("matches snapshot", function () {
  const { asFragment } = render(
      <MemoryRouter initialEntries={["/company/google"]}>
        <UserProvider>
          <Route path="/company/:handle">
            <Company />
          </Route>
        </UserProvider>
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});