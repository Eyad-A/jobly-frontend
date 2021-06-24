import React from "react";
import { render } from "@testing-library/react";
import JobCard from "./JobCard";
import { UserProvider } from "../testData";

it("matches snapshot", function () {
    let item = { title: "Software Enginer", salary: 100000, equity: 3 };
    const { asFragment } = render(
        <UserProvider>
          <JobCard item={item} />
        </UserProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });