export const PlusIcon = (props: React.ComponentProps<"svg">) => {
	return (
		<svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
			<title>Plus</title>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M12 5.75V18.25"
			></path>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M18.25 12L5.75 12"
			></path>
		</svg>
	);
};
