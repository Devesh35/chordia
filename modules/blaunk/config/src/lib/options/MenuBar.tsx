import { bgt, boutique, cake, store, tour } from '../images';
import { Routes } from './Routes';

export const MenuBarItems = [
  { id: 'bgt', name: 'BGT', path: Routes.home.bgt.path, icon: bgt },
  { id: 'tour', name: 'Tour', path: Routes.home.tour.path, icon: tour },
  { id: 'store', name: 'Store', path: Routes.home.store.path, icon: store },
  { id: 'cake', name: 'Cake', path: Routes.home.cake.path, icon: cake },
  {
    id: 'boutique',
    name: 'Boutique',
    path: Routes.home.boutique.path,
    icon: boutique,
  },
];
