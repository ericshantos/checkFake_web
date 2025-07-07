import { BodyText } from "../atoms";

interface Props {
    year: number;
    className: string
}

export const RightsReserved: React.FC<Props> = ({ 
    year, 
    className = '' 
}) => (
    <BodyText className={className}>
        &copy; {year} FakeCheck. Todos os direitos reservados.
    </BodyText>
)