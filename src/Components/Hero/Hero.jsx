import React from 'react';

const Hero = () => {
  return (
    <div>
      <div className="front-page-search-block">
        <div className="container">
          <div className="col-md-8 offset-md-2 text-center">
            <h2 className='text-white font-bold' >Providing insightful research, analysis, and resources to facilitate informed policy decisions and administration of services</h2>

            <form action="/search" method="get" id="views-exposed-form-main-search-results-page-1" accept-charset="UTF-8">
              <div className="js-form-item form-item js-form-type-textfield form-item-search-api-fulltext js-form-item-search-api-fulltext form-group">
                <label htmlFor="edit-search-api-fulltext--3">Keyword</label>
                <input placeholder="Search rfa.sc.gov" data-drupal-selector="edit-search-api-fulltext" type="text" id="edit-search-api-fulltext--3" name="search_api_fulltext" value="" size="30" maxLength="128" className="form-text form-control" />
              </div>

              <div className="js-form-item form-item js-form-type-textfield form-item-changed-aggregate-2 js-form-item-changed-aggregate-2 form-group">
                <label htmlFor="edit-changed-aggregate-2--3">From</label>
                <input data-drupal-selector="edit-changed-aggregate-2" type="text" id="edit-changed-aggregate-2--3" name="changed_aggregate_2" value="" size="30" maxLength="128" className="form-text form-control" />
              </div>

              <div className="js-form-item form-item js-form-type-textfield form-item-changed-aggregate-3 js-form-item-changed-aggregate-3 form-group">
                <label htmlFor="edit-changed-aggregate-3--3">To</label>
                <input data-drupal-selector="edit-changed-aggregate-3" type="text" id="edit-changed-aggregate-3--3" name="changed_aggregate_3" value="" size="30" maxLength="128" className="form-text form-control" />
              </div>

              <div data-drupal-selector="edit-actions" className="form-actions js-form-wrapper form-wrapper" id="edit-actions--3">
                <button data-drupal-selector="edit-submit-main-search-results-3" type="submit" id="edit-submit-main-search-results--3" value="Search" className="button js-form-submit form-submit btn btn-primary form-control">
                  <span className="submit__text">Search</span>
                  <span className="submit__icon"></span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
