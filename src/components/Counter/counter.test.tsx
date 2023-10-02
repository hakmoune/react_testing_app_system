import { render, screen } from "@testing-library/react";
import { Counter } from "./counter";

it("shoulde render", () => {
    render(<Counter description="My description" defaultCount={0} />)
})