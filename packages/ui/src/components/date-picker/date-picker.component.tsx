import { defineCustomElements } from '@duetds/date-picker/dist/loader';
import React, { useEffect, useLayoutEffect, useMemo, useRef } from 'react';

import { styles } from './date-picker.styles.js';
import { type DatePickerProps, DuetDatePickerElement } from './date-picker.types.js';
import { formatDate, isDateDisabled, useListener } from './date-picker.utils.js';

export function DatePicker({
  disableWeekends,
  disableDaysOfWeek,
  disableDates,
  placeholder,
  onChange,
  onFocus,
  onBlur,
  onOpen,
  onClose,
  min,
  max,
  value,
  id,
  size = 'xl',
  name,
  ...props
}: DatePickerProps) {
  useEffect(() => {
    // Register Duet Date Picker
    defineCustomElements(window);
  }, []);

  const ref = useRef<DuetDatePickerElement>(null);

  useListener(ref, 'duetChange', onChange);
  useListener(ref, 'duetFocus', onFocus);
  useListener(ref, 'duetBlur', onBlur);
  useListener(ref, 'duetOpen', onOpen);
  useListener(ref, 'duetClose', onClose);

  const dateAdapter = useMemo(
    () => ({
      parse(value = '', createDate: any) {
        const matches = value.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
        if (matches) {
          return createDate(matches[3], matches[2], matches[1]);
        }
      },
      format(date: Date) {
        return formatDate(date, 'dd/mm/yyyy');
      },
    }),
    [],
  );

  const localization = useMemo(() => {
    return {
      buttonLabel: 'Choose date',
      placeholder,
      selectedDateMessage: 'Selected date is',
      prevMonthLabel: 'Previous month',
      nextMonthLabel: 'Next month',
      monthSelectLabel: 'Month',
      yearSelectLabel: 'Year',
      closeLabel: 'Close window',
      calendarHeading: 'Choose a date',
      dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      monthNames: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    };
  }, [placeholder]);

  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }
    ref.current.dateAdapter = dateAdapter;
    ref.current.localization = localization;
    ref.current.value = value;

    ref.current.isDateDisabled = (date: Date) => {
      return isDateDisabled(date, disableWeekends, disableDaysOfWeek, disableDates);
    };
  }, [ref]);

  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }
    ref.current.value = value;
  }, [value, ref]);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    ref.current.identifier = id;
    ref.current.name = name;
  }, [ref]);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    ref.current.max = max;
    ref.current.min = min;
  }, [max, min, ref]);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <duet-date-picker class={styles({ size })} ref={ref} {...props} />;
}
