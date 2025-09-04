import { createFileRoute } from "@tanstack/react-router";
import { PlusIcon } from "~/components/icons";
import { cn } from "~/lib/util";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<div className="center box mt-20">
			<div className="stack-v-10">
				<h1 className="font-semibold text-4xl tracking-tight">
					Good afternoon, Daniel
				</h1>
				<div className={cn("rounded-lg p-4 shadow")}>
					<div className="flex w-full items-center justify-between">
						<h2 className="font-semibold text-lg">Tasks</h2>
						<PlusIcon />
					</div>
				</div>
			</div>
		</div>
	);
}
