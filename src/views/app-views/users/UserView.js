import React from 'react';
import { Avatar, Drawer, Divider } from 'antd';
import { 
	MobileOutlined, 
	MailOutlined, 
	UserOutlined, 
	CompassOutlined,
	GlobalOutlined
} from '@ant-design/icons';

const UserView = ({ user, visible, close}) => {

	return (
		<Drawer
			width={300}
			placement="right"
			onClose={close}
			closable={false}
			visible={visible}
		>
			<div className="text-center mt-3">
				<Avatar size={80} src={user?.img} />
				<h3 className="mt-2 mb-0">{user?.name}</h3>
				<span className="text-muted">{user?.username}</span>
			</div>
			<Divider dashed />
			<div className="">
				<h6 className="text-muted text-uppercase mb-3">Account details</h6>
				<p>
					<UserOutlined />
					<span className="ml-3 text-dark">id: {user?.id}</span>
				</p>
			</div>
			<div className="mt-5">
				<h6 className="text-muted text-uppercase mb-3">CONTACT</h6>
				<p>
					<MobileOutlined />
					<span className="ml-3 text-dark">{user?.phone}</span>
				</p>
				<p>
					<MailOutlined />
					<span className="ml-3 text-dark">{user?.email ? user?.email : '-'}</span>
				</p>
				<p>
					<CompassOutlined />
					<span className="ml-3 text-dark">{user?.address.city}</span>
				</p>
			</div>
			<div className="mt-5">
				<h6 className="text-muted text-uppercase mb-3">Social profiles</h6>
				<p>
					<GlobalOutlined />
					<a href="/#" className="ml-3 text-dark">{user?.website ? user?.website : '-'}</a>
				</p>
			</div>
		</Drawer>
	)
}

export default UserView
