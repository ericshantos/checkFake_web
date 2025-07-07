import { Block, Heading, List } from "@components/atoms";
import { LIST_TYPE } from "@constants";
import { HEADINNG_LEVEL } from "@constants";
import { InfoItem } from "@types";

export const InfoBlock: React.FC<InfoItem> = ({ items, title }) => (
  <Block>
    <Heading
      level={HEADINNG_LEVEL.H3}
      className="text-lg font-medium text-gray-900 mb-2"
    >
      {title}
    </Heading>
    <List as={LIST_TYPE.DL} className="space-y-2">
      {items.map(({ caption, description }, index) => (
        <Block key={index}>
          <dt className="text-sm text-gray-500">{caption}</dt>
          <dd className="mt-1 text-sm text-gray-900">{description}</dd>
        </Block>
      ))}
    </List>
  </Block>
);
