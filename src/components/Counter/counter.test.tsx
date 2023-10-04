import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Counter } from "./counter";
import user from '@testing-library/user-event';

describe("Counter", () => {

    describe("initialized with defaultCount = 10, and Description = WWW", () => {
        beforeEach(() => {
            render(<Counter description="WWW" defaultCount={10} />)
        })

        it("Default counter it should be = 10", () => {
            expect(screen.getByText("Current Count: 10")).toBeInTheDocument();
        })

        it("Description should be = WWW", () => {
            expect(screen.getByText(/www/i)).toBeInTheDocument();
        })

        describe("When the input incrementor change to 5, and + is clicked", () => {
            beforeEach(() => {
                act(() => {
                    user.type(screen.getByPlaceholderText('incrementor'), "{selectall}5"); //Select all then change it with 5
                    //fireEvent.change(screen.getByRole('textbox'), { target: { value: "5" } });
                })
            })

            describe("When + is clicked", () => {
                beforeEach(() => {
                    user.click(screen.getByRole("button", { name: "increment" }))
                    //fireEvent.click(screen.getByRole("button", { name: "increment" }))
                })
                it("Renders current count : 15", async () => {
                    //expect(await screen.findByText("Current Count: 15")).toBeInTheDocument();
                    await waitFor(() => expect(screen.getByText("Current Count: 15")).toBeInTheDocument());
                })
            })

            describe("When - is clicked", () => {
                beforeEach(() => {
                    act(() => {
                        user.click(screen.getByRole("button", { name: "decrement" }))
                        //fireEvent.click(screen.getByRole("button", { name: "increment" }))
                    })
                })
                it("Renders current count : 5", () => {
                    expect(screen.getByText("Current Count: 5")).toBeInTheDocument();
                })
            })

        })
    })

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
                act(() => {
                    fireEvent.click(screen.getByRole("button", { name: "increment" }))
                })
            })
            it("Default counter = 0, and + clicked then counter = 1", async () => {
                //expect(await screen.findByText("Current Count: 1")).toBeInTheDocument();
                await waitFor(() => expect(screen.getByText("Current Count: 1")).toBeInTheDocument());
            })
        })

        describe("When - is clicked", () => {
            beforeEach(() => {
                act(() => {
                    fireEvent.click(screen.getByRole("button", { name: "decrement" }))
                })
            })
            it("Default counter = 0, and - clicked then counter = -1", () => {
                expect(screen.getByText("Current Count: -1")).toBeInTheDocument();
            })
        })
    })
})


