import { Routes } from '@md/blaunk/config';
import { redirect } from 'next/navigation';

export default function NotFound() {
  redirect(Routes.home.path);
}
