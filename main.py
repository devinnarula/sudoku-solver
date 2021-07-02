import random
from functions import find_next, is_cell_valid, print_grid, fill_grid

def solve(grid):
    next_cell = find_next(grid)

    if not next_cell:
        return True

    for num in range(1, len(grid) + 1):
        if is_cell_valid(next_cell, num, grid):
            grid[next_cell[0]][next_cell[1]] = num

            if solve(grid):
                return True

        grid[next_cell[0]][next_cell[1]] = 0

    return False


def solve_random(grid):
    original = grid
    count = fill_grid(grid)
    while(count != 0):
        for row in range(0, len(grid)):
            for col in range(0, len(grid[0])):
                if (not is_cell_valid((row, col), grid[row][col], grid)) and original[row][col] == 0:
                    count += 1
                    grid[row][col] = random.randint(1, 9)



grid = [
    [0, 0, 0, 0, 0, 0, 6, 8, 0],
    [0, 0, 0, 0, 7, 3, 0, 0, 9],
    [3, 0, 9, 0, 0, 0, 0, 4, 5],
    [4, 9, 0, 0, 0, 0, 0, 0, 0],
    [8, 0, 3, 0, 5, 0, 9, 0, 2],
    [0, 0, 0, 0, 0, 0, 0, 3, 6],
    [9, 6, 0, 0, 0, 0, 3, 0, 8],
    [7, 0, 0, 6, 8, 0, 0, 0, 0],
    [0, 2, 8, 0, 0, 0, 0, 0, 0]
]
print_grid(grid)
print("-------------------------------------")
print("Backtracing Method:")
if solve(grid):
    print_grid(grid)
else:
    print("Invalid puzzle")
print("-------------------------------------")
print("Random Method:")
grid = [
    [0, 0, 0, 0, 0, 0, 6, 8, 0],
    [0, 0, 0, 0, 7, 3, 0, 0, 9],
    [3, 0, 9, 0, 0, 0, 0, 4, 5],
    [4, 9, 0, 0, 0, 0, 0, 0, 0],
    [8, 0, 3, 0, 5, 0, 9, 0, 2],
    [0, 0, 0, 0, 0, 0, 0, 3, 6],
    [9, 6, 0, 0, 0, 0, 3, 0, 8],
    [7, 0, 0, 6, 8, 0, 0, 0, 0],
    [0, 2, 8, 0, 0, 0, 0, 0, 0]
]
solve_random(grid)
print_grid(grid)