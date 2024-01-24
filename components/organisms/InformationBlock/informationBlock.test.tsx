import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { InformationBlock } from "@/components/organisms";

describe("InformationBlock", () => {
	it("renders correctly with given props", () => {
		const icon = <div>Test Icon</div>;
		const title = "Test Title";
		const description = "Test Description";
		const content = <div>Test Content</div>;
		const payload = <div>Test Payload</div>;

		const { getByText } = render(
			<InformationBlock
				icon={icon}
				title={title}
				description={description}
				content={content}
				payload={payload}
			/>
		);

		// Check if all elements are rendered
		expect(getByText("Test Icon")).toBeInTheDocument();
		expect(getByText("Test Title")).toBeInTheDocument();
		expect(getByText("Test Description")).toBeInTheDocument();
		expect(getByText("Test Content")).toBeInTheDocument();
		expect(getByText("Test Payload")).toBeInTheDocument();
	});
});
