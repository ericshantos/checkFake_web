import { Block } from "../atoms";
import { Logo, NavBar } from "../molecules";

export const Header = () => (
    <header className="bg-white shadow-sm">
        <Block className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Block className="flex items-center">
                <Logo />
            </Block>
            <NavBar />
        </Block>
    </header>
)