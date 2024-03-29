from functions import find_next, is_cell_valid

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