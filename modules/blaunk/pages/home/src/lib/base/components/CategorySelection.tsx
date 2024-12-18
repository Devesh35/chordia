import { sbs } from '@li/config/design';
import { Accordion } from '@li/design/elements';
import { MenuCategories, MenuCategoriesIdType } from '@md/blaunk/config';
import clsx from 'clsx';
import styles from './category-selection.module.css';

type Props = {
  selectedCategory: MenuCategoriesIdType;
  setSelectedCategory: (id: MenuCategoriesIdType) => void;
};

export const CategorySelection = ({ selectedCategory, setSelectedCategory }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={clsx(styles.scroll, sbs.dark)}>
        {MenuCategories.map((category) =>
          'subItems' in category ? (
            <Accordion key={category.id} title={category.name}>
              {category.subItems.map((subItem) => (
                <div
                  className={clsx(styles.item, styles['sub-item'], {
                    [styles.selected]: subItem.id === selectedCategory,
                  })}
                  key={subItem.id}
                  onClick={() => setSelectedCategory(subItem.id)}
                >
                  {subItem.name}
                </div>
              ))}
            </Accordion>
          ) : (
            <div
              className={clsx(styles.item, {
                [styles.selected]: category.id === selectedCategory,
              })}
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </div>
          ),
        )}
      </div>
    </div>
  );
};
