'use client'
import React from 'react';
import ForumClient from '@/app/components/forumClient';
import { useRecoilState } from 'recoil';
import { forumState } from '../../utils/globalstate';
import Announcement from '@/app/components/announcement';

const SideContent: React.FC = () => {
  const [SideContent, setSideContent] = useRecoilState(forumState);
  return (
    <>
      { SideContent ? <ForumClient /> : <Announcement/>}
    </>
  );
};
export default SideContent;