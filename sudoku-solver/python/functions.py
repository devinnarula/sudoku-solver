import random

def find_next(grid):
    for row in range(0,len(grid)):
        for col in range (0, len(grid[0])):
            if grid[row][col] == 0:
                return (row, col)
    return None


def is_cell_valid(cell, num, grid):
    return check_row(cell, num, grid) and check_col(cell, num, grid) and check_box(cell, num, grid)


def check_row(cell, num, grid):
    for col in range(0, len(grid[0])):
        if num == grid[cell[0]][col] and cell[1] != col:
            return False
    return True


def check_col(cell, num, grid):
    for row in range(0, len(grid)):
        if num == grid[row][cell[1]] and cell[0] != row:
            return False
    return True


def check_box(cell, num, grid):
    box = (cell[1] // 3, cell[0] // 3)
    for row in range(box[1] * 3, box[1] * 3 + 3):
        for col in range(box[0] * 3, box[0] * 3 + 3):
            if num == grid[row][col] and cell != (row, col):
                return False
    return True


def print_grid(grid):
    for row in range(0, len(grid[0])):
        if row % 3 == 0 and row != 0:
            for col in range(0, len(grid)+(len(grid))//3-1):
                print("-", end=" ")
            print("")
        for col in range(0, len(grid)):
            print(grid[row][col], end=" ")
            if col == len(grid[row])-1:
                print("")
            elif (col+1) % 3 == 0:
                print("|", end=" ")
