import { FunctionComponent } from 'preact';
import './Tags.scss';


interface Props {
  tags: string[];
}

const Tags: FunctionComponent<Props> = (props: Props) => {
  return <div className="tag-container">
    {props.tags.map((tag) => <div className="tag">{tag}</div>)}
  </div>
}

export default Tags;
