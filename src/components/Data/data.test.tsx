import { render, waitFor, screen } from "@testing-library/react";
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
})

it.todo("Fetch")
it.todo("MSW")
