'use client';

import React, { createContext, useEffect, useId, useMemo, useRef, useState } from 'react';
import { useFocusRing, useRadioGroup } from 'react-aria';
import { useRadioGroupState } from 'react-stately';

import { Button } from '../button/index.js';
import { ExpandMoreIcon } from '../icon/index.js';
import { ErrorMessage, Hint, Label, RadioGroupRadio } from '../index.js';

import { styles as radioGroupStyles } from './radio-group.styles.js';
import { type RadioGroupContextState, type RadioGroupProps } from './radio-group.types.js';

export const RadioGroupContext = createContext<RadioGroupContextState>({
  // TODO: Remove deprecated name prop once React Aria removes it from RadioGroupState
  name: '',
  isDisabled: false,
  isReadOnly: false,
  isRequired: false,
  validationState: null,
  selectedValue: null,
  setSelectedValue: () => null,
  lastFocusedValue: null,
  setLastFocusedValue: () => null,
  orientation: 'vertical',
  size: 'medium',
});

export function RadioGroup({
  className,
  radios,
  label,
  orientation = 'vertical',
  showAmount = 0,
  size = 'medium',
  errorMessage,
  hintMessage,
  ...props
}: RadioGroupProps) {
  const state = useRadioGroupState({ ...props, label, orientation });
  const { radioGroupProps, labelProps, errorMessageProps, descriptionProps } = useRadioGroup(
    { ...props, label, orientation },
    state,
  );
  const { isFocusVisible, focusProps } = useFocusRing();
  const [hiddenOptions, setHiddenOptions] = useState<boolean>(showAmount > 0);
  const firstNewRadioRef = useRef<HTMLDivElement>(null);
  const revealAmount = radios && radios.length - showAmount;
  const styles = radioGroupStyles({ orientation, isFocusVisible });
  const panelId = useId();
  const childrenToRender = useMemo(() => {
    const newChildren = radios.map((radio, index) => (
      <RadioGroupRadio key={index} ref={index === showAmount ? firstNewRadioRef : null} {...radio} />
    ));

    return hiddenOptions ? newChildren.slice(0, showAmount) : newChildren;
  }, [radios, hiddenOptions, showAmount]);

  useEffect(() => {
    if (showAmount > 0 && !hiddenOptions) {
      firstNewRadioRef.current?.focus();
    }
  }, [hiddenOptions, showAmount]);

  return (
    <div className={styles.base({ className })} {...radioGroupProps}>
      <Label {...labelProps}>{label}</Label>
      {hintMessage && <Hint {...descriptionProps}>{hintMessage}</Hint>}
      {errorMessage && state.validationState === 'invalid' && (
        <ErrorMessage {...errorMessageProps} message={errorMessage} />
      )}
      <div className={styles.radioWrapper()} id={panelId}>
        <RadioGroupContext.Provider value={{ ...state, orientation, size }}>
          {childrenToRender}
        </RadioGroupContext.Provider>
        {hiddenOptions && (
          <Button
            onClick={() => setHiddenOptions(false)}
            className={styles.revealButton()}
            look="link"
            iconAfter={() => <ExpandMoreIcon size="small" color="link" />}
            aria-controls={panelId}
            aria-expanded={!hiddenOptions}
            {...focusProps}
          >
            <p className={styles.buttonText()}>{`Show ${revealAmount} more ${
              revealAmount === 1 ? 'item' : 'items'
            }`}</p>
          </Button>
        )}
      </div>
    </div>
  );
}
