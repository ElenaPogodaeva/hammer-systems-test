import React, {useState, useEffect  } from 'react';
import { Form, Button, Input, Row, Col, message } from 'antd';
import { useParams, useHistory } from 'react-router-dom';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import Loading from "components/shared-components/Loading";
import { getUser, updateUser } from 'services/UserService';

const EditProfile = () => {
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const userId = useParams().userId;
	const history = useHistory();

	const fetchUser = async (id) => {
    try {
      const fetchedUser = await getUser(id);
      setUser(fetchedUser);
    } catch (err) {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

	useEffect(() => {
		fetchUser(userId);
  }, []);

	const onFinish = async (values) => {
		const key = 'updatable';
		message.loading({ content: 'Updating...', key });

		try {
			await updateUser(userId, values);
			message.success({ content: 'Done!', key, duration: 1 });
		} catch (err) {
			message.error({ content: 'Failed to update', key, duration: 1 });
		}

		setTimeout(() => {
			history.push('/');
		}, 1000);
	};
	
	const onFinishFailed = errorInfo => {
		console.log('Failed:', errorInfo);
	};

	return (
		isLoading ? (
			<Loading cover="content" />
		) :
			<div className="mt-4">
				<Form
						name="basicInformation"
						layout="vertical"
						initialValues={
							{ 
								'name': user.name,
								'username': user.username,
								'email': user.email,
								'phone': user.phone,
								'website': user.website,
								'city': user.address.city,
								'company': user.company.name,
							}
						}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
				>
						<Row>
							<Col xs={24} sm={24} md={24} lg={16}>
								<Row gutter={ROW_GUTTER}>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Name"
											name="name"
											rules={[
												{
													required: true,
													message: 'Please input your name!',
												},
											]}
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Username"
											name="username"
											rules={[
												{
													required: true,
													message: 'Please input your username!'
												},
											]}
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Email"
											name="email"
											rules={[{ 
												required: true,
												type: 'email',
												message: 'Please enter a valid email!' 
											}]}
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Phone Number"
											name="phone"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Website"
											name="website"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="City"
											name="city"
										>
											<Input />
										</Form.Item>
									</Col>
									<Col xs={24} sm={24} md={12}>
										<Form.Item
											label="Company"
											name="company"
										>
											<Input />
										</Form.Item>
									</Col>
								</Row>
								<Button type="primary" htmlType="submit">
									Save Change
								</Button>
							</Col>
						</Row>
				</Form>
			</div>
	)
}

export default EditProfile
