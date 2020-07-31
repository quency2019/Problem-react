import React from 'react';
import Index from './problem/index'
import styles from './index.css';
import { UserService } from '@/services/userServices';
import { ProblemService } from '@/services/problemServices';
import { AdminService } from '@/services/adminServices';
import { Link } from 'umi';
import { MessageService } from '@/services/messageServices';

export default function () {
  return (
    <div>
      欢迎页面~
      <Link to="/problem">首页</Link>
    </div>
  );
}



