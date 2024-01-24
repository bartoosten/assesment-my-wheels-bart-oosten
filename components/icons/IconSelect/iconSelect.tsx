export const IconSelect = ({ size = 25, fill = "#ffffff" }: IconProps) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 17 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M14.4329 0.634754L2.55688 0.634753C1.28282 0.634753 0.492998 1.54893 0.492998 2.68142C0.492998 3.0459 0.593311 3.42112 0.792186 3.76681L6.72933 14.1474C7.12104 14.835 7.80439 15.1742 8.49197 15.1742C9.18541 15.1742 9.86707 14.8318 10.2556 14.1474L16.1928 3.76579C16.3965 3.4152 16.493 3.0459 16.493 2.68142C16.493 1.54893 15.7032 0.634754 14.4329 0.634754Z"
				fill={fill}
			/>
		</svg>
	);
};

interface IconProps {
	size: number;
	fill?: string | undefined;
}
