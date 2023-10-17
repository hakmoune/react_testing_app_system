import { render, waitFor, screen, act } from "@testing-library/react";
import { ApiCall } from "./data";
import axios from "axios";
import userEvent from "@testing-library/user-event";

jest.mock('axios') // mock the axios library

describe("Axios", () => {
    it("fetch data successfully", async () => {
        (axios.get as jest.Mock).mockResolvedValue({ data: { products: [{ id: 999, title: 'Dummy Product' }] } }); // control its behavior 

        render(<ApiCall />);

        await waitFor(() => {
            const inputElement = screen.getByDisplayValue('Dummy Product'); // find input element has a display value equal 'Dummy Product'.
            expect(inputElement).toBeInTheDocument();
            expect(inputElement).toHaveValue('Dummy Product'); // Optional
        });
    })

    it("Should delete a product when the delete button is clicked", async () => {
        const data = { data: { products: [{ id: 1, title: "product1" }, { id: 2, title: "product2" }] } };

        (axios.get as jest.Mock).mockResolvedValue(data);
        (axios.delete as jest.Mock).mockResolvedValue({ status: 200 });

        render(<ApiCall />);

        const element1 = await screen.findByDisplayValue('product1');
        const element2 = await screen.findByDisplayValue('product2');
        const deleteButton = await screen.findByRole('button', { name: `Delete Axios 1` })

        userEvent.click(deleteButton);
        expect(axios.delete).toHaveBeenCalledWith('https://dummyjson.com/products/1');

        await waitFor(() => {
            expect(element1).not.toBeInTheDocument();
            expect(element2).toBeInTheDocument();
        })
    })

    it("Should add a product when the add button is clicked", async () => {
        const addedData = { id: 5, title: 'item5' };
        (axios.post as jest.Mock).mockResolvedValue({ status: 200, data: addedData });

        render(<ApiCall />);

        const addInputValue = screen.getByPlaceholderText('axios value');
        const addBtn = screen.getByRole("button", { name: "ADD AXIOS" });

        userEvent.type(addInputValue, "{selectall}item5")
        userEvent.click(addBtn);

        await waitFor(() => {
            expect(axios.post).toHaveBeenCalledWith(
                "https://dummyjson.com/products/add",
                { title: 'item5' },
                { headers: { "Content-Type": "application/json" } }
            );

            expect(screen.getByDisplayValue('item5')).toBeInTheDocument();
        });
    })

    fit("Should update a product when the update button is clicked", async () => {
        (axios.get as jest.Mock).mockResolvedValue({ data: { products: [{ id: 888, title: 'pp1' }] } });
        (axios.patch as jest.Mock).mockResolvedValue({ status: 200 });

        render(<ApiCall />)
        expect(await screen.findByDisplayValue("pp1")).toBeInTheDocument();

        const updateBtn = await screen.findByRole("button", { name: "Update Axios 888" });
        const inputValue = await screen.getByPlaceholderText("axios update value 888");
        userEvent.type(inputValue, "{selectall}iphone 14 pro max")
        userEvent.click(updateBtn)

        expect(axios.patch).toHaveBeenCalledWith(
            "https://dummyjson.com/products/888",
            { title: "iphone 14 pro max" },
            { headers: { "Content-Type": "application/json" } }
        )

        await waitFor(() => {
            expect(screen.queryByDisplayValue("iphone 14 pro max")).toBeInTheDocument();
            expect(screen.queryByDisplayValue("pp1")).not.toBeInTheDocument();
        })
    })
})

it.todo("Fetch")
it.todo("MSW")
