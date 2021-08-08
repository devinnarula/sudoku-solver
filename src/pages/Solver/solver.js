import React from 'react'
import { SolverContainer, SolverInfo, Title, Grid, Cell, SolverMiddle, SolverButtons, SolveBtn, TimeLabel, Time, TimeContainer, LoadingImg } from './SolverElements'
import loading from '../../images/loading.gif'

class Solver extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: [
            [0, 0, 0, 0, 0, 0, 6, 8, 0],
            [0, 0, 0, 0, 7, 3, 0, 0, 9],
            [3, 0, 9, 0, 0, 0, 0, 4, 5],
            [4, 9, 0, 0, 0, 0, 0, 0, 0],
            [8, 0, 3, 0, 5, 0, 9, 0, 2],
            [0, 0, 0, 0, 0, 0, 0, 3, 6],
            [9, 6, 0, 0, 0, 0, 3, 0, 8],
            [7, 0, 0, 6, 8, 0, 0, 0, 0],
            [0, 2, 8, 0, 0, 0, 0, 0, 0]
            ],
            time: 0,
            solving: false
        };
        this.handleCellChange = this.handleCellChange.bind(this);
      }
    
    solve = () => {
        this.setState({
            solving: true
        })
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
        }).then(data => {
            this.setState({grid: data.grid, time: data.time})
            if (!data.valid) {
                alert("Invalid Sudoku Board (Cannot be solved because board is illegal)")
            }
            this.setState({
                solving: false
            })
        })
    }

    handleCellChange = (r,c) => (e) => {
        var newgrid = this.state.grid;
        if(e.target.value)
            newgrid[r][c] = parseInt(e.target.value)
        else
            newgrid[r][c] = 0
        this.setState({grid: newgrid})
    }

    handleClear = () => {
        this.setState({
            grid: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0]
            ],
            time: 0
        })
    }

    handleReset = () => {
        this.setState({
            grid: [
            [0, 0, 0, 0, 0, 0, 6, 8, 0],
            [0, 0, 0, 0, 7, 3, 0, 0, 9],
            [3, 0, 9, 0, 0, 0, 0, 4, 5],
            [4, 9, 0, 0, 0, 0, 0, 0, 0],
            [8, 0, 3, 0, 5, 0, 9, 0, 2],
            [0, 0, 0, 0, 0, 0, 0, 3, 6],
            [9, 6, 0, 0, 0, 0, 3, 0, 8],
            [7, 0, 0, 6, 8, 0, 0, 0, 0],
            [0, 2, 8, 0, 0, 0, 0, 0, 0]
            ],
            time: 0
        })
    }

    render() {
        return (
            <SolverContainer>
                <Title>Sudoku Solver</Title>
                <SolverInfo>
                    Welcome to the sudoku solver! Fill out the board however you would like and then press solve to find the solution. If you want to clear the board press clear. And press reset to get a default sudoku game!
                </SolverInfo>
                <SolverMiddle>
                    <SolverButtons>
                        <SolveBtn onClick={this.handleClear}>Clear Board</SolveBtn>
                        <SolveBtn onClick={this.handleReset}>Reset Board</SolveBtn>
                    </SolverButtons>
                    <Grid>
                        <LoadingImg display={this.state.solving ? 1 : 0} src={loading} alt="Loading"/>
                        {this.state.grid.map((row, r) => (
                            row.map((num, c) => (
                                <Cell id={`${(r*this.state.grid.length)+c}`} type="number" min='0' max='9' value={this.state.grid[r][c]!==0 ? this.state.grid[r][c].toString() : ""} key={(r*this.state.grid.length)+c} onChange={this.handleCellChange(r,c)} row={r} col={c}/>
                            ))
                        ))}
                    </Grid>
                    <SolverButtons>
                    <SolveBtn onClick={this.solve}>Solve</SolveBtn>
                    <TimeContainer>
                        <TimeLabel>Solve Time:</TimeLabel>
                        <Time>{this.state.time !== 0 ? this.state.time : "--"} seconds</Time>
                    </TimeContainer>
                    </SolverButtons>
                </SolverMiddle>
            </SolverContainer>
        )
    }
}

export default Solver
