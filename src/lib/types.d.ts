export interface ParamsProps {
  params: {
    [key: string]: string | undefined;
  };
}

export interface ChildrenProps {
  children: React.ReactNode;
}

export interface ContainerProps extends ChildrenProps {
  className?: string;
}
