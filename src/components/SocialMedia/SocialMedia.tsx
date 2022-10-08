import { FunctionComponent } from 'preact';
import './SocialMedia.scss';

interface Props {
  github?: string;
  download?: string;
  linkedin?: string;
  email?: string;
  telegram?: string;
}

const socialMedias: Array<keyof Props> = [
  'github',
  'linkedin',
  'email',
  'telegram',
  'download',
];

const SocialMedia: FunctionComponent<Props> = (props: Props) => {
  return (
    <div className='social-media card'>
      {socialMedias.map((sm) => {
        return (
          props[sm] && (
            <a
              href={props[sm]}
              className={`${sm}-link`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='fake-shadow'></div>
            </a>
          )
        );
      })}
    </div>
  );
};

export default SocialMedia;
