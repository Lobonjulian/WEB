import { ACTIONS, drinkReducer, initialState } from './drinkReducer';
import { useReducer } from 'react';
import ProgressBar from './ProgressBar/ProgressBar';
import SectionContainer from '@common/SectionContainer/SectionContainer';
import StepSelector from './StepSelector';
import { DRINK_STEPS, Base, MilkOptions, Extras } from './drinkData';

import styles from './DrinkMaker.module.css';

const STEP_ORDER = [
  DRINK_STEPS.BASE,
  DRINK_STEPS.MILK,
  DRINK_STEPS.EXTRAS,
  'SUMMARY',
];

const DrinkMaker = () => {
  const [state, dispatch] = useReducer(drinkReducer, initialState);
  const { currentStep, base, milk, extras } = state;

  return (
    <SectionContainer
      title="Personaliza tu bebida"
      subtitle="Haz tu bebida justo como te gusta con un shot extra de espresso, leche de almendra o un toque de tu sabor favorito."
      variant="compact"
    >
      <div className={styles.drinkMaker}>
        {currentStep === DRINK_STEPS.BASE && (
          <StepSelector
            title="Selecciona tu base"
            items={Base}
            selected={base}
            onSelect={(id) =>
              dispatch({ type: ACTIONS.SELECT_BASE, payload: id })
            }
            onNext={() => dispatch({ type: ACTIONS.NEXT_STEP })}
          />
        )}
        {currentStep === DRINK_STEPS.MILK && (
          <StepSelector
            title="Selecciona tu leche"
            items={MilkOptions}
            selected={milk}
            onSelect={(id) =>
              dispatch({ type: ACTIONS.SELECT_MILK, payload: id })
            }
            onNext={() => dispatch({ type: ACTIONS.NEXT_STEP })}
          />
        )}
        {currentStep === DRINK_STEPS.EXTRAS && (
          <StepSelector
            title="Agrega extras"
            items={Extras}
            onSelect={(id) =>
              dispatch({ type: ACTIONS.TOGGLE_EXTRA, payload: id })
            }
            selected={extras
              .filter((extra) => extra.selected)
              .map((extra) => extra.id)}
            onNext={() => dispatch({ type: ACTIONS.NEXT_STEP })}
          />
        )}
        {currentStep === 'SUMMARY' && <DrinkSummary state={state} />}
      </div>

      <ProgressBar currentStep={state.step} totalSteps={STEP_ORDER.length} />
    </SectionContainer>
  );
};

export default DrinkMaker;
