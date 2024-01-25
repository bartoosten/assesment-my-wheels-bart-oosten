import { Heading, HeadingVariantType, Text } from "@/components/atoms";

export const InformationBox: React.FC<InformationBoxProps> = ({
	title,
	message,
	payload,
}) => {
	return (
		<div className="flex justify-center items-center flex-col w-full h-full p-4 gap-4">
			<Heading title={title} variant={HeadingVariantType.PrimaryBlue} />
			<Text text={message} />
			{payload && <div>{payload}</div>}
		</div>
	);
};

interface InformationBoxProps {
	title: string;
	message: string;
	payload?: React.ReactNode;
}
