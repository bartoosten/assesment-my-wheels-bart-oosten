import { InformationBox } from "@/components/molecules";

export const QueryResult: React.FC<QueryResultProps> = ({
	children,
	loading,
	error,
	data,
}) => {
	if (error) {
		return (
			<InformationBox title="Error" message="Something went wrong, sorry" />
		);
	}
	if (loading) {
		return <InformationBox title="Loading" message="Just a moment please" />;
	}
	if (!data) {
		return (
			<InformationBox
				title="No Information Found"
				message="Contact support or try reloading"
			/>
		);
	}
	if (data) {
		return children;
	}
};

interface QueryResultProps {
	children: React.ReactNode | React.ReactNode[];
	loading: boolean;
	error: any;
	data: any;
}
