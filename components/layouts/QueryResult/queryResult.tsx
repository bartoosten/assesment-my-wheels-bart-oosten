// Components
import { Text } from "@/components/atoms";

export const QueryResult: React.FC<QueryResultProps> = ({
	children,
	loading,
	error,
	data,
	loadingComponent,
	noDataComponent,
}) => {
	if (error) {
		return <Text text={`ERROR: ${error.message}`} />;
	}
	if (loading) {
		return <>{loadingComponent || <Text text={`Loading`} />}</>;
	}
	if (!data) {
		return <>{noDataComponent || <Text text={`No information available`} />}</>;
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
	loadingComponent?: React.ReactNode | React.ReactNode[];
	noDataComponent?: React.ReactNode | React.ReactNode[];
}
