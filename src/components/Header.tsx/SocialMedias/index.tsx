import {
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiLogoWhatsapp,
  BiEnvelope,
} from 'react-icons/bi'
import { SocialMediaItem } from './SocialMediaItem'

export function SocialMedias() {
  return (
    <ul className="flex list-none gap-5">
      <SocialMediaItem icon={BiLogoGithub} alt="GitHub" />
      <SocialMediaItem icon={BiLogoLinkedinSquare} alt="LinkedIn" />
      <SocialMediaItem icon={BiLogoWhatsapp} alt="Whatsapp" />
      <SocialMediaItem icon={BiEnvelope} alt="E-mail" />
    </ul>
  )
}
