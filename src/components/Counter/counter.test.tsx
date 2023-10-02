import { fireEvent, render, screen } from "@testing-library/react";
import { Counter } from "./counter";

describe("Counter", () => {
    describe("initialized with defaultCount = 0, and Description = My Counter", () => {
        beforeEach(() => {
            render(<Counter description="My Counter" defaultCount={0} />)
        })

        it("Description should be = My Counter", () => {
            expect(screen.getByText(/my counter/i)).toBeInTheDocument();
        })

        it("Default counter it should be = 0", () => {
            expect(screen.getByText("Current Count: 0")).toBeInTheDocument();
        })

        describe("When + is clicked", () => {
            beforeEach(() => {
                fireEvent.click(screen.getByRole("button", { name: "increment" }))
            })
            it("Default counter = 0, and + clicked then counter = 1", () => {
                expect(screen.getByText("Current Count: 1")).toBeInTheDocument();
            })
        })

        describe("When - is clicked", () => {
            beforeEach(() => {
                fireEvent.click(screen.getByRole("button", { name: "decrement" }))
            })
            it("Default counter = 0, and - clicked then counter = -1", () => {
                expect(screen.getByText("Current Count: -1")).toBeInTheDocument();
            })
        })
    })
})


