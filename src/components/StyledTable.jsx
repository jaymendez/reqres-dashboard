import React from 'react'

const Table = ({ data, onRowClick }) => {
	return (
		<table>
			<thead>
				<tr>
					<th>EMAIL</th>
					<th>FAMILY NAME</th>
					<th>GIVEN NAME</th>
					<th>ID</th>
				</tr>
			</thead>
			<tbody>
				{data.map((item) => (
					<tr onClick={() => onRowClick(item)}>
						<td>{item.email}</td>
						<td>{item.last_name}</td>
						<td>{item.first_name}</td>
						<td>{item.id}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default Table
