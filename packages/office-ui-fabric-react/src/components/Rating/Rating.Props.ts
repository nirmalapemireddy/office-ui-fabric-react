import * as React from 'react';

export interface IRating {

}

/**
 * Rating component props.
 */
export interface IRatingProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Optional callback to access the IRating interface. Use this instead of ref for accessing
   * the public methods and properties of the component.
   */
  componentRef?: (component: IRating) => void;

  /**
   * Selected rating, has to be an integer between min and max
   */
  rating?: number;

  /**
   * Minimum rating, defaults to 1, has to be >= 0
   */
  min?: number;

  /**
   * Maximum rating, defaults to 5, has to be >= min
   */
  max?: number;

  /**
   * Custom icon, defaults to FavoriteStar
   */
  icon?: string;

  /**
  * Custom icon for partial rating like 0.5, defaults to icon if icon is defined. Else default to FavoriteStar
  */
  partialIcon?: string;

  /**
   * Size of rating, defaults to small
   */
  size?: RatingSize;

  /**
   * Callback when the rating has changed
   */
  onChanged?: (rating: number) => void;

  /**
   * Optional label for star ratings, will be read by screen readers, defaults to 'Star'.
   */
  ariaLabelIcon?: string;

  /**
   * Optional ariaLabel for rating
   */
  ariaLabel?: string;

  /**
  * Optional : Reaonly control
  */
  readOnly?: boolean;

  /**
  * Optional : enables partial rating display.
  */
  enablePartialRating?: boolean;
}

export enum RatingSize {
  Small = 0,
  Large = 1
}