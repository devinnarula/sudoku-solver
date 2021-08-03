import React from 'react'
import { SolverContainer, Board, Cell } from './SolverElements'

const Solver = () => {
    let board = [
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
    return (
        <SolverContainer>
            <Board>
                {board.map((row) => (
                    row.map((num) => (
                        <Cell value={num}/>
                    ))
                ))}
            </Board>
            {/* <SolveBtn>Solve</SolveBtn> */}
        </SolverContainer>
    )
}

export default Solver
