import * as React from "react";

export interface SvgProps extends React.SVGAttributes<SVGElement> {
  viewBox?: never;
  children?: never;
}

export type SvgComponent = React.ForwardRefExoticComponent<
  SvgProps & React.RefAttributes<SVGSVGElement>
>;

export const Svg = React.forwardRef<
  SVGSVGElement,
  React.SVGAttributes<SVGElement>
>((props, forwardedRef) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      fill="none"
      height="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={forwardedRef}
    />
  );
});

Svg.displayName = "Svg";
