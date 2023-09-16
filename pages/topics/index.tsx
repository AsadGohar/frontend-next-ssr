import * as TopicService from "../../services/TopicService";
import TopicCard from "../../components/organisms/TopicCard";

export async function getServerSideProps() {
	const res = await TopicService.getAllTopics();
	return { props: { data: res.topics } };
}

export default function TopicsPage(props: any) {
	const { data } = props;
	return (
		<>
			{data.length > 0 ? (
				data.map((item: any) => <TopicCard key={item.title} title={item.title} />)
			) : (
				<h1>No Topics</h1>
			)}
		</>
	);
}
