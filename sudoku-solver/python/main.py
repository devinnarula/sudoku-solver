import tkinter as tk
from backtracing import solve

def update_gui(next_cell, num):
    my_cells[next_cell[0]][next_cell[1]].set(num)
    window.update()

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

window = tk.Tk()

my_cells = [];

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
            my_cells.append([])
        my_cells[row].append(tk.IntVar())
        my_cells[row][col].set(grid[row][col])
        entry = tk.Label(master=frame, textvariable=my_cells[row][col])
        entry.pack()

if not solve(grid, update_gui):
    for row in range(0, len(grid)):
        for col in range(0, len(grid[0])):
            my_cells[row][col].set(grid[row][col])
            window.update()
else:
    print("Invalid puzzle")

window.mainloop()