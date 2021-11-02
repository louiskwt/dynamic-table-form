import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './TableForm.css';

function TableForm() {
	const [passengerNumber, setpassengerNumber] = useState(0);
	const [passengerInfo, setPassengerInfo] = useState([]);

	const setTable = (value) => {
		// Set passenger number based on input
		setpassengerNumber(value);
		// Set up passenger info array
		let arr = [];
		// Push an object to the passenger info array based on the number of passenger
		for (let i = 0; i < value; i++) {
			const object = {
				number: i + 1,
				age: '',
				meal: ''
			};
			arr.push(object);
		}
		// Set passengerInfo
		setPassengerInfo(arr);
	};

	return (
		<div id='form'>
			<h3 id='question'>How many passagers are travelling with you?</h3>
			<TextField
				fullWidth
				id='outlined-basic'
				label='Enter a number'
				variant='outlined'
				onChange={(e) => setTable(e.target.value)}
			/>
			{passengerNumber > 0 ? (
				<TableContainer component={Paper} sx={{ mt: 5 }}>
					<Table sx={{ minWidth: 500 }} aria-label='simple table'>
						<TableHead>
							<TableRow>
								<TableCell>Passanger</TableCell>
								<TableCell align='center'>Age</TableCell>
								<TableCell align='center'>Meal Plan</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{passengerInfo.map((passenger) => (
								<TableRow
									key={passenger.number}
									sx={{
										'&:last-child td, &:last-child th': {
											border: 0
										}
									}}
								>
									<TableCell component='th' scope='row'>
										{passenger.number}
									</TableCell>
									<TableCell align='center'>
										<FormControl
											sx={{ m: 1, minWidth: 120 }}
										>
											<TextField
												id='outlined-basic'
												label='Enter age'
												variant='outlined'
												type='number'
												InputLabelProps={{
													shrink: true
												}}
											/>
										</FormControl>
									</TableCell>
									<TableCell align='center'>
										<FormControl
											sx={{ m: 1, minWidth: 120 }}
										>
											<InputLabel id='demo-simple-select-label'>
												Meal Plan
											</InputLabel>
											<Select
												labelId='demo-simple-select-label'
												id='demo-simple-select'
												label='Meal Plan'
											>
												<MenuItem
													value={'Non-vegetarian'}
												>
													Non-vegetarian
												</MenuItem>
												<MenuItem value={'Vegetarian'}>
													vegetarian
												</MenuItem>
												<MenuItem value={'Vegan'}>
													Vegan
												</MenuItem>
											</Select>
										</FormControl>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			) : (
				<></>
			)}
			<Button
				fullwidth
				sx={{ mt: 5, width: '100%' }}
				variant='contained'
				color='success'
			>
				Submit
			</Button>
		</div>
	);
}

export default TableForm;
