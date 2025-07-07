import { RightsReserved } from "../molecules";
import { Block } from "../atoms";

export const Footer = () => (
    <footer className="bg-white border-t border-gray-200 mt-8">
        <Block className="container mx-auto px-4 py-6">
            <RightsReserved
                year={new Date().getFullYear()}
                className="text-center text-sm text-gray-500"
            />
        </Block>
    </footer>
)