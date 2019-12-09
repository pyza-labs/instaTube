import React, { Fragment } from "react";
import Styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { instaFont } from "../../assets";

const Navbar = props => {
  return (
    <nav className={Styles.Nav}>
      <div className={Styles.instaLogo}>
        <FontAwesomeIcon
          icon={["fab", "instagram"]}
          className={Styles.iconInsta}
        />
        <img src={instaFont} alt="instagram-font"></img>
      </div>
      <div className={Styles.input} onClick={props.clickSearch}>
        <FontAwesomeIcon icon="search" className={Styles.searchIcon} />
        {props.show ? (
          <Fragment>
            <form onSubmit={props.submit} className={Styles.formInput}>
              <input autoFocus placeholder="Search" onChange={props.change} />
            </form>
            <div onClick={props.removeSearch} className={Styles.formInput}>
              <FontAwesomeIcon icon="times-circle" size="xs" />
            </div>
          </Fragment>
        ) : (
          <div>Search</div>
        )}
      </div>
      <div className={Styles.iconInstaEndDiv}>
        <FontAwesomeIcon
          icon={["far", "compass"]}
          className={Styles.iconInstaEnd}
        />
        <FontAwesomeIcon
          icon={["far", "heart"]}
          className={Styles.iconInstaEnd}
        />
        <FontAwesomeIcon
          icon={["far", "user"]}
          className={Styles.iconInstaEnd}
        />
      </div>
    </nav>
  );
};

export default Navbar;
