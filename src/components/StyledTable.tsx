import { FunctionComponent } from 'react'
import { IUser } from './types'

interface ITable {
	data: IUser[];
	onRowClick: (item: IUser) => void;
}

const Table: FunctionComponent<ITable> = ({ data, onRowClick }) => {
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
				{data?.map((item: IUser) => (
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
