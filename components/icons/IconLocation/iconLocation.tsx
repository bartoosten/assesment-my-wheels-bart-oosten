export const IconLocation = ({ size = 24, fill = "#ffffff" }: IconProps) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 25 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M1.69039 13.005L11.0882 13.0406C11.242 13.0406 11.297 13.1037 11.297 13.2556L11.3228 22.5939C11.3228 24.5062 13.6929 24.922 14.5326 23.1099L23.9837 2.75953C24.864 0.835903 23.371 -0.457057 21.523 0.395672L1.0775 9.86462C-0.608426 10.6349 -0.249444 12.997 1.69039 13.005Z"
				fill={fill}
			/>
		</svg>
	);
};

interface IconProps {
	size: number;
	fill?: string | undefined;
}
