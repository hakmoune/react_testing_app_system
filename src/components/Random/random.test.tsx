import { randomBetween } from "./random";

const randomSpy = jest.spyOn(Math, "random") // Spy the function Math.random()

describe("Random Between", () => {
    describe("when Math.random() returns = 0", () => {
        beforeEach(() => {
            randomSpy.mockClear().mockReturnValue(0) // Take control over spied function // Prenez le contrôle sur fonction espionnée
        })

        it("Called within min = 3, max = 5 returns 3", () => {
            expect(randomBetween(3, 5)).toBeGreaterThanOrEqual(3)
            expect(Math.random).toHaveBeenCalledTimes(1)
        })
    })
})
