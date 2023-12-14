import { Routes } from '@md/blaunk/config';
import { redirect } from 'next/navigation';

const page = () => {
  redirect(Routes.home.path);
};

export default page;
