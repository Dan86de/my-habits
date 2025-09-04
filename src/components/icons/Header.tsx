import { Avatar } from "@base-ui-components/react/avatar";
import { SettingsIcon } from "./SettingsIcon";

export const Header = () => {
	return (
		<header className="center py-4">
			<div className="cluster">
				<SettingsIcon className="ml-auto size-10" />
				<Avatar.Root className="inline-flex size-10 select-none items-center justify-center overflow-hidden rounded-full bg-gray-100 align-middle font-medium text-base text-black">
					<Avatar.Image
						src="https://www.danielnoworyta.pl/images/avatar.webp"
						width="40"
						height="40"
						className="size-full object-cover"
					/>
					<Avatar.Fallback className="flex size-full items-center justify-center text-base">
						LT
					</Avatar.Fallback>
				</Avatar.Root>
			</div>
		</header>
	);
};
