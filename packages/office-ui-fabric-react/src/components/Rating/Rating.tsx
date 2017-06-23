import * as React from 'react';
import {
  BaseComponent,
  css,
  getId
} from '../../Utilities';
import { Icon } from '../../Icon';
import { IRatingProps, RatingSize } from './Rating.Props';
import * as stylesImport from './Rating.scss';
const styles: any = stylesImport;

export interface IRatingState {
  rating: number;
  focusedRating: number;
}

export class Rating extends BaseComponent<IRatingProps, IRatingState> {
  public static defaultProps: IRatingProps = {
    min: 1,
    max: 5
  };

  private _id: string;
  private _labelId: string;

  constructor(props: IRatingProps) {
    super(props);

    this.state = {
      rating: this._getInitialValue(props),
      focusedRating: null
    };

    this._id = getId('Rating');
    this._labelId = getId('RatingLabel');
  }

  public componentWillReceiveProps(nextProps: IRatingProps) {
    if (typeof nextProps.rating !== 'undefined' && nextProps.rating !== this.state.rating) {
      this.setState({
        rating: this._getClampedRating(nextProps.rating)
      } as IRatingState);
    }
  }

  public render() {
    let stars: JSX.Element[] = [];
    for (let i = this.props.min; i <= this.props.max; ++i) {
      stars.push(this._renderStar(i));
    }

    return <div className={ css('ms-Rating', this.props.className, {
      ['ms-Rating--large ' + styles.rootIsLarge]: this.props.size === RatingSize.Large
    }) } role='application'>
      <div className={ css('ms-Rating-container', styles.container) } aria-label={ this.props.ariaLabel ? this.props.ariaLabel : this._getRatingComponentAriaLabel() } tabIndex={ this.props.disabled ? -1 : 0 } >
        { stars }
      </div>
    </div>;
  }

  private _renderStar(rating: number): JSX.Element {
    const inputId = `${this._id}-${rating}`;

    return <div className={ css('ms-Rating-star', styles.star, {
      ['is-selected ' + styles.starIsSelected]: rating <= Math.ceil(this.state.rating),
      ['is-inFocus ' + styles.starIsInFocus]: rating === this.state.focusedRating,
      ['is-disabled ' + styles.starIsDisabled]: this.props.disabled
    }) } key={ rating }>

      { !this.props.readOnly && <button
        className={ css('ms-Rating-input', styles.input) }
        name={ this._id }
        id={ inputId }
        value={ rating }
        aria-labelledby={ `${this._labelId}-${rating}` }
        disabled={ this.props.disabled }
        onClick={ this._onChange.bind(this, rating) }
        onFocus={ this._onFocus.bind(this, rating) }
        onBlur={ this._onBlur.bind(this, rating) }
      /> }
      <label className={ css('ms-Rating-label', styles.label) } htmlFor={ inputId }>
        { this._getLabel(rating) }
        { this._getIcon(rating) }
      </label>
    </div>;
  }

  private _onFocus(value: number, ev: React.FocusEvent<HTMLElement>): void {
    this.setState({
      focusedRating: value
    } as IRatingState);
  }

  private _onBlur(option: number, ev: React.FocusEvent<HTMLElement>): void {
    this.setState({
      focusedRating: null
    } as IRatingState);
  }

  private _onChange(rating: number, evt: React.FormEvent<HTMLInputElement>) {
    this.setState({
      rating: rating
    } as IRatingState);

    const { onChanged } = this.props;
    if (onChanged) {
      onChanged(rating);
    }
  }

  private _getRatingComponentAriaLabel() {
    const text = this.props.ariaLabelIcon || 'Star';
    let rating: number = this.state.rating ? this.state.rating : 0;
    return rating + " of " + this.props.max + " " + text + " selected";
  }

  private _getLabel(rating: number): JSX.Element {
    const text = this.props.ariaLabelIcon || 'Star';

    return (
      <span
        id={ `${this._labelId}-${rating}` }
        className={ css('ms-Rating-labelText', styles.labelText) }
      >
        { `${rating} ${text}` }
      </span>
    );
  }

  private _getIcon(rating: number): JSX.Element {
    if (rating === Math.ceil(this.state.rating) && rating > this.state.rating && this.props.enablePartialRating) {

      return <span className={ css('halfStarSpan', styles.halfStarSpan) }> <Icon iconName={ this.props.icon || 'Contrast' } className={ css('halfStar', styles.halfStar) } />
        <Icon iconName={ this.props.icon || 'favoriteStarFill' } className={ css('fullStar', styles.fullStar) } /> </span>;
    }
    return <Icon iconName={ this.props.icon || 'favoriteStarFill' } />;
  }


  private _getInitialValue(props: IRatingProps) {
    if (typeof props.rating === 'undefined') {
      return props.min;
    }

    if (props.rating === null) {
      return null;
    }

    return this._getClampedRating(props.rating);
  }

  private _getClampedRating(rating: number): number {
    if (!this.props.enablePartialRating) {
      rating = Math.floor(rating);
    }


    return Math.min(Math.max(rating, this.props.min), this.props.max);
  }
}