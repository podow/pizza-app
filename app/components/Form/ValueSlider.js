import React from 'react';
import Slider, { Range, createSliderWithTooltip } from 'rc-slider';
import { Field } from 'formik';

const ToolTipRange = createSliderWithTooltip(Range);

const ValueSlider = props => {
  const { name, isRange, withToolTip, settings } = props;
  return (
    <Field
      name={name}
      render={({ field, form }) => {
        if (isRange) {
          if (withToolTip) {
            return (
              <ToolTipRange
                {...settings}
                allowCross={false}
                pushable
                name={field.name}
                onChange={e => form.setFieldValue(name, e)}
              />
            );
          } else {
            return (
              <Range
                {...settings}
                allowCross={false}
                pushable
                name={field.name}
                onChange={e => form.setFieldValue(name, e)}
              />
            );
          }
        } else {
          return (
            <Slider
              {...settings}
              name={field.name}
              onChange={e => form.setFieldValue(name, e)}
              trackStyle={{ backgroundColor: '#BE6C2F', height: 5 }}
              handleStyle={{
                borderColor: '#BE6C2F',
                borderWidth: 10,
                height: 20,
                width: 20,
                marginTop: -7,
                backgroundColor: '#BE6C2F'
              }}
              railStyle={{ backgroundColor: '#c4c4c4', height: 5 }}
            />
          );
        }
      }}
    />
  );
};

export default ValueSlider;
