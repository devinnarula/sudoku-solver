import React from 'react'
import { SolverContainer, Title, Grid, Cell, SolveBtn } from './SolverElements'

class Solver extends React.Component {
    constructor(props) {
        super(props);
        this.state = {grid: [
            [0, 0, 0, 0, 0, 0, 6, 8, 0],
            [0, 0, 0, 0, 7, 3, 0, 0, 9],
            [3, 0, 9, 0, 0, 0, 0, 4, 5],
            [4, 9, 0, 0, 0, 0, 0, 0, 0],
            [8, 0, 3, 0, 5, 0, 9, 0, 2],
            [0, 0, 0, 0, 0, 0, 0, 3, 6],
            [9, 6, 0, 0, 0, 0, 3, 0, 8],
            [7, 0, 0, 6, 8, 0, 0, 0, 0],
            [0, 2, 8, 0, 0, 0, 0, 0, 0]
        ]};
        this.handleCellChange = this.handleCellChange.bind(this);
      }
    
    solve = () => {
        fetch(`http://127.0.0.1:5000/solve`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({grid: this.state.grid})
        }).then(response => {
            if(response.ok){
                return response.json()
            }
        }).then(data => this.setState({grid: data}))
    }

    handleCellChange = (r,c) => (e) => {
        var newgrid = this.state.grid;
        console.log(newgrid)
        if(e.target.value)
            newgrid[r][c] = parseInt(e.target.value)
        else
            newgrid[r][c] = 0
        this.setState({grid: newgrid})
    }

    render() {
        return (
            <SolverContainer>
                <Title>Sudoku Solver</Title>
                <Grid>
                    {this.state.grid.map((row, r) => (
                        row.map((num, c) => (
                            <Cell id={`${(r*this.state.grid.length)+c}`} type="text" value={this.state.grid[r][c].toString()} key={(r*this.state.grid.length)+c} onChange={this.handleCellChange(r,c)}/>
                        ))
                    ))}
                </Grid>
                <SolveBtn onClick={this.solve}>Solve</SolveBtn>
            </SolverContainer>
        )
    }
}

export default Solver
