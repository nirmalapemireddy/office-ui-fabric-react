import * as React from 'react';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';
import {
  Rating,
  RatingSize
} from 'office-ui-fabric-react/lib/Rating';

import './Rating.Basic.Example.scss';

export class RatingBasicExample extends React.Component<any, any> {
  constructor() {
    super();

    this.state = {
      rating: null
    };
  }

  public render() {
    return (
      <div className='ms-RatingBasicExample'>
        <Rating
          min={ 1 }
          max={ 5 }
          rating={ this.state.rating }
          onChanged={ this._onChanged }

        />

        <Rating
          min={ 1 }
          max={ 5 }
          size={ RatingSize.Large }
          rating={ this.state.rating }
          onChanged={ this._onChanged }
        />

        <Rating
          min={ 1 }
          max={ 10 }
          size={ RatingSize.Large }
          rating={ this.state.rating }
          onChanged={ this._onChanged }
          enablePartialRating={ true }
        />

        Disabled:
        <Rating
          min={ 1 }
          max={ 5 }
          rating={ this.state.rating }
          onChanged={ this._onChanged }
          disabled={ true }
        />

        halfstar:
        <Rating
          min={ 1 }
          max={ 5 }
          rating={ 2.3 }
          onChanged={ this._onChanged }
          enablePartialRating={ true }
        />

        Readonly:
        <Rating
          min={ 1 }
          max={ 5 }
          rating={ 2.5 }
          onChanged={ this._onChanged }
          readOnly={ true }
        />
      </div>
    );
  }

  @autobind
  private _onChanged(rating: number) {
    this.setState({
      rating: rating
    });
  }
}
