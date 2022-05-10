import NextJSLink from "next/link";

type Link = {
  url?: string;
  children: string;
  className?: string;
};

function Link({ url, children, className }: Link) {
  return (
    <NextJSLink href={url ? `./${url}` : "./"}>
      <a className={className}>{children}</a>
    </NextJSLink>
  );
}

export default Link;
