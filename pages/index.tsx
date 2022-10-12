import React from 'react';
import axios from 'axios';

import VideoCard from '../components/VideoCard';
import { BASE_URL } from '../utils';
import { Video } from '../types';
import NoResult from '../components/NoResult';

interface IProps {
  videos: Video[];
}

const Home = ({ videos }: IProps) => {
  return (
    <div className='flex flex-col gap-10 videos h-full'>
      {videos.length 
        ? videos?.map((video: Video) => (
          <VideoCard post={video}  key={video._id} />
        )) 
        : <NoResult text={`No Videos`} />}
    </div>
  );
};

export default Home;

export const getServerSideProps = async ({
  query: { topic },
}: {
  query: { topic: string };
}) => {
  let response = await axios.get(`https://tpshare.vercel.app/api/post`);

  if(topic) {
    response = await axios.get(`https://tpshare.vercel.app/api/discover/${topic}`);
  }
  
  return {
    props: { videos: response.data },
  };
};