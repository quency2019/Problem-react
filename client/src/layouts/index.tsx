// @ts-nocheck
import React from 'react';
import styles from './index.css';
import UserLayout from './userLayout';
import AdminLayout from './adminLayout';
import { Link, Redirect } from 'umi';



const BasicLayout: React.FC = props => {
  // console.log(props.children);
  // console.log(props.location.pathname);
  // const regUser = /^\/user\/?[\w\W]?/g
  // const regAdmin = /^\/admin\/?[\w\W]?/g
  // const path = props.location.pathname;
  // console.log(regUser.test('/'));
  // if (regUser.test(path)) {

  //   return <UserLayout>{props.children}</UserLayout>
  // }
  // if (regAdmin.test(path)) {
  //   return <AdminLayout>{props.children}</AdminLayout>
  // }

  if (props.history.pathname === "/login") {

    if (user_name) {
      return <Login />
    }
    return props.children
  }
  return (
    <div className={styles.normal}>
      {props.children}
    </div>
  );
};

export default BasicLayout;
