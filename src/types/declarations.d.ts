declare module "lucide-react" {
  import * as React from "react";

  export interface LucideProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    strokeWidth?: number | string;
    color?: string;
  }

  export type LucideIcon = React.ForwardRefExoticComponent<
    LucideProps & React.RefAttributes<SVGSVGElement>
  >;

  export const Menu: LucideIcon;
  export const X: LucideIcon;
  export const ChevronDown: LucideIcon;
  export const ChevronUp: LucideIcon;
  export const ChevronRight: LucideIcon;
  export const Check: LucideIcon;
  export const MapPin: LucideIcon;
  export const Phone: LucideIcon;
  export const Mail: LucideIcon;
  export const Calendar: LucideIcon;
  export const Clock: LucideIcon;
  export const Video: LucideIcon;
  export const Shield: LucideIcon;
  export const Sparkles: LucideIcon;
  export const Heart: LucideIcon;
  export const Compass: LucideIcon;
  export const Feather: LucideIcon;
  export const ArrowRight: LucideIcon;
  export const CheckCircle2: LucideIcon;
  export const Award: LucideIcon;
  export const Info: LucideIcon;
  export const Sun: LucideIcon;
  export const ExternalLink: LucideIcon;

  const icons: { [key: string]: LucideIcon };
  export default icons;
}
