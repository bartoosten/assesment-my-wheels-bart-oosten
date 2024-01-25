import {
	HeadingSmall,
	HeadingSmallVariantType,
	Text,
	TextVariantType,
	Tile,
} from "@/components/atoms";

export const InformationBlock: React.FC<InformationBlockProps> = ({
	icon,
	title,
	description,
	content,
	payload,
}) => {
	return (
		<div className="flex justify-start items-start flex-col w-full shadow-sm rounded-xl bg-mono-dark px-4 py-4 pb-6 gap-2">
			<div className="flex justify-start items-center flex-row w-full gap-4">
				<Tile>{icon}</Tile>
				<HeadingSmall title={title} variant={HeadingSmallVariantType.Light} />
			</div>
			{description && (
				<div className="flex justify-start items-center flex-row w-full gap-2 pl-14 pr-6">
					<Text text={description} variant={TextVariantType.Light} />
				</div>
			)}
			<div className="flex justify-start items-center flex-col w-full gap-2 pl-14 pr-6">
				{content}
			</div>
			<div className="flex justify-start items-center flex-row w-full gap-2 pl-14 pr-6">
				{payload}
			</div>
		</div>
	);
};

interface InformationBlockProps {
	icon: React.ReactNode;
	title: string;
	description?: string;
	content: React.ReactNode;
	payload: React.ReactNode;
}
