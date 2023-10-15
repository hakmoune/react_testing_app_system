import { render, waitFor, screen } from "@testing-library/react";
import { ApiCall } from "./data";
import axios from "axios";

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
})



it.todo("Fetch")
it.todo("MSW")
