import { FunctionComponent } from 'preact';
import './Tags.scss';


interface Props {
  tags: string[];
}

const Tags: FunctionComponent<Props> = (props: Props) => {
  return <div>
    {props.tags.map((tag) => <span className="tag">{tag}</span>)}
  </div>
}

export default Tags;
