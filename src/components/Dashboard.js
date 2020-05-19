import React from 'react';
import _ from 'lodash';
import Header from './Header';

const data = {
	user: [
		{
			id: 1,
			name: 'test1',
			age: '11',
			gender: 'male',
			email: 'test1@gmail.com',
			phoneNo: '9415346313'
		},
		{
			id: 2,
			name: 'test2',
			age: '12',
			gender: 'male',
			email: 'test2@gmail.com',
			phoneNo: '9415346314'
		},
		{
			id: 3,
			name: 'test3',
			age: '13',
			gender: 'male',
			email: 'test3@gmail.com',
			phoneNo: '9415346315'
		},
		{
			id: 4,
			name: 'test4',
			age: '14',
			gender: 'male',
			email: 'test4@gmail.com',
			phoneNo: '9415346316'
		},
		{
			id: 5,
			name: 'test5',
			age: '15',
			gender: 'male',
			email: 'test5@gmail.com',
			phoneNo: '9415346317'
		},
		{
			id: 6,
			name: 'test6',
			age: '16',
			gender: 'male',
			email: 'test6@gmail.com',
			phoneNo: '9415346318'
		}
	]
};

class UserDashboard extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div>
				<Header />
				<div class="container">
					<h3 class="mt-5 mb-5">DASHBOARD</h3>
					<table class="table table-bordered">
						<thead>
							<tr>
								<th>ID</th>
								<th>NAME</th>
								<th>AGE</th>
								<th>GENDER</th>
								<th>EMAIL</th>
								<th>PHONE NO</th>
							</tr>
						</thead>
						<tbody>
							{data.user.map((list, i) => {
								return (
									<tr key={i}>
										<td>{list.id}</td>
										<td>{list.name}</td>
										<td>{list.age}</td>
										<td>{list.gender}</td>
										<td>{list.email}</td>
										<td>{list.phoneNo}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default UserDashboard;
