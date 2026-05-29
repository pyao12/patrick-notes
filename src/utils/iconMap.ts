import {
  faGithub,
  faFacebook,
  faLinkedin,
  faPinterest,
  faTelegram,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export const socialIconMap: Record<string, IconDefinition> = {
  github: faGithub,
  facebook: faFacebook,
  linkedin: faLinkedin,
  mail: faEnvelope,
  pinterest: faPinterest,
  telegram: faTelegram,
  whatsapp: faWhatsapp,
  x: faXTwitter,
};
