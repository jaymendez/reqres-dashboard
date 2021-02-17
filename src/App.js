import { Card, Col, Row, Table, Pagination, Button, Divider, Spin } from 'antd';
import 'antd/dist/antd.css';
import { createRef, useEffect, useRef, useState } from 'react';
import { RepositoryFactory } from "api/repositories/RepositoryFactory";
import Modal from 'antd/lib/modal/Modal';
import UserTable from 'components/UserTable';
import StyledTable from "components/StyledTable";
import { Container } from 'components/styledComponents';

const User = RepositoryFactory.get("user");

function App() {
	const [data, setData] = useState([]);
	const [paging, setPaging] = useState({
		page: 1,
		per_page: 1,
		total: 1,
		total_pages: 1
	});
	const [loading, setLoading] = useState(false);
	const [userDetails, setUserDetails] = useState({});
	const [isModalVisible, toggleModal] = useState(false);

	const getUsers = async () => {
		const options = {
			page: paging.page
		}
		const { data: { data: res, ...rest }, status } = await User.getUsers(options);
		delete rest.support;
		if (status === 200) {
			setData(res);
			setPaging(rest)
		}
	}

	useEffect(() => {
		getUsers();
	}, [paging.page]);


	const onRowClick = (record) => {
		setLoading(true);
		setUserDetails(record);
		toggleModal(true);
		setLoading(false);
	};

	return (
		<div className="App">
			<Row justify="center" align="middle" style={{ height: "100%" }}>
				<Col span={8}>
					<Card>
						<Container>
							<StyledTable data={data} onRowClick={onRowClick} />
						</Container>
						<Pagination
							pageSize={paging.per_page}
							current={paging.page}
							total={paging.total}
							size={"small"}
							onChange={(page, pageSize) => {
								setPaging({ ...paging, page, per_page: pageSize })
							}} 
							style={{ textAlign: "center" }}
						/>
					</Card>
				</Col>
			</Row>
			<Modal width="350px" centered title="Profile" visible={isModalVisible} justify="center" align="middle" cancelButtonProps={{ style: { textAlign: "center" } }} onCancel={() => toggleModal(false)} footer={null}>
				<Spin spinning={loading}>
					<Row>
						<Col span={24} style={{ textAlign: "center" }}>
							<img src={userDetails.avatar} alt="user-avatar" />
						</Col>
						<Col span={8}>
							<span className="detail-key">
								ID:
					</span>
						</Col>
						<Col span={16} className="detail-value">
							{userDetails.id}
						</Col>
						<Col span={8}>
							<span className="detail-key">
								First Name:
					</span>
						</Col>
						<Col span={16} className="detail-value">
							{userDetails.first_name}
						</Col>
						<Col span={8}>
							<span className="detail-key">
								Last Name:
						</span>
						</Col>
						<Col span={16} className="detail-value">
							{userDetails.last_name}
						</Col>
						<Col span={8}>
							<span className="detail-key">
								Email:
						</span>
						</Col>
						<Col span={16}>
							<span className="detail-value">
								{userDetails.email}
							</span>
						</Col>
						<Divider />
						<div style={{ margin: "auto" }}>
							<Button size="large" className="close-btn" onClick={() => toggleModal(false)}>CLOSE</Button>
						</div>
					</Row>
				</Spin>
			</Modal>
		</div>
	);
}

export default App;
