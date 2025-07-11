import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../../shared/types";


type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLocaleLowerCase().replaceAll(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primery-100" : ""}
    transition duration-500 hover:text-primary-300`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
