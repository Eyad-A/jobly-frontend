import React from "react";
import { render } from "@testing-library/react";
import CompanyCard from "./CompanyCard";
import { MemoryRouter } from "react-router";

it("matches snapshot", function() {
    const { asFragment } = render(
        <MemoryRouter>
            <CompanyCard
                handle="test"
                name="test company"
                description="The makers of the new M1 chips"
            />
        </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
});