import { Routes } from '@md/blaunk/config';
import { redirect } from 'next/navigation';

export default async function Index() {
  redirect(Routes.auth.login.path);
}
