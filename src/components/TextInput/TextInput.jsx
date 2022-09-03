import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import settings from '../../globals/js/settings';
import Input from '../Input/Input';

const { prefix } = settings;
import "./TextInput.css"

/** Text inputs enable the user to interact with and input content and data. This component can be used for long and short form entries. */

const TextInput = React.forwardRef((props, ref) => {
  const {
    disabled,
    labelText,
    className,
    id,
    formItemClassName,
    placeholder,
    type,
    onChange,
    onClick,
    hideLabel,
    invalid,
    invalidText,
    helperText,
    inputRef = ref,
    pattern,
    required,
    autoComplete,
    ...other
  } = props;

  const textInputClasses = classNames(`${prefix}--text`, className, {
    [`${prefix}--text--helpertext`]: helperText,
    [`${prefix}--text--nolabel`]: hideLabel,
    [`${prefix}--text--required`]: required,
  });

  const newProps = {
    disabled,
    id,
  };

  return (
    <Input {...props} formItemClassName={formItemClassName}>
      {(e) => {
        return (
          <input
            pattern={pattern}
            autoComplete={autoComplete}
            type={type}
            {...other}
            {...newProps}
            ref={inputRef}
            className={textInputClasses}
            {...e}
          />
        );
      }}
    </Input>
  );
});

TextInput.propTypes = {
  /**
   * Specify an optional className to be applied to the &lt;input&gt; node
   */
  className: PropTypes.string,

  /**
   * Optionally provide the default value of the &lt;input&gt;
   */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Specify whether the &lt;input&gt; should be disabled
   */
  disabled: PropTypes.bool,

  /**
   * Specify an optional className to be applied to the form-item node
   */
  formItemClassName: PropTypes.string,

  /**
   * Specify a custom `id` for the &lt;input&gt;
   */
  id: PropTypes.string,

  /**
   * Provide the text that will be read by a screen reader when visiting this
   * control
   */
  labelText: PropTypes.node,

  /**
   * Specify a custom `name` for the &lt;input&gt;
   */
  name: PropTypes.string,

  /**
   * Optionally provide an `onChange` handler that is called whenever &lt;input&gt;
   * is updated
   */
  onChange: PropTypes.func,

  /**
   * Optionally provide an `onClick` handler that is called whenever the
   * &lt;input&gt; is clicked
   */
  onClick: PropTypes.func,

  /**
   * Specify the placeholder attribute for the &lt;input&gt;
   */
  placeholder: PropTypes.string,

  /**
   * Specify the type of the &lt;input&gt;
   */
  type: PropTypes.string,

  /**
   * Specify the value of the &lt;input&gt;
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Specify whether you want the underlying label to be visually hidden
   */
  hideLabel: PropTypes.bool,

  /**
   * Specify whether the control is currently invalid.
   * Either a boolean in combination with `invalidText` or an `object`( eg. { message: "Message", …otherErrorProperties }) can be passed.
   */
  invalid: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),

  /**
   * Provide the text that is displayed when the control is in an invalid state
   */
  invalidText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /**
   * Provide additional component that is used alongside the input for customization
   */
  additional: PropTypes.node,

  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText: PropTypes.node,
};

TextInput.defaultProps = {
  className: 'dbs--text-input',
  disabled: false,
  onChange: () => {},
  onClick: () => {},
  invalid: false,
  invalidText: '',
  helperText: '',
  autoComplete:false,
};

export default TextInput;
