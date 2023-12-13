import { Button } from '@li/design/elements';
import { Country } from '@li/types/config';
import styles from './country-card.module.css';
import clsx from 'clsx';

type Props = {
  country: Country;
};

export const CountryCard = ({ country }: Props) => {
  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles.flag, styles['flag-wrapper'])}>
        {country.Flag}
      </div>
      <div className={styles.content}>
        <div className={styles['country-name']}>{country.name}</div>
        <Button
          className={styles.button}
          style={{
            backgroundColor: country.color,
            color: country.colorOnColor,
          }}
        >
          Source
        </Button>
      </div>
    </div>
  );
};

// const Wrapper = styled.div`
//   ${Size.minWidth(`clamp(120px, ${flagWidth}, 240px)`)}
//   ${Background.color('White')}
//   ${BorderRadius.Medium}
//   ${Overflow.hidden}
//   ${Shadows.s}
//   ${Cursor.pointer}
//   ${TransitionProperty('transform')}
//   ${TransitionDuration.fast}
//   ${TransitionTimingFunctions.easeIn}
//   margin: 48px 0;
// `;
// const FlagWrapper = styled.div`
//   ${Size.width(flagWidth, { min: 120, max: 240 })}
//   ${Size.height(flagHeight, { min: 90, max: 180 })}
//   ${Background.color('White')}
//   ${Flex({ justify: 'center', align: 'center' })}
//   ${Overflow.hidden}
//   ${Position.relative}
//   ${Shadows.s}
//   &>* {
//     ${Size.width(flagWidth, { min: 120, max: 240 })}
//     ${Size.height(flagHeight, { min: 90, max: 180 })}
//   }
// `;

// const Content = styled.div`
//   ${Flex({ align: 'center', gap: '2vmin', direction: 'column' })}
//   ${Padding({ block: '2vmin' })}
// `;

// const CountryName = styled.div`
//   text-align: center;
//   ${FontSize.H5}
//   text-transform: uppercase;
// `;

// const StyledButton = styled(Button)<{ bg: string; color: string }>`
//   ${BorderRadius.Rounded}
//   ${({ bg }) => `background-color: ${bg}`};
//   ${({ color }) => `color: ${color}`};
//   &:hover {
//     ${({ bg }) => `background-color: ${bg}`};
//     ${({ color }) => `color: ${color}`};
//   }
// `;
