import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import FormItem from '../FormItem/FormItem';
import settings from '../../globals/js/settings';
const { prefix } = settings;
import './TextArea.css'


const TextArea = React.forwardRef((props, ref) => {
  const {
    className,
    formItemClassName,
    id,
    labelText,
    hideLabel,
    onChange,
    onClick,
    invalid,
    invalidText,
    inputRef = ref,
    helperText,
    fullWidth,
    viewOnly,
    ...other
  } = props;

  const textareaProps = {
    id,
    onChange: (evt) => {
      if (!other.disabled) {
        onChange(evt);
      }
    },
    onClick: (evt) => {
      if (!other.disabled) {
        onClick(evt);
      }
    },
  };

  const textareaClasses = classNames(`${prefix}--text-area`, className, {
    [`${prefix}--textarea-fullwidth`]: fullWidth,
  });
  const labelClasses = classNames(`${prefix}--label`, {
    [`${prefix}--visually-hidden`]: hideLabel,
    [`${prefix}--label--disabled`]: other.disabled,
  });

  const label = labelText ? (
    <label htmlFor={id} className={labelClasses}>
      {labelText}
    </label>
  ) : null;

  const helperTextClasses = classNames(`${prefix}--form__helper-text`, {
    [`${prefix}--form__helper-text--disabled`]: other.disabled,
  });

  const error = invalid ? (
    <div className="dbs--form-requirement">{invalidText}</div>
  ) : null;

  const input = invalid ? (
    <textarea
      {...other}
      {...textareaProps}
      ref={inputRef}
      className={textareaClasses}
      data-invalid
    />
  ) : (
    <textarea
      {...other}
      ref={inputRef}
      {...textareaProps}
      className={textareaClasses}
    />
  );

  const helper = helperText ? (
    <div className={helperTextClasses}>{helperText}</div>
  ) : null;

  return (
    <FormItem className={formItemClassName}>
      {label}
      {input}

      {helper}
      {error}
    </FormItem>
  );
});

TextArea.propTypes = {

  className: PropTypes.string,

  
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  
  disabled: PropTypes.bool,


  id: PropTypes.string,

  /**
   * Provide the text that will be read by a screen reader when visiting this
   * control
   */
  labelText: PropTypes.node.isRequired,

  /**
   * Optionally provide an `onChange` handler that is called whenever &lt;textarea&gt;
   * is updated
   */
  onChange: PropTypes.func,

  /**
   * Optionally provide an `onClick` handler that is called whenever the
   * &lt;textarea&gt; is clicked
   */
  onClick: PropTypes.func,

  /**
   * Specify the placeholder attribute for the &lt;textarea&gt;
   */
  placeholder: PropTypes.string,

  /**
   * Specify the rows attribute for the &lt;textarea&gt;
   */
  rows: PropTypes.number,

  /**
   * Provide the current value of the &lt;textarea&gt;
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Specify whether the control is currently invalid.
   * Either a boolean in combination with `invalidText` or an `object`( eg. { message: "Message", …otherErrorProperties }) can be passed.
   */
  invalid: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),

  /**
   * Provide the text that is displayed when the control is in an invalid state
   */
  invalidText: PropTypes.string,

  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText: PropTypes.node,

  /**
   * Specify whether you want the underlying label to be visually hidden
   */
  hideLabel: PropTypes.bool,

  /**
   * Specify whether you want `textarea` width to be 100%, this will overide cols set
   */
  fullWidth: PropTypes.bool,
  /**
   * Specify whether you want `textarea` is view only
   */
  viewOnly: PropTypes.bool,
};

TextArea.defaultProps = {
  disabled: false,
  onChange: () => {},
  onClick: () => {},
  placeholder: '',
  rows: 4,
  invalid: false,
  invalidText: '',
  helperText: '',
  fullWidth: true,
};

export default TextArea;
