import Link from "next/link";
import { memo } from "react";

interface ListItemProps {
  href: string;
  rightText: string;
  leftText: string;
}

function ListItem({ href, rightText, leftText }: Readonly<ListItemProps>) {
  return (
    <Link
      href={href}
      className="flex justify-between items-center p-2 border rounded"
    >
      <div>{leftText}</div>
      <div>{rightText}</div>
    </Link>
  );
}

export default memo(ListItem);
