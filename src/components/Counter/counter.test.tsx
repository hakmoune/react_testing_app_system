import { fireEvent, render, screen } from "@testing-library/react";
import { Counter } from "./counter";

it("Description = My Counter, Default counter = 0", () => {
    render(<Counter description="My Counter" defaultCount={0} />)

    expect(screen.getByText(/my counter/i)).toBeInTheDocument();
    expect(screen.getByText("Current Count: 0")).toBeInTheDocument();
})

it("Default counter = 0, and + clicked then counter = 1", () => {
    render(<Counter description="My Counter" defaultCount={0} />)

    fireEvent.click(screen.getByRole("button", { name: "+" }))
    expect(screen.getByText("Current Count: 1")).toBeInTheDocument();
})


it("Default counter = 0, and - clicked then counter = -1", () => {
    render(<Counter description="My Counter" defaultCount={0} />)

    fireEvent.click(screen.getByRole("button", { name: "-" }))
    expect(screen.getByText("Current Count: -1")).toBeInTheDocument();
})