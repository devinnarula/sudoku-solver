import tkinter as tk
import time
from functions import find_next, is_cell_valid, print_grid

def solve():
    next_cell = find_next(grid)

    window.update()

    if not next_cell:
        return True

    for num in range(1, len(grid) + 1):
        if is_cell_valid(next_cell, num, grid):
            grid[next_cell[0]][next_cell[1]] = num
            myCells[next_cell[0]][next_cell[1]].set(grid[next_cell[0]][next_cell[1]])
            if solve():
                return True

        grid[next_cell[0]][next_cell[1]] = 0

    return False


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


window = tk.Tk()

myCells = [];

for row in range(0, len(grid)):
    for col in range(0, len(grid[0])):
        frame = tk.Frame(
            master=window,
            relief=tk.RAISED,
            # width=30,
            # height=30,
            borderwidth=1
        )
        frame.grid(row=row, column=col)
        if col == 0:
            myCells.append([])
        myCells[row].append(tk.IntVar())
        myCells[row][col].set(grid[row][col])
        entry = tk.Label(master=frame, textvariable=myCells[row][col])
        entry.pack()

if not solve():
    for row in range(0, len(grid)):
        for col in range(0, len(grid[0])):
            myCells[row][col].set(grid[row][col])
            window.update()
else:
    print("Invalid puzzle")

window.mainloop()