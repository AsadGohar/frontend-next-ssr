import * as UserService from "../../services/UserService";
import UserCard from "../../components/organisms/UserCard";

export async function getServerSideProps() {
	const res = await UserService.getAllUsers();
	return { props: { data: res.users } };
}

export default function UsersPage(props: any) {
	const { data } = props;
	return (
		<>
			{data.length > 0 ? (
				data.map((item: any) => <UserCard name={item.email} />)
			) : (
				<h1>No Users</h1>
			)}
		</>
	);
}
